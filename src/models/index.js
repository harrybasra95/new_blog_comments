import { Sequelize } from 'sequelize'
import config from '../config'

const sequelize = new Sequelize(
    config.db.name,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        dialect: 'mysql',
        logging: false,
    }
)

export default sequelize
