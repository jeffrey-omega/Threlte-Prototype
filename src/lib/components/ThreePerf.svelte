<script>
	import { useStage, useTask, useThrelte } from '@threlte/core';
	import { ThreePerf } from 'three-perf';

	const { renderer, mainStage, renderStage } = useThrelte();

	const perf = new ThreePerf({
		anchorX: 'left',
		anchorY: 'top',
		domElement: document.body,
		renderer
	});

	const beforeMainStage = useStage('three-perf-begin', {
		before: mainStage
	});

	useTask(
		() => {
			perf.begin();
		},
		{ stage: beforeMainStage }
	);

	const afterRenderStage = useStage('three-perf-end', {
		after: renderStage
	});

	useTask(
		() => {
			perf.end();
		},
		{ stage: afterRenderStage }
	);
</script>
