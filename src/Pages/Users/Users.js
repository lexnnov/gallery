import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services';
import './Users.scss'

function Users() {
	const [ users, setUsers ] = useState([]);

	useEffect(  () => {
		async function fetchData() {
			const users = await getUsers('https://jsonplaceholder.typicode.com/users')
			setUsers(users);
		}

		fetchData()
	}, []);

	return (
		<div className="users">
			<div className="users_list">
				{ users.map((user) => <Link className="users_list-item" key={ user.id } to={ `/albums/${ user.id }` }>{user.name}'s Albums</Link>)}
			</div>
		</div>
	);
}

export default Users;
