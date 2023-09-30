import { v4 } from "uuid";

export class User {
    private id: string;
    constructor(public name: string, public username: string, public email: string, private password: string) {
        this.id = v4();
    }

    sendTweet() {
        console.log("send");
    }

    follow() {
        console.log("follow");
    }

    showFeed() {
        console.log("show");
    }

    showTweets() {
        console.log("showTweets");
    }
}
