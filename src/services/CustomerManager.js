/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addCustomer: (context) => {
		const {
			state: { name, mobileNo, gender, items, customerDetails },
			config: { idLength, products },
		} = context;
		const getPrice = (itemName) =>
			products.find((item) => item.name === itemName)?.price || null;

		return [
			...customerDetails,
			{
				id: rndString(idLength),
				name: name,
				mobileNo: mobileNo,
				gender: gender,
				items: items,
				price: getPrice(items),
			},
		];
	},
};

export default CustomerManager;
