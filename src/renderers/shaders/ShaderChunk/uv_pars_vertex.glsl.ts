namespace THREE.ShaderChunk
{
	export var uv_pars_vertex = /* glsl */`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`;
}