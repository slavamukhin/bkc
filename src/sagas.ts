import { all } from 'redux-saga/effects';
import { watchStocks } from "./modules/stocks/stocks.sagas";

export default function* rootSaga() {
    yield all([
        watchStocks()
    ])
}