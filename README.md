# d3-clone
D3js plugin for clone nodes from selections.

The d3-clone add methods to append and insert a duplicate of the selection on which this method was called.
This methods copy all of its attributes and their values, including intrinsic (in–line) listeners. It does not copy the data of the original selection.


Install
-------
To install via NPM use `npm install d3-clone`. You can also load directly from [unpkg.com](https://unpkg.com/d3-clone/build/d3-clone.min.js).

```html
<script src="https://unpkg.com/d3-clone/build/d3-clone.min.js"></script>
```

How to use it
-------------

```selection.appendClone(source)```

This example append the node selected by `svg.select('#source')` to each node selected from `svg.selectAll('.node')`.

```javascript
var nodes = svg.selectAll('.node')
    .exit().remove()
    .data(data).enter()
    .appendClone(svg.select('#source'));
```
if you've start with this HTML structure
```html
<div id="source"></div>
<div class="node">
  <div id="existing_node"></div>
</div>
<div class="node">
  <div id="existing_node"></div>
</div>
<div class="node">
  <div id="existing_node"></div>
</div>
```
after run the code you'll have
```html
<div id="source"></div>
<div class="node">
  <div id="existing_node"></div>
  <div id="source1"></div>
</div>
<div class="node">
  <div id="existing_node"></div>
  <div id="source2"></div>
</div>
<div class="node">
  <div id="existing_node"></div>
  <div id="source3"></div>
</div>
```

```selection.insertClone(source, before)```

This example insert the node selected by `svg.select('#source')` to each node selected from `svg.selectAll('.node')` before the `svg.select('#existing_node')`.

```javascript
var nodes = svg.selectAll('.node')
    .exit().remove()
    .data(data).enter()
    .insertClone(svg.select('#source'), svg.select('#existing_node'));
```
if you've start with this HTML structure
```html
<div id="source"></div>
<div class="node">
  <div id="existing_node"></div>
</div>
<div class="node">
  <div id="existing_node"></div>
</div>
<div class="node">
  <div id="existing_node"></div>
</div>
```
after run the code you'll have
```html
<div id="source"></div>
<div class="node">
  <div id="source1"></div>
  <div id="existing_node"></div>
</div>
<div class="node">
  <div id="source2"></div>
  <div id="existing_node"></div>
</div>
<div class="node">
  <div id="source3"></div>
  <div id="existing_node"></div>
</div>
```
