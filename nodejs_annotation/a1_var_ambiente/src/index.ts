// Aula Uso de variáveis de ambiente

let nome:string = "Augusto";
let idade:number = 99;
let token:string = process.env.GOOGLE_DRIVE_TOKEN as string;

console.log(`Oi, meu nome é ${nome} e eu tenho ${idade} anos.`);
console.log(`Conectando no Drive com o TOKEN: ${token}`);