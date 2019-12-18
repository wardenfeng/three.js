namespace THREE
{

	/**
	 * @author takahirox / http://github.com/takahirox
	 *
	 * parameters = {
	 *  gradientMap: new THREE.Texture( <Image> )
	 * }
	 */

	export function MeshToonMaterial(parameters)
	{

		MeshPhongMaterial.call(this);

		this.defines = { 'TOON': '' };

		this.type = 'MeshToonMaterial';

		this.gradientMap = null;

		this.setValues(parameters);

	}

	MeshToonMaterial.prototype = Object.create(MeshPhongMaterial.prototype);
	MeshToonMaterial.prototype.constructor = MeshToonMaterial;

	MeshToonMaterial.prototype.isMeshToonMaterial = true;

	MeshToonMaterial.prototype.copy = function (source)
	{

		MeshPhongMaterial.prototype.copy.call(this, source);

		this.gradientMap = source.gradientMap;

		return this;

	};


}