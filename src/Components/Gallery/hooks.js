import { useState, useRef, useEffect } from 'react';

export function useStateCallback(initialState, callback) {
	const [ state, set ] = useState(initialState);
	const ref = useRef(false);

	useEffect(
		() => {
			if (ref.current === false) {
				ref.current = true;
			} else {
				callback(state);
			}
		},
		[ state ]
	);

	return [ state, set ];
}