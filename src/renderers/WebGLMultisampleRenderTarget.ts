namespace THREE
{

	/**
	 * @author Mugen87 / https://github.com/Mugen87
	 * @author Matt DesLauriers / @mattdesl
	 */

	export function WebGLMultisampleRenderTarget(width, height, options)
	{

		WebGLRenderTarget.call(this, width, height, options);

		this.samples = 4;

	}

	WebGLMultisampleRenderTarget.prototype = Object.assign(Object.create(WebGLRenderTarget.prototype), {

		constructor: WebGLMultisampleRenderTarget,

		isWebGLMultisampleRenderTarget: true,

		copy: function (source)
		{

			WebGLRenderTarget.prototype.copy.call(this, source);

			this.samples = source.samples;

			return this;

		}

	});


}