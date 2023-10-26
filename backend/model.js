function init(Sequelize, connection) {
    global.Perfume = connection.define("Perfume", {
        f_id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        f_name: {
            type: Sequelize.STRING
        },
        f_price: {
            type: Sequelize.INTEGER
        },
        f_scent: {
            type: Sequelize.STRING
        },
        f_note: {
            type: Sequelize.STRING
        },
        f_keyword: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "f_list",
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    })

    connection.sync({
        alert: true
    })
}

module.exports = init
