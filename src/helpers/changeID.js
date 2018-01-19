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

export default function(el) {
    el.querySelectorAll('*[id]:not([id=""])').forEach(replace);
    return replace(el);
}