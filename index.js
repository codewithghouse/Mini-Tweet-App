const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const path = require("path");
var methodOverride = require('method-override'); // for overrdide the mothods like patch and delete
const { v4: uuidv4 } = require('uuid'); // for uid genereting
app.use(methodOverride('_method'))
app.set("views", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
// post rquest ke liye hai yeh 
app.use(express.urlencoded({extended:true}));

let posts=[
    {
        id: uuidv4(),
        username : "Ghouse",
        content:"Today is the best day in my life #bestday",

    },{
        id: uuidv4(),
        username : "Amaan",
        content:"From monday we have the external exams",
    },{
        id: uuidv4(),
        username : "Athar",
        content:"We yet not started preparation for the external exam",
    },{
        id: uuidv4(),
        username : "Ayan",
        content:"from 18 june , sem 4 exam are going to start",
    },{
        id: uuidv4(),
        username : "Naveed",
        content:"i have to prepared for the discreate mathematics subject",
    },{
        id: uuidv4(),
        username : "Taher",
        content:"what is the last date of examination fees",
    },{
        id: uuidv4(),
        username : "Rahman",
        content:"chill brother we are in hackathon #scet",
    }
];
// // connt get fix here 
// app.get("/", (req, res) => {
//   res.redirect("/posts"); // ya res.send() bhi chalega if testing
// });

// making post routes
app.get("/posts",((req,res)=>{
    // res.send("request is working");
    res.render("index.ejs",{posts});
}));
// making new post
app.get("/posts/new",((req,res)=>{
    res.render("newpost.ejs");
}));
app.post("/posts",((req,res)=>{
    let{ username , content}= req.body;
    console.log(req.body);
    // creating id for the new user
    let id = uuidv4();
    posts.push({id, username, content});
    console.log("the post is added");
    res.redirect("/posts");
}));
// seeng the individual post
app.get("/posts/:id",((req,res)=>{
    let {id}= req.params;
    let post= posts.find((p)=> id===p.id);
    console.log("its working succesfully");
    res.render("singleuser.ejs",{post});
}))
//updaitng the route
app.patch("/posts/:id",((req,res)=>{
    let { id}= req.params;
      let post= posts.find((p)=> id===p.id);
      let newcontent= req.body.content;
    post.content= newcontent
    console.log(id);
    console.log(newcontent);
//  res.redirect("/posts");
// res.send("patch request is working");
res.redirect("/posts");
}));
// edit ejs making coz eidt form request to patch to update the content smooehtly
app.get("/posts/:id/edit",((req,res)=>{
    let{id}= req.params;
    post= posts.find((p)=> id===p.id);
    console.log(post);
    res.render("edit.ejs",{post});

}));
// deleting the post from the app
app.delete("/posts/:id",((req,res)=>{
    let { id}= req.params;
    // we are not initialaizing the post varaible but we are dooing filtering the id username and removing them from our array and rest of the filter array we agsin redirecting to this path /posts;
    posts = posts.filter((p)=> id!==p.id);
    res.redirect("/posts");
}))

app.listen(port,()=>{
    console.log(`the app is listening in the port ${port}`)
})