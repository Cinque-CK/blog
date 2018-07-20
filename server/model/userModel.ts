import query from '../util/mysqlUtil';
class UserModel {
    public static insertData (value: any[]) {
        const sql = 'insert into user set name=?,password=?,email=?,avatar=?,role=?,last_login_at=?,create_at=?,status=?;';
        console.log(sql)
        return query(sql, value)
    }

    public static findDataAny (condition: any){
        let whereClause:string = 'where 0=1';
        for(let prop in condition){
            if(condition.hasOwnProperty(prop)){
                whereClause += ` or ${prop}="${condition[prop]}"`
            }
        }
        const sql = whereClause ==='where 0=1' ? 'select * from user' : `select * from user ${whereClause};`;
        return query( sql )
    }
}

export default UserModel;
