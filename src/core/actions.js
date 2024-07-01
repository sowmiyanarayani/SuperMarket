import CustomerManager from '../services/CustomerManager';
import PriceManager from '../services/PriceManager';
const setCustomerName = ({ data }) => ({ name: data });
const setCustomerMobileNo = ({ data }) => ({ mobileNo: data });
const setCustomerGender = ({ data }) => ({ gender: data });
const setSelectItems = ({ data }) => ({ items: data });
const itemPrices = (context) =>
	({ price: PriceManager.itemPrices(context) });
const addCustomer = (context) =>
	({ customerDetails: CustomerManager.addCustomer(context) });
const actions = {
	setCustomerName,
	setCustomerMobileNo,
	setCustomerGender,
	setSelectItems,
	itemPrices,
	addCustomer,
};

export default actions;
