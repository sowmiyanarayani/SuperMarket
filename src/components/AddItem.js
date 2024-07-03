/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
const AddItem = (context) => {
	const {
		actions: { setSelectItems },
		config: { products },
		state: { items },
	} = context;

	return (
		<div>
			<label>Item :</label>
			<select
				type="radio"
				multiple={ true }
				value={ items }
				onChange={ (e) => setSelectItems(Array.from(e.target.selectedOptions,
					(option) => option.value)) }

			>
				<option value="">Select Items</option>
				{ products.map((product, index) =>
					<option
						key={ index }
						value={ product.name }
					>{ product.name }</option>) }
			</select>
		</div>
	);
};

export default AddItem;
