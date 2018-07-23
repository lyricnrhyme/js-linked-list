/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;
    var length = 0;

getHead = function() {
    return head;
}

getTail = function() {
    return tail;
}

add = function(element) {
    // console.log("element:", element);
    let node = {
        value: element,
        next: null
    };
    if (head === null) {
        head = node;
        tail = node;
    } else {
        tail.next = node;
        tail = tail.next;
    }
    length++;
    // count = length;
    // console.log("head:", head);
    // console.log("node:", node)
    // console.log("tail", tail);
    // console.log("length", length);
    // console.log("count", count);
    // console.log("*****************");
    return node;
}

remove = function(element) {
    var searching = head;
    var count = 0;
    while(searching) {
        if (count === 0 && element === 0 && searching.next !== null) {
            head = searching.next
            return head;
        } else if (count === element-1 && searching.next !== null) {
            // console.log("searching:", searching);
            // console.log("***************");
            // console.log("tail before:", tail);
            searching.next = searching.next.next;
            if (searching.next === null) {
                tail = searching;
            }
            return searching;
        } else if (count !== element-1 && searching.next !== null) {
            count++;
            searching = searching.next;
        } else {
            return false;
        }
    }
}

get = function(val) {
    // console.log("head:", head);
    // console.log("length:", length);
    // console.log("count:", count);
    // console.log("val:", val);
    var searching = head;
    var count = 0;
    while(searching) {
        if (count === val) {
            // console.log("last searching", searching);
            // console.log("last count", count);
            // console.log("****************");
            return searching;
        } else if (count !== val && searching.next !== null) {
            // console.log("not equal val:", val, "count:", count)
            // console.log("*********")
            count++;
            searching = searching.next;
        } else {
            return false;
        }
    }
}

insert = function(element, index) {
    var searching = head;
    var count = 0;
    while(searching) {
        var node = {
            value: element,
            next: null
        }
        if (count === 0 && index === 0 && searching.next !== null) {
            head = node;
            head.next = searching;
            return head;
        } else if (count === index-1 && searching.next !== null) {
            var saveIt = searching.next;
            searching.next = node;
            node.next = saveIt;
            if (searching.next.next === null) {
                tail = searching.next;
            }
            return head;
        } else if (count !== index-1 && searching.next !== null) {
            count++;
            searching = searching.next;
        } else {
            return false;
        }
    }
}

    return {
        linkedListGenerator: linkedListGenerator,
        getHead: getHead,
        getTail: getTail,
        add: add,
        remove: remove,
        get: get,
        insert: insert
    }
}

