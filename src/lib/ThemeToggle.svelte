<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	let isDark = $state(false);
	let mounted = $state(false);
	
	onMount(() => {
		mounted = true;
		
		if (browser) {
			// Check for saved theme preference or default to light
			const savedTheme = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			
			isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
			updateTheme();
		}
	});
	
	function toggleTheme() {
		if (!browser) return;
		
		isDark = !isDark;
		updateTheme();
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
	
	function updateTheme() {
		if (!browser) return;
		
		if (isDark) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	}
</script>

{#if mounted}
<button
	onclick={toggleTheme}
	class="theme-toggle"
	aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
	title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
>
	{#if isDark}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<circle cx="12" cy="12" r="5"/>
			<path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
		</svg>
	{:else}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
		</svg>
	{/if}
</button>
{/if}

<style>
	.theme-toggle {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
		width: 48px;
		height: 48px;
		border-radius: 12px;
		border: 2px solid var(--gb-bg3);
		background-color: var(--gb-bg1);
		color: var(--gb-fg0);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.theme-toggle:hover {
		background-color: var(--gb-bg2);
		border-color: var(--gb-bg4);
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}
	
	.theme-toggle:active {
		transform: translateY(0);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	
	.theme-toggle svg {
		transition: transform 0.3s ease;
	}
	
	.theme-toggle:hover svg {
		transform: rotate(15deg);
	}
</style>