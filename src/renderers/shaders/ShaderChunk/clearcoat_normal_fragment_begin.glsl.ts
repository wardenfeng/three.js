namespace THREE.ShaderChunk
{
	export var clearcoat_normal_fragment_begin = /* glsl */`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`;

}