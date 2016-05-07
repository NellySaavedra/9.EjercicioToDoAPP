(function(){
    // Variables
    var lista = document.getElementById("lista"), //ul que encierra el listado
        tareaInput = document.getElementById("tareaInput"), // Id de textarea
        btnNuevaTarea = document.getElementById("btn-agregar"); // Variable ligada al Id del boton input
 
    // Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea),

            //Quizá se deba añadir aquí checkbox e Ico................................................
            CB = document.createElement("Checkbox"),
            Ico = document.createElement("i");
 
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }
            //Quizá se deba añadir aquí checkbox e Ico................................................

        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);

        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");      
       
        // Agrergamos el enlace (a) a la nueva tarea (li)        
        nuevaTarea.appendChild(enlace);

        //()

        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
 
        tareaInput.value = "";
 
        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
 
    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };
 
    var eleminarTarea = function(){
        this.parentNode.removeChild(this);
    };
 
    // Eventos
 
    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);
 
    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);
 
    // Borrando Elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
}());

























