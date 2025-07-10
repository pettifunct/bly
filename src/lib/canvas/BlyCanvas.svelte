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

	onMount(async () => {
		if (typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.src = `${import.meta.env.BASE_URL}p5.min.js`;

			script.onload = () => {
				const p5 = window.p5;
				if (!p5) {
					console.error('p5.js failed to load');
					return;
				}

				const instance = new p5(sketch, container);

				const handleResize = () => {
					instance.resizeCanvas(window.innerWidth, window.innerHeight);
				};

				window.addEventListener('resize', handleResize);

				// Cleanup
				return () => {
					window.removeEventListener('resize', handleResize);
					instance?.remove();
				};
			};

			document.body.appendChild(script);
		}
	});
</script>

<div bind:this={container} class="canvas-wrapper"></div>
