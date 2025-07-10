<script>
	export let url;

	// Optional fallback for SSR safety
	$: currentPath = url?.pathname || '';
</script>

<nav class="flex w-full items-center justify-between bg-black px-10 py-3 text-white">
	<!-- Logo -->
	<a href="/" class="flex items-center space-x-2">
		<img src="/logo.png" alt="Bly Logo" class="h-10 w-10 object-contain" />
	</a>

	<!-- Links -->
	<div class="flex space-x-6 text-sm sm:text-base sm:pr-12 lg:pr-18">
		<a
			href="/whitepaper"
			class="transition hover:underline"
			class:text-gray-300={currentPath === '/whitepaper'}
		>
			Whitepaper
		</a>
		<a
			href="/tokenomics"
			class="transition hover:underline"
			class:text-gray-300={currentPath === '/tokenomics'}
		>
			Tokenomics
		</a>
	</div>
</nav>
