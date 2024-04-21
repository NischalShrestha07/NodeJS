module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("todo", {
        // blog ko blogs vanera banxa hai phpAdmin ma
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      imageUrl:{
        type : DataTypes.STRING,
        allowNull : true
      }
   
      
    
    });
    return Todo;
  };