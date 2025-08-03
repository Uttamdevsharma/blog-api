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


router.get("/" , (req,res) => {
    res.send(blogs)
})







module.exports = router;