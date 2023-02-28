import React from "react";

import "./InSelect.css";

const InSelect = props => {
	const { selectData, defaultValue } = props;
	let localDefaultValue =
		defaultValue < 0 || defaultValue > selectData.length ? 0 : defaultValue;
	return (
		<select className='inSelect' defaultValue={selectData[localDefaultValue]}>
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
