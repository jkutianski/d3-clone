(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('d3-selection')) :
    typeof define === 'function' && define.amd ? define(['d3-selection'], factory) :
    (global = global || self, factory(global.d3));
}(this, function (d3Selection) { 'use strict';

    function replace(el){
        var id = null,
            eid = el.getAttribute('id');
        if (eid) {
            var idl = Object.values(
                    el.ownerDocument.querySelectorAll('*[id]:not([id=""])')
                ).map(function(n) { return n.getAttribute('id'); });        
            var ord = parseInt(eid.replace(/.+(\d+?)$/, '$1')) || 0;
            eid = eid.replace(/\d+$/, '');
            while (id === null || idl.indexOf(id) !== -1) {
                ord++;
                id = eid + ord;
            }
            el.setAttribute('id', id);
        }
        return el;
    }

    function changeID(el) {
        el.querySelectorAll('*[id]:not([id=""])').forEach(replace);
        return replace(el);
    }

    function importNode(selection) {
    	var n = selection.node();
        var c = changeID(n.cloneNode(true));
        return this.ownerDocument.importNode(c, true);
    }

    function selection_appendClone(selection) {
        return this.select(function() {
        	selection = (typeof selection === 'function') ? selection.apply(this, arguments) : selection;
            return this.appendChild(importNode.call(this, selection));
        });
    }

    function constantNull() {
      return null;
    }

    function selection_insertClone(selection, before) {
      return this.select(function() {
      	selection = (typeof selection === 'function') ? selection.apply(this, arguments) : selection;
      	before = (before == null) ? constantNull : (typeof before === "function") ? before : d3Selection.selector(before);
        return this.insertBefore(importNode.call(this, selection), before.apply(this, arguments) || null);
      });
    }

    d3Selection.selection.prototype.appendClone = selection_appendClone;
    d3Selection.selection.prototype.insertClone = selection_insertClone;

}));
