import express from "express";

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine","ejs"); //ejs giong jsp
    app.set("views","./src/views") //set duong link cho ejs(viet ejs trong view)
}

module.exports = configViewEngine;