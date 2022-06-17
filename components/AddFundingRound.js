import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import InputField from "./InputField";

export default function AddFundingRound({ submitFundingRound, closeForm }) {
	const [data, setData] = useState({
		amount: "",
		stake: "",
	});

	const handleChange = (event) => {
		setData((prevState) => {
			return {
				...prevState,
				[event.target.name]: event.target.value,
			};
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		submitFundingRound(data);
		closeForm();
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h3 className=" font-semibold mb-2 text-lg">Add Funding Round</h3>

				<div>
					<label htmlFor="">Amount:</label> <br />
					<InputField name="amount" value={data.amount} onChange={handleChange} required={true} type="number" />
				</div>

				<div className=" mt-3">
					<label htmlFor="">Stake:</label> <br />
					<InputField name="stake" value={data.stake} onChange={handleChange} required={true} type="number" />
				</div>
				<Button text="Submit" type="submit" classes=" w-full mt-4" />
			</form>
		</Card>
	);
}
