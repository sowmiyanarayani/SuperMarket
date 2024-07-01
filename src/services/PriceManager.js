const PriceManager = {
	itemPrices: (context) => {
		const { state: { price }} = context;

		return [
			...price,
			{
				milk: 10,
				biscuit: 15,
				chocolate: 20,
				butter: 150,
			},
		];
	},
};

export default PriceManager;
