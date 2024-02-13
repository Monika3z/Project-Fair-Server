
   Server using express js
   -------------------------
   1.create a folder for a Server
   2.cerate package.json : using npm init -y
   3.install external package to create server : using npm, npm i express cors dotenv
   4.create .env file : to hold environmental variable
   5.create gitignore file, and add node_module,.env
   6.create index.js file
   7.create express server in index.js

     - import dotenv package,call config method : to load content of.env file into process.env
     - import express to a variable
     - import cors to a variables
     - create express server : call express()
     - use cors in express server : call cors
     - create a port to host server app
     - server must listen the port for client request
     - to resolve client request (http GET/POST/PUT/DELETE)
     - server .httpMethod(path,request handler function(req,res)=>{})
     - create a condrollers folder in server app
       - create js file for user management
       - create a routes folder in server app
       - create a router.js file inside the folder
       - import express
       to set up Routes for express router class

   8.to run server app :use node index.js(npx nodemon index.js)
    - update it as start command in pakage.json 



