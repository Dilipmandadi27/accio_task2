// declared array
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloper() {
  //Write your code here , just console.log
  const p = arr.filter((eployee) => {
    return eployee.profession == "developer";
  });
  p.map((data) => {
    console.log(data);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const f = arr.filter((eployee) => {
    return eployee.profession == "developer";
  });
  f.forEach((data) => {
    console.log(data);
  });
}

function addData() {
  //Write your code here, just console.log
  const newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj);
  console.log(newObj);
}

function removeAdmin() {
  // Find index of admin entry
  const adminIndex = arr.findIndex((employee) => {
    return employee.profession === "admin";
  });

  // Check if admin entry exists
  if (adminIndex !== -1) {
    // Remove admin entry from array
    arr.splice(adminIndex, 1);
    console.log("Admin removed");
  } else {
    console.log("Admin not found");
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "cena", age: "18", profession: "developer" },
    { id: 6, name: "sparrow", age: "20", profession: "developer" },
    { id: 7, name: "knight", age: "19", profession: "admin" },
  ];
  const newArr = arr.concat(arr2);
  console.log(newArr);
}

