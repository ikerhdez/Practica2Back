import type { filmT } from "../models/films.model.js";


export let films: filmT []=[
    {
        id:1,
        name:"Dead or Alive",
        runtime:100
    },
    {
        id:2,
        name:"Toy story",
        runtime:150
    },
    {
        id:3,
        name:"cars",
        runtime:110
    },
    {
        id:4,
        name: "Avatar",
        runtime: 210
    }
];

export const changeFilms = (filmsParam :filmT[])=>{
    films = filmsParam;
}