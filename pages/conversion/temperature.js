import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Temperature = () => {
	// the units of measurement
	const units = [
		{
			name: "kelvin",
			symbol: "K",
		},
		{
			name: "celsius",
			symbol: "degC",
		},
		{
			name: "fahrenheit",
			symbol: "degF",
		},
		{
			name: "rankine",
			symbol: "degR",
		},
	];

	return (
		<>
			<Head>
				<title> Temperature Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Temperature" units={units} />;
		</>
	);
};

export default Temperature;
