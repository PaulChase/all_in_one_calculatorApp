import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

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

	return (
		<>
			<Head>
				<title> Time Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Time" units={units} />;
		</>
	);
};

export default Time;
