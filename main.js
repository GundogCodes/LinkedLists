// Linked lists and their nodes are just classes with specific properties that we use in a specific way
// They're like arrays but the elements are called nodes and they can occupy different places in memory
// A node class must contain 2 properties data and next (3 including prev for doubly linked lists), data
// contains the data of that node and next references the next node in the linked list
// The linked list class contains the this.head property which specifies the first node in the list and 
// methods that allow you to traverse (called walkers w a while loop) or manipulate the list 
// The last node of a list has a next of null

//Node Class

class Node {
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

// Linked List Class

class LinkedList {
    constructor(){
        this.head = null
    }

    //insertFirst
    insertFirst(data){
        const newHead = new Node(data,this.head)
        this.head = newHead
    }

    //size
    size(){
        let counter = 0
        let currentNode = this.head
        while(currentNode){

            counter=counter+1
            currentNode = currentNode.next
      
        }
        return counter
    }

    //getFirst
    getFirst(){
      
        return this.head
    }

    //getLast
    getLast(){
        let lastNode;
        let currentNode = this.head
        while(currentNode){
            if(currentNode.next === null){
                lastNode = currentNode
            }
            currentNode = currentNode.next
        }
        return lastNode
    }

    //clear
    clear(){
        this.head = null
    }

    //removeFirst
    removeFirst(){
        const secondNode = this.head.next
        this.head = secondNode
    }

    getAt(position){
    }

    //removeLast
    removeLast(){

    }
    //insertLast
    //getAtPosition
    //removeAtPosition
    //insertAt

}

const list = new LinkedList()

list.insertFirst('nodeOne')
list.insertFirst('nodeTwo')
list.insertFirst('nodeThree')
console.log('LIST: ',list)
console.log('list size Before removeLast',list.size()) //WORKS
list.getFirst() // WORKS
list.getLast() //WORKS
list.removeLast()
console.log('LIST after removeLast: ',list)
console.log('list size should be 2: ',list.size()) //WORKS