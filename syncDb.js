const { sequelize } = require('./models');

module.exports.syncDb = async function main() {
    await sequelize.sync({ force: true });
}

