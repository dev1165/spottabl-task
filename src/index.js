import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers";

// import MyComponent from "./components/myComponent";
// import Updater from "./components/Updater";

import TabsComponent from './components/Tabs/TabsComponent'
import AcessComponent from "./components/AccessComponent/AccessComponent";
import SearchAndSelect from './components/SearchAndSelect/SearchAndSelect'

import 'antd/dist/antd.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appMiddleware = applyMiddleware();
const appStore = createStore(appReducer, composeEnhancers(appMiddleware));

const App = () => {
	const getTab = (res) => {
		console.log(`Tab Name: ${res}`)
	}
	return <Provider store={appStore}>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<br />
					<TabsComponent
						tabTwoOption={[
							{
								name: '0-10',
								value: '10'
							},
							{
								name: '10-20',
								value: '20'
							},
							{
								name: '20-30',
								value: '30'
							},
							{
								name: '30-40',
								value: '40'
							}
						]}
						tabOneOption={[
							{
								name: 'Analyst',
								value: 'analyst'
							},
							{
								name: 'Senior Analyst',
								value: 'senior_analyst'
							},
							{
								name: 'Principal',
								value: 'principal'
							},
							{
								name: 'CXO/Founder Level',
								value: 'cxo_founder_level'
							}
						]}
						getTab={getTab}

					/>
					<br />
					<SearchAndSelect
						data={['IIM', 'IIT', 'BITS', 'NIT', 'IIIT', 'NIFT', 'IIHM', 'Others']}
						suggestion={['IIM', 'IIT', 'BITS', 'NIT', 'IIIT']}
					/>
					<br />
					<AcessComponent
						names={[
							{
								name: 'Chilman Mehrotra',
								designation: 'Recruiter',
								email: 'chilman@spottabl.com',
								role: 'edit_role'
							},
							{
								name: 'Anupam Chaudhary',
								designation: 'Recruiter',
								email: 'anupam@spottabl.com',
								role: 'view_role'
							}
						]}
					/>

				</div>
			</div>
		</div>
	</Provider>
};

render(
	<App />, document.getElementById("root")
);
