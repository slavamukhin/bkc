import { takeEvery, call, put } from "redux-saga/effects";
import { EStocksAction } from "./stocks.consts";
import {
    GetSearchList,
    getSearchListError,
    getSearchListSuccess
} from "./stocks.actions";
import { getList } from "./stocks.services";


export function* watchStocks() {
    yield takeEvery(EStocksAction.GET_STOCK_LIST, stockSaga);
}

export function* stockSaga(action: GetSearchList) {
    try {
        const response = yield call(getList, EStocksAction.URL_GET_LIST);

        if (response.data && response.data.length) {
            put(getSearchListSuccess(response.data));
        } else {
            put(getSearchListError(response.error))
        }
    } catch (e) {

    }
}