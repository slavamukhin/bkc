import React, { Component } from "react";
import styled from "./ResultItem.module.css"

interface ResultItemPropsInterface {
    companyName: string;
    hint: string;
}

interface ResultItemStateInterface {

}

export class ResultItem extends Component<ResultItemPropsInterface, ResultItemStateInterface> {

    shouldComponentUpdate(
        nextProps: Readonly<ResultItemPropsInterface>,
        nextState: Readonly<ResultItemStateInterface>
    ): boolean {
        const { companyName } = this.props;
        return nextProps.companyName !== companyName;
    }

    chooseStock = (e: React.MouseEvent, val: string): void => {
        console.log("Choose", val)
    };

    render() {
        const { companyName, hint} = this.props;
        return (
            <div
                className={styled.wrapper}
                onClick={(e) => this.chooseStock(e, companyName)}
            >
                {companyName}
                <span className={styled.hint}> - {hint}</span>
            </div>
        );
    }

}