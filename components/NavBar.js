import Link from "next/link";

const NavBar = () => {
	return (
		<nav className=" flex justify-between items-center p-3  max-w-6xl mx-auto  text-white">
			<Link href="/">
				<a className=" font-extrabold text-2xl">ABACUS</a>
			</Link>

			<ul className=" flex space-x-5 items-center">
				<li className="hidden md:inline-block">
					<Link href="/conversion">
						<a>Conversions</a>
					</Link>
				</li>
				<li className="hidden md:inline-block">
					<Link href="/equity">
						<a>Equity</a>
					</Link>
				</li>
				<li>
					<Link href="https://twitter.com/ajonyepaul">
						<a
							className="bg-purple-500 hover:bg-purple-700  px-6 inline-block  rounded-full font-semibold p-2"
							target="_blank"
						>
							Contact Me
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
