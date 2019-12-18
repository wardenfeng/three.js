namespace THREE
{

	/**
	 *
	 * A Track that interpolates Strings
	 *
	 *
	 * @author Ben Houston / http://clara.io/
	 * @author David Sarno / http://lighthaus.us/
	 * @author tschw
	 */
	export class StringKeyframeTrack extends KeyframeTrack
	{
		ValueTypeName = 'string'
		ValueBufferType = Array

		DefaultInterpolation = InterpolateDiscrete

		InterpolantFactoryMethodLinear = undefined

		InterpolantFactoryMethodSmooth = undefined

		constructor(name, times, values, interpolation)
		{
			super(name, times, values, interpolation);
		}
	}
}