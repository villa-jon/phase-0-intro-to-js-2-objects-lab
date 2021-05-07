// Write your solution in this file!
const employee = {}
    x.name = 'Sam'
    streetAddress = '11 Broadway'
    // employee.name = 'Sam'
    // streetAddress = '11 Broadway'
    // To show that I know what I am talking about, I changed the arbitrary value to x 
    // because we don't necessarily need the name, we just need to know what 
    // the function is doing. Here we are creating an object. 

function destructivelyUpdateEmployeeWithKeyAndValue(why, key, value){
    why[key]=value
    return why;
    // employee[key]=value
    // return employee; 
    // When changing the arbitrary value, it is important to make sure, JS knows 
    // what you are talking about. Otherwise, when you use an arbitrary value and 
    // are trying to callback the function, it won't work. 
}

function updateEmployeeWithKeyAndValue(redo, key, value){
    const newObj={...redo};
    newObj [key]=value;
    return newObj;
    // const newObj={...employee};
    // newObj[key]=value;
    // return newObj;
    // With this one, I am defining the object so that way I am able to use it 
    // within the function. This function is destructively updating 'data' 
    // by destroyinh the object aqnd creating a new one. 

}

function deleteFromEmployeeByKey(the, key){
    const newObj={...the}
    delete newObj[key]
    return newObj
    // const newObj={...employee}
    // delete newObj[key]
    // return newObj;
    // Here we are non-destructively deleteing key. How this is done 
    // is by not mutating the object itself. 
}

function destructivelyDeleteFromEmployeeByKey(lab, key){
    delete employee[key]
    return lab
    // delete employee[key]
    // return employee
    // 
}
