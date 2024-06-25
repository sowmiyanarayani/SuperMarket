import { React } from 'react';
const Button = (context) => {
	const { actions: { addCustomers }} = context;

	return <div>
		<button onClick={ () => addCustomers() }>save</button>
	</div>;
};

export default Button;
