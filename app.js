const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Vous etes sur la page d'accueil")
        res.end();
    }
    if(req.url === '/courses'){
        res.write(JSON.stringify(['Python','Javascript','Java']))
        res.end();
    }
    

});










