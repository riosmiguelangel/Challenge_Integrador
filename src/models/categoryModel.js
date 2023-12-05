const { conn } = require('./conn');

const getAllItemCategory = async() => {
  try {
      const [rows] = await conn.query('SELECT * FROM category;');
       return rows
  } catch (error) {
  throw error
} finally {
  conn.releaseConnection()
  }
}


module.exports = {
    getAllItemCategory,
}