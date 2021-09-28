import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import cardsReducer from './reducers/cards.reducer';
import benevitsReducer from './reducers/benevit.reducer'; 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        
    }
}

const persistedState = loadFromLocalStorage();

const reducers = combineReducers({
    auth:authReducer,
    cards:cardsReducer,
    benevits:benevitsReducer,
})

export const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

