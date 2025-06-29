<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container: HTMLDivElement;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let renderer: THREE.WebGLRenderer;
	let cube: THREE.Mesh;
	let animationId: number;

	onMount(() => {
		initThreeJS();
		animate();

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			if (renderer) {
				renderer.dispose();
			}
		};
	});

	function initThreeJS() {
		// Scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x282828); // Gruvbox dark background

		// Camera
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		container.appendChild(renderer.domElement);

		// Create a rotating cube
		const geometry = new THREE.BoxGeometry(2, 2, 2);
		const material = new THREE.MeshPhongMaterial({ 
			color: 0x458588, // Gruvbox blue
			shininess: 100
		});
		cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		// Add some lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
		directionalLight.position.set(10, 10, 5);
		scene.add(directionalLight);

		// Handle window resize
		window.addEventListener('resize', onWindowResize);
	}

	function onWindowResize() {
		if (!camera || !renderer || !container) return;

		camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(container.clientWidth, container.clientHeight);
	}

	function animate() {
		animationId = requestAnimationFrame(animate);

		// Rotate the cube
		if (cube) {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
		}

		renderer.render(scene, camera);
	}
</script>

<div class="three-container" bind:this={container}></div>

<style>
	.three-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 8px;
	}

	.three-container :global(canvas) {
		display: block;
	}
</style>