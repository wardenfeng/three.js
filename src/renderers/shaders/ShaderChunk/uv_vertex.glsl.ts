namespace THREE.ShaderChunk
{
	export var uv_vertex = /* glsl */`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;
}