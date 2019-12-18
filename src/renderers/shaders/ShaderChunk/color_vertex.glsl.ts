namespace THREE.ShaderChunk
{

	export var color_vertex = /* glsl */`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`;
}