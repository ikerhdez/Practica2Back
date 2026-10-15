import type { Request, Response } from "express";
import { changeFilms, films } from "../data/films.data.js"
import type { filmT } from "../models/films.model.js";



export const getFilms = (
    req: Request,
    res: Response
)=> {
    return res.json(films);
}

const findFilm = (id:number, res:Response)=> {
    const film = films.find(x=>x.id===id);

    if(!film){
        res.status(404).json({
            message: "no film"
        })
        return
    }
    return film;
}

export const getFilmsWithID=(
    req:Request,
    res:Response
)=>{
    const id = Number(req.params.id);
    const film = findFilm(id,res);
    res.json(film);
    
}

// export const postFilm = (
//     req:Request,
//     res:Response
// )=>{
//     if(!req.body){
//         res.status(400).json({message:"Me tienes que pasar algo"})
//         return
//     }
//     if(!req.body.name){
//         res.status(400).json({message:"Me tienes que pasar un nombre"})
//         return 
//     }
//     if(!req.body.runtime){
//         res.status(400).json({message:"Me tienes que pasar una duración"})
//         return
//     }
//     const nuevaPeli : filmT = {
//         id : Math.random(),
//         name: req.body.name,
//         runtime: req.body.runtime 
//     }
//     films.push(nuevaPeli);

//     res.status(201).json(nuevaPeli);
//     };
export const deleteFilm=(
    req:Request,
    res:Response)=>{
    const id = Number(req.params.id);

    const peliAEliminar = findFilm(id,res);
    
    if(peliAEliminar){
        changeFilms(films.filter(x=>x.id!==id))
    }else{
        res.status(404).json({
            message: "La pelicula no existe"
        })
    }

}


// export const putFilm=(
//         req:Request,
//         res:Response)=>{
//     const id = Number(req.params.id);

//     const peliAeliminar = findFilm(id,res);
//     if(!peliAeliminar){
//         res.status(400).json({
//             message: "Me tienes que pasar algo"
//         })
//         return
//     }   
//     if(!req.body.name || !req.body.runtime){
//             res.status(400).json({
//                 message: "Me falta el name o el runtime"
//             })
//             return
//     }
//     const peliActualizada: filmT = {
//         id,
//         name: req.body.name,
//         runtime: req.body.runtime
//     }

//      changeFilms(films.map(x=>x.id===id?peliActualizada:x));

//     res.json({
//         message: "Peli actualizada",
//         newFilm: peliActualizada
//     })
// };
