



// import express from "express";




// type PeliculaT ={
//     id: number
//     name: string,
//     runtime: number
// }

// let peliculas: PeliculaT[]=[
//     {
//         id:1,
//         name:"Dead or Alive",
//         runtime:100
//     },
//     {
//         id:2,
//         name:"Toy story",
//         runtime:150
//     },
//     {
//         id:3,
//         name:"cars",
//         runtime:110
//     },
//     {
//         id:4,
//         name: "Avatar",
//         runtime: 210
//     }
// ];

// const app = express();




// app.use(express.json());



// app.get("/films",(req,res)=>{
//     res.json(peliculas);
// })

// app.get("/films/:id",(req, res)=>{
//     const miID = Number(req.params.id);
//     const peliculaQueBusco = peliculas.find((x)=>x.id === miID);


//     if(!peliculaQueBusco){
//         res.status(404).json({
//             message: "chiqui, esa peli no la tengo"
//         })
//         return
//     }

//      res.json(peliculaQueBusco);
// })

// app.post("/films", (req, res)=>{
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
//     const nuevaPeli : PeliculaT = {
//         id : Math.random(),
//         name: req.body.name,
//         runtime: req.body.runtime 
//     };


//     peliculas.push(nuevaPeli);
    
    
//     res.status(201).json(nuevaPeli);
// });

// app.delete("/films/:id",(req,res)=>{
//     const id = Number(req.params.id);

//     const peliAEliminar = peliculas.find(x=>x.id===id);

//     if(!peliAEliminar){
//         res.status(404).json({
//             message: "La pelicula no existe"
//         })
//     }

//     const nuevaListaFiltrada = peliculas.filter((x)=>!(x.id===id));

//     peliculas = nuevaListaFiltrada;

//     res.json({
//         message:`La pelicula con id ${id} ha sido eliminada`
//     })
// })

// app.put("/films/:id",(req,res)=>{
//     const id = Number(req.params.id);

//     const peliAeliminar = peliculas.find((x)=>x.id===id);
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

//     const peliActualizada: PeliculaT = {
//         id,
//         name: req.body.name,
//         runtime: req.body.runtime
//     }

//     peliculas = peliculas.map(x=>x.id===id?peliActualizada:x);

//     res.json({
//         message: "Peli actualizada",
//         newFilm: peliActualizada
//     })
// });

// app.patch("/films:id", (req,res)=>{
//     const id = Number(req.params.id);

//     const peliAactualizar = peliculas.find((x)=>x.id===id);
//     if(!peliAactualizar){
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

//     if(!(req.body.name || req.body.runtime)){
//         res.status(400).json({
//             message: "me tienes que pasar algo, aunque solo sea una cosa"
//         })
//         return
//     }

//     const peliActualizada: PeliculaT = {
//         id,
//         name:req.body.name ? req.body.name : peliAactualizar.name,
//         runtime:req.body.runtime ? req.body.runtime : peliAactualizar.runtime
//     }

//     peliculas = peliculas.map(x=>x.id===id?peliActualizada:x);

//     res.json({
//         message: "Cambia o a medias o como tu quieras"
//     })
// })
// const PORT = 6969;

// app.listen(PORT, () =>{
//     console.log(`Ey, el api esta furulando en el puerto ${PORT}`)
// })



import express from "express";
//import filmsRoutes from "./routes/films.routes.js"


const app = express();

app.use(express.json());

//app.use("/films",filmsRoutes);

app.listen(3000, ()=>{
    console.log("api funcionando en el puerto 3000");
})