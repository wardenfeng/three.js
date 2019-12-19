namespace THREE
{

	/**
	 * @author Reece Aaron Lecrivain / http://reecenotes.com/
	 */

	export function AudioLoader(manager?)
	{

		Loader.call(this, manager);

	}

	AudioLoader.prototype = Object.assign(Object.create(Loader.prototype), {

		constructor: AudioLoader,

		load: function (url, onLoad, onProgress, onError)
		{

			var loader = new FileLoader(this.manager);
			loader.setResponseType('arraybuffer');
			loader.setPath(this.path);
			loader.load(url, function (buffer)
			{

				// Create a copy of the buffer. The `decodeAudioData` method
				// detaches the buffer when complete, preventing reuse.
				var bufferCopy = buffer.slice(0);

				var context = AudioContext.getContext();
				context.decodeAudioData(bufferCopy, function (audioBuffer)
				{

					onLoad(audioBuffer);

				});

			}, onProgress, onError);

		}

	});


}