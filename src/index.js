import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layouts/Layout';
import './styles/index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Layout>
			<App />
		</Layout>
	</React.StrictMode>,
	document.getElementById('root')
);
