import React from "react";

import "./InSelect.css";

const InSelect = props => {
	const { selectData, defaultValue, handleValue } = props;
	let localDefaultValue =
		defaultValue < 0 || defaultValue > selectData.length ? 5 : defaultValue;
	return (
		<select
			className='inSelect'
			defaultValue={selectData[localDefaultValue]}
			onChange={handleValue}>
			{selectData.map(elem => {
				return (
					<option key={elem.toString()} value={elem}>
						{elem}%
					</option>
				);
			})}
		</select>
	);
};

export default InSelect;
