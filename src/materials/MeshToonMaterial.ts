namespace THREE
{

	/**
	 * @author takahirox / http://github.com/takahirox
	 *
	 * parameters = {
	 *  gradientMap: new THREE.Texture( <Image> )
	 * }
	 */
	export class MeshToonMaterial extends MeshPhongMaterial
	{
		gradientMap: any;
		defines: { 'TOON': string; };

		constructor(parameters)
		{

			super();

			this.defines = { 'TOON': '' };

			this.type = 'MeshToonMaterial';

			this.gradientMap = null;

			this.setValues(parameters);

		}

		isMeshToonMaterial = true;

		copy(source)
		{
			super.copy(source);

			this.gradientMap = source.gradientMap;

			return this;

		}
	}
}