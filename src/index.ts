import { User } from "./models/user";

const daphne = new User("Daphne", "daphne", "daphne@dog.com", "13548");
const bruna = new User("Bruna", "bruna", "bruna@cat.com", "13548");

daphne.sendTweet("Ola");
daphne.sendTweet("Vou passear");
daphne.sendTweet("Vou para pracinha");

bruna.sendTweet("A comida esta pronta");

console.log(daphne);
