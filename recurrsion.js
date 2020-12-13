
let user ={
    name: "Nitin",
    address: {
      personal: {
        city: "Bari",
        state: "Uttrakhand",
        area: "Majra",
      },
      office: {
        city: "Hyderabad",
        area: {
          landmark: "Hi Tech",
        }
      }
    }
  }

let magic = (inputObj, parent, finalObj) => {
    for(let key in inputObj){
        if(typeof(inputObj[key]) === 'object'){
            magic(inputObj[key], parent + "_"+ key, finalObj);
        } else {
            finalObj[parent+ "_"+ key] = inputObj[key];

        }
    }
}

let finalObj= {};
magic(user, "user", finalObj);

console.log(finalObj);