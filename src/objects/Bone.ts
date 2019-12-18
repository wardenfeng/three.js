namespace THREE
{

	/**
	 * @author mikael emtinger / http://gomo.se/
	 * @author alteredq / http://alteredqualia.com/
	 * @author ikerr / http://verold.com
	 */

	export function Bone()
	{

		Object3D.call(this);

		this.type = 'Bone';

	}

	Bone.prototype = Object.assign(Object.create(Object3D.prototype), {

		constructor: Bone,

		isBone: true

	});


}