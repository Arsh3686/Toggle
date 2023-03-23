import { Provider } from "react-redux";
import Lorem from "./Lorem";
import { store } from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<Lorem />
		</Provider>
	);
};

export default App;
