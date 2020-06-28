import React from 'react';
import './Spinner.scss';
import spinner from '../../assets/tail-spin.svg'

function Spinner() {
	return (
		<div className="spinner">
			<img width={ 150 } height={ 150 } src={ spinner } alt='loading'/>
		</div>
	);
}

export default Spinner;
