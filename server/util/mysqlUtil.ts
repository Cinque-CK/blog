import * as mysql from 'mysql';
import {dbConfig} from '../config';
const connection = mysql.createPool(dbConfig);
const query = (sql, values?) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })

}
export default query;