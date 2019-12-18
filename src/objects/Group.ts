namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export function Group()
	{

		Object3D.call(this);

		this.type = 'Group';

	}

	Group.prototype = Object.assign(Object.create(Object3D.prototype), {

		constructor: Group,

		isGroup: true

	});


}