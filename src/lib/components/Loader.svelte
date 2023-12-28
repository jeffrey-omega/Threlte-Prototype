<script lang="ts">
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	const { active, progress } = useProgress();
	const tweenedProgress = tweened($progress, {
		duration: 800
	});
	$: tweenedProgress.set($progress);
</script>

{#if $active}
	{#if $tweenedProgress < 1}
		<div
			transition:fade|local={{
				duration: 200
			}}
			class="wrapper"
		>
			<p class="loading">Loading</p>
			<div class="bar-wrapper">
				<div class="bar" style="width: {$tweenedProgress * 100}%" />
			</div>
		</div>
	{/if}
{/if}

<style lang="scss">
	.wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgb(13, 19, 32);
		background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: purple;
	}
	.loading {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.bar-wrapper {
		width: 33.333333%;
		height: 10px;
		border: 1px solid purple;
		position: relative;
	}
	.bar {
		height: 100%;
		background-color: purple;
	}
</style>
