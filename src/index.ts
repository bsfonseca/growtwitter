import { users } from "./database/users";

const daphne = users[0];
daphne.sendTweet("Ola");
daphne.sendTweet("Vou passear");
daphne.sendTweet("Vou para pracinha");

const bruna = users[1];
bruna.sendTweet("A comida esta pronta");

daphne.follow(bruna);

daphne.showTweets();

daphne.follow(daphne);
console.log(daphne);
