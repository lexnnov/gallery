import React from 'react';
import './GalleryViewer.scss';
import arrow from '../../../assets/arrow.svg'
import PropTypes from 'prop-types';

function GalleryViewer(props) {

	const closeViewer = () => {
		props.controls.closeViewer()
	};

	const previousPhoto = () => {
		props.controls.previousPhoto()
	};

	const nextPhoto = () => {
		props.controls.nextPhoto()
	};

	return (
		<div className="gallery_viewer">
			<div onClick={ previousPhoto }
					 className={ props.stateControlElements.leftBtn ? 'left_button' : 'left_button hide_button' }>
				<img width={ 40 } src={ arrow } alt='To left'/>
			</div>
			<div onClick={ closeViewer } className="photo_container">
				<div className="photo_wrapper">
					<img width={ 600 } src={ props.photo.url } alt={ props.photo.title }/>
					<div className="photo_wrapper-title">
						{ props.photo.title }
					</div>
				</div>
			</div>
			<div onClick={ nextPhoto }
					 className={ props.stateControlElements.rightBtn ? 'right_button' : 'right_button hide_button' }>
				<img width={ 40 } src={ arrow } alt='To right'/>
			</div>
		</div>
	);
}

GalleryViewer.propTypes = {
	stateControlElements: PropTypes.object.isRequired,
	photo: PropTypes.object.isRequired,
	controls: PropTypes.object.isRequired
};

export default GalleryViewer;
