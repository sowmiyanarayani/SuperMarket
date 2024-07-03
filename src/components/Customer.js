import { React } from 'react';
const Customer = ({ id, name, mobileNo, gender, items, price }) =>
	<tr
		key={ id }
		className={ `customer ${ gender }` }
	>
		<td>{ name }</td>
		<td>{ mobileNo }</td>
		<td>{ items }</td>
		<td>{ price }</td>
	</tr>;

export default Customer;
