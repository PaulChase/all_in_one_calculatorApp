import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

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

	return (
		<>
			<Head>
				<title>Distance Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Distance" units={units} />;
		</>
	);
};

export default Distance;
