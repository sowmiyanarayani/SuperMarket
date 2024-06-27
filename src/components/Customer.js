import { React } from 'react';
const Customer = ({ id, name, mobileNo, gender }) =>
	<tr
		key={ id }
		className={ `${ gender }` }
	>
		<td>{ name }</td>
		<td>{ mobileNo }</td>
	</tr>;

export default Customer;
