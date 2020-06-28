import React, { useState } from 'react';
import './GalleryItem.scss';
import spinner from '../../../assets/puff.svg';
import PropTypes from 'prop-types';

function GalleryItem(props) {
	const [ isPhotoLoad, setIsPhotoLoad ] = useState(false);

	const handler = () => {
		setIsPhotoLoad(true)
	};

	return (
		<div className="gallery-list_item">
			<div className={ isPhotoLoad ? 'hideSpinner' : 'showSpinner' }>
				<img src={ spinner } alt='spinner'/>
			</div>
			<img onClick={ () => props.onClick(props.photoInfo) } className={ !isPhotoLoad ? 'hidePhoto' : 'showPhoto' }
					 onLoad={ handler }
					 src={ props.photoInfo.thumbnailUrl }
					 alt={ props.photoInfo.title }
			/>
		</div>
	);
}

GalleryItem.propTypes = {
	photoInfo: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
