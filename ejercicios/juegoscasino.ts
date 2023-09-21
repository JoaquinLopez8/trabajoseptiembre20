class JuegoDeCasino {
    constructor(public nombre: string) {}
  
    jugar(): void {
      console.log("Jugando a ", this.nombre);
    }
  }
  
  class Craps extends JuegoDeCasino {
    constructor() {
      super("Craps");
    }
  
    jugar(): void {
      super.jugar();
      console.log("Lanzando los dados...");
    }
  }
  
  class Tragamonedas extends JuegoDeCasino {
    constructor() {
      super("Tragamonedas");
    }
  
    jugar(): void {
      super.jugar();
      console.log("Girando los rodillos...");
    }
  }
  
  class Casino {
    constructor(public juegos: JuegoDeCasino[]) {}
  
    agregarJuego(juego: JuegoDeCasino): void {
      this.juegos.push(juego);
    }
  
    jugarTodos(): void {
      this.juegos.forEach((juego) => juego.jugar());
    }
  }
  
  const juegoCraps = new Craps();
  const juegoTragamonedas = new Tragamonedas();
  
  const casino = new Casino([juegoCraps, juegoTragamonedas]);
  
  casino.jugarTodos();