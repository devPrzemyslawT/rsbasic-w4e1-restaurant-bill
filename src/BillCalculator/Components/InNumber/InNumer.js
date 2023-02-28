import React from "react";

import "./InNumber.css";

const InNumber = props => {
	const { placeholder, name, onChangeValue } = props;
	return (
		<input
			className='inNumber'
			type='number'
			name={name}
			placeholder={placeholder}
			onChange={onChangeValue}></input>
	);
};

export default InNumber;
