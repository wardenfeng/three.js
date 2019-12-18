namespace THREE.ShaderChunk
{
	export var uv2_pars_fragment = /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`;
}