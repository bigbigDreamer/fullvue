import axois from '../tools/axios'

/**
 * @time  2019/6/15 20:06
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  axios本身返回得就是Promise
 */
axois.request({
  baseUrl:'/getData',
  data:{
    //something
  }
})
.then(data => {
  console.log(data);
})
.catch(err => Promise.reject(err));
