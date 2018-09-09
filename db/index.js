const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL)


const User = conn.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

const Manager = conn.define('managers', {
    name: {
        type: Sequelize.STRING
    }
})

User.belongsTo(User, { as: 'manager' })


const syncAndSeed = () => {
    conn.sync({ force: true })
        .then(() =>
            Promise.all([
                User.create({ name: "Moe" }),
                User.create({ name: "Larry" }),
                User.create({ name: "Curly" }),
            ]
            )
        )
        .then(([Moe, Larry, Curly]) => {
            Promise.all([
               Larry.setManager(Moe),
               Curly.setManager(Larry)
            ])
        })
}


module.exports = {
    models: {
        User
    },
    syncAndSeed
}