const express = require('express')

const app = express()

app.use(express.json())

app.get('/api/mensajes', (req, res)=>{
    // console.log(req)
    const {nombre, apellido} = req.query
    console.log(nombre)
    console.log(apellido)

    res.json({
        ok: true,
        mensaje:'Todo esta bien',
        nombre,
        apellido
    }
    )
});
app.get('/api/mensajes/:id', (req, res)=>{
    console.log(req.params)
    const {id}= req.params

    res.json({
        ok: true,
        mensaje:'Todo esta bien',
        id
    }
    )
});

app.get('/api/usuarios', (req , res)=>{
    res.json({
        status: 200,
        usuarios: [
            {
                id: 1,
                nombre: 'Juan'
            },
            {
                id: 2,
                nombre: 'Juan2'
            },
            {
                id: 3,
                nombre: 'Juan3'
            },
        ]
    }
    )
})

const frase = 'Hola mundo, como estan?'

app.get('/api/frase', (req, res)=>{
    res.json({
        frase
    }
    )
});

app.get('/api/letras/:num', (req, res)=>{
    const {num} = req.params
    const numero = Number(num)
    console.log(isNaN(numero))
    if((typeof numero === 'number')&&(!isNaN(numero))){
        const palabra = frase.split(' ')[numero-1]
        res.json({
            palabra,
            numero
        })
    }else{
            res.json({
                error: 'El parametro debe ser un número'
            })
        }
    })

    app.post('/api/mensajes', (req, res)=>{
        // console.log(req.body)
        const {nombre} = req.body
        res.json({
            msg: 'todo ok',
            nombre
        })
    })
    app.put('/api/mensajes/:id', (req, res)=>{
        // console.log(req.body)
        const {nombre} = req.body
        const {id} = req.params

        res.json({
            msg: 'todo ok',
            id,
            nombre
        })
    })

app.delete('/api/mensajes/:id',(req, res)=>{
    const {id}= req.params
    res.json({
        msg:'borrado el mensaje',
        id
    })
})



const PORT= process.env.PORT || 8080

const server = app.listen(PORT, ()=>{
    console.log(`Estoy escuchando el puerto: ${server.address().port}`)
})