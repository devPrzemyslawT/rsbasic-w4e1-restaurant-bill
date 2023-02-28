import React from "react";

import "./Button.css";

const Button = props => {
	const { label, buttonType, handleOnClick } = props;

	return (
		<button className='button' type={buttonType} onClick={handleOnClick}>
			{label}
		</button>
	);
};

export default Button;
