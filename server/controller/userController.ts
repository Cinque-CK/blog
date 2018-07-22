import * as moment from 'moment';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { isEmail } from 'validator';
import UserModel from '../model/userModel';

const md5 = crypto.createHash('md5');
interface IUser {
    id: number | undefined,
    name: string,
    password: string,
    email: string | undefined,
    avatar: string | undefined,
    role: number | undefined,
    last_login_at: string | undefined,
    create_at: string | undefined,
    status: number | undefined
}
class UserController {

    public static login = async function(ctx: any) {
        const user: IUser | any = ctx.request.body;
        const { name, password } = user;
        if (!name || !password) {
            ctx.throw(400, { message: '登录信息缺失' });
        } else {
            const encrypted = md5.update(password).digest('hex');
            let payload: object;
            if(isEmail(name)){
                payload = {
                    email: name,
                    password: encrypted
                }
            } else {
                payload = {
                    name,
                    password: encrypted
                }
            }
            const users:any = await UserModel.findDataAny(payload).catch(e => {ctx.throw(e.code)});
            if (!!users && users.length === 1) {
                const user:IUser = users[0];
                const {id, name, password, email, avatar, role, create_at, status} = user;
                const token:string = jwt.sign(
                    {id,name,password,email,role},
                    'Cinque',
                    { expiresIn: '4h' }
                );
                await UserModel.updateData([name, password, email, avatar, role, moment().format('YYYY-MM-DD HH:mm:ss'), create_at, status, id ]).catch(e => ctx.throw(e.code));
                ctx.send({ status: 'success', message: `登录成功`, data: token });
            } else {
                ctx.send({ status: 'failed', message: `用户名或密码错误` });
            }
        }
        
    }

    public static register = async function(ctx: any) {
        const user: IUser | any = ctx.request.body;
        const { name, password, email } = user;
        if (!name) {
            ctx.throw(400, { message: '用户名不可为空' });
        }
        if (!password) {
            ctx.throw(400, { message: '密码不可为空' });
        }
        if (!isEmail(email)) {
            ctx.throw(400, { message: '邮箱格式不合法' });
        }
        const users:any = await UserModel.findDataAny({name, email});
        if (users.length > 0) {
            ctx.send({ status: 'failed', message: '该用户已被注册' });
        } else {
            const result = await UserModel.insertData([name, md5.update(password).digest('hex'), email, 'default.png', 1, '', moment().format('YYYY-MM-DD HH:mm:ss'),1]).catch(e => {
                if (e.code === 11000) {
                    ctx.send({ status: 'failed', message: '该用户已被注册' });
                } else {
                    ctx.throw(500);
                }
            });
            ctx.send({ status: 'success', message: '注册成功', data: result });
        }
    }

    public static getUsers = async function (ctx: any) {
        const { page, pageSize } = ctx.query;
        const pagination = !!page && !!pageSize ? { page, pageSize } : undefined;
        const users = await UserModel.findDataAll({}, pagination);
        ctx.send({
            status: 'success',
            message: '获取用户列表成功',
            data: {
                items: users
            }
        });
    }
}

export default UserController;
