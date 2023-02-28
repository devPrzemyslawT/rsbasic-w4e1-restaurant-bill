import React from "react";

import "./InNumber.css";

const InNumber = props => {
	const { placeholder, onChangeValue } = props;
	return (
		<input
			className='inNumber'
			type='number'
			placeholder={placeholder}
			onChange={onChangeValue}></input>
	);
};

export default InNumber;
