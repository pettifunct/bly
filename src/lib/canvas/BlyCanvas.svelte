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
