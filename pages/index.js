import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const calculators = [
	{
		name: "Units Converter",
		url: "/conversion",
		desc: "Convert between unit in maths, physics, kmis3 etc.",
	},
	{
		name: "Company Equity Calculator",
		url: "/equity",
		desc: "Calculate the shares, stakes, valuation of startups, founders etc.",
	},
];

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Abacus | The Ultimate Online Calculator App</title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<secton
				className=" h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
				style={{ backgroundImage: "url('/bg.jpg')" }}
			>
				<div className="  text-white ml-8">
					<p className=" text-4xl lg:text-6xl  max-w-xs lg:max-w-xl font-bold">The All in one calculator...</p>
					<Link href="/#calculators">
						<a className=" bg-purple-500 hover:bg-purple-700 py-3 px-6 mt-12 inline-block  rounded-full font-semibold">
							Get started
						</a>
					</Link>
				</div>
			</secton>

			<section className=" bg-gray-800 px-4 py-12" id="calculators">
				<h2 className=" text-2xl md:text-4xl text-purple-500 font-bold text-center mb-6 md:mb-12">Calculators...</h2>

				<div className=" grid gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
					{calculators.map((calculator, index) => (
						<Link key={index} href={calculator.url}>
							<a className=" block p-4 font-semibold border-2 border-gray-600 md:text-lg hover:bg-slate-700 rounded-md text-white  ">
								{calculator.name}

								<p className=" text-sm font-normal text-gray-200 mt-2">{calculator.desc}</p>
							</a>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
