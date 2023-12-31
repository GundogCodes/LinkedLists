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

    //getAtPosition
    getAt(position){
        let foundNode;
        let counter = 1
        let currentNode = this.head
        while(currentNode){
            if(counter === position){
                foundNode = currentNode
                return foundNode
            }
            counter++
            currentNode = currentNode.next
            
        }
    }

    //removeLast
    removeLast(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head = null
        }
        let previous = this.head
        let node = this.head.next
        while(node.next){
            previous = node
            node = node.next
        }
        previous.next = null
    }
    //insertLast
    insertLast(data){
        let newLastNode = new Node(data)

        let currentNode = this.head
        while(currentNode){
            if(currentNode.next === null){
                currentNode.next = newLastNode
            }
            currentNode = currentNode.next
        }

    }
    //removeAtPosition
    removeAt(position){
        if (!this.head) {
            return;
          }
      
          if (position === 0) {
            this.head = this.head.next;
            return;
          }
          const previous = this.getAt(position-1) //this keyword to use class methods on itself!
          if(!previous || !previous.next){
            return
          }
          previous.next = previous.next.next
    }
    //insertAtPosition
    insertAt(data,position){
        if (!this.head) {
            this.head = new Node(data);
            return;
          }
      
          if (position === 0) {
            this.head = new Node(data, this.head);
            return;
          }
      
          const previous = this.getAt(position - 1) || this.getLast();
          const node = new Node(data, previous.next);
          previous.next = node;
    }
}

const list = new LinkedList()

list.insertFirst('nodeOne')
list.insertFirst('nodeTwo')
list.insertFirst('nodeThree')

list.size() //WORKS
list.getFirst() // WORKS
list.getLast() //WORKS
list.removeFirst() // WORKS
list.removeLast() // WORKS
list.getAt(1) // WORKS
list.size()//WORKS
list.insertLast('gaga') //WORKS
list.removeAt(2) //WORKS
list.insertAt('lady',2) //WORKS
