namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author alteredq / http://alteredqualia.com/
	 */

	export function FogExp2(color, density)
	{

		this.name = '';

		this.color = new Color(color);
		this.density = (density !== undefined) ? density : 0.00025;

	}

	Object.assign(FogExp2.prototype, {

		isFogExp2: true,

		clone: function ()
		{

			return new FogExp2(this.color, this.density);

		},

		toJSON: function ( /* meta */)
		{

			return {
				type: 'FogExp2',
				color: this.color.getHex(),
				density: this.density
			};

		}

	});

}