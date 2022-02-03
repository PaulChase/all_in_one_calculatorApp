import Link from "next/link";

const AllUnits = () => {
	const allUnits = ["distance", "time", "mass", "speed", "acceleration", "volume"];
	return (
		<div className=" fixed bg-black/60 w-full h-full top-0 left-0 lg:static lg:bg-inherit lg:w-72 lg:mr-4  z-20 lg:z-0">
			<div className=" bg-gray-800 w-2/5 h-full py-3 lg:w-72 lg:rounded-lg">
				<h2 className=" font-bold text-2xl p-2 mb-4">Other Units</h2>
				<ul>
					{allUnits.sort().map((unit) => (
						<Link href={`/conversion/${unit}`}>
							<a className=" block p-2 font-semibold border-b-2 border-gray-600 hover:bg-slate-700">
								{unit.charAt(0).toUpperCase() + unit.slice(1)}
							</a>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AllUnits;
