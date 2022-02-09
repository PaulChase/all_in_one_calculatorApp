import Link from "next/link";
import useUnits from "../../components/hooks/useUnits";

const ConversionHome = () => {
	const allUnits = useUnits();

	return (
		<section className=" bg-black p-3 text-white ">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:text-lg">
				{allUnits.sort().map((unit, index) => (
					<Link key={index} href={`/conversion/${unit}`}>
						<a className=" block p-3 font-semibold border-2 border-gray-600 hover:bg-slate-700 rounded-md  ">
							{unit.charAt(0).toUpperCase() + unit.slice(1)}
						</a>
					</Link>
				))}
			</div>
		</section>
	);
};

export default ConversionHome;
