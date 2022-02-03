import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Mass = () => {
	// the units of measurement
	const units = [
		{
			name: "grams",
			symbol: "g",
		},
		{
			name: "kilogram",
			symbol: "kg",
		},
		{
			name: "tonnes",
			symbol: "ton",
		},
		{
			name: "ounce",
			symbol: "oz",
		},
		{
			name: "poundmass",
			symbol: "lbs",
		},
		{
			name: "grain",
			symbol: "gr",
		},
	];

	return (
		<>
			<Head>
				<title>Mass Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Mass" units={units} />;
		</>
	);
};

export default Mass;
