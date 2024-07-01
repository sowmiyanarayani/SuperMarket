/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import Customer from './Customer';
const CustomerList = (context) => {
	const { state: { customerDetails }} = context;

	return (
		<table className="gird">
			<thead>
				<tr>
					<th>Customer Name</th>
					<th>Mobile No</th>
					<th>item</th>
					<th>prices</th>
				</tr>
			</thead>
			<tbody>
				{ customerDetails.map((customer) =>
					<Customer
						key={ customer.id }
						name={ customer.name }
						mobileNo={ customer.mobileNo }
						gender={ customer.gender }
						items={ customer.items }
					/>) }
			</tbody>
		</table>
	);
};

export default CustomerList;
