import express, { application } from 'express';
import mongoose from 'mongoose';
import Messages from './DbMessages.js';
import Pusher from 'pusher';

// console.log("Credes",process.env.cred)

const app=express();
const port=process.env.PORT || 9000;
const connectionURL=`mongodb+srv://shubhi:pnX7VDLLedtZB86N@cluster0.fwi1r.mongodb.net/whatsAppDB?retryWrites=true&w=majority`;
mongoose.connect(connectionURL,{
    useNewUrlParser: true,  
useUnifiedTopology: true ,

})

const pusher = new Pusher({
    appId: "1278241",
    key: "f78449ff8f836718a72a",
    secret: "cc95871f71610f7f8a74",
    cluster: "ap2",
    useTLS: true
  });

const db=mongoose.connection;
db.once("open",()=>{
    console.log('DB Connected');
    const msgCollection=db.collection('messagecontents');
    const changeStream=msgCollection.watch();
    changeStream.on("change",(change)=>{
        console.log(change)
        if(change.operationType==='insert'){
            console.log("Inside insert")
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
                user:messageDetails.user,
                message:messageDetails.message,
                timeStamp:messageDetails.timeStamp,
                received:messageDetails.received
            })
        }
        else{
            console.log("Error Triggring Pusher")
        }
    })
})

//port config
app.listen(port,()=>{console.log(`Listening on ${port}`)})


//middleware
app.use(express.json()) 
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next();
}) ///need to read this ,we are passing the request in the form of json and to read that json we need middleware


//api routes
app.get('/',(req,res)=>{res.status(200).send('Hello world')});

app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send(err);
        }
        else{
            res.status(200).send(`New Message Created:\n${data}`)
        }
    })
})

app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body;
    console.log(dbMessage)
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`New Message Created:\n${data}`)
        }
    })
    
})