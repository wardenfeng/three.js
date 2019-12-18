namespace THREE.ShaderChunk
{
	export var roughnessmap_pars_fragment = /* glsl */`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;
}