import { combineReducers } from "redux";
import characters from "./characters/index.js";
import character from './character';


export default combineReducers({
    characters,
    character
});