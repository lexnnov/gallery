import React from 'react';
import './AlbumItem.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AlbumItem(props) {

	return (
		<Link to={ props.to } className="albums_list-item">
			<img className="album_image" height={ 150 } width={ 150 } src={ props.album.thumbNail } alt="thumbnail"/>
			<div className="album_info">
				<div className="album_info-title">Title: { props.album.title }</div>
				<div className="album_info-count">Count of photos: { props.album.photos.length }</div>
			</div>
		</Link>
	);
}

AlbumItem.propTypes = {
	to: PropTypes.string.isRequired,
	album: PropTypes.object.isRequired,
};

export default AlbumItem;
