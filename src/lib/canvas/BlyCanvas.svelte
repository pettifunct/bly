<!-- <script>
	import { onMount } from 'svelte';
	import { sketch } from './blyCanvas.js';

	let container;

	onMount(() => {
		new p5(sketch, container); // p5 is globally available from public/p5.min.js
	});
</script>

<div bind:this={container}></div> -->

<!-- <script>
	import { onMount } from 'svelte';
	import { sketch } from './blyCanvas.js';

	let container;

	onMount(() => {
		new window.p5(sketch, container); // Use global p5 from script tag
	});
</script>

<style>
	.canvas-wrapper {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: relative;
		z-index: 0;
	}
	canvas {
		display: block;
	}
</style>

<div bind:this={container} class="canvas-wrapper"></div> -->

<script>
	import { onMount } from 'svelte';
	import { sketch } from './blyCanvas.js';

	let container;
	let p5Instance;

	onMount(async () => {
		// Dynamically import p5 only on client
		const p5 = window.p5;


		// Create p5 instance
		p5Instance = new p5(sketch, container);

		const handleResize = () => {
			p5Instance.resizeCanvas(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			p5Instance?.remove();
		};
	});
</script>

<div bind:this={container} class="canvas-wrapper"></div>

<style>
	.canvas-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		overflow: hidden;
	}

	:global(canvas) {
		display: block;
	}
</style>
