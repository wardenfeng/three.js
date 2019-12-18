namespace THREE.ShaderChunk
{
	export var specularmap_pars_fragment = /* glsl */`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;
}