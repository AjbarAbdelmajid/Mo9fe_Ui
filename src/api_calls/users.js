import axios from 'axios'
import config from '../config'
import {AccountsImages} from "../store/action/userAction";



//get users account image
export function getUsersAccountImages (){
    return (dispatch) => {

        //get data from api
        return axios.get(`${config.baseUrl}getImage/users`)
            .then(response=>{
                if (response.data.success ){

                    let holder = response.data.data;
                    // filter the image path
                    holder.filter(element => {
                        let thePath = ''+element.file_path;
                        return element.file_path = config.baseUploadUrl + thePath.substring(thePath.indexOf('upload')).replace(/\\/g, '/');
                    });
                    dispatch(AccountsImages(holder));

                }

            }).catch(err => {
                console.log(err);
            });
    }
}
