import fetch from "node-fetch";
import inquirer from "inquirer";


const promptForPokemon =async()=>{
   return await inquirer.prompt({
        type :'input',
        name: 'Pokemon_Name',
        msg: "Pokemon name:"
    
    });
   
};
const promptfordownloadinfo = async()=>{
           return await inquirer.prompt({
    type: "checkbox",
    name : 'options',
    message:'Pokemon info to download:',
    choices: [
        new inquirer.Separator("--Options---"),
        {name: "Stats",

        },
        {
            name: "Sprites",

        },
        {
            name:"Artwork",
        },

    ],
})
}

const promptToContinue = async()=>{
     return await  inquirer.prompt({

        type:"list",
        message : "would you like to download info for  another pokemon",
        name: "continue",
        choices : ['Yes' , 'No'],

    });

};      

async function fetchPokemon(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
  


const promptuser = async() =>{
    while(true){
        const pokemonName = await promptForPokemon();
const pokemonJSON = await fetchPokemon(pokemonName.Pokemon_Name);
console.log(pokemonJSON);

const pokemonOptions = await promptfordownloadinfo();
console.log(pokemonOptions.options);
        const keepgoing = await promptToContinue();
        if(keepgoing.continue === "No") break;

    }
};

promptuser();