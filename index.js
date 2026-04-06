// 1 mashq

class Meva {
  constructor(nom, rang, narx, chegirma) {
    ((this.nom = nom),
      (this.rang = rang),
      (this.narx = narx),
      (this.chegirma = chegirma));
    this.chegirmaNarx = (this.narx * this.chegirma) / 100;
  }

  malumot() {
    console.log(`${this.nom} ${this.rang} rangli, ${this.narx} so'm`);
  }

  chegirmaNatija() {
    console.log(
      `${this.chegirma}% foizdan keyin summa ${this.narx - this.chegirmaNarx} boladi \n=================================`,
    );
  }
}

const Olma = new Meva("Olma", "qizil", 4000, 40);
Olma.malumot();
Olma.chegirmaNatija();

const Banan = new Meva("Banan", "yashil", 20000, 15);
Banan.malumot();
Banan.chegirmaNatija();

const Anor = new Meva("Anor", "qizil", 15000, 67);
Anor.malumot();
Anor.chegirmaNatija();

const Kivi = new Meva("Kivi", "yashil", 23000, 13);
Kivi.malumot();
Kivi.chegirmaNatija();

const Ananas = new Meva("Ananas", "Sariq", 50000, 3);
Ananas.malumot();
Ananas.chegirmaNatija();

// 2 mashq

class Kalkulyator {
  constructor(joriyQiymat) {
    this.joriyQiymat = joriyQiymat ? joriyQiymat : 0;
    this.default = joriyQiymat ? joriyQiymat : 0;
  }

  qoshish(son) {
    console.log(`${this.joriyQiymat} + ${son} = ${this.joriyQiymat + son}`);
    this.joriyQiymat += son;
    return this;
  }

  ayirish(son) {
    console.log(`${this.joriyQiymat} - ${son} = ${this.joriyQiymat - son}`);
    this.joriyQiymat -= son;
    return this;
  }

  kopaytirish(son) {
    console.log(`${this.joriyQiymat} * ${son} = ${this.joriyQiymat * son}`);
    this.joriyQiymat *= son;
    return this;
  }

  bolish(son) {
    console.log(`${this.joriyQiymat} / ${son} = ${this.joriyQiymat / son}`);
    this.joriyQiymat /= son;
    return this;
  }

  tiklash() {
    this.joriyQiymat = this.default;
    console.log(`joriyQiymat tiklandi: ${this.joriyQiymat}`);
    return this;
  }

  natija() {
    console.log(`joriyQiymat status: ${this.joriyQiymat}`);
    return this;
  }
}

const num1 = new Kalkulyator(5);
num1.tiklash();
num1.qoshish(3);
num1.natija();
num1.tiklash();
num1.kopaytirish(4).qoshish(4).ayirish(9).bolish(6).natija().tiklash();

console.log("=================================");

// 3 mashq
class Talaba {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
    this.fanlar = [];
    this.baholar = 0;
    this.fanlarSoni = 0;
  }

  baho_qosh(fan, baho) {
    this.fanlar.push([fan, baho]);
  }

  urtacha() {
    this.baholar = 0;
    this.fanlarSoni = 0;
    for (var i = 0; i < this.fanlar.length; i++) {
      this.baholar += this.fanlar[i][1];
      this.fanlarSoni += 1;
    }
    return (this.baholar / this.fanlarSoni).toFixed(1);
  }
}

class UniversitetTalabasi extends Talaba {
  constructor(ism, yosh) {
    super(ism, yosh);
  }

  stipendiyaOladi() {
    if (this.urtacha() >= 3.5) {
      console.log(true, `stipendiya oladi baho ${this.urtacha()}`);
    } else {
      console.log(
        false,
        `o'quvchi stipendiya olmaydi, baho ${this.urtacha()}, stipenya olishi uchun ${3.5 * (this.fanlarSoni + 1) - this.baholar}+ olishi kerak`,
      );
    }
  }
}

const miniTalaba = new UniversitetTalabasi("shokhrukh", 14);
miniTalaba.baho_qosh("math", 2);
console.log(miniTalaba.urtacha());
miniTalaba.stipendiyaOladi();

console.log("=================================");

// 4 mashq
class ParolMenedjer {
  constructor() {
    this.lowerCase = "abcdefghijklmnopqrstuvwxyz";
    this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.numbers = "0123456789";
    this.symbols = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|`~";
    this.allChars = (
      this.lowerCase +
      this.upperCase +
      this.numbers +
      this.symbols
    ).split("");
    this.saytParollar = [];
  }

  parolYaratish(uzunlik) {
    this.parol = "";
    for (var i = 0; i < uzunlik; i++) {
      this.parol +=
        this.allChars[Math.floor(Math.random() * this.allChars.length)];
    }
    return this.parol;
  }

  parolSaqlash(sayt, parol) {
    this.saytParollar.push([sayt, parol]);
  }

  parolOlish(sayt) {
    for (var i = 0; i < this.saytParollar.length; i++) {
      if (this.saytParollar[i][0] == sayt) {
        console.log(`${sayt} saytiga parol: \n`,this.saytParollar[i]);
        break;
      }
    }
  }
  barchaChop() {
    console.log(this.saytParollar);
  }
}

const parol = new ParolMenedjer();
console.log("yangi parol yaratildi: ", parol.parolYaratish(10));
parol.parolSaqlash("github", parol.parolYaratish(10));
parol.parolSaqlash("telegram", parol.parolYaratish(10));
parol.parolSaqlash("instagram", parol.parolYaratish(10));
parol.parolSaqlash("x", parol.parolYaratish(10));
parol.parolSaqlash("atgchub", parol.parolYaratish(10));
parol.parolOlish("atgchub")
parol.barchaChop()