const { conn } = require('./conn');

const getAllItems = async() => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id');
         return rows
    } catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
    }
}

const getItem = async(id) => {
  try {
    const [rows] = await conn.query('SELECT * FROM product INNER JOIN licence ON product.licence_id= licence.licence_id where product_id='+ id + ';');
    
    return rows
    
  }catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
    }
}


const crearItem = async (params) => {
	try {
		const [creado] = await conn.query('INSERT INTO product SET ? ;', params)
		return creado
	} catch (error) {
		throw error
	} finally {
		conn.releaseConnection()
	}
}



module.exports = {
	getAllItems,
	getItem,
  crearItem,
  
}