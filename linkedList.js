/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;
    
    getHead = function() {
        return head;
    }

    getTail = function() {
        return tail;
    }

    add = function(element) {
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
        return head;
    }

    get = function(index) {
        console.log("index:", index);
        console.log("head:", head);
        if (head && index===0) {
            return head;
        } else {
            let targetNode = head;
            for (let i=0; i<index; i++) {
                if (targetNode.next === null) {
                    return false;
                } else {
                    targetNode = targetNode.next;
                }
            }
            return targetNode;
        }
    }

    remove = function(element) {

    }

    insert = function(element, index) {

    }

    return {
        getHead,
        getTail,
        add,
        get,
        remove,
        insert
    }

}