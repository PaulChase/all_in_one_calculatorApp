import ConverterForm from "../../components/ConverterForm";

const Distance = () => {
	// the units of measurement
	const units = [
		{
			name: "meters",
			symbol: "m",
		},
		{
			name: "kilometer",
			symbol: "km",
		},
		{
			name: "inches",
			symbol: "in",
		},
		{
			name: "feet",
			symbol: "ft",
		},
		{
			name: "yards",
			symbol: "yd",
		},
		{
			name: "miles",
			symbol: "mi",
		},
		{
			name: "Link",
			symbol: "li",
		},
		{
			name: "rod",
			symbol: "rd",
		},
	];

	return <ConverterForm title="Distance" units={units} />;
};

export default Distance;
