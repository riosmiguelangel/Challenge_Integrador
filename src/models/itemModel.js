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

const getLastItems = async() => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id  ORDER BY product_id DESC LIMIT 5');
         return rows
    } catch (error) {
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


const edit = async (params, id) => {
	try {
		const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, {product_id: id}]);
	  	const response = {
			isError: false,
			message: `El item fue modificado exitosamente.`,
			status: rows,
	  };
  
	  return response;
	} catch (e) {
	  const error = {
		isError: true,
		message: `No pudimos modificar el item seleccionado, error: ${e}`
	  };
  
	  return error;
	} finally {
	  await conn.releaseConnection();
	}
  };

  const deleteOne = async ( id) => {
	try {
	  const [rows] = await conn.query('DELETE FROM product WHERE product_id = ?;', [id]);
	  const response = {
		isError: false,
		data: rows,
		message: `Item borrado exitosamente.`,
		
	  };
	 
	  return response;
	} catch (e) {
	  const error = {
		isError: true,
		message: `No pudimos insertar los valores seleccionados por: ${e}`
	  };
  
	  return error;
	} finally {
	  await conn.releaseConnection();
	}
  }


module.exports = {
	getAllItems,
	getItem,
  	crearItem,
	edit,
	delete : deleteOne,
	getLastItems,
}