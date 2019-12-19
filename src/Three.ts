namespace THREE
{

	if (typeof __THREE_DEVTOOLS__ !== 'undefined')
	{

		/* eslint-disable no-undef */
		__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', {
			detail: {
				revision: REVISION,
			}
		}));
		/* eslint-enable no-undef */

	}
}