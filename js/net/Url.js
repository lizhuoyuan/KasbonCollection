/**
 * Created by 李卓原 on 2018/7/9.
 * email: zhuoyuan93@gmail.com
 *
 */

export const DEBUG = false;
export const baseUrl = 'http://api.hadoop.network';
if (DEBUG) {

}
const Url = {
    app_login: `${baseUrl}/admin/api/auth/app_login`,
    app_task_list: `${baseUrl}/admin/api/collection/app_task_list`,
    app_task_detail: `${baseUrl}/admin/api/collection/app_task_detail`,

};

export default Url;
