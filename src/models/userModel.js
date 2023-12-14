const { conn } = require('./conn');
const crypt = require('bcryptjs');
//const { name } = require('ejs');

const crearUsuario = async (params) => {
	//const hash = await crypt.hash(params.password, 12)
    console.log("params: ",params)
	try {
		const [creado] = await conn.query(`INSERT INTO user (name, lastname, email, password) 
			VALUES ("${params.name}", "${params.lastname}", "${params.email}", "${params.password}");`)
           // VALUES ("${params.name}", "${params.lastname}", "${params.email}", "${hash}");`)
        //const [creado] = await conn.query('INSERT INTO user SET ? ;', params , hash)
		return creado
	} catch (error) {
		console.log(error)
	} finally {
		conn.releaseConnection()
	}
}

const verificarUser = async (email, password) => {
	try {
		const [verificado] = await conn.query(`SELECT * FROM user WHERE email = "${email}" ;`)
		return verificado
	} catch (error) {
		console.log(error)
	} finally {
		conn.releaseConnection()
	}
}

module.exports = {
    crearUsuario,
    verificarUser,
}