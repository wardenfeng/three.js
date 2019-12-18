namespace THREE.ShaderChunk
{

	export var aomap_pars_fragment = /* glsl */`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;
}