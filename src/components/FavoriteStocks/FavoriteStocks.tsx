import React, { Component } from "react";
import styled from "./FavoriteStocks.module.css";
import { Stock } from "../Stock/Stock";

export interface FavoriteStocksPropsInterface {
}

export interface FavoriteStockInterface {
    "companyName": string;
    "iexRealtimePrice": number;
    "symbol": string;
}

export interface FavoriteStocksStateInterface {
    "FavoriteStocks": FavoriteStockInterface[]
}

export class FavoriteStocks extends Component<FavoriteStocksPropsInterface, FavoriteStocksStateInterface> {
    state: FavoriteStocksStateInterface = {
        "FavoriteStocks": [
            {
                "symbol": "AAPL",
                "companyName": "Apple Inc.",
                "iexRealtimePrice": 158.71,
            },
            {
                "symbol": "AAPL2",
                "companyName": "Apple2 Inc.",
                "iexRealtimePrice": 1580.20,
            },
            {
                "symbol": "AAPL3",
                "companyName": "Apple3 Inc.",
                "iexRealtimePrice": 15.01,
            }
        ],
    };

    render() {
        const { FavoriteStocks } = this.state;
        const FavoriteStocksList = FavoriteStocks.map(stock => <Stock
            key={stock.symbol}
            companyName={stock.companyName}
            iexRealtimePrice={stock.iexRealtimePrice}
        />);
        return (
            <div className={styled.wrapper}>
                {FavoriteStocksList}
            </div>
        );
    }
}