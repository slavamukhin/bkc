import React, { Component } from "react";
import styled from "./Search.module.css";
import { ResultItem } from "../ResultItem/ResultItem";
import { getSearchList } from "../../modules/stocks/stocks.actions";
import { connect } from "react-redux";
import {
    SearchStateInterface,
    SearchPropsInterface,
    EInterval,
    EValueLength
} from "./Search.types";

class SearchComponent extends Component<SearchPropsInterface, SearchStateInterface> {
    private time: NodeJS.Timeout;
    constructor(props: SearchPropsInterface) {
        super(props);
        this.time = setTimeout(()=>{}, EInterval.MIN_INITIAL);
        this.state = {
            inputValue: "",
            resultList: [],
        };
    }

    private static clearTimeout(time: NodeJS.Timeout) {
        clearTimeout(time)
    }

    private onChange = (e: React.BaseSyntheticEvent): void => {
        const { getSearchList } = this.props;
        const value = e.target.value;
        this.setState({inputValue: value});
        SearchComponent.clearTimeout(this.time);

        if (value.length > EValueLength.LENGTH_SEARCH) {
            this.time = setTimeout(function () {
                getSearchList();
            }, EInterval.MIN_SEARCH);
        }
    };

    render() {
        const { inputValue, resultList: resultListState } = this.state;
        const resultList = resultListState.map(itemList => <ResultItem
            key={itemList.companyName}
            companyName={itemList.companyName}
            hint={itemList.hint}
        />
        );
        return (
            <div className={styled.wrapper}>
                <input
                    className={styled.input}
                    type="text"
                    value={inputValue}
                    onChange={(e) => this.onChange(e)}
                />
                {resultList.length !== EValueLength.LENGTH_RESULT_LIST &&
                    <div className={styled.wrapperList}>
                        {resultList}
                    </div>
                }
            </div>
        );
    }
}

export const Search = connect(null, {
    getSearchList
})(SearchComponent);