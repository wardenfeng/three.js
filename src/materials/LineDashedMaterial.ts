namespace THREE
{


	/**
	 * @author alteredq / http://alteredqualia.com/
	 *
	 * parameters = {
	 *  color: <hex>,
	 *  opacity: <float>,
	 *
	 *  linewidth: <float>,
	 *
	 *  scale: <float>,
	 *  dashSize: <float>,
	 *  gapSize: <float>
	 * }
	 */
	export class LineDashedMaterial extends LineBasicMaterial
	{
		isLineDashedMaterial = true;
		constructor(parameters)
		{

			super();

			this.type = 'LineDashedMaterial';

			this.scale = 1;
			this.dashSize = 3;
			this.gapSize = 1;

			this.setValues(parameters);

		}


		copy(source)
		{

			super.copy(source);

			this.scale = source.scale;
			this.dashSize = source.dashSize;
			this.gapSize = source.gapSize;

			return this;

		}

	}





}