import _axios from 'axios';

// const axios = (baseURL) => {
//     const instance = _axios.create({
//           baseURL: baseURL || 'http://localhost:3000',
//           timeout: 1000,
//         });

//      return instance;
// }

const axios = (baseURL) => {
  const instance = _axios.create({
        baseURL: baseURL || '/topic/projectblue1095',
        timeout: 1000,
      });

   return instance;
}

// const axios = (baseURL) => {
//   const instance = _axios.create({
//         baseURL: baseURL || 'https://esg-dev-kai.businesstoday.com.tw/topic/projectblue1095',
//         timeout: 1000,
//       });

//    return instance;
// }

export {axios};
export default axios();
