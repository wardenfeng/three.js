namespace THREE
{


	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author alteredq / http://alteredqualia.com/
	 *
	 * parameters = {
	 *  color: <hex>,
	 *  opacity: <float>,
	 *
	 *  linewidth: <float>,
	 *  linecap: "round",
	 *  linejoin: "round"
	 * }
	 */

	export class LineBasicMaterial extends Material
	{
		isLineBasicMaterial = true;
		linecap: string;
		linejoin: string;

		constructor(parameters?)
		{
			super();

			this.type = 'LineBasicMaterial';

			this.color = new Color(0xffffff);

			this.linewidth = 1;
			this.linecap = 'round';
			this.linejoin = 'round';

			this.setValues(parameters);

		}


		copy(source)
		{

			Material.prototype.copy.call(this, source);

			this.color.copy(source.color);

			this.linewidth = source.linewidth;
			this.linecap = source.linecap;
			this.linejoin = source.linejoin;

			return this;

		}
	}



}