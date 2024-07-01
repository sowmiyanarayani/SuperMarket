import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addCustomer: (context) => {
		const {
			state: { name, mobileNo, gender, items, customerDetails },
			config: { idLength },
		} = context;

		return [
			...customerDetails,
			{
				id: rndString(idLength),
				name: name,
				mobileNo: mobileNo,
				gender: gender,
				items: items,
			},
		];
	},
};

export default CustomerManager;
