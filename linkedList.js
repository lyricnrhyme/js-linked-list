/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;

    function getHead() {
        return head;
    }

    function getTail() {
        return tail;
    }

    function add(data) {
        let node = {
            value: data,
            next: null
        }

        if (head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = tail.next;
        }

        return head;
    }

    function get(data) {
        console.log(data, 'data');
        console.log(head, 'head');
        return head;
    }

    function remove() {
    }


    function insert() {
    }

    return {
        getHead: getHead,
        getTail: getTail,
        add: add,
        remove: remove,
        get: get,
        insert: insert
    }
}