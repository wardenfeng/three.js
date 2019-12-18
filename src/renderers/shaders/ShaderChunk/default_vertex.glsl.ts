namespace THREE.ShaderChunk
{

	export var default_vertex = /* glsl */`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;
}