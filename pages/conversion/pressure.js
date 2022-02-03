import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Pressure = () => {
	// the units of measurement
	const units = [
		{
			name: "pascal",
			symbol: "Pa",
		},
		{
			name: "psi",
			symbol: "psi",
		},
		{
			name: "atmosphere",
			symbol: "atm",
		},
		{
			name: "torr",
			symbol: "torr",
		},
		{
			name: "bar",
			symbol: "bar",
		},
		{
			name: "mmHg",
			symbol: "mmHg",
		},
		{
			name: "mmH20",
			symbol: "mmH20",
		},
		{
			name: "cmH20",
			symbol: "cmH20",
		},
	];

	return (
		<>
			<Head>
				<title> Pressure Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Pressure" units={units} />;
		</>
	);
};

export default Pressure;
