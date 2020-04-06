import React from 'react';

const UserNav = ({ user, logOutUser }) => {
	const { username } = user;
	return(
		<div>
			<p>Welcome { username }!</p>
			<button onClick = { logOutUser }>Log out</button>
		</div>
	);
};

export default UserNav;
