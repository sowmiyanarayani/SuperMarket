const PriceManager = {
	itemPrices: (context) => {
		const { config: { product }} = context;
		const getPrice = (itemName) =>
			product.find((item) => item.name === itemName).price || 0;

		return { price: getPrice };
	},
};

export default PriceManager;
