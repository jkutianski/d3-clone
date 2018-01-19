import importNode from "./importNode";
import {selector} from "d3-selection";

function constantNull() {
  return null;
}

export default function(selection, before) {
  return this.select(function() {
  	selection = (typeof selection === 'function') ? selection.apply(this, arguments) : selection;
  	before = (before == null) ? constantNull : (typeof before === "function") ? before : selector(before);
    return this.insertBefore(importNode.call(this, selection), before.apply(this, arguments) || null);
  });
}