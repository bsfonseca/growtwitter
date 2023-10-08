import { v4 } from "uuid";
import { TipoTweet, Tweet } from "./tweet";

export class User {
    private id: string;
    private tweets: Tweet[];
    public followers: User[];

    constructor(public name: string, public username: string, public email: string, private password: string) {
        this.id = v4();
        this.tweets = [];
        this.followers = [];
    }

    // Criar um tweet para o usuário
    sendTweet(conteudo: string) {
        // Cria a instância de um tweet
        const tweet = new Tweet(conteudo, TipoTweet.Normal, this);

        // Adiciona o tweet na lista do usuário
        this.tweets.push(tweet);

        return tweet;
    }

    // Seguir um outro usuário
    follow(user: User) {
        if (user.username == this.username) {
            console.log("Você não pode seguir a si mesmo");
            return;
        }

        this.followers.push(user);
    }

    // Mostrar tweets do usuário
    showTweets() {
        for (let item of this.tweets) {
            item.show();
        }
    }

    // Mostrar os tweets do usuário e dos seguidores
    showFeed() {
        this.showTweets();

        for (let item of this.followers) {
            item.showTweets();
        }
    }

    // Fazer um reply para um tweet
    reply(conteudo: string, tweet: Tweet) {
        tweet.reply(conteudo, this);
    }
}
