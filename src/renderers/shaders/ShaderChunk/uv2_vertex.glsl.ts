namespace THREE.ShaderChunk
{
	export var uv2_vertex = /* glsl */`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = uv2;

#endif
`;
}