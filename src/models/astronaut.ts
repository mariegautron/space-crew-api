import { Model, Sequelize, DataTypes } from "sequelize";

export default class Astronaut extends Model {
  public id?: number;
  public name!: string;
}

export const AstronautMap = (sequelize: Sequelize) => {
  Astronaut.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
      },
    },
    {
      sequelize,
      tableName: "astronauts",
      timestamps: false,
    }
  );
  Astronaut.sync();
};
