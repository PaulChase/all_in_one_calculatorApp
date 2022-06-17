import React from "react";

export default function InputField({ type = "text", value, ...props }) {
	return (
		<input
			type={type}
			className=" w-full rounded-lg mr-2 p-2 bg-gray-500 focus:ring-2 outline-none ring-purple-500 font-bold text-xl  mt-2"
			value={value}
			{...props}
		/>
	);
}
