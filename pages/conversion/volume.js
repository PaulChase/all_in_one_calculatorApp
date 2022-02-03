import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Volume = () => {
	// the units of measurement
	const units = [
		{
			name: "meter cube",
			symbol: "m3",
		},
		{
			name: "litre",
			symbol: "lt",
		},
		{
			name: "cubic inch",
			symbol: "cuin",
		},
		{
			name: "cubic feets",
			symbol: "cuft",
		},
		{
			name: "cubic yards",
			symbol: "cuyd",
		},
		{
			name: "teaspoons",
			symbol: "teaspoon",
		},
		{
			name: "tablespoon",
			symbol: "tablespoon",
		},
	];

	return (
		<>
			<Head>
				<title> Volume Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Volume" units={units} />;
		</>
	);
};

export default Volume;
