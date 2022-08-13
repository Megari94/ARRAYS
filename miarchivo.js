class Paciente{
    constructor(nombre, orden, doctor) {        
        this.nombre = nombre;        
        this.orden = orden; 
        this.doctor = doctor;   //AGREGO AL DOCTOR POR EL MOMENTO    
    }

    datos(){ //SE EJECUTARA EN EL CASO DE QUE SE INGRESE UN NUMERO MENOR O IGUAL A 10
        if (this.orden <= 10 ){
            alert(`Bienvenid@ ${this.nombre}. Tu número de orden es: ${this.orden}. Será atendid@ por: ${this.doctor}`);            
        } 
        
    }
    disponible(){
        switch(this.orden){ //DESPLEGARA UN MENSAJE CON EL HORARIO DE CADA TURNO SEGUN ELIJA EL USUARIO
            case '1':
                alert("Primer turno, 8hs");
                break;
            case '2':
                alert("Segundo turno, 9hs");
                break;
            case '3':
                alert("Tercer turno, 10hs");
                break;
            case '4':
                alert("Cuarto turno, 11hs");
                break;
            case '5':
                alert("Quinto turno, 12hs");
                break;
            case '6':
                alert("Sexto turno, 16hs");
                break;
            case '7':
                alert("Septimo turno, 17hs");
                break;
            case '8':
                alert("Octavo turno, 18hs");
                break;
            case '9':
                alert("Noveno turno, 19hs");
                break;
            case '10':
                alert("Ultimo turno, 20hs");
                break;
            default:
                alert("Solo hay 10 turnos al día");
        }
    }
    
    saludo(){ 
        alert(`Para cancelaciones, contactarse con secretaria. Gracias!`);
    }

}





const pacientes= new Paciente (prompt("Ingrese su nombre y apellido "),prompt("En que orden le gustaría ser atendido: "), "Dr. Lautaro Gimenez"); //POR AHORA DEJO UN SOLO DOCTOR
pacientes.datos();
pacientes.disponible();
pacientes.saludo();


const turnos=[]; //DECLARO UN ARRAY VACIO PARA PODER PUSHEAR

turnos.push(pacientes);



//LO QUE VA A VER LA "SECRETARIA" DESDE CONSOLA

console.table(turnos);
