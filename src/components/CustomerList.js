/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import Customer from './Customer';
const CustomerList = (context) => {
	const { state: { customerDetails }} = context;

	return (
		<table className="gird">
			<tbody>
				{ customerDetails.map((customer) =>
					<Customer
						key={ customer.id }
						name={ customer.name }
						mobileNo={ customer.mobileNo }
						gender={ customer.gender }
					/>) }
			</tbody>
		</table>
	);
};

export default CustomerList;
