import React from "react";

import "./Button.css";

const Button = props => {
	const { label, handleOnClick } = props;

	return (
		<button className='button' onClick={handleOnClick}>
			{label}
		</button>
	);
};

export default Button;
