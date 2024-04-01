const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

// caminho para o arquivo artists.json
const artistsFilePath = path.join(__dirname,'api-artists','artists.json')
// todos os artistas
app.get('/artists',(req,res) =>{
    //ler o arquivo artists.json
fs.readFile(artistsFilePath,(err,data) =>{
    if(err){
        return res.status(500).json({error:"Erro ao ler os dados dos artistas"})
    }
    const artist
})
})