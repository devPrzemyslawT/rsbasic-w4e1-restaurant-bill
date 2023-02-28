import React from "react";

import "./Paragraph.css";

const Paragraph = props => {
	const { label } = props;

	return <p className='parag'>{label}</p>;
};

export default Paragraph;
