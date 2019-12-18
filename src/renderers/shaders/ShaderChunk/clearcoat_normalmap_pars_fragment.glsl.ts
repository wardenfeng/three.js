namespace THREE.ShaderChunk
{
	export var clearcoat_normalmap_pars_fragment = /* glsl */`
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`;
}