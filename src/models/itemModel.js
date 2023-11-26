const { conn } = require('./conn');

const getAll = async() => {
    try {
        const [rows] = await conn.query('SELECT *FROM product');
        return rows
    } catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
    }
}


module.exports = {
	getAll,
	
}