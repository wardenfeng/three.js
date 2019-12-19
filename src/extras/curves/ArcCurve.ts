namespace THREE
{

	export class ArcCurve extends EllipseCurve
	{
		isArcCurve = true;
		constructor(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise)
		{

			super(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);

			this.type = 'ArcCurve';

		}

	}

}