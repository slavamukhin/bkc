import { EStocksAction } from "./stocks.consts";
import { Action } from "redux";

export interface SymbolsInterface {
    "symbol": string,
    "date": string,
    "isEnabled": boolean,
}

export interface GetSearchList extends Action<EStocksAction.GET_STOCK_LIST> {}
export type getSearchListType = () => GetSearchList;
export const getSearchList: getSearchListType = () => ({type: EStocksAction.GET_STOCK_LIST});

export interface GetSearchListSuccess extends Action<EStocksAction.GET_STOCK_LIST_SUCCESS> {
    payload: SymbolsInterface;
}
export type  getSearchListSuccessType = (payload: SymbolsInterface) => GetSearchListSuccess;
export const getSearchListSuccess: getSearchListSuccessType = (payload: SymbolsInterface) =>({
    type: EStocksAction.GET_STOCK_LIST_SUCCESS, payload
});


export interface GetSearchListError extends Action<EStocksAction.GET_STOCK_LIST_ERROR> {
    payload: Error
}
export type  getSearchListErrorType = (payload: Error) => GetSearchListError;
export const getSearchListError: getSearchListErrorType = (payload: Error) =>({
    type: EStocksAction.GET_STOCK_LIST_ERROR, payload
});

