namespace THREE.ShaderChunk
{
	export var metalnessmap_pars_fragment = /* glsl */`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;
}