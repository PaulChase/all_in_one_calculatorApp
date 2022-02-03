import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const SurfaceArea = () => {
	// the units of measurement
	const units = [
		{
			name: "meter square",
			symbol: "m2",
		},
		{
			name: "square inch",
			symbol: "sqin",
		},
		{
			name: "square feet",
			symbol: "sqft",
		},
		{
			name: "square yards",
			symbol: "sqyd",
		},
		{
			name: "square miles",
			symbol: "sqmi",
		},
		{
			name: "square rod",
			symbol: "sqrd",
		},
		{
			name: "square chain",
			symbol: "sqch",
		},
		{
			name: "acres",
			symbol: "acre",
		},
		{
			name: "hectare",
			symbol: "hectare",
		},
	];

	return (
		<>
			<Head>
				<title> SurfaceArea Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="SurfaceArea" units={units} />;
		</>
	);
};

export default SurfaceArea;
