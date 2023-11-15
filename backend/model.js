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
        updatedAt: false,
    });

    global.Users = connection.define("Users", {
        user_id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        id: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        birthdate: {
            type: Sequelize.DATE
        },
        agreeTerms: {
            type: Sequelize.BOOLEAN
        },
        agreePrivacyPolicy: {
            type: Sequelize.BOOLEAN
        },
    }, {
        tableName: "users",
        createdAt: false,
        updatedAt: false,
    });

    
    connection.sync({
        alert: true
    })

}

module.exports = init;
