namespace THREE
{

	/**
	 * @author szimek / https://github.com/szimek/
	 * @author alteredq / http://alteredqualia.com/
	 * @author Marius Kintel / https://github.com/kintel
	 */

	export class WebGLRenderTarget extends EventDispatcher
	{
		width: number;
		height: any;
		scissor: any;
		scissorTest: boolean;
		viewport: any;
		texture: Texture;
		depthBuffer: any;
		stencilBuffer: any;
		depthTexture: any;

		/*
		 In options, we can specify:
		 * Texture parameters for an auto-generated target texture
		 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
		*/
		constructor(width?: number, height?, options?)
		{
			super();
			this.width = width;
			this.height = height;

			this.scissor = new Vector4(0, 0, width, height);
			this.scissorTest = false;

			this.viewport = new Vector4(0, 0, width, height);

			options = options || {};

			this.texture = new Texture(undefined, undefined, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);

			this.texture.image = {};
			this.texture.image.width = width;
			this.texture.image.height = height;

			this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
			this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;

			this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
			this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : true;
			this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;

		}


		isWebGLRenderTarget = true;

		setSize(width, height)
		{

			if (this.width !== width || this.height !== height)
			{

				this.width = width;
				this.height = height;

				this.texture.image.width = width;
				this.texture.image.height = height;

				this.dispose();

			}

			this.viewport.set(0, 0, width, height);
			this.scissor.set(0, 0, width, height);

		}

		clone()
		{

			return new WebGLRenderTarget().copy(this);

		}

		copy(source)
		{

			this.width = source.width;
			this.height = source.height;

			this.viewport.copy(source.viewport);

			this.texture = source.texture.clone();

			this.depthBuffer = source.depthBuffer;
			this.stencilBuffer = source.stencilBuffer;
			this.depthTexture = source.depthTexture;

			return this;

		}

		dispose()
		{

			this.dispatchEvent({ type: 'dispose' });

		}
	}



}