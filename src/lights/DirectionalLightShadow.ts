namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export class DirectionalLightShadow extends LightShadow
	{
		constructor()
		{

			super(new OrthographicCamera(- 5, 5, 5, - 5, 0.5, 500));

		}
		isDirectionalLightShadow = true;

		updateMatrices(light)
		{

			super.updateMatrices(light);

		}
	}


}