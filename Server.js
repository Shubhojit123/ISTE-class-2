const express = require('express')
const app = express()

let count = 0;
app.listen(3000,()=>{
    console.log("Sever Started");
    
})
function Request(req,res,next)
{
    count++;
    next();
}

function RequestLimit(req,res,next)
{
    if(count > 10)
    {
       res.send("You have exceeded your request limit");

    }
    else{
        next();
    }
}

app.get('/',Request, RequestLimit , (req,res)=>{
    res.send(`Your request ${count}`);
})


