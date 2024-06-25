import { React } from 'react';
const CustomerGender = (context) => {
	const {
		actions: { setCustomerGender },
		state: { gender },
	} = context;

	return <div>
		<label> Gender : </label>
		<select
			type="number"
			value={ gender }
			placeholder="Enter the Mobile No"
			onChange={ (event) => setCustomerGender(event.target.value) }
		>
			<option value="male">Male</option>
			<option value="female">Female</option>
		</select>
	</div>;
};

export default CustomerGender;
