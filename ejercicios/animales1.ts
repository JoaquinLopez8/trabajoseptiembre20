class Animales{
    protected nombre: string;
    protected edad: number;
    protected raza: string;

    constructor(){
    }
    hacer_sonido(ruido: string){
console.log(ruido);
    }
    hacer_movimiento(moverse: string){
        console.log(moverse);
    }
}

class perro extends Animales{
    constructor(nombre: string, edad: number, raza: string){
        super();
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    pasar_entre_las_piernas(sabe: boolean){
        if(sabe===true){
            console.log("si sabe pasar entre las piernas");
        }
        else(sabe===false);{
            console.log("no sabe pasar entre las piernas");
        }
    }
    disc_dog(sabe: boolean){
        if(sabe===true){
            console.log("sabe jugar al disc dog");
        }
        else(sabe===false);{
            console.log("no sabe como jugar al disc dog");
        }
    }
}

class gato extends Animales{
    constructor(nombre: string, edad: number, raza: string){
        super();
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    trepar_las_cortinas(sabe: boolean){
        if(sabe===true){
            console.log("sabe trepar las cortinas");
        }
        else(sabe===false);{
            console.log("no sabe trepar las cortinas");
        }
    }
    caer_de_pie(sabe: boolean){
        if(sabe===true){
            console.log("puede caer de pie de varias altura");
        }
        else(sabe===false);{
            console.log("no sabe como caer de pie");
        }
    }
}

class pajaro extends Animales{
    constructor(nombre: string, edad: number, raza: string){
        super();
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    volar_hacia_atras(sabe: boolean){
        if(sabe===true){
            console.log("sabe volar para atras");
        }
        else(sabe===false);{
            console.log("no sabe volar para atras");
        }
    }
    pueden_volar_muy_rapido(sabe: boolean){
        if(sabe===true){
            console.log("puede volar a mas de 50km/h");
        }
        else(sabe===false);{
            console.log("puede volar a menos de 50km/h");
        }
    }
}

let mascota1 = new perro("Ramon", 7, "bulldog");
console.log(mascota1);
mascota1.hacer_sonido("ladrido");
mascota1.hacer_movimiento("salto para agarrar la pelota");
mascota1.pasar_entre_las_piernas(false);
mascota1.disc_dog(false);
let mascota2 = new gato("Miguel", 5, "siamese");
console.log(mascota2);
mascota2.hacer_sonido("maullido");
mascota2.hacer_movimiento("rasguño la mesa");
mascota2.trepar_las_cortinas(false);
mascota2.caer_de_pie(true);
let ave = new pajaro("Tomas", 4, "colibrie");
console.log(ave);
ave.hacer_sonido("aleteo");
ave.hacer_movimiento("vuela hacia atras");
ave.volar_hacia_atras(true);
ave.pueden_volar_muy_rapido(true);