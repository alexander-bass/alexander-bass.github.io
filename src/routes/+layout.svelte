<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/ThemeToggle.svelte';

	let { children } = $props();
</script>

<ThemeToggle />

<main class="page-container">
	<div class="content-box">
		{@render children()}
	</div>
</main>

<style>
	.page-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		box-sizing: border-box;
	}

	.content-box {
		width: 100%;
		max-width: 80vw;
		aspect-ratio: 4 / 3;
		background-color: var(--gb-bg1);
		border: 2px solid var(--gb-bg3);
		border-radius: 16px;
		padding: 2rem;
		box-sizing: border-box;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		overflow: auto;
		position: relative;
	}

	@media (max-width: 768px) {
		.page-container {
			padding: 1rem;
		}

		.content-box {
			max-width: 95vw;
			padding: 1.5rem;
			border-radius: 12px;
		}
	}

	@media (max-width: 480px) {
		.content-box {
			max-width: 100vw;
			padding: 1rem;
			border-radius: 8px;
		}
	}

	@media (min-width: 1200px) {
		.content-box {
			max-width: 60vw;
		}
	}
</style>
