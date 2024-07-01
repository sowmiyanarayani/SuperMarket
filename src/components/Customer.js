import { React } from 'react';
const Customer = ({ id, name, mobileNo, gender, items }) =>
	<tr
		key={ id }
		className={ `${ gender }` }
	>
		<td>{ name }</td>
		<td>{ mobileNo }</td>
		<td>{ items }</td>
	</tr>;

export default Customer;
