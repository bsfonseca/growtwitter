import { v4 } from "uuid";

export class Tweet {
    public id: string;
    public replies: Tweet[];

    constructor(public content: string, public type: string) {
        this.id = v4();
        this.replies = [];
    }

    reply(conteudo: string) {
        const reply = new Tweet(conteudo, "R");
        this.replies.push(reply);
    }

    like() {
        console.log("like");
    }

    show(username: string) {
        console.log(`@${username}: ${this.content}`);

        for (let item of this.replies) {
            console.log(` > @${username}: ${item.content}`);
        }
    }

    showReplies() {
        console.log("showReplies");
    }
}
