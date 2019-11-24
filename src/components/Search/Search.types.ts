import { getSearchListType } from "../../modules/stocks/stocks.actions";

export interface SearchPropsInterface {
    getSearchList: getSearchListType
}

interface ResultSearch {
    companyName: string;
    hint: string;
}

export interface SearchStateInterface {
    inputValue: string;
    resultList: ResultSearch[];
}

export enum EInterval {
    MIN_INITIAL = 0,
    MIN_SEARCH = 1000,
}

export enum EValueLength {
    LENGTH_SEARCH = 3,
    LENGTH_RESULT_LIST = 0,
}