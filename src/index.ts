import { users } from "./database/users";

const daphne = users[0];
daphne.sendTweet("Ola");
const tweetPracinha = daphne.sendTweet("Vou para pracinha");

// O sendTweet retorna a referencia do tweet criado
const tweetPassear = daphne.sendTweet("Vou passear");

const bruna = users[1];
bruna.sendTweet("A comida esta pronta");

daphne.follow(bruna);
daphne.showTweets();

daphne.reply("Obaaa!!!", tweetPassear);
daphne.reply("uhul!!!", tweetPracinha);
