import React from "react";

import { useState } from "react";

import Button from "../Components/Button/Button";
import Paragraph from "../Components/Paragraph/Paragraph";
import InSelect from "../Components/InSelect/InSelect";
import InNumber from "../Components/InNumber/InNumer";

import {
	arrTax,
	arrTip,
	defaultTaxElem,
	defaultTipElem,
} from "../Utils/Data/data";
import { CalcTotalCost } from "../Utils/UserFun/Fun";

const CostForm = () => {
	const [formState, setFormState] = useState({
		billCost: 0,
		billTotalCost: 0,
		billTax: arrTax[defaultTaxElem],
		billTip: arrTip[defaultTipElem],
		billState: true,
	});

	const handleOnSubmit = e => {
		e.preventDefault();
		const result = CalcTotalCost(
			formState.billCost,
			formState.billTax,
			formState.billTip
		);
		setFormState({
			billTotalCost: result,
			billState: false,
		});
	};

	const handleOnBackButton = e => {
		setFormState({
			billCost: 0,
			billTotalCost: 0,
			billTax: arrTax[defaultTaxElem],
			billTip: arrTip[defaultTipElem],
			billState: true,
		});
	};

	const handleOnFormChange = e => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const FormClear = (
		<form onSubmit={handleOnSubmit} onChange={handleOnFormChange}>
			<Paragraph label='Cost:'></Paragraph>
			<InNumber placeholder='Enter yours cost...' name='billCost'></InNumber>

			<Paragraph label='Tax:'></Paragraph>
			<InSelect
				selectData={arrTax}
				defaultValue={defaultTaxElem}
				name='billTax'></InSelect>

			<Paragraph label='Tip:'></Paragraph>
			<InSelect
				selectData={arrTip}
				defaultValue={defaultTipElem}
				name='billTip'></InSelect>

			<Button label='Calculate' type='submit'></Button>
		</form>
	);

	const FormCompleted = (
		<div>
			<h3>{`Total cost =  ${formState.billTotalCost} $`}</h3>
			<Button label='Return' handleOnClick={handleOnBackButton}></Button>
		</div>
	);

	return <div>{formState.billState ? FormClear : FormCompleted}</div>;
};

export default CostForm;
