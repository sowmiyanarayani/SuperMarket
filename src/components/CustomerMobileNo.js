import { React } from 'react';
const CustomerMobileNo = (context) => {
	const { actions: { setCustomerMobileNo }, state: { mobileNo }}
 = context;

	return <div>
		<label> Mobile Number : </label>
		<input
			type="number"
			value={ mobileNo }
			placeholder="Enter the Mobile No"
			onChange={ (event) => setCustomerMobileNo(event.target.value) }
		/>
	</div>;
};

export default CustomerMobileNo;
