import React, { useState } from 'react';
import Photo from './GalleryItem/GalleryItem';
import GalleryViewer from './GalleryViewer/GalleryViewer';
import { useStateCallback } from './hooks';
import PropTypes from 'prop-types';
import './Gallery.scss';

function Gallery(props) {
	const [ isViewerOpen, setIsViewerOpen ] = useState(false);
	const [ activePhoto, setActivePhoto ] = useStateCallback({}, () => {
		setViewerControls()
	});
	const [ controlElements, setControlElements ] = useState({ leftBtn: true, rightBtn: true });

	const openPhoto = (photo) => {
		setIsViewerOpen(true)
		setActivePhoto(photo)
	};

	const setViewerControls = () => {
		const firstPhoto = props.photos[ 0 ].id
		const lastPhoto = props.photos[ props.photos.length - 1 ].id

		if (firstPhoto === activePhoto.id) {
			setControlElements({ leftBtn: false, rightBtn: true })
		} else if (lastPhoto === activePhoto.id) {
			setControlElements({ leftBtn: true, rightBtn: false })
		} else {
			setControlElements({ leftBtn: true, rightBtn: true })
		}
	}

	const controls = {

		closeViewer: () => {
			setIsViewerOpen(false)
		},

		previousPhoto: () => {
			const previousPhotoIndex = props.photos.findIndex(photo => photo.id === activePhoto.id) - 1

			if (previousPhotoIndex >= 0)
				setActivePhoto(props.photos[ previousPhotoIndex ])
		},

		nextPhoto: () => {
			const nextPhotoIndex = props.photos.findIndex(photo => photo.id === activePhoto.id) + 1

			if (nextPhotoIndex < props.photos.length)
				setActivePhoto(props.photos[ nextPhotoIndex ])
		},
	}

	return (
		<div className="gallery">
			{ isViewerOpen ?
				<GalleryViewer stateControlElements={ controlElements } controls={ controls } photo={ activePhoto }/> : '' }
			<div className="gallery_list">
				{ props.photos.map((photo) => <Photo key={ photo.id } onClick={ openPhoto } photoInfo={ photo }/>) }
			</div>
		</div>
	);
}

Gallery.propTypes = {
	photos: PropTypes.array.isRequired,
};

export default Gallery;
