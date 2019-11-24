import React, { Component } from "react";
import styled from "./Stock.module.css";

interface StockPropsInterface {
    "companyName": string;
    "iexRealtimePrice": number;
}

interface StockStateInterface {
}

export class Stock extends Component<StockPropsInterface, StockStateInterface> {
    shouldComponentUpdate(
        nextProps: Readonly<StockPropsInterface>,
        nextState: Readonly<StockStateInterface>,
    ): boolean {
        const { companyName, iexRealtimePrice } = this.props;
        return !!(nextProps.companyName === companyName &&
            nextProps.iexRealtimePrice !== iexRealtimePrice);
    }

    deleteStock = () => {
        console.log("deleteStock")
    };

    render() {
        console.log("render");
        const { companyName, iexRealtimePrice } = this.props;
        return (
            <div className={styled.wrapper}>
                <div
                    className={styled.delete}
                    onClick={this.deleteStock}
                >&#10008;</div>
                <h2 className={styled.title}>{companyName}</h2>
                цена: {iexRealtimePrice}
            </div>
        );
    }
}