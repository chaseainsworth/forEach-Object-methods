//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

const objInfo = Object.entries(obj); //?

const displayInfo = function(item) {
  console.log(`${item[0]} is called ${item[1].name} and they are ${item[1].age} years old.`);
}

objInfo.forEach(displayInfo);

// Use Object Methods
// Create an alphabetical list of every folder in the documents object (the keys are the folders)
// Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};
const docs = Object.keys(documents);

docs.sort(); //?

const files = Object.values(documents);

console.log(files[0].concat(files[1], files[2], files[3])); //?

//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};

const compare = function(obj1, obj2) {
  let bookA = Object.entries(obj1); //?
  let bookB = Object.entries(obj2); //?

  if (bookA.toString() == bookB.toString()) {
    console.log("Same!");
  } else {
    console.log("Different!");
}
}

compare(book1, book2); //?
