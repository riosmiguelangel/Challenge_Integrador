const { conn } = require('../config/conn')

const getItems = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM items WHERE price > ? LIMIT ? OFFSET ?;',
        {price, limit, offset});
        return rows;
    }
    catch (error) {
        throw error;
    }
    finally {
        conn.realeseConnection();
    }
}

module.exports = {
    getItems
}