module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define("komik", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tittle:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
        },
        author:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return komik;
}