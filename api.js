const exp=require('express')
const assert=require('assert')
const {MongoClient,ObjectID}=require('mongodb')
const body=require('body-parser')

const app=exp()
app.use(body.json())

const mongoUrl='mongodb://test:test123@ds021711.mlab.com:21711/heroku_dwhp02fw'
const database='heroku_dwhp02fw'


MongoClient.connect(mongoUrl,(err,client)=>{
assert.equal(err,null,'data base connexion failed')
const db=client.db(database)


app.post('/add_product',(req,res)=>{
    console.log("add")
    let newProduct=req.body
    db.collection('produit').insertOne(newProduct,(err,data)=>{
        if(err)console.log("cant add product")
        else res.send(data)
    })
})


app.get('/product',(req,res)=>{
    db.collection('produit').find().toArray((err,data)=>{
        if(err)res.send("cant find data")
        else res.send(data)
        
    })
})

app.get('/product/:id',(req,res)=>{
    db.collection('produit').findOne({_id:ObjectID(req.params.id)},(err,data)=>{
        if(err)res.send("cant find data")
        else res.send(data)
    })
})

app.put('/mproduct/:id',(req,res)=>{
    console.log('put')
    let updateProduct = req.body
    console.log({_id:ObjectID(req.params.id)})
    db.collection('produit').findOneAndUpdate({_id:ObjectID(req.params.id)},{$set:updateProduct},(err,data)=>{
        if(err)res.send(err)
        else res.send(data)

    })
})

app.delete('/delete_product/:id',(req,res)=>{
    let productToRemoveId=ObjectID(req.params.id)
    db.collection('produit').findOneAndDelete({_id:productToRemoveId},(err,data)=>{
        if(err)res.send('cant delete product')
        else res.send(data)
    })
})

})




app.listen(3000,(err)=>{
    if(err)console.log("erreur")
    else console.log("runing")
})
