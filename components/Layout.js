import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
	return (
		<div className=" bg-gray-900 ">
			<NavBar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
