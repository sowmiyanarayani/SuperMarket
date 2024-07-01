import { React } from 'react';
import CustomerName from './CustomerName';
import CustomerMobileNo from './CustomerMobileNo';
import CustomerGender from './CustomerGender';
import Button from './Button';
import AddCustomer from './AddCustomer';
import AddItem from './AddItem';
import AddPrice from './AddPrice';
const CustomerDetails = (context) => <div className="box">
	<h1>Super Market</h1>
	<CustomerName { ...context }/>
	<CustomerMobileNo { ...context }/>
	<CustomerGender { ...context }/>
	<AddItem { ...context }/>
	<AddPrice { ...context }/>
	<Button { ...context }/>
	<AddCustomer { ...context }/>
</div>;

export default CustomerDetails;
