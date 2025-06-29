<script lang="ts">
	import ThreeScene from '$lib/ThreeScene.svelte';
	
	let activeTab = 'three';
</script>

<div class="portfolio-layout">
	<header class="portfolio-header">
		<div class="tab-buttons">
			<button 
				class="tab-button" 
				class:active={activeTab === 'three'}
				on:click={() => activeTab = 'three'}
			>
				<svg class="folder-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
				</svg>
				3D Scene
			</button>
			<button 
				class="tab-button" 
				class:active={activeTab === 'projects'}
				on:click={() => activeTab = 'projects'}
			>
				<svg class="folder-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
				</svg>
				Projects
			</button>
			<button 
				class="tab-button" 
				class:active={activeTab === 'about'}
				on:click={() => activeTab = 'about'}
			>
				<svg class="folder-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
				</svg>
				About
			</button>
		</div>
	</header>
	
	<div class="content-container">
		{#if activeTab === 'three'}
			<div class="three-scene-container">
				<ThreeScene />
			</div>
		{:else if activeTab === 'projects'}
			<div class="placeholder-content">
				<h2>Projects</h2>
				<p>Project portfolio content coming soon...</p>
			</div>
		{:else if activeTab === 'about'}
			<div class="placeholder-content">
				<h2>About</h2>
				<p>About me content coming soon...</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.portfolio-layout {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.portfolio-header {
		text-align: center;
		margin-bottom: 2rem;
		flex-shrink: 0;
	}

	.tab-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.tab-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.25rem;
		background-color: var(--gb-bg2);
		border: 1px solid var(--gb-bg3);
		border-radius: 8px;
		color: var(--gb-fg2);
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.tab-button:hover {
		background-color: var(--gb-bg3);
		color: var(--gb-fg1);
		border-color: var(--gb-bg4);
	}

	.tab-button.active {
		background-color: var(--gb-blue);
		color: var(--gb-bg0);
		border-color: var(--gb-blue);
	}

	.folder-icon {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
	}

	.content-container {
		flex: 1;
		min-height: 0;
	}

	.three-scene-container {
		height: 100%;
		border: 1px solid var(--gb-bg3);
		border-radius: 8px;
		overflow: hidden;
	}

	.placeholder-content {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--gb-bg3);
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
	}

	.placeholder-content h2 {
		font-size: 1.5rem;
		color: var(--gb-fg0);
		margin: 0 0 1rem 0;
	}

	.placeholder-content p {
		color: var(--gb-fg2);
		font-size: 1rem;
		margin: 0;
	}

	@media (max-width: 768px) {
		.portfolio-header {
			margin-bottom: 1rem;
		}

		.tab-buttons {
			gap: 0.5rem;
		}

		.tab-button {
			padding: 0.5rem 0.75rem;
			font-size: 0.75rem;
		}

		.folder-icon {
			width: 0.875rem;
			height: 0.875rem;
		}

		.placeholder-content {
			padding: 1.5rem;
		}

		.placeholder-content h2 {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 480px) {
		.tab-buttons {
			flex-direction: column;
			align-items: center;
		}

		.tab-button {
			width: 100%;
			max-width: 200px;
			justify-content: center;
		}
	}
</style>