```ts
server.get('/ping/', (req,res) => {
    res.json({pong:true});
});

server.get('/produtos',(req,res) => {
    res.json({produtos:[]})
})

server.get('/user/:userName/age/:userAge',(req,res) => {
    res.json(req.params)

    // Segunda forma forma de passar informaçoes dos parametros para variaveis
    // let name = req.params.userName;
    // let age = req.params.userAge;
    
    // const {userName, userAge} = req.params;

    // res.json({userName,userAge});
})

interface IUserBody {
    userName:string,
    userAge:string
}

server.post('/user',(req:Request<{},{},IUserBody>,res) => {
    const user = req.body;
    
    console.log(`Dados enviados atravês do POST ${user.userName} ${user.userAge}`);
    res.status(200);
})
