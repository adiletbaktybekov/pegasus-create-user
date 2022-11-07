import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {setUpStore} from "./store";
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={setUpStore()}>
            <App/>
        </Provider>
    </React.StrictMode>
);