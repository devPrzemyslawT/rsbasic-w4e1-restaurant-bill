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
	const [formState, setFormState] = useState(true);
	const [costValue, setCostValue] = useState(0);
	const [totalValue, setTotalValue] = useState(0);
	const [tipValue, setTipValue] = useState(arrTip[defaultTipElem]);
	const [taxValue, setTaxValue] = useState(arrTax[defaultTaxElem]);

	const handleOnCalculateButton = e => {
		setTotalValue(CalcTotalCost(costValue, taxValue, tipValue));
		setFormState(false);
	};

	const handleOnBackButton = e => {
		setTipValue(arrTip[defaultTipElem]);
		setTaxValue(arrTax[defaultTaxElem]);
		setTotalValue(0);
		setCostValue(0);
		setFormState(true);
	};

	const handleCostValue = e => {
		setCostValue(e.target.value);
	};

	const handleTaxValue = e => {
		setTaxValue(e.target.value);
	};
	const handleTipValue = e => {
		setTipValue(e.target.value);
	};
	const FormClear = (
		<form>
			<Paragraph label='Cost:'></Paragraph>
			<InNumber
				placeholder='Enter yours cost...'
				onChangeValue={handleCostValue}></InNumber>

			<Paragraph label='Tax:'></Paragraph>
			<InSelect
				selectData={arrTax}
				defaultValue={defaultTaxElem}
				handleValue={handleTaxValue}></InSelect>

			<Paragraph label='Tip:'></Paragraph>
			<InSelect
				selectData={arrTip}
				defaultValue={defaultTipElem}
				handleValue={handleTipValue}></InSelect>

			<Button
				label='Calculate'
				handleOnClick={handleOnCalculateButton}></Button>
		</form>
	);

	const FormCompleted = (
		<form>
			<h3>{`Total cost =  ${totalValue} $`}</h3>
			<Button label='Return' handleOnClick={handleOnBackButton}></Button>
		</form>
	);

	return <div>{formState ? FormClear : FormCompleted}</div>;
};

export default CostForm;
