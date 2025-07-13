<script>
	import { onMount, onDestroy } from 'svelte';
	import { sketch } from './blyCanvas.js';

	let container;
	let instance = null;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const script = document.createElement('script');
			script.src = `${import.meta.env.BASE_URL}p5.min.js`;

			script.onload = () => {
				if (window.p5) {
					// Clean up previous instance if any (IMPORTANT!)
					if (instance) {
						instance.remove();
						instance = null;
					}

					instance = new window.p5(sketch, container);

					window.addEventListener('resize', handleResize);
				}
			};

			document.body.appendChild(script);
		}
	});

	onDestroy(() => {
		if (instance) {
			instance.remove();
			instance = null;
		}
		window.removeEventListener('resize', handleResize);
	});

	function handleResize() {
		if (instance?.resizeCanvas) {
			instance.resizeCanvas(window.innerWidth, window.innerHeight);
		}
	}
</script>

<div bind:this={container} class="canvas-wrapper"></div>
