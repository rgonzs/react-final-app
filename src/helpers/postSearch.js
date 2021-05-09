// import axios from 'axios';
const axios = require('axios');

export const postSearch = async (url, data) => {
  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.post(url, data, { headers: headers });
    console.log(typeof response)
    console.log(response)
    return response;
  } catch (e) {
    console.log(e)
    return 'Error';
  }
};

// console.log(
//   postSearch('http://localhost:3333/', {
//     ruc: '20478005017',
//     tipoDoc: '01',
//     comprobante: 'F001-1',
//   }).then((resp) => console.log(resp)),
// );
