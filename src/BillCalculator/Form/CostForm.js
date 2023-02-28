import React from "react";

import Button from "../Components/Button/Button";
import Paragraph from "../Components/Paragraph/Paragraph";
import InSelect from "../Components/InSelect/InSelect";
import InNumber from "../Components/InNumber/InNumer";

import { arrTax, arrTip } from "../Utils/Data/data";

const CostForm = () => {
	const FormClear = (
		<form>
			<Paragraph label='Cost:'></Paragraph>
			<InNumber placeholder='Set yours cost...'></InNumber>
			<Paragraph label='Tax:'></Paragraph>
			<InSelect selectData={arrTax} defaultValue='2'></InSelect>
			<Paragraph label='Tip:'></Paragraph>
			<InSelect selectData={arrTip} defaultValue='3'></InSelect>
			<Button label='Calculate'></Button>
		</form>
	);

	const FormCompleted = (
		<form>
			<Paragraph label='Calculated cost = xx'></Paragraph>
			<Button label='Back'></Button>
		</form>
	);

	return <div>{FormClear}</div>;
};

export default CostForm;
