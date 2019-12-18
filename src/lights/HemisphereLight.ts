namespace THREE
{

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	export function HemisphereLight(skyColor, groundColor, intensity)
	{

		Light.call(this, skyColor, intensity);

		this.type = 'HemisphereLight';

		this.castShadow = undefined;

		this.position.copy(Object3D.DefaultUp);
		this.updateMatrix();

		this.groundColor = new Color(groundColor);

	}

	HemisphereLight.prototype = Object.assign(Object.create(Light.prototype), {

		constructor: HemisphereLight,

		isHemisphereLight: true,

		copy: function (source)
		{

			Light.prototype.copy.call(this, source);

			this.groundColor.copy(source.groundColor);

			return this;

		}

	});


}