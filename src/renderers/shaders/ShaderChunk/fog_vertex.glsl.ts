namespace THREE.ShaderChunk
{
	export var fog_vertex = /* glsl */`
#ifdef USE_FOG

	fogDepth = -mvPosition.z;

#endif
`;
}