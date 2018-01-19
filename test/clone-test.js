var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("d3-selection");

require("../");

tape("select().appendClone", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    g.appendClone(g);
    test.equal(body.innerHTML,
        '<svg>' +
            '<g id="group">' +
                '<g id="group1"></g>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("selectAll().appendClone", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.selectAll('text')
        .data([0, 1, 2])
        .enter()
        .appendClone(t)
        .text(function(d) {
            return d;
        });
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text1">0</text>' +
                '<text id="text2">1</text>' +
                '<text id="text3">2</text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("selectAll().appendClone using function", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.selectAll('text')
        .data([0, 1, 2])
        .enter()
        .appendClone(function() {
            return t;
        })
        .text(function(d) {
            return d;
        });
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text1">0</text>' +
                '<text id="text2">1</text>' +
                '<text id="text3">2</text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("select().insertClone", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.insertClone(t, 'text');
    g.insertClone(t, 'text');
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text2"></text>' +
                '<text id="text1"></text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("selectAll().insertClone", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.selectAll('text')
        .data([0, 1, 2])
        .enter()
        .insertClone(t, 'text')
        .text(function(d) {
            return d;
        });
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text3">2</text>' +
                '<text id="text2">1</text>' +
                '<text id="text1">0</text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("selectAll().insertClone w/o before seletor", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.selectAll('text')
        .data([0, 1, 2])
        .enter()
        .insertClone(t)
        .text(function(d) {
            return d;
        });
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text1">0</text>' +
                '<text id="text2">1</text>' +
                '<text id="text3">2</text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("selectAll().insertClone using function on selection", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.selectAll('text')
        .data([0, 1, 2])
        .enter()
        .insertClone(function() {
            return t;
        }, 'text')
        .text(function(d) {
            return d;
        });
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text3">2</text>' +
                '<text id="text2">1</text>' +
                '<text id="text1">0</text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});

tape("selectAll().insertClone using function on before", function(test) {
    var dom = new jsdom.JSDOM(
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group"></g>' +
        '</svg>'
    );
    var body = dom.window.document.body;
    var svg = d3.select(body);
    var g = svg.select('g');
    var t = svg.select('text');
    g.selectAll('text')
        .data([0, 1, 2])
        .enter()
        .insertClone(t, function () {
            return g.select('text').node();
        })
        .text(function(d) {
            return d;
        });
    test.equal(body.innerHTML,
        '<svg>' +
            '<text id="text"></text>' +
            '<g id="group">' +
                '<text id="text3">2</text>' +
                '<text id="text2">1</text>' +
                '<text id="text1">0</text>' +
            '</g>' +
        '</svg>'
    );
    test.end();
});