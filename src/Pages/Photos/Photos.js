import React, { useState, useEffect } from 'react';
import Gallery from '../../Components/Gallery/Gallery';
import './Photos.scss';
import { getPhotos } from '../../services';
import Spinner from '../../Components/Spinner/Spinner';
import Button from '../../Components/Button/Button';
import PropTypes from 'prop-types';

function Photos(props) {
	const [ photos, setPhotos ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const albumPhotos = await getPhotos(`https://jsonplaceholder.typicode.com/photos?albumId=${ props.match.params.id }`)
			setIsLoaded(true)
			setPhotos(albumPhotos);
		}

		fetchData()

	}, [props.match.params.id]);

	return (
		<div className="photos">
			{ isLoaded ?
				<React.Fragment>
					<Button goBack={ props.history.goBack }/>
					<Gallery photos={ photos }/>
				</React.Fragment>
				:
				<Spinner/>
			}
		</div>
	);
}

Photos.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
};

export default Photos;
