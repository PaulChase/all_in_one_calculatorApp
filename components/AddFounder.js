import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import InputField from "./InputField";
import { v4 as uuid } from "uuid";

export default function AddFounder({ submitFounder, closeForm }) {
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const id = uuid();

		submitFounder({ id, name });
		closeForm();
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h3 className=" font-semibold mb-2 text-lg">Add Founder</h3>

				<div>
					<label htmlFor="">Founder Name:</label> <br />
					<InputField value={name} onChange={(e) => setName(e.target.value)} required={true} autoFocus />
				</div>
				<Button text="Submit" type="submit" classes=" w-full mt-4" />
			</form>
		</Card>
	);
}
