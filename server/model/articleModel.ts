import query from '../util/mysqlUtil';
interface IPagination {
    page: number,
    pageSize: number
}
class ArticleModel {
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

    public static findDataAll (condition : any, pagination?: IPagination){
        let whereClause:string = 'where 1=1';
        for(let prop in condition){
            if(condition.hasOwnProperty(prop)){
                whereClause += ` and ${prop}="${condition[prop]}"`
            }
        }
        if(pagination){
            const {page, pageSize} = pagination;
            whereClause += ` limit ${pageSize} offset ${(page - 1)*pageSize }`
        }
        const sql =  `select * from user ${whereClause};`;
        return query( sql )
    }

    public static insertData (value: any[]) : Promise<{}> {
        const sql = 'insert into user set name=?,password=?,email=?,avatar=?,role=?,last_login_at=?,create_at=?,status=?;';
        return query(sql, value)
    }
    
    public static updateData (value: any[]){
        const sql = 'update user set name=?,password=?,email=?,avatar=?,role=?,last_login_at=?,create_at=?,status=? where id=?;';
        return query(sql, value)
    }
}

export default ArticleModel;
