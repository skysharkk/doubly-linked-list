const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if (!this.length) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (!this.length) {
            return this._head;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (!this.length) {
            return this._tail;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        let choosedNode = this._head;
        for (let i = 0; i < index; i++) {
            choosedNode = choosedNode.next;
        }
        return choosedNode.data;
    }

    insertAt(index, data) {
        let node = new Node(data);
        let choosedNode = this._head;

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            for (let i = 0; i < index; i++) {
                choosedNode = choosedNode.next;
            }
            node.prev = choosedNode.prev;
            node.next = choosedNode;
            choosedNode.prev.next = node
            choosedNode.prev = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (!this.length) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let choosedNode = this._head;
        for (let i = 0; i < index; i++) {
            choosedNode = choosedNode.next;
        }
        if (this.length === 1) {
            this._tail = null;
            this._head = null;
        } else {
            let prevNode = choosedNode.prev;
            let nextNode = choosedNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length--;
        return this;
    }

    reverse() {
        let head = this._head;
        this._head = this._tail;
        this._tail = head;
        let tempNode;
        for (let i = 0; i < this.length; i++) {
            tempNode = head.next;
            head.next = head.prev;
            head.prev = tempNode;
            head = head.prev;
        }
        return this;
    }

    indexOf(data) {
        let head = this._head;
        let index = 0;
        for (let i = 0; i < this.length; i++) {
            if (head.data === data) {
                return index;
            }
            index++;
            head = head.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
