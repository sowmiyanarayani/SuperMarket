import { React } from 'react';

const validate = (state) =>
	state.name !== ''
		&& state.mobileNumber !== ''
		&& state.gender !== ''
	;

const Button = (context) => {
	const { actions: { addCustomer, reset }, state } = context;

	return <div>
		<button onClick={ () => (
			validate(state)
				? (addCustomer(), reset())
				: alert('Please fill in all fields.')
		) }
		>
			Save Customer
		</button>
	</div>;
};

export default Button;
