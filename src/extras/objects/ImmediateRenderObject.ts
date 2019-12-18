namespace THREE
{

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */

	export function ImmediateRenderObject(material)
	{

		Object3D.call(this);

		this.material = material;
		this.render = function ( /* renderCallback */) { };

	}

	ImmediateRenderObject.prototype = Object.create(Object3D.prototype);
	ImmediateRenderObject.prototype.constructor = ImmediateRenderObject;

	ImmediateRenderObject.prototype.isImmediateRenderObject = true;


}