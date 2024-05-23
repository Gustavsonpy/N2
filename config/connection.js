import mysql2 from "mysql2/promise.js"

async function connect(){
    if(global.connection && global.connection.state !== "disconnect"){
        return global.connection
    }
    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/pecas")
    console.log("Conectado ao Banco de dados!")
    global.connection = connection
    return connection
}
connect()
export default connect