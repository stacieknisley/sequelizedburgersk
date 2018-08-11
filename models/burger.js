// #### Model setup
//     * Inside your`burger` directory, create a folder named`models`.
//   * In`models`, make a`burger.js` file.
//     * Inside`burger.js`, import `orm.js` into`burger.js`
//     * Also inside`burger.js`, create the code that will call the ORM functions 
//         using burger specific input for the ORM.
// code that will call the ORM functions 
// * Replacing your MySQL`Burger` model with a Sequelized equivalent.

//     * Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.
//       * There's no option to include that default in the command line, so you'll need to open up your editor to make this change. 
//     * Don't forget to sync the models!


module.exports = function (sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return burger;
}