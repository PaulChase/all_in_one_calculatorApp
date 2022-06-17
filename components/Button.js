import React from "react";

export default function Button({ text, classes, ...props }) {
	return (
		<button
			{...props}
			className={
				" px-4 py-3 text-sm font-semibold bg-purple-600 text-white rounded-md  hover:bg-purple-700  focus:bg-purple-700" +
				classes
			}
		>
			{text}
		</button>
	);
}
