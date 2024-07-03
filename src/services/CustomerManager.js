/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addCustomer: (context) => {
		const {
			state: { name, mobileNo, gender, items, customerDetails },
			config: { idLength, products },
		} = context;
		const getPrice = () => items.reduce((total, itemName) =>
			total + (products.find((product) => product.name === itemName)
				?.price || 0), 0);

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
