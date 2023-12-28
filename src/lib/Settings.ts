/**
 * Settings svelte store
 */

import { writable } from 'svelte/store';

/**
 * Debug mode
 */
export const DEBUG: { [key: string]: boolean } = {
	enableAxesHelper: true,
	enablePerformanceProfiling: true,
	enableGridHelper: true,
	enableSettings: false,
	enableGizmo: true,
	enableSkybox: false
};

/**
 * OrbitControls settings
 */
export const enablePan = writable<boolean>(true);
export const autoRotate = writable<boolean>(false);
export const enableDamping = writable<boolean>(true);
export const autoRotateSpeed = writable<number>(5);
export const rotateSpeed = writable<number>(0.5);
export const zoomToCursor = writable<boolean>(false);
export const zoomSpeed = writable<number>(1);
export const minPolarAngle = writable<number>(0);
export const maxPolarAngle = writable<number>(85);
export const enableZoom = writable<boolean>(true);

/**
 * Sky settings
 */
export const setEnvironment = writable<boolean>(false);
export const turbidity = writable<number>();
export const rayleigh = writable<number>(3);
export const azimuth = writable<number>(0.25);
export const elevation = writable<number>(2);
export const mieCoefficient = writable<number>(0.005);
export const mieDirectionalG = writable<number>(0.8);

/**
 * Scene settings
 */
export const exposure = writable<number>(1);
