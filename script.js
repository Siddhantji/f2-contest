/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr2 =[
  { id: 4, name: "sidd", age: "20", profession: "developer" },
  { id: 5, name: "shivam", age: "26", profession: "developer" },
  { id: 6, name: "sam", age: "39", profession: "admin" },
]; 

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const a = arr.map((person)=>{
    if(person.profession === "developer"){
      return person;
    }
  });
  console.log(a.filter(Boolean));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const a = [];
  arr.forEach(person => {
    if(person.profession === "developer"){
      a.push(person);
    }
  });
  console.log(a);
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(obj => obj.profession != "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const a = arr.concat(arr2);
  console.log(a);
}
