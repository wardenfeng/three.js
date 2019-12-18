namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */


	export function CanvasTexture(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy)
	{

		Texture.call(this, canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);

		this.needsUpdate = true;

	}

	CanvasTexture.prototype = Object.create(Texture.prototype);
	CanvasTexture.prototype.constructor = CanvasTexture;
	CanvasTexture.prototype.isCanvasTexture = true;

}