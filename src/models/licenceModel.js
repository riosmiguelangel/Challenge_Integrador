const { conn } = require('./conn');

const getAllItemLicence = async() => {
  try {
      const [rows] = await conn.query('SELECT * FROM licence;');
       return rows
  } catch (error) {
  throw error
} finally {
  conn.releaseConnection()
  }
}


module.exports = {
    getAllItemLicence,
}