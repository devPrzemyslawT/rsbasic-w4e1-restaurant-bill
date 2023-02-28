import logo from "./logo.svg";
import "./App.css";
import CostForm from "./BillCalculator/Form/CostForm";

function App() {
	return (
		<div className='App'>
			<div className='App-title'>
				<h1> Bill calculator </h1>
				<h2> Calculate yours bill!</h2>
			</div>
			<div className='App-line'></div>
			<div className='App-body'>
				<CostForm></CostForm>
				<img src={logo} className='App-logo' alt='logo' />
			</div>
		</div>
	);
}

export default App;
