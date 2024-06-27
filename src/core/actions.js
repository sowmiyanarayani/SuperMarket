import CustomerManager from '../services/CustomerManager';
const setCustomerName = ({ data }) => ({ name: data });
const setCustomerMobileNo = ({ data }) => ({ mobileNo: data });
const setCustomerGender = ({ data }) => ({ gender: data });
const addCustomer = (context) =>
	({ customerDetails: CustomerManager.addCustomer(context) });
const actions = {
	setCustomerName,
	setCustomerMobileNo,
	setCustomerGender,
	addCustomer,
};

export default actions;
