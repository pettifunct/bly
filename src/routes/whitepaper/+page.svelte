<script>
	// Array of images and labels
	const donutStages = [
		{ src: '/images/donut1.png', label: '<1000 holders' },
		{ src: '/images/donut2.png', label: '<2000 holders' },
		{ src: '/images/donut3.png', label: '<3000 holders' },
		{ src: '/images/donut4.png', label: '<4000 holders' },
		{ src: '/images/donut5.png', label: '<5000 holders' },
		{ src: '/images/donut6.png', label: '<6000 holders' },
		{ src: '/images/donut7.png', label: '<7000 holders' },
		{ src: '/images/donut8.png', label: '<8000 holders' },
		{ src: '/images/donut9.png', label: '<9000 holders' },
		{ src: '/images/donut10.png', label: '<10000 holders' }
	];
</script>

<div class="min-h-screen w-full bg-black px-6 py-12 text-white">
	<div class="mx-auto max-w-4xl">
		<h1 class="mb-8 text-4xl font-bold md:text-5xl">The Billion Dollar Donut</h1>

		<p class="mb-4">
			Bly is an art movement — a counterculture to the traditional art market that gatekeeps value
			for the insider elites and wealthy collectors. It satirizes against the whole ecosystem of
			high art in modern society. It does it by leveraging on the low-res, spinning ASCII donut
			created in 2006 by Andy Sloane, a program called ‘donut.c’, and re-mastering it as an
			evolving, real-time performance art.
		</p>

		<p class="mb-4">
			It is the first-ever art cryptocurrency that rallies all holders as co-artists to jointly
			contribute to an evolving piece of artwork — with the singular aim of flipping the art market
			in market cap.
		</p>

		<p class="mb-4">
			Bly is data-driven. It changes form based on live on-chain data. Beginning with the classic
			ASCII, the artwork mutates dynamically as the holder count, market cap, and other metrics
			grow. For every 1,000 new holders, Bly visually transforms — becoming more complex and
			symbolic of the absurdist, memetic culture it represents.
		</p>

		<p class="mb-8">
			Below are the first 10 visual stages of Bly, tracking its evolution from 0 to 10,000 holders.
			Beyond this number, the community takes over: anyone can submit their own character
			sets(building units of the donut intead of ASCII)for future visual upgrades by tagging
			<a href="https://twitter.com/pettifunct" target="_blank" class="ml-1 text-blue-400 underline"
				>@pettifunct</a
			> on X.
		</p>

		<div class="mb-6">An example of a character set:</div>
		<div class="mx-auto">
			<pre>
                ['👾', '🛸', '👽', '🌌', '🌠', '🌀', '💫', '✨', '🧿', '🔮',]
            </pre>
		</div>

		<!-- Grid of Donut Images -->
		<div class="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
			{#each donutStages as stage}
				<div class="flex flex-col items-center">
					<img src={stage.src} alt={stage.label} class="w-full max-w-xs rounded" />
					<p class="mt-2 text-sm text-gray-300">{stage.label}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12">
			<div>You’re invited to co-create history.</div>
			<br />
			Not just by owning a piece of it — but by helping it turn into the most expensive artwork ever
			created (and possibly ever sold). More importantly, Bly aims to be remembered as <em>the</em> art
			for and by the people, against established elites — as a spinning donut.
		</div>
	</div>
</div>
