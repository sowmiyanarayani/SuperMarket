/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import Customer from './Customer';
const AddCustomer = (context) => {
	const { state: { customerDetails }} = context;

	return (
		<table className="gird">
			<thead>
				<tr>
					<th>Customer Name</th>
					<th>Mobile No</th>
					<th>item</th>
					<th>price</th>
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
						price={ customer.price }
					/>) }
			</tbody>
		</table>
	);
};

export default AddCustomer;
