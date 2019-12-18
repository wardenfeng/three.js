namespace THREE
{

	/**
	 *
	 * A Track of numeric keyframe values.
	 *
	 * @author Ben Houston / http://clara.io/
	 * @author David Sarno / http://lighthaus.us/
	 * @author tschw
	 */
	export class NumberKeyframeTrack extends KeyframeTrack
	{

		ValueTypeName = 'number'
		constructor(name, times, values, interpolation?)
		{

			super(name, times, values, interpolation);

		}

	}

}