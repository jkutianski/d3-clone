import changeID from "../helpers/changeID";

export default function(selection) {
	var n = selection.node();
    var c = changeID(n.cloneNode(true));
    return this.ownerDocument.importNode(c, true);
}