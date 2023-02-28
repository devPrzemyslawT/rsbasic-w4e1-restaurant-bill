const ConvToFloat = value => {
	return parseFloat(value);
};

const convToPercent = value => {
	return ConvToFloat(value) / 100;
};

export const CalcTotalCost = (cost, tax, tip) => {
	let result = ConvToFloat(cost) + ConvToFloat(cost) * convToPercent(tax);
	result = result + result * convToPercent(tip);
	return result.toFixed(2);
};
