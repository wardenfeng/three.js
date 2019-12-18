namespace THREE.ShaderChunk
{


	export var alphamap_fragment = /* glsl */`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`;
}