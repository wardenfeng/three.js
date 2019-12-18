namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export function DirectionalLightShadow()
	{

		LightShadow.call(this, new OrthographicCamera(- 5, 5, 5, - 5, 0.5, 500));

	}

	DirectionalLightShadow.prototype = Object.assign(Object.create(LightShadow.prototype), {

		constructor: DirectionalLightShadow,

		isDirectionalLightShadow: true,

		updateMatrices: function (light)
		{

			LightShadow.prototype.updateMatrices.call(this, light);

		}

	});


}