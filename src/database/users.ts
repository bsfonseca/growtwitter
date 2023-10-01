import { User } from "../models/user";

const daphne = new User("Daphne", "daphne", "daphne@dog.com", "13548");
const bruna = new User("Bruna", "bruna", "bruna@cat.com", "13548");

export const users: User[] = [daphne, bruna];
