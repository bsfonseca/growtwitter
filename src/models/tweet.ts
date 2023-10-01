import { v4 } from "uuid";
import { User } from "./user";

export class Tweet {
    public id: string;
    public replies: Tweet[];
    public user: User;

    constructor(public content: string, public type: string, user: User) {
        this.id = v4();
        this.replies = [];
        this.user = user;
    }

    reply(conteudo: string, user: User) {
        const reply = new Tweet(conteudo, "R", user);
        this.replies.push(reply);
    }

    like() {
        console.log("like");
    }

    show(username: string) {
        console.log(`@${username}: ${this.content}`);

        for (let item of this.replies) {
            console.log(` > @${item.user.username}: ${item.content}`);
        }
    }

    showReplies() {
        console.log("showReplies");
    }
}
