# Blog Post API

This is a simple RESTful API for managing a collection of blog posts. The API is built with Express.js and stores blog posts in memory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/get-npm)

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/Uttamdevsharma/blog-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command. This will start the server with nodemon, which automatically restarts the server on file changes.

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

### Get All Blog Posts

* **GET** `/blogs`

Returns a list of all blog posts.

#### Example Response:

```json
[
    {
        "id": 1,
        "title": "First Blog",
        "description": "This is the first blog post here"
    },
    {
        "id": 2,
        "title": "JavaScript Basics",
        "description": "Learn about variables, functions, and loops in JavaScript."
    }
]
```

### Get a Single Blog Post

* **GET** `/blogs/:id`

Returns a single blog post by its ID.

#### Example Response:

```json
{
    "id": 1,
    "title": "First Blog",
    "description": "This is the first blog post here"
}
```

### Add a New Blog Post

* **POST** `/blogs/add-post`

Creates a new blog post.

#### Request Body:

```json
{
    "title": "New Blog Post",
    "description": "This is the content of the new blog post."
}
```

#### Example Response:

```json
{
    "message": "New blog added successfully",
    "blog": {
        "id": 6,
        "title": "New Blog Post",
        "description": "This is the content of the new blog post."
    }
}
```

### Update a Blog Post

* **PUT** `/blogs/update-post/:id`

Updates an existing blog post.

#### Request Body:

```json
{
    "title": "Updated Title",
    "description": "Updated description."
}
```

#### Example Response:

```json
{
    "message": "Blog updated successfully",
    "blog": {
        "id": 1,
        "title": "Updated Title",
        "description": "Updated description."
    }
}
```

### Delete a Blog Post

* **DELETE** `/blogs/delete-post/:id`

Deletes a blog post by its ID.

#### Example Response:

```json
{
    "message": "Blog deleted successfully"
}
```

## Built With

* [Express.js](https://expressjs.com/) - The web framework used
* [Nodemon](https://nodemon.io/) - To monitor for any changes in your source and automatically restart your server.
