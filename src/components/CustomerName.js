import { React } from 'react';
const CustomerName = (context) => {
	const { actions: { setCustomerName }, state: { name }}
 = context;

	return <div>
		<label> CustomerName : </label>
		<input
			type="text"
			value={ name }
			placeholder="Enter the Customer Name"
			onChange={ (event) => setCustomerName(event.target.value) }
		/>
	</div>;
};

export default CustomerName;
