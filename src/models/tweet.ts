import { v4 } from "uuid";
import { User } from "./user";

export class Tweet {
    public id: string;
    public replies: Tweet[];
    public user: User;
    public likes: User[];

    constructor(public content: string, public type: string, user: User) {
        this.id = v4();
        this.replies = [];
        this.user = user;
        this.likes = [];
    }
    //Resposta
    reply(conteudo: string, user: User) {
        const reply = new Tweet(conteudo, "R", user);
        this.replies.push(reply);
    }

    //Curtir
    like(usuario: User) {
        this.likes.push(usuario);
    }

    //Mostrar
    show(username: string) {
        console.log(`@${username}: ${this.content}`);

        for (let item of this.replies) {
            console.log(` > @${item.user.username}: ${item.content}`);
        }

        if (this.likes.length == 1) {
            console.log(`[@${this.likes[0].username} curtiu]`);
        } else if (this.likes.length == 2) {
            console.log(`[@${this.likes[0].username} e mais ${this.likes.length - 1} usuário curtiu]`);
        } else if (this.likes.length > 2) {
            console.log(`[@${this.likes[0].username} e mais ${this.likes.length - 1} usuários curtiram]`);
        }
    }

    showReplies() {
        console.log("showReplies");
    }
}
