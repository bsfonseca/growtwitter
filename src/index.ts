import { users } from "./database/users";

// ------------- USUÁRIOS --------------

const daphne = users[0];
const bruna = users[1];
const renata = users[2];

// --------- CRIAÇÃO DE TWEETS ---------

daphne.sendTweet("Ola");

// Criou mais um tweet para criar um reply
const tweetPracinha = daphne.sendTweet("Vou para pracinha");

// O sendTweet retorna a referencia do tweet criado
const tweetPassear = daphne.sendTweet("Vou passear");

//Criou um tweet
bruna.sendTweet("A comida esta pronta!");

//Criou um tweet para reply
const tweetChimarrao = bruna.sendTweet("Vamos tomar chimarrão, @renata? ");

renata.sendTweet("Hoje o dia está legal para tomar um sorvete!!!");

const tweetSorvete = renata.sendTweet("Alguém quer sair para tomar um sorvete?");

// ---------- SEGUIDORES ---------------

daphne.follow(bruna);
renata.follow(bruna);
daphne.follow(renata);
bruna.follow(daphne);
renata.follow(daphne);

// ----------- REPLIES -----------------

daphne.reply("Obaaa!", tweetPassear);
bruna.reply("Vou com vc", tweetPracinha);
renata.reply("Vamos quero!!", tweetChimarrao);
bruna.reply("Eu quero!!!", tweetSorvete);

// ------------- LIKES ------------------

tweetChimarrao.like(daphne);
tweetChimarrao.like(renata);
tweetChimarrao.like(bruna);

// ------------- SHOW TWEETS -----------

daphne.showTweets();
console.log("\n-------------\n");

bruna.showTweets();
console.log("\n--------------\n");

renata.showTweets();
console.log("\n--------------\n");

renata.showTweets();
console.log("\n--------------\n");

// ------------- SHOW FEED -------------

bruna.showFeed();
console.log("\n--------------\n");

renata.showFeed();
