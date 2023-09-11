import { combineReducers } from "redux";
import filmsSlice from "./filmsSlice";
import characterReducer from "./characterSlice";
import store from "../store";

const rootReducer = combineReducers({
  films: filmsSlice,
  characters: characterReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
