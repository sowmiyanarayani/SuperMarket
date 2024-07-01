/* eslint-disable max-lines-per-function */
import React from 'react';

const AddItem = (context) => {
	const {
		state: { item },
		actions: { setSelectItems },
		config: { items },
	} = context;

	return (
		<div>
			<label>Items :</label>
			<select
				type="radio"
				value={ item }
				onChange={ (event) => setSelectItems(event.target.value) }
			>
				<option value="">Select Items</option>
				{ items.map((product, index) =>
					<option key={ index }>{ product.name }</option>) }
			</select>
		</div>
	);
};

export default AddItem;
