import { useEffect, useState } from "react";
import math, { complex } from "mathjs";

const ComplexHome = () => {
	// const mat = new math();
	const testComplex = () => {
		const num = complex("2 + 3i");
		console.log(math.conj(num));
	};
	return (
		<div className=" text-white">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum possimus totam delectus nihil atque, quam vitae
			unde harum voluptates commodi, fugiat, provident in consequuntur! Sint expedita quod impedit temporibus
			consequatur! <br />
			<button onClick={testComplex} className=" bg-green-500 p-3">
				tester
			</button>
		</div>
	);
};

export default ComplexHome;
