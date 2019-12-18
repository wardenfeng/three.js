namespace THREE
{

	/**
	 * @author bhouston / http://clara.io/
	 */

	export function AnimationLoader(manager)
	{

		Loader.call(this, manager);

	}

	AnimationLoader.prototype = Object.assign(Object.create(Loader.prototype), {

		constructor: AnimationLoader,

		load: function (url, onLoad, onProgress, onError)
		{

			var scope = this;

			var loader = new FileLoader(scope.manager);
			loader.setPath(scope.path);
			loader.load(url, function (text)
			{

				onLoad(scope.parse(JSON.parse(text)));

			}, onProgress, onError);

		},

		parse: function (json)
		{

			var animations = [];

			for (var i = 0; i < json.length; i++)
			{

				var clip = AnimationClip.parse(json[i]);

				animations.push(clip);

			}

			return animations;

		}

	});


}