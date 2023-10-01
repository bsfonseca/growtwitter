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

    show() {
        console.log("show");
    }

    showReplies() {
        console.log("showReplies");
    }
}
