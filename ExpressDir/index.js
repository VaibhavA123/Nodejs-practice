// const express = require("express");
// const app = express();
// // console.dir(app);
// let port = 8080; //3000
// app.listen(port, () => {
//     console.log(`app is listening on port ${port}`);
// });
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send({"response" : "this is a basic response"});
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });


// const app2 = function(){
//     const age = {
//         name : "vaibhav",
//         age : 18
//     }
//     console.log(age);
// }
// console.dir(app2());




const express = require("express");
const app = express();
let port = 8080;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});
// app.use((req,res)=>{
//     console.log("request received");
//     res.send({
//         name: "vaibhav goel",
//         age : 18,
//         sum(a,b){
//             return a + b;
//         },
//         Companies : {I : "Microsoft",II : "Google", III : "Amazon"},
//         country : ["America","Russia","London","Germany"],
//         degree : "B.tech"
//     });
// });

app.get("/companies",(req,res)=>{
    console.log("request received......");
    res.send({
        name: "vaibhav goel",
        age : 18,
        sum(a,b){
            return a + b;
        },
        Companies : {I : "Microsoft",II : "Google", III : "Amazon"},
        country : ["America","Russia","London","Germany"],
        degree : "B.tech"
    });
});
app.get("/",(req,res)=>{
    console.log("request received......");
    res.send("hi , i am a root path");
});
app.get("/apple",(req,res)=>{
    console.log("request received......");
    res.send("you contacted apple path");
});
app.get("/orange",(req,res)=>{
    console.log("request received......");
    res.send("you contacted orange path");
});
// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// });
app.post("/",(req,res)=>{
    res.send("you sent a post");
})

app.get("/:username/:id",(req,res) => {
    console.log(req.params);
    let {username , id} = req.params;
    res.send(`<h1>Welcome to the page of @${username}</h1>`);
});

// app.get("/search",(req,res) => {
//     console.log(req.query);
//     res.send("no results");
// });


// app.get("/path-player",(req,res) => {
//     console.log(req.query);
//     res.send({name : "Vaibhav Goel",course : "Sigma Batch 2024",Mentor : "Mrs. Shradha Khapra"});
// });

// app.get("/path-player",(req,res) => {
//     let {courseid , unit} = req.query;
//     if(!courseid){
//         res.send(`<h1>nothing send</h1>`);
//     }
//     res.send(`search results for query : ${courseid} ,unit= ${unit}`);
// });