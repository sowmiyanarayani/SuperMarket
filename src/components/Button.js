import { React } from 'react';
const Button = (context) => {
	const { actions: { addCustomer }} = context;

	return <div>
		<button onClick={ () => addCustomer() }>
			Save Customer
		</button>
	</div>;
};

export default Button;
