class Requests {
    static getData(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => resolve(response.json()), err => reject(err));
        })
    }

   static postData(url,data){
      return new Promise((resolve,reject) =>{
        fetch(url,{method: "POST", headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)})
            .then(response => resolve(response.text(), err => reject(err)))   
      }) 
}

   static putData(url,data){
      return new Promise((resolve,reject) =>{
        fetch(url,{method: "PUT", headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)})
            .then(response => resolve(response.text(), err => reject(err)))   
      }) 
}

   static deleteData(url,data){
      return new Promise((resolve,reject) =>{
        fetch(url,{method: "DELETE", headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
           })
        .then(response => resolve(response.text(), err => reject(err)))   
      }) 
}
}

export { Requests }




/*putData(sendData) {
    sendData = {
      "FullName": "Argishti Yeghiazaryan",
      "CompanyName": "BetConstruct",
      "Position": "Developer",
      "Country": "Armenia",
      "Email": "eagis92@mail.ru",
      "GuId": "e412a0f0-1dc7-4926-af3b-2f7e89de26a5"
    };
    Requests.putData('http://crmbetd.azurewebsites.net/api/contacts',sendData ).then(res => console.log(res))
  } */

/*  DELETE  static postData(url){
      return new Promise((resolve,reject) =>{
        fetch(url,{method: "DELETE", headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
          //  body: JSON.stringify(data)}) 
            .then(response => resolve(response.text(), err => reject(err)))   
      }) 
}  */