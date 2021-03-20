import {axiosInstance} from "./config";

//所以的请求都在这里统一管理
//axios
//url 如果改了怎么办？
export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

// export const getRecommentRequest = () => {
//   return axiosInstance.get('/recomment')
// }