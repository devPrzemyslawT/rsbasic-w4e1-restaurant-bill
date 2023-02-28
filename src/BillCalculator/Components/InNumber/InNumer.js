import React from "react";

import "./InNumber.css";

const InNumber = props => {
	const { placeholder } = props;
	return (
		<input className='inNumber' type='number' placeholder={placeholder}></input>
	);
};

export default InNumber;
