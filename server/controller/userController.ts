import * as moment from 'moment';
import * as crypto from 'crypto';
// import * as jwt from 'jsonwebtoken';
import { isEmail } from 'validator';
import UserModel from '../model/userModel';

const md5 = crypto.createHash('md5');
interface IUser {
    name: string,
    password: string,
    email: string,
    avatar: string | undefined,
    role: number | undefined,
    last_login_at: string | undefined,
    create_at: string | undefined,
    status: number | undefined
}
class UserController {

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
}

// const userController =  {
//     register: async function(ctx: Context) {
//         console.log(ctx)
//         let { username, password, email } = ctx.request.body;
//         if (!username) {
//             ctx.throw(400, { message: '用户名不可为空' });
//         }
//         if (!password) {
//             ctx.throw(400, { message: '密码不可为空' });
//         }
//         if (!isEmail(email)) {
//             ctx.throw(400, { message: '邮箱格式不合法' });
//         }
//         const users = await getUsers({ type: 'OR', keyVals: { user_name: username, user_email: email } }, undefined).catch(e => ctx.throw(500));
//         if (users.length > 0) {
//             ctx.send({ status: 'failed', message: '该用户已被注册' });
//         } else {
//             const md5 = crypto.createHash('md5');
//             password = md5.update(password).digest('hex');
//             const result = await createUser({
//                 username,
//                 password,
//                 email
//             }).catch(e => {
//                 if (e.code === 11000) {
//                     ctx.send({ status: 'failed', message: '该用户已被注册' });
//                 } else {
//                     ctx.throw(500);
//                 }
//             });
//             ctx.send({ status: 'success', message: '注册成功', data: result });
//         }
//     },

//     login: async function(ctx: Context) {
//         console.log(ctx)

//         let { username, password } = ctx.request.body;
//         if (!username || !password) {
//             ctx.throw(400, { message: '登录信息缺失' });
//         } else {
//             const md5 = crypto.createHash('md5');
//             password = md5.update(password).digest('hex');
//         }
//         const users = await getUsers(
//             {
//                 type: 'AND',
//                 keyVals: { user_name: username, user_password: password }
//             },
//             undefined
//         ).catch(e => ctx.throw(500));
//         if (!!users && users.length === 1) {
//             const user = users[0];
//             const token = jwt.sign(
//                 {
//                     id: user.user_id,
//                     username: user.user_name,
//                     avatar: user.user_avatar,
//                     role: user.user_role,
//                     registerTime: user.user_reg_time,
//                     lastLoginTime: user.user_last_login_time
//                 },
//                 'Cinque',
//                 { expiresIn: '4h' }
//             );
//             await updateUser({
//                 user_id: user.user_id,
//                 user_last_login_time: Date.now()
//             }).catch(e => ctx.throw(500));
//             ctx.send({ status: 'success', message: `登录成功`, data: token });
//         } else {
//             ctx.send({ status: 'failed', message: `用户名或密码错误` });
//         }
//     },

//     /**
//      * get all users
//      */
//     getUsers: async function(ctx: Context) {
//         console.log(ctx)

//         const { page, pageSize } = ctx.query;
//         const pagination = !!page && !!pageSize ? { page, pageSize } : undefined;
//         if (true) {
//             const users = await userModel.findAll().catch(e => ctx.throw(500));
//             ctx.send({
//                 status: 'success',
//                 message: '获取用户列表成功',
//                 data: {
//                     items: users
//                 }
//             });
//         } else {
//             ctx.throw(403, { message: '非管理员禁止查看用户列表' });
//         }
//     }
// };

export default UserController;
