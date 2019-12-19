namespace THREE
{

	/**
	 * @author WestLangley / http://github.com/WestLangley
	 *
	 * A LightProbe is a source of indirect-diffuse light
	 */
	export class LightProbe extends Light
	{
		sh: any;
		constructor(sh, intensity)
		{

			super(undefined, intensity);

			this.sh = (sh !== undefined) ? sh : new SphericalHarmonics3();

		}

		isLightProbe = true;

		copy(source)
		{

			super.copy(source);

			this.sh.copy(source.sh);
			this.intensity = source.intensity;

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