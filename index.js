// 1 mashq

class Meva {
  constructor(nom, rang, narx, chegirma){
    this.nom = nom,
    this.rang = rang,
    this.narx = narx,
    this.chegirma = chegirma
    this.chegirmaNarx = (this.narx * this.chegirma) / 100
  }

  malumot() {
    console.log(`${this.nom} ${this.rang} rangli, ${this.narx} so'm`); 
  }


  chegirmaNatija(){
    console.log(`${this.chegirma}% foizdan keyin summa ${this.narx - this.chegirmaNarx} boladi \n=================================`)
  }
} 

const Olma = new Meva("Olma", "qizil", 4000, 40)
Olma.malumot()
Olma.chegirmaNatija()


const Banan = new Meva("Banan", "yashil", 20000, 15)
Banan.malumot()
Banan.chegirmaNatija()


const Anor = new Meva("Anor", "qizil", 15000, 67)
Anor.malumot()
Anor.chegirmaNatija()


const Kivi = new Meva("Kivi", "yashil", 23000, 13)
Kivi.malumot()
Kivi.chegirmaNatija()

const Ananas = new Meva("Ananas", "Sariq", 50000, 3)
Ananas.malumot()
Ananas.chegirmaNatija();


// 2 mashq

class Kalkulyator{
  constructor(joriyQiymat) {
    this.joriyQiymat = joriyQiymat ? joriyQiymat : 0
    this.default = joriyQiymat ? joriyQiymat : 0;
  }

  qoshish(son) {
    console.log(`${this.joriyQiymat} + ${son} = ${this.joriyQiymat+son}`);
    this.joriyQiymat += son;
    return this;
  }

  ayirish(son){
    console.log(`${this.joriyQiymat} - ${son} = ${this.joriyQiymat - son}`);
    this.joriyQiymat  -= son
    return this
  }

  kopaytirish(son){
    console.log(`${this.joriyQiymat} * ${son} = ${this.joriyQiymat * son}`);
    this.joriyQiymat *= son
    return this
  }

  bolish(son){
    console.log(`${this.joriyQiymat} / ${son} = ${this.joriyQiymat / son}`);
    this.joriyQiymat /= son
    return this
  }

  tiklash(){
    this.joriyQiymat = this.default;
    console.log(`joriyQiymat tiklandi: ${this.joriyQiymat}`);
    return this
  }

  natija(){
    console.log(`joriyQiymat status: ${this.joriyQiymat}`);
    return this
  }
}

const num1 = new Kalkulyator(5);
num1.tiklash()
num1.qoshish(3)
num1.natija()
num1.tiklash()
num1.kopaytirish(4).qoshish(4).ayirish(9).bolish(6).natija().tiklash()
