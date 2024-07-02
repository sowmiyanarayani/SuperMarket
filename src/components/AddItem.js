/* eslint-disable max-lines-per-function */
import React from 'react';

const AddItem = (context) => {
	const {
		actions: { setSelectItems },
		config: { products },
	} = context;

	return (
		<div>
			<label>Items:</label>
			{ products.map((product, index) =>
				<div key={ index }>
					<input
						type="checkbox"
						id={ `checkbox-${ index }` }
						value={ product.name }
						onChange={ (e) => setSelectItems(e.target.value) }
					/>
					<label htmlFor={ `checkbox-${ index }` }>{ product.name }</label>
				</div>) }
		</div>
	);
};

export default AddItem;
