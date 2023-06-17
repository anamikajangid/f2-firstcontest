/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let result = arr.map(function(element){
    if(element.profession === "developer"){
      console.log(element);  
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.profession === "developer"){
      console.log(element);  
    }
  })
}

function addData() {
  //Write your code here, just console.log
 const employee = {id:4,name:"susan",age:"20",profession:"intern"};
 arr.push(employee);
 console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let changedarr = arr.filter(function(element){
    if(element.profession !== "admin"){
      console.log(element);
    }
  })

}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 11, name: "jyoti", age: "28", profession: "dava_programmer" },
    { id: 12, name: "Ram", age: "21", profession: "Designer" },
    { id: 13, name: "mohan", age: "115", profession: "aWeb_Devloper" },
  ];
  const data = arr.concat(newArr);
  console.log(data);
}
