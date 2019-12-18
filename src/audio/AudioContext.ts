namespace THREE
{

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	var _context;

	export var AudioContext = {

		getContext: function ()
		{

			if (_context === undefined)
			{

				_context = new (window.AudioContext || window["webkitAudioContext"])();

			}

			return _context;

		},

		setContext: function (value)
		{

			_context = value;

		}

	};

}