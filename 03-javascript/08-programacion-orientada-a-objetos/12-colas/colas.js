class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
       }
};



class MyQueue {
    constructor(){
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }

    //Obtener primera canción
    front() {
        return this.first;
    };

    //Obtener última canción
    back(){
        return this.last;
        }

    //Agregar una canción al final
    enqueue(value){
       const newNode = new Node(value);
        if (this.lenght === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.lenght++;
        return this; 
    }


     //Remover la primera canción de la cola
    dequeue(){
        if(this.lenght !== 0){
            this.first = this.first.next;
            this.lenght--;
        }
    } 
}

const cola = new MyQueue();
cola.enqueue('Luis');
cola.enqueue('Enrique');
cola.enqueue('José');
cola.enqueue('Ana')
console.log(cola);
/* console.log(`Reproduciendo "${cola.front().songName}" La útlima canción de la cola es "${cola.back().songName}"`);
cola.dequeue();
console.log(cola); */

/* const myQueue = {
    first: {
      value: 'Luis',
      next: {
        value: 'Enrique',
        next: {
          value: 'José',
          next: {
            value: 'Ana',
            next: null // Ana es el último, así que su next es null
          }
        }
      }
    },
    last: { value: 'Ana', next: null }, // Ana ahora es el último nodo
    length: 4 // Hay cuatro elementos en la cola
  };
  
  

  console.log(myQueue)
   */