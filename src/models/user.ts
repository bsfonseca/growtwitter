import { v4 } from "uuid";
import { Tweet } from "./tweet";

export class User {
    private id: string;
    private tweets: Tweet[];

    constructor(public name: string, public username: string, public email: string, private password: string) {
        this.id = v4();
        this.tweets = [];
    }

    sendTweet(conteudo: string) {
        // Cria a instancia de um tweet
        const tweet = new Tweet(conteudo, "N");

        // Adiciona o tweet na lista do usuario
        this.tweets.push(tweet);
    }

    follow() {
        console.log("follow");
    }

    showFeed() {
        console.log("show");
    }

    //Mostrar tweets
    showTweets() {
        for (let item of this.tweets) {
            console.log(`@${this.username}: ${item.content}`);
        }
    }
}
