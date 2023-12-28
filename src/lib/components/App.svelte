<script lang="ts">
	import { DEBUG } from '$lib/Settings';
	import { Canvas } from '@threlte/core';
	import Loader from './Loader.svelte';
	import Scene from './Scene.svelte';
	import ThreePerf from './ThreePerf.svelte';
</script>

<Loader />

<Canvas>
	{#if DEBUG.enablePerformanceProfiling}
		<ThreePerf />
	{/if}
	<Scene />
</Canvas>
