import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Speed = () => {
	// the units of measurement
	const units = [
		{
			name: "metre/sec",
			symbol: "m/s",
		},
		{
			name: "km/hr",
			symbol: "km/hr",
		},
		{
			name: "miles/hr",
			symbol: "mi/hr",
		},
		{
			name: "cm/secs",
			symbol: "cm/s",
		},
		{
			name: "km/secs",
			symbol: "km/s",
		},
		{
			name: "km/min",
			symbol: "km/mins",
		},
		{
			name: "metre/min",
			symbol: "m/mins",
		},
	];

	return (
		<>
			<Head>
				<title> Speed Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Speed" units={units} />;
		</>
	);
};

export default Speed;
