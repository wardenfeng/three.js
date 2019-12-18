namespace THREE
{
	export declare var __THREE_DEVTOOLS__;
	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export function Scene()
	{

		Object3D.call(this);

		this.type = 'Scene';

		this.background = null;
		this.fog = null;
		this.overrideMaterial = null;

		this.autoUpdate = true; // checked by the renderer

		if (typeof __THREE_DEVTOOLS__ !== 'undefined')
		{

			__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this })); // eslint-disable-line no-undef

		}

	}

	Scene.prototype = Object.assign(Object.create(Object3D.prototype), {

		constructor: Scene,

		isScene: true,

		copy: function (source, recursive)
		{

			Object3D.prototype.copy.call(this, source, recursive);

			if (source.background !== null) this.background = source.background.clone();
			if (source.fog !== null) this.fog = source.fog.clone();
			if (source.overrideMaterial !== null) this.overrideMaterial = source.overrideMaterial.clone();

			this.autoUpdate = source.autoUpdate;
			this.matrixAutoUpdate = source.matrixAutoUpdate;

			return this;

		},

		toJSON: function (meta)
		{

			var data = Object3D.prototype.toJSON.call(this, meta);

			if (this.background !== null) data.object.background = this.background.toJSON(meta);
			if (this.fog !== null) data.object.fog = this.fog.toJSON();

			return data;

		},

		dispose: function ()
		{

			this.dispatchEvent({ type: 'dispose' });

		}

	});



}