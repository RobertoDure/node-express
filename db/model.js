var Sequelize = require('sequelize');
  
const sequelize = new Sequelize('classicmodels', 'root', 'root', {
    dialect: 'mysql',
    host: "localhost",
    port: 3306,
  });

// //Create Item Table Structure
 var Item = sequelize.define('Item', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name:Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
    
 });
 
//Applying Item Table to database
//console.log(sequelize.sync({force:true}));

// //There is two way of inserting data into database
//One way: Forming object from modal
//var item1 = Item.build({
 //   id: 3,
 //   name:'Laptop',
 //   description: 'Acer 2340TL',
 //   qty: 23
//});
//Inserting Data into database
//item1.save();


  Item.findAll({attributes: ['name', 'description']});

console.log(Item.findAll({attributes: ['name', 'description']}));
//With where condition
function parse(name) {
    return function dentro() {
        return name +" Seja bem vindo.!";
    }
    
}

console.log(parse('José')());