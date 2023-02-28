import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<div className='App-title'>
				<h1> Bill calculator </h1>
				<h2> Calculate yours bill!</h2>
			</div>
			<div className='App-line'></div>
			<div className='App-body'>
				<form>
					<p>Value</p>
					<input type='number'></input>
					<p>Tip</p>
					<input type='number'></input>

					<p>Tax</p>
					<input type='number'></input>
					<div className='App-submit'>
						<button>Submit</button>
					</div>
				</form>
					<img src={logo} className='App-logo' alt='logo' />
			</div>
		</div>
	);
}

export default App;
