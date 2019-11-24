import React from 'react';
import './App.css';
import { FavoriteStocks } from "./components/FavoriteStocks/FavoriteStocks";
import { Search } from "./components/Search/Search";

const App: React.FC = () => {
    return (
        <div className="App">
            <Search />
            <FavoriteStocks />
        </div>
    );
};

export default App;
