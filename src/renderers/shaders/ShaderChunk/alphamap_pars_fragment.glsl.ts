namespace THREE.ShaderChunk
{
	export var alphamap_pars_fragment = /* glsl */`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;
}