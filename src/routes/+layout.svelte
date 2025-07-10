<!-- <script>
	import '../app.css';
	import { url } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<NavBar {url} />
{@render children()} -->

<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children, url } = $props(); // ✅ props include `url`
</script>

<NavBar {url} />
{@render children()}
