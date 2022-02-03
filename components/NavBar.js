import Link from "next/link";

const NavBar = () => {
	return (
		<nav className=" flex justify-between items-center p-3  max-w-6xl mx-auto  text-white">
			<h1 className=" font-extrabold text-2xl ">ABACUS</h1>
			<ul className=" flex space-x-5 items-center">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Contact Me</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
