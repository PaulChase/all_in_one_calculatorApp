import ConverterForm from "../../components/ConverterForm";
import Head from "next/head";

const Acceleration = () => {
	// the units of measurement
	const units = [
		{
			name: "metre/sec2",
			symbol: "m/s^2",
		},
		{
			name: "metre/min2",
			symbol: "m/mins^2",
		},
		{
			name: "km/hr2",
			symbol: "km/hr^2",
		},
		{
			name: "km/min2",
			symbol: "km/mins^2",
		},
		{
			name: "km/sec2",
			symbol: "km/s^2",
		},
		{
			name: "miles/hr.sec",
			symbol: "mi/(hr s)",
		},
		{
			name: "miles/sec2",
			symbol: "mi/(s^2)",
		},
		{
			name: "feet/sec2",
			symbol: "ft/s^2",
		},

		{
			name: "feet/hr2",
			symbol: "ft/hr^2",
		},
		{
			name: "feet/min2",
			symbol: "ft/mins^2",
		},
	];

	return (
		<>
			<Head>
				<title> Acceleration Converter | Abacus </title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ConverterForm title="Acceleration" units={units} />;
		</>
	);
};

export default Acceleration;
