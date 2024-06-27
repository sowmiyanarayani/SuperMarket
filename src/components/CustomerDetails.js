import { React } from 'react';
import CustomerName from './CustomerName';
import CustomerMobileNo from './CustomerMobileNo';
import CustomerGender from './CustomerGender';
import Button from './Button';
import CustomerList from './CustomerList';
const CustomerDetails = (context) => <div className="box">
	<h1>Super Market</h1>
	<CustomerName { ...context }/>
	<CustomerMobileNo { ...context }/>
	<CustomerGender { ...context }/>
	<Button { ...context }/>
	<CustomerList { ...context }/>
</div>;

export default CustomerDetails;
