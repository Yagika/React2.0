import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getUsersPostsById: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}
export {postsService}