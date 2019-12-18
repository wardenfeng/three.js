namespace THREE.ShaderChunk
{
	export var clipping_planes_vertex = /* glsl */`
#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif
`;
}