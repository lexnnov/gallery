import React, { useState, useEffect } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import Button from '../../Components/Button/Button';
import AlbumItem from '../../Components/AlbumItem/AlbumItem';
import { getAlbums, getPhotos } from '../../services';
import PropTypes from 'prop-types';
import './Albums.scss'

function Albums(props) {
	const [ albums, setAlbums ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const userAlbums = await getAlbums(`https://jsonplaceholder.typicode.com/albums?userId=${ props.match.params.id }`)
			const queryParams = '&albumId=' + userAlbums.map(album => album.id).join('&albumId=');
			const albumPhotos = await getPhotos(`https://jsonplaceholder.typicode.com/photos?${ queryParams }`)
			const dataAggreg = userAlbums.map(album => ({
				...album,
				photos: [ ...albumPhotos.filter(photo => photo.albumId === album.id) ],
				thumbNail: albumPhotos.find(el => el.albumId === album.id).thumbnailUrl
			}))

			setIsLoaded(true)
			setAlbums(dataAggreg)
		}

		fetchData()
	}, [ props.match.params.id ]);

	return (
		<div className="albums">
			{ isLoaded ?
				<React.Fragment>
					<Button goBack={ props.history.goBack }/>
					<div className="albums_list">
						{ albums.map((album) => <AlbumItem key={album.id} to={ `${ props.match.url }/photo/${ album.id }` } album={ album }/>) }
					</div>
				</React.Fragment>
				:
				<Spinner/>
			}
		</div>
	);
}

Albums.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
};
export default Albums;
