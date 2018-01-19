import {selection} from "d3-selection";
import selection_appendClone from "./src/clone/append";
import selection_insertClone from "./src/clone/insert";

selection.prototype.appendClone = selection_appendClone;
selection.prototype.insertClone = selection_insertClone;