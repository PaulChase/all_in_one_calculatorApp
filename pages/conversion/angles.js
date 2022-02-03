import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Angles = () => {
	// the units of measurement
	const units = [
		{
			name: "degrees",
			symbol: "degree",
		},
		{
			name: "radians",
			symbol: "rad",
		},
		{
			name: "gradian",
			symbol: "gradian",
		},
		{
			name: "cycle",
			symbol: "cycle",
		},
		{
			name: "arc secs",
			symbol: "arcsecond",
		},
		{
			name: "arc mins",
			symbol: "arcminute",
		},
	];

	return (
		<>
			<Head>
				<title> Angles Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Angles" units={units} />;
		</>
	);
};

export default Angles;
