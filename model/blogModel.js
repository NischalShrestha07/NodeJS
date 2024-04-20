module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
        // blog ko blogs vanera banxa hai phpAdmin ma
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
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
    return Blog;
  };