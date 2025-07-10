<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
<!-- <script>
	import BlyCanvas from '$lib/canvas/BlyCanvas.svelte';
</script>

<BlyCanvas /> -->

<script>
	import { onMount } from 'svelte';
	let CanvasComponent = null;

	onMount(async () => {
		const mod = await import('$lib/canvas/BlyCanvas.svelte');
		CanvasComponent = mod.default;
	});
</script>

{#if CanvasComponent}
	<svelte:component this={CanvasComponent} />
{/if}
