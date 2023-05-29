// const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjYyOTExMWMyOGU2MWQ0MDEyNTQzYyIsInJvbGUiOiJjb2xpYnJpIiwiaWF0IjoxNjg0ODA0NTUwLCJleHAiOjE2ODQ4OTA5NTB9.bDptYtIdTf5scFgZ2Re3GDcN3CL0rbAkavUSHNwakv0'
//     },
//     body: '{"query":"query allOperations($data: FilterBasicInput){\n\tTransactions(data: $data){ \n\ttransactions{\n\t\tid\n\t\ttoCoin\n\t\tfromIp\n\t\ttrxType\n\t\tstatus{value}\n\t\tbankAccount{bank{name}}\n\t\twallet{name}\n\t}\n\t}\n}","operationName":"allOperations","variables":{"data":{"module":"compra"}}}'
//   };
  
//   fetch('http://localhost:3000/graphql', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));