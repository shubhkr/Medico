import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const rootEl = document.getElementById('app');

function render() {
	ReactDOM.render(
		<AppContainer>
			<App />
		</AppContainer>,
		rootEl
	);
}

if (rootEl) {
	render();
}
else {
	console.log('no rootEl');
}

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		ReactDOM.render(
		<LocaleProvider locale={enUS}>
			<AppContainer>
				<NextApp />
			</AppContainer>
		</LocaleProvider>,
			rootEl
		);
	});
}
