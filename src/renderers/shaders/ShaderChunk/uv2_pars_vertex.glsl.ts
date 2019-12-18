export var uv2_pars_vertex = /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

#endif
`;
