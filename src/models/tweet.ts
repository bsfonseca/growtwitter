import { v4 } from "uuid";

export class Tweet {
    private id: string;

    constructor(public content: string, public type: string) {
        this.id = v4();
    }

    reply() {
        console.log("reply");
    }

    like() {
        console.log("like");
    }

    show(username: string) {
        console.log(`@${username}: ${this.content}`);
    }

    showReplies() {
        console.log("showReplies");
    }
}
