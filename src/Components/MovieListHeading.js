import React from 'react';

// Define a functional component named MovieListHeading
const MovieListHeading = (props) => {
	return (
		<div className='col'>
			{/* Display the heading passed as a prop */}
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
