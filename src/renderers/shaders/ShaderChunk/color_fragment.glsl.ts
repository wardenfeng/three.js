namespace THREE.ShaderChunk
{
	export var color_fragment = /* glsl */`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`;
}