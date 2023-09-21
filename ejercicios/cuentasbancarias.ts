class cuentaBancaria{
    protected id: number;
    protected saldo: number;
    protected titular: string;

    

    depositar(monto: number) {
        if (monto > 0) {
          this.saldo += monto;
          console.log("Depósito de ", monto, "realizado. Saldo actual: ", this.saldo);
        } else {
          console.log("El monto a depositar debe ser mayor que cero.");
        }
      }
    
      retirar(monto: number) {
        if (monto > 0 && monto <= this.saldo) {
          this.saldo -= monto;
          console.log("Retiro de ", monto, "realizado. Saldo actual: ", this.saldo);
        } else {
          console.log("Fondos insuficientes o monto no válido para el retiro.");
        }
      } 
}

class cuentaCorriente extends cuentaBancaria{
    calcularInteres: number;
  
  constructor(id: number, saldo: number, titular: string, calcularInteres: number){
        super();
        this.id = id;
        this.saldo = saldo;
        this.titular = titular;
        this.calcularInteres = calcularInteres;
    }
}

class cuentaDeahorro extends cuentaBancaria{
    tasaInteres: number;
  
  constructor(id: number, saldo: number, titular: string, tasaInteres: number){
        super();
        this.id = id;
        this.saldo = saldo;
        this.titular = titular;
        this.tasaInteres = tasaInteres;
    }
    

}

let CtaCte = new cuentaCorriente(5463676859141997346, 600, "Rodolfo", 7);
console.log(CtaCte);
let CtaAhorro = new cuentaDeahorro(26599874631514292784, 700, "Martin", 5);
console.log(CtaAhorro);