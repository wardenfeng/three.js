namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	export class WebGLAnimation
	{
		context = null;
		isAnimating = false;
		animationLoop = null;

		onAnimationFrame(time, frame)
		{

			if (this.isAnimating === false) return;

			this.animationLoop(time, frame);

			this.context.requestAnimationFrame(this.onAnimationFrame.bind(this));

		}

		start()
		{

			if (this.isAnimating === true) return;
			if (this.animationLoop === null) return;

			this.context.requestAnimationFrame(this.onAnimationFrame.bind(this));

			this.isAnimating = true;

		}

		stop()
		{

			this.isAnimating = false;

		}

		setAnimationLoop(callback)
		{

			this.animationLoop = callback;

		}

		setContext(value)
		{

			this.context = value;

		}
	}

}