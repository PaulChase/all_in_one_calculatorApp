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
				className=" h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
				style={{ backgroundImage: "url('/bg.jpg')" }}
			>
				<div className="  text-white ml-8">
					<p className=" text-4xl lg:text-6xl  max-w-xs lg:max-w-xl font-bold">
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
