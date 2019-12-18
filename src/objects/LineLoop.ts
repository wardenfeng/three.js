namespace THREE
{

	/**
	 * @author mgreter / http://github.com/mgreter
	 */

	export function LineLoop(geometry, material)
	{

		Line.call(this, geometry, material);

		this.type = 'LineLoop';

	}

	LineLoop.prototype = Object.assign(Object.create(Line.prototype), {

		constructor: LineLoop,

		isLineLoop: true,

	});


}