const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsToMany(models.User, { through: models.Like, foreignKey: 'entry_id', as: 'L' });
    }
  }
  Entry.init({
    userId: DataTypes.INTEGER,
    url: DataTypes.TEXT,
    tag: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    visibility: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};
