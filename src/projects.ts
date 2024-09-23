import  Project from "./types/project";
import cv_img from "./assets/csv_project.png"
import memory_card_img from "./assets/memory_card_project.png"
import shopping_cart_img from "./assets/shopping_cart.png"
import inventory_app from "./assets/inventory_app.png"
import battle_ship from "./assets/battle_ship.png"
import weather_app from "./assets/weather_app.png"

const projects:Array<Project> = [
    {
        id:1,
        title:"Cv-application",
        description:"This project was made using react capitalizing react's state management and the ability to share state between components." ,
        img:cv_img,
        altText:"cv-application",
        url:"https://cv-application-ten-nu.vercel.app/",
        github:"https://github.com/Brent-the-carpenter/cv-Application",
    },
    {
        id:2,
        title:"Memory Card Game",
        description:"If you would like to test your memory come play.",
        img:memory_card_img,
        altText:"memory-card-game",
        url:"https://memory-card-game-pearl-eight.vercel.app/",
        github:"https://github.com/Brent-the-carpenter/memory-card-game",
    },
    {
        id:3,
        title:"Shopping Cart",
        description:"This project is a Spa application. It capitalizes on react router to navigate between pages and uses context providers to keep track of items in the shopping cart.",
        img:shopping_cart_img,
        altText:"memory-card-game",
        url:"https://memory-card-game-pearl-eight.vercel.app/",
        github:"https://github.com/Brent-the-carpenter/memory-card-game",
    },
    {
        id:4,
        title:"Inventory app",
        description:"This project is a full stack application. It uses a node.js server to handle requests a Postgress database to handle storage and end EJS templating engine to display the data.",
        img:inventory_app,
        altText:"inventory-app",
        url:"https://inventory-app-misty-thunder-9295.fly.dev",
        github:"https://github.com/Brent-the-carpenter/Inventory-app-odin",

    },
    {
        id:5,
        title:"Weather App",
        description:"This project is a weather app. It uses the open weather api to get the weather data .",
        img:weather_app,
        altText:"weather-app",
        url:"https://brent-the-carpenter.github.io/odin-weather-app/",
        github:"https://github.com/Brent-the-carpenter/odin-weather-app",
    },
    {
        id:6,
        title:"Battle Ship",
        description:"This project is a battle ship game. It is made with vanilla Js to create the game board and the game logic.",
        img:battle_ship,
        altText:"battle-ship",
        url:"https://brent-the-carpenter.github.io/Odin-BattleShip/",
        github:"https://github.com/Brent-the-carpenter/Odin-BattleShip",



    },
    {
        id:6,
        title:"Static Site Generator",
        description:`This project is a static site generator. 
        It uses python to read markdown files and generate html files.
        This project heavily uses classes and inheritance to convert markdown text nodes to html nodes.
        To see it in action click the github link below and fork the project.`,
        img:null,
        altText:null,
        url:null,
        github:"https://github.com/Brent-the-carpenter/static_site_generator_boot.dev",
    }
   

    
]
export default projects