//Insertcion no ordenada
//Busqueda unica
//Eliminacion unica
var fs = require('fs')
class Nodo{ //Clase Nodo
    
    //Constructor
    constructor(dato){
        this.siguiente = null;
        this.anterior = null;
        this.dato = dato;
    }
}

class ListaCD{  //Clase Lista Circular doble

    //Constructor
    constructor(){
        this.cabeza = null;
        this.cola = null;
        this.size = 0;
    }

    //Metodo opcion de insertados
    lugarInsertar(dato){
        let opcion = ""
        if(this.cabeza == null){
            this.insertFinal(dato)
            return
        }else if(dato >= this.cabeza.dato && dato <= this.cola.dato){
            opcion = "Ordenado"
        }else if(dato > this.cola.dato){
            opcion = "Final"
        }else if(dato < this.cabeza.dato){
            opcion = "Inicio"
        }
        switch (opcion) {
            case "Inicio":
                this.insertarInicio(dato)
                return
            case "Ordenado":
                this.insertOrdenado(dato)
                return
            case "Final":
                this.insertFinal(dato)
                return      
        }
    }

    //Metodo Insertar al Inicio
    insertarInicio(dato){
        let nodo = new Nodo(dato);
        //Insertcion de primer nodo 
        if(this.cabeza == null){
            this.cabeza = nodo;
            this.cola = nodo;
            this.size++;
            return
        }else if(this.cabeza != null && this.cola != null){
            //Insercion de Nodos no primeros
            this.cabeza.anterior = nodo;
            nodo.siguiente = this.cabeza;
            nodo.anterior = this.cola;
            this.cola.siguiente = nodo
            this.cabeza = nodo;
            this.size++;
            return
        }
    }

    //Metodo Insertar en medio
    insertOrdenado(dato){
        let nodo = new Nodo(dato)
        let aux = this.cabeza
        while(aux != this.cola){
            if(dato >= aux.dato && dato <= aux.siguiente.dato){
                let tmp = aux.siguiente
                tmp.anterior = aux
                aux.siguiente = nodo
                nodo.siguiente = tmp
                nodo.anterior = aux
                this.size++;
                return
            }
            aux = aux.siguiente
        }
    }

    //Metodo Insertar al Final
    insertFinal(dato){
        let nodo = new Nodo(dato);
        //Insertcion de primer nodo 
        if(this.cabeza == null){
            this.cabeza = nodo;
            this.cola = nodo;
            this.size++;
            return
        }else if(this.cabeza != null && this.cola != null){
            //Insercion de Nodos no primeros
            let aux = this.cola;
            aux.siguiente = nodo;
            nodo.anterior = aux;
            nodo.siguiente = this.cabeza;
            this.cabeza.anterior = nodo;
            this.cola = nodo;
            this.size++;
            return
        }
    }

    //Metodo Imprimir
    print(){
        let aux = this.cabeza;
        console.log("Entro a print")
        while (aux != this.cola){
            console.log(aux.dato);
            aux = aux.siguiente
        }
        if(aux == this.cola){
            console.log(aux.dato);
        }
    }

    //Metodo Buscar
    buscar(dato){
        let aux = this.cabeza;
        let contador = 1;
        while(aux.dato != dato && contador != this.size){
            aux= aux.siguiente;
            contador++;
        }
        if(aux.dato == dato){
            //Dato encontrado
            console.log(aux.dato + " fue encontrado exitosamente");
        }
        if (contador == this.size){
            //Dato no encontrado
            console.log("No se encontro el dato buscado");
        }
    }

    //Metodo Eliminar
    eliminar(dato){
        let aux = this.cabeza;
        let contador = 1;
        while(aux.dato != dato && contador != this.size){
            aux= aux.siguiente;
            contador++;
        }
        if(aux.dato == dato && aux != this.cabeza){
            //Dato eliminado en Nodo no cabeza
            aux.anterior.siguiente = aux.siguiente;
            aux.siguiente.anterior = aux.anterior;
            aux.siguiente = null;
            aux.anterior = null;
            console.log(aux.dato + " fue eliminado con exito");
        }else if(aux.dato == dato && aux == this.cabeza){
            //Dato eliminado en Nodo Cabeza
            let tmp = aux.siguiente
            aux.anterior.siguiente = aux.siguiente;
            aux.siguiente.anterior = aux.anterior;
            aux.siguiente = null;
            aux.anterior = null;
            this.cabeza = tmp
            console.log(aux.dato + " fue eliminado con exito");
        }
        if (contador == this.size){
            //Dato no encontrado
            console.log("No se encontro el dato a eliminar");
        }
    }

    //Metodo Actualizar
    actualizar(datoelim, datoins){
        let aux = this.cabeza;
        let contador = 1;
        while(aux.dato != datoelim && contador != this.size){
            aux= aux.siguiente;
            contador++;
        }
        if(aux.dato == datoelim){
            //Dato encontrado
            console.log(aux.dato + " fue encontrado exitosamente");
            aux.dato = datoins
            console.log(datoelim + " fue cambiado exitosamente a "+aux.dato);
        }
        if (contador == this.size){
            //Dato no encontrado
            console.log("No se encontro el dato buscado");
        }
    }

    //Metodo Carga
    cargar(arreglo) {
        arreglo.map(elemento => {
            this.insert(elemento)
        })
    }

    //Metodo Guardar
    guardar() {
        let archivojs = [];
        let temporal = this.cabeza;
        archivojs.push(temporal.dato)
        temporal = temporal.siguiente
        while (temporal != this.cabeza && temporal != null){
            archivojs.push(temporal.dato)
            temporal = temporal.siguiente
        }
        return archivojs
    }


    Recorrido(datoBuscar){
        let aux = this.cabeza;
        let contador = 0;

        
        let arreglo = []
        let contadoraux = 0;
        while(contador != this.size){
            let dato = {id: contadoraux, label: aux.dato.toString(),}
            arreglo[contadoraux] = dato

            
            if(aux.dato == datoBuscar){
                let dato = {id: contadoraux, label: aux.dato.toString(),  color: "lime"}
                arreglo[contadoraux] = dato
            }
            aux= aux.siguiente;
            contador++;
            contadoraux++;
        }

        return arreglo
    }
    
}

export default ListaCD;

