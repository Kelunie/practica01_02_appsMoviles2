import { createStore, combineReducers } from "redux";
import TaskReducer from "./components/reducers/TaskReducer";

const rootReducer = combineReducers({
  task: TaskReducer,
});

const store = createStore(rootReducer);

export default store;
