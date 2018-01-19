import importNode from "./importNode";

export default function(selection) {
    return this.select(function() {
    	selection = (typeof selection === 'function') ? selection.apply(this, arguments) : selection;
        return this.appendChild(importNode.call(this, selection));
    });
}