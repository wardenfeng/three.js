namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export function AmbientLight(color, intensity)
	{

		Light.call(this, color, intensity);

		this.type = 'AmbientLight';

		this.castShadow = undefined;

	}

	AmbientLight.prototype = Object.assign(Object.create(Light.prototype), {

		constructor: AmbientLight,

		isAmbientLight: true

	});


}