/**
 * @swagger
 * components:
 *    schemas:
 *      Books:
 *       type:object
 *       required:
 *          -title
 *          -description
 *           -published
 *       properties:
 *         id:
 *            type:string
 *            description: The auto-generated id of the book
 *         title:
 *            type:string
 *            description: The title of your book
 *         description:
 *             type:string
 *             description:the book explanation
 *         published:
 *              type:boolean
 *              description: whether you have finished reading the book
 *
 *
 *
 *
 *
 *
 *
 *
 */

const express = require("express");
const bookRoutes = require("./routes/book.js");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

// middleware
app.use(express.json());

//difine all our routes
app.use("/", bookRoutes);
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "The documentation of my API",
      version: "0.1.0",
      description:
        "this is a simple API of books documented with swagger documentation",
      contact: {
        name: "Alexander",
        url: "xander.com",
        email: "xander@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const spacs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spacs));

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
