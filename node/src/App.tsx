import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './GlobalStyle';
import { Url } from './Env';
import { Home } from './components/pages/Home/index';

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={Url.HOME} element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
