import React from 'react';
import './Button.scss';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import PropTypes from 'prop-types';

function Button(props) {
	return (
		<div onClick={ props.goBack } className="button_сontainer">
			<Arrow/>
		</div>
	);
}

Button.propTypes = {
	goBack: PropTypes.func.isRequired,
};

export default Button;
