import CustomerManager from '../services/CustomerManager';
const setCustomerName = ({ data }) => ({ name: data });
const setCustomerMobileNo = ({ data }) => ({ mobileNo: data });
const setCustomerGender = ({ data }) => ({ gender: data });
const setSelectItems = ({ data }) => ({ items: data });
const addCustomer = (context) =>
	({ customerDetails: CustomerManager.addCustomer(context) });
const actions = {
	setCustomerName,
	setCustomerMobileNo,
	setCustomerGender,
	setSelectItems,
	addCustomer,
};

export default actions;
