import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-slate-50">
			<Head>
				<title>Abacus | The Ultimate Units Converter App</title>
				<meta name="description" content="created by Ajonye Paul" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<secton
				className=" h-[32rem] w-full bg-cover bg-no-repeat flex items-center"
				style={{ backgroundImage: "url('/bg.jpg')" }}
			>
				<div className=" px-12 text-white">
					<p className=" text-6xl  max-w-xl font-bold">
						Convert between units in maths, physics, chemistry...
					</p>
					<Link href="/conversion">
						<a className=" bg-purple-500 hover:bg-purple-700 py-3 px-6 mt-12 inline-block  rounded-full font-semibold">
							{" "}
							Get started
						</a>
					</Link>
				</div>
			</secton>
		</div>
	);
}
