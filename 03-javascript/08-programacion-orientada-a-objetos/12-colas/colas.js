class Song {
    constructor(songName){
        this.songName = songName;
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
    enqueue(songName){
       const newSong = new Song(songName);
        if (this.lenght === 0){
            this.first = newSong;
            this.last = newSong;
        } else {
            this.last.next = newSong;
            this.last = newSong;
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
console.log(cola);
cola.enqueue('R U Mine');
cola.enqueue('Dream');
cola.enqueue('Snow');
console.log(cola);
console.log(`Reproduciendo "${cola.front().songName}" La útlima canción de la cola es "${cola.back().songName}"`);
cola.dequeue();
console.log(cola);

