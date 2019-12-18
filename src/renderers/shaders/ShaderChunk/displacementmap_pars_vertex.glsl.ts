namespace THREE.ShaderChunk
{
	export var displacementmap_pars_vertex = /* glsl */`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;
}