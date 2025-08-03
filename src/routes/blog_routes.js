const express = require('express')
const router = express.Router()

let blogs = [
    {
        id: 1,
        title: "First Blog",
        description: "This is the first blog post here"
    },
    {
        id: 2,
        title: "JavaScript Basics",
        description: "Learn about variables, functions, and loops in JavaScript."
    },
    {
        id: 3,
        title: "Why Learn Node.js?",
        description: "Node.js is a powerful tool for building server-side applications in JavaScript."
    },
    {
        id: 4,
        title: "Express Routing Made Simple",
        description: "This blog explains how to use Express.js routes effectively in your app."
    },
    {
        id: 5,
        title: "REST API vs GraphQL",
        description: "A beginner-friendly comparison between REST APIs and GraphQL."
    }
];


//get method use
//get all blogs
router.get("/" , (req,res) => {
    res.send(blogs)
})
//get a single blog by id
router.get("/:id" , (req,res) => {
    const {id} = req.params;
    const existingBlog = blogs.find((blog) => blog.id === parseInt(id))
   
    if(existingBlog){
        res.status(200).json(existingBlog)
        
    }else {
        res.status(404).json({message: "No blog found"})
       
    }

    
})




//post method use
//add a new blog
router.post("/add-post" ,(req,res) => {
    const {title,description} = req.body;

    const newBlog = {id : blogs.length+1 , title,description}
    blogs.push(newBlog);
    
    res.status(200).json({
        message : "New blog added successfully",
        blog : newBlog
        
    })
})




//put method - for update

router.put("/update-post/:id" , (req,res) => {
    const {id} = req.params;
    const {title,description} = req.body;

    const blog = blogs.find((blog) => blog.id === parseInt(id));
    if(!blog) return res.status(404).json({message : "Blog Not Found"})

        blog.title = title || blog.title; 
        blog.description =  description || blog.description;
        res.status(200).json({
            message : "Blog updated successfully",
            blog
        })
    


})






//delete method use - for delete blogs

router.delete('/delete-post/:id' ,(req,res) => {
    const {id} = req.params;
    
    const blogIndex = blogs.findIndex((blog) => blog.id === parseInt(id))
    if(blogIndex === -1) res.status(400).json({message:"Blog not found"})
    
    blogs.splice(blogIndex , 1)
    res.status(200).json({message : "Blog deleted successfully"})    


})



module.exports = router;