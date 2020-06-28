import 'core-js/es/map';
import 'core-js/es/set';
import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import Albums from './Pages/Albums/Albums';
import Users from './Pages/Users/Users';
import Photos from './Pages/Photos/Photos';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={ Users }/>
				<Route exact path="/albums/:id" component={ Albums }/>
				<Route exact path={ `/albums/:id/photo/:id` } component={ Photos }/>
			</Switch>
		</div>
	);
}

export default App;
