namespace THREE.ShaderChunk
{

	export var alphatest_fragment = /* glsl */`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`;
}