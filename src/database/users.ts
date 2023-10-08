import { User } from "../models/user";

// Lista de usuários
const daphne = new User("Daphne", "daphne", "daphne@dog.com", "13548");
const bruna = new User("Bruna", "bruna", "bruna@.com", "13548");
const renata = new User("Renata", "renata", "renata@gmail.com", "10152");

export const users: User[] = [daphne, bruna, renata];
