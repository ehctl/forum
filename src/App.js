import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { reducer } from "./redux/reduxSetting";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import HomePage from "./component/HomePage";

function App() {
    const store = createStore(reducer, applyMiddleware(thunk))
    return (
        <Provider store={store}>
            <HomePage/>
        </Provider>
    );
}

export default App;
