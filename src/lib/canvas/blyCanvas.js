import { donutStages } from './characterPool.js';
import { getLiveHolderCount } from '$lib/solana/holders.js'; 

// ==== GLOBAL PARAMETERS ====

let R1 = 0.5;
let R2 = 1.0;
let K2 = 17.0;
let K1;

let A = 0,
	B = 0;
let speedA = 0.05;
let speedB = 0.02;

let thetaSpacing = 0.07;
let phiSpacing = 0.02;

let cellW, cellH, cols, rows;
let output = [],
	zbuffer = [];
let offsetX, offsetY;

function calculateK1(p) {
	const scaleFactor = Math.min(p.width, p.height);
	return scaleFactor / (2.5 * (R1 + R2));
}

function resizeGrid(p) {
	cellH = 16;
	cellW = cellH * 0.6;
	p.textSize(cellH);

	cols = Math.floor(p.width / cellW);
	rows = Math.floor(p.height / cellH);
	offsetX = (p.width - cols * cellW) / 2;
	offsetY = (p.height - rows * cellH) / 2;

	output = new Array(cols * rows).fill(' ');
	zbuffer = new Array(cols * rows).fill(0);
}

export function sketch(p) {
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.frameRate(30);
		p.textFont('monospace');
		p.textSize((cellH = 16));
		cellW = cellH * 0.6;

		K1 = calculateK1(p);
		resizeGrid(p);
	};

	p.draw = () => {
		// Use slider value instead of live count
		const rawCount = getLiveHolderCount();
		const roundedToK = Math.floor(rawCount / 1000);
		const tier = p.constrain(roundedToK, 0, donutStages.length - 1);
		const emojiBrightnessMap = donutStages[tier];

		K1 = calculateK1(p);
		p.background(0);
		output.fill(' ');
		zbuffer.fill(0);

		for (let theta = 0; theta < 2 * Math.PI; theta += thetaSpacing) {
			for (let phi = 0; phi < 2 * Math.PI; phi += phiSpacing) {
				const cosTheta = Math.cos(theta),
					sinTheta = Math.sin(theta);
				const cosPhi = Math.cos(phi),
					sinPhi = Math.sin(phi);

				const circleX = R2 + R1 * cosTheta;
				const circleY = R1 * sinTheta;

				const x =
					circleX * (Math.cos(B) * cosPhi + Math.sin(A) * Math.sin(B) * sinPhi) -
					circleY * Math.cos(A) * Math.sin(B);
				const y =
					circleX * (Math.sin(B) * cosPhi - Math.sin(A) * Math.cos(B) * sinPhi) +
					circleY * Math.cos(A) * Math.cos(B);
				const z = K2 + Math.cos(A) * circleX * sinPhi + circleY * Math.sin(A);
				const ooz = 1 / z;

				const xp = Math.floor(cols / 2 + K1 * ooz * x);
				const yp = Math.floor(rows / 2 - K1 * ooz * y);
				const idx = xp + yp * cols;

				const L =
					cosPhi * cosTheta * Math.sin(B) -
					Math.cos(A) * cosTheta * sinPhi -
					Math.sin(A) * sinTheta +
					Math.cos(B) * (Math.cos(A) * sinTheta - cosTheta * Math.sin(A) * sinPhi);

				const emojiIndex = Math.floor(p.constrain(L, 0, 1) * (emojiBrightnessMap.length - 1));
				if (idx >= 0 && idx < cols * rows && ooz > zbuffer[idx]) {
					zbuffer[idx] = ooz;
					output[idx] = emojiBrightnessMap[emojiIndex];
				}
			}
		}

		p.fill(255);
		p.noStroke();
		for (let i = 0; i < output.length; i++) {
			const x = (i % cols) * cellW + offsetX;
			const y = Math.floor(i / cols) * cellH + offsetY;
			p.text(output[i], x, y);
		}

		A += speedA;
		B += speedB;
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		resizeGrid(p);
		K1 = calculateK1(p);
	};
}
