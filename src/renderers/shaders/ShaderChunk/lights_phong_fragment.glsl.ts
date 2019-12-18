namespace THREE.ShaderChunk
{
    export var lights_phong_fragment = /* glsl */`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;
}