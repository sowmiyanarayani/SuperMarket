import { React } from 'react';
import './App.scss';
import CustomerDetails from './components/CustomerDetails';

const App = (context) =>
	<div className="App">
		<CustomerDetails { ...context }/>
	</div>;

export default App;
