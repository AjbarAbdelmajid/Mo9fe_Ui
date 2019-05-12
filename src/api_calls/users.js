import axios from 'axios'
import config from '../config'
import {UsersData, GetUsersDataBegging} from "../store/action/userAction";

//get users account data
export function getUsers (){
    return dispatch => {

        dispatch(GetUsersDataBegging());
        let holder = {};

        // get the admin token
        axios.patch(`${config.baseUrl}signin`, {user_name: 'admin', password: 'password1'})
            .then(response=>{

                if (response.data.success ){
                    return holder.token = response.data.token
                } else {return holder.token = false}
            })
             .then(()=>{
                 // get users list
                 return axios.get(`${config.baseUrl}users/list`, {headers: {Authorization: holder.token}})
                     .then(res => {
                         // filter the image path
                         holder.data = res.data;
                         holder.data.filter(element => {
                             if (element.picture !== null){
                                 let thePath = ''+element.picture;
                                 return element.picture = config.baseUploadUrl + thePath.substring(thePath.indexOf('upload')).replace(/\\/g, '/');
                             } else {
                                 return element.picture = null
                             }

                         });
                         dispatch(UsersData(holder.data))
                     });
             })
             .catch(err => {
                console.log(err);
            });

    }
}
