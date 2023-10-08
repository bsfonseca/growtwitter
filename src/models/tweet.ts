import { v4 } from "uuid";
import { User } from "./user";

export enum TipoTweet {
    Normal = "N",
    Reply = "R",
}

export class Tweet {
    public id: string;
    public replies: Tweet[];
    public user: User;
    public likes: User[];

    constructor(public content: string, public type: TipoTweet, user: User) {
        this.id = v4();
        this.replies = [];
        this.user = user;
        this.likes = [];
    }

    // Criar uma resposta para o tweet
    // Um reply é um novo tweet do tipo Reply
    reply(conteudo: string, user: User) {
        const reply = new Tweet(conteudo, TipoTweet.Reply, user);
        this.replies.push(reply);
    }

    // Adicionar uma curtida na lista de likes
    // Um like é feito por um usuário
    like(usuario: User) {
        this.likes.push(usuario);
    }

    // Mostrar as respostas do tweet
    showReplies() {
        for (let item of this.replies) {
            console.log(` > @${item.user.username}: ${item.content}`);
        }
    }

    // Mostrar os likes do tweet
    showLikes() {
        if (this.likes.length == 1) {
            console.log(`[@${this.likes[0].username} curtiu]`);
        } else if (this.likes.length == 2) {
            console.log(`[@${this.likes[0].username} e mais 1 usuário curtiu]`);
        } else if (this.likes.length > 2) {
            console.log(`[@${this.likes[0].username} e mais ${this.likes.length - 1} usuários curtiram]`);
        }
    }

    // Mostrar o tweet, seus replies e likes
    show() {
        console.log(`@${this.user.username}: ${this.content}`);

        this.showReplies();
        this.showLikes();
    }
}
