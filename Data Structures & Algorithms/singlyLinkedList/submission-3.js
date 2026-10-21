// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     /**
//      * @param {number} index
//      * @return {number}
//      */
//     get(index) {
//         if (index < 0 || index >= this.size) return -1;
//         let curr = this.head;
//         for (let j = 0; j < index; j++) {
//             curr = curr.next;
//         }
//         return curr.val;
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     insertHead(val) {
        
//         let temp = new Node(val);
//         temp.next = this.head;
//         this.head = temp;
//         this.size++;
        
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     insertTail(val) {
//         let temp = new Node(val);
//         if(this.head === null ) {
//             this.head = temp
//         } else {
//             let curr = this.head;
//             while( curr.next != null) {
//                 curr = curr.next;
//             }
//             curr.next = temp;
//         }
//         this.size++;
//     }

//     /**
//      * @param {number} index
//      * @return {boolean}
//      */
//     remove(index) {
//         if (index < 0 || index >= this.size) return false;
//         if (index === 0) {
//             this.head = this.next.next;
//         } else {
//             // let curr = this.head;
//             // let i = 0;
//             // while(curr.next != null && i < index - 1) {
//             //      curr = curr.next;
//             // } 
//             // curr.next = curr.next.next;
//             let curr = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 curr = curr.next;
//             }
//             curr.next = curr.next.next;
//         }

//         this.size--;
//         return true;
//     }

//     /**
//      * @return {number[]}
//      */
//     getValues() {
//         const values = [];
//         let curr = this.head;
//         while(curr.next !== null) {
//             values.push(curr.val);
//             curr = curr.next;
//         }
//         values.push(curr.val)
//         return values;
//     }
// }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index) {
        if (index < 0 || index >= this.size) return -1;

        let curr = this.head;

        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr.val;
    }

    insertHead(val) {
        const temp = new Node(val);

        temp.next = this.head;
        this.head = temp;
        this.size++;
    }

    insertTail(val) {
        const temp = new Node(val);

        if (this.head === null) {
            this.head = temp;
        } else {
            let curr = this.head;

            while (curr.next !== null) {
                curr = curr.next;
            }

            curr.next = temp;
        }

        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) return false;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }

            curr.next = curr.next.next;
        }

        this.size--;
        return true;
    }

    getValues() {
        const values = [];
        let curr = this.head;

        while (curr !== null) {
            values.push(curr.val);
            curr = curr.next;
        }

        return values;
    }
}
