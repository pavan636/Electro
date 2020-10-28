import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Adim User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'tom',
        email: 'tom@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

    {
        name: 'pavan',
        email: 'pavan@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

]


export default users