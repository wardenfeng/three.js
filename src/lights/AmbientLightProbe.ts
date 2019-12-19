namespace THREE
{

	/**
	 * @author WestLangley / http://github.com/WestLangley
	 */

	export class AmbientLightProbe extends LightProbe
	{
		constructor(color, intensity)
		{

			super(undefined, intensity);

			var color1 = new Color().set(color);

			// without extra factor of PI in the shader, would be 2 / Math.sqrt( Math.PI );
			this.sh.coefficients[0].set(color1.r, color1.g, color1.b).multiplyScalar(2 * Math.sqrt(Math.PI));

		}

		isAmbientLightProbe = true

		copy(source)
		{ // modifying color not currently supported

			super.copy(source);

			return this;

		}

		toJSON(meta)
		{

			var data = super.toJSON(meta);

			// data.sh = this.sh.toArray(); // todo

			return data;

		}

	}

}