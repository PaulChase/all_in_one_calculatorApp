import ConverterForm from "../../components/ConverterForm";

const Time = () => {
	// the units of measurement
	const units = [
		{
			name: "seconds",
			symbol: "secs",
		},
		{
			name: "minute",
			symbol: "mins",
		},
		{
			name: "hours",
			symbol: "hrs",
		},
		{
			name: "days",
			symbol: "days",
		},
		{
			name: "weeks",
			symbol: "weeks",
		},
		{
			name: "months",
			symbol: "months",
		},
		{
			name: "years",
			symbol: "years",
		},
		{
			name: "decades",
			symbol: "decades",
		},
		{
			name: "century",
			symbol: "centuries",
		},
		{
			name: "millennium",
			symbol: "millennia",
		},
	];

	return <ConverterForm title="Time" units={units} />;
};

export default Time;
