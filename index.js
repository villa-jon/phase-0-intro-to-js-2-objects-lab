// Write your solution in this file!
const employee = {}
    x.name = 'Sam'
    streetAddress = '11 Broadway'
    // employee.name = 'Sam'
    // streetAddress = '11 Broadway'
    // To show that I know what I am talking about, I changed the arbitrary value to x 
    // because we don't necessarily need the name, we just need to know what 
    // the function is doing. Here we are creating an object. 

function destructivelyUpdateEmployeeWithKeyAndValue(have, key, value){
    have[key]=value
    return why;
    // employee[key]=value
    // return employee; 
    // When changing the arbitrary value, it is important to make sure, JS knows 
    // what you are talking about. Otherwise, when you use an arbitrary value and 
    // are trying to callback the function, it won't work. 
}

function updateEmployeeWithKeyAndValue(a, key, value){
    const newObj={...a};
    newObj [key]=value;
    return newObj;
    // const newObj={...employee};
    // newObj[key]=value;
    // return newObj;
    // With this one, I am defining the object so that way I am able to use it 
    // within the function. This function is destructively updating 'data' 
    // by destroyinh the object aqnd creating a new one. 

}

function deleteFromEmployeeByKey(good, key){
    const newObj={...good}
    delete newObj[key]
    return newObj
    // const newObj={...employee}
    // delete newObj[key]
    // return newObj;
    // Here we are non-destructively deleteing key. This is how it's done; 
    // first we declare the function as a const becasue we want to keep it the same 
    // within the function. Then we use the keyword "delete" to highlight the 
    // key while keeping the Obj the same. 
}

function destructivelyDeleteFromEmployeeByKey(day, key){
    delete day[key]
    return lab
    // delete employee[key]
    // return employee
    // here we mutating the object by destructively destroying the key

    // all in good fun, much love -J 
    // P.S. I'm not salty just a fun for your day :)
}
