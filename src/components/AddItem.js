/* eslint-disable max-lines-per-function */
import React from 'react';
import { peek } from '@laufire/utils/debug';
const AddItem = (context) => {
	const {
		actions: { setSelectItems },
		config: { products },
	} = context;

	return (
		<div>
			<label>Item :</label>
			<select
				type="radio"
				onChange={ (event) => {
					peek(event.target.value);
					return setSelectItems(event.target.value);
				} }
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
