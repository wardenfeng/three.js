namespace THREE
{

	/**
	 *
	 * A Track of vectored keyframe values.
	 *
	 *
	 * @author Ben Houston / http://clara.io/
	 * @author David Sarno / http://lighthaus.us/
	 * @author tschw
	 */
	export class VectorKeyframeTrack extends KeyframeTrack
	{
		ValueTypeName = 'vector'

		constructor(name, times, values, interpolation)
		{

			super(name, times, values, interpolation);

		}
	}


}