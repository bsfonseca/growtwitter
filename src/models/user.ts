import { v4 } from "uuid";
import { Tweet } from "./tweet";

export class User {
    private id: string;
    private tweets: Tweet[];
    public followers: User[];

    constructor(public name: string, public username: string, public email: string, private password: string) {
        this.id = v4();
        this.tweets = [];
        this.followers = [];
    }

    sendTweet(conteudo: string) {
        // Cria a instancia de um tweet
        const tweet = new Tweet(conteudo, "N", this);

        // Adiciona o tweet na lista do usuario
        this.tweets.push(tweet);

        return tweet;
    }

    follow(user: User) {
        if (user.username == this.username) {
            console.log("Você não pode seguir a si mesmo");
            return;
        }

        this.followers.push(user);
    }

    showFeed() {
        console.log("show");
    }

    //Mostrar tweets
    showTweets() {
        for (let item of this.tweets) {
            item.show(this.username);
        }
    }

    reply(conteudo: string, tweet: Tweet) {
        tweet.reply(conteudo, this);
    }
}
