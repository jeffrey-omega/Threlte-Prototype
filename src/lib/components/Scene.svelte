<script lang="ts">
	import { DEBUG } from '$lib/Settings';
	import { T } from '@threlte/core';
	import { Gizmo, OrbitControls } from '@threlte/extras';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';
</script>

<T.PerspectiveCamera makeDefault position={[20, 20, 85]} fov={45} near={1}>
	<!--<OrbitControls
		autoRotate={true}
		enableZoom={true}
		enableDamping
		autoRotateSpeed={0.5}
		enablePan={false}
		maxPolarAngle={85 * DEG2RAD}
		minPolarAngle={20 * DEG2RAD}
		maxAzimuthAngle={45 * DEG2RAD}
		minAzimuthAngle={-45 * DEG2RAD}
		target.y={1.5}
	/>-->
	<OrbitControls
		autoRotate={true}
		enableZoom={true}
		enableDamping
		autoRotateSpeed={0.5}
		maxPolarAngle={85 * DEG2RAD}
		enablePan={false}
	/>
</T.PerspectiveCamera>

<!-- Ambient light for ambience -->
<T.AmbientLight color="#0000ff" intensity={2} />

<!-- Light that casts a shadow -->
<T.DirectionalLight color="#ffffff" intensity={0.5} castShadow={true} position={[0, 100, 100]} />

<!-- Grid helper -->
{#if DEBUG.enableGridHelper}
	<T.GridHelper args={[100, 100]} />
{/if}

<!-- Axes helper -->
{#if DEBUG.enableAxesHelper}
	<T.AxesHelper args={[100]} />
{/if}

<!-- Gizmo helper -->
{#if DEBUG.enableGizmo}
	<Gizmo horizontalPlacement="left" paddingX={20} paddingY={20} />
{/if}
