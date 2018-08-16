

// ======= ======= ======= solution ======= ======= =======
// ======= ======= ======= solution ======= ======= =======
// ======= ======= ======= solution ======= ======= =======

// ======= data =======
let students = {};


// ======= validateNewStudent =======
function validateNewStudent() {
  console.log("== validateNewStudent ==");

  // this statement gets the value of the text entered into the studentEntry input box
  // the syntax demonstrates "chaining" (linking methods and/or properties into one statement)
  // we are connecting the getElementById method to the value property
  let newStudent = document.getElementById("studentEntry").value;
  console.log("newStudent:", newStudent);

  // we will be putting a message on the page conditionally
  // one of the conditions is "no message" (user has entered a student name)
  // the message variable is "initialized" as an empty string (to display for "correct" condition)
  let message = "";

  // the message will be displayed in the message element (a <p> tag)
  let messageEl = document.getElementById("message");
  console.log("messageEl:", messageEl);

  // ======= conditional statements =======
  // check whether the student name was entered


  // == name entered ==
  // if name was entered, the newStudent variable is "truthy" (it has a value)
  if (newStudent) {
    console.log("** newStudent **");          // quick check of if...else functionality for truthy

    // call addNewStudent function and pass the student name (newStudent variable) to it
    addNewStudent(newStudent);

    // this function is not yet complete (it will assign students to a house)
    assignStudentHouses();

    // clear the student name entry field (so it is ready for a new student name)
    document.getElementById("studentEntry").value = "";


  // == name NOT entered ==
  // if no name was entered, newStudent will have a value of "" which is "falsey"
  } else {
    console.log("** no student **");          // quick check of if...else functionality for falsey
    message = "Please enter a student name";  // now we re-define the message
  }


  // regardless of if...else conditions, we want to display a message:
  //   • display "" for name entered condition (it's completely empty, but it's still a message)
  //   • display "Please enter a student name" for no name entered

  console.log("message:", message);
  messageEl.innerText = message;
}


// ======= assignStudentHouses =======
function assignStudentHouses() {
  console.log("== assignStudentHouses ==");
  // this will assign students to the appropriate house
  // CHALLENGE: how would you do this?  consider:
  //   • how to enter house names ("pre-wire" in array or make user enter manually?)
  //   • how to set student object house parperty to the value of the assigned house
  //   • example of students object with two student objects contained in it:

  //     students = {
  //       harry: {
  //         name: "harry",
  //         house: "harrysHouse"
  //       },
  //       hermione: {
  //         name: "hermione",
  //         house: "hermionesHouse"
  //       }
  //     }
}


// ======= addNewStudent =======
function addNewStudent(newStudent) {
  console.log("== addNewStudent ==");

  // this is the most difficult to grasp function...
  // its purpose is to create a new student object for each student entered
  // the student object will *eventually* hold lots of data about the student:
  //   • name
  //   • grade
  //   • house
  //   • limitless other data pints a school would need for managing its students
  // the student object is and empty object {} when initially created
  // properties are added to it by subsequent lines of code (and eventually other functions)

  // check the current status of the students object
  console.log("students:", students);

  // add new student object to students object
  students[newStudent] = {};

  // add a name property to the student object and set its value to the newStudent variable
  students[newStudent].name = newStudent;

  // add a house property to the student object and set its value to null (will be filled in later)
  students[newStudent].house = null;

  // check the status of the master students object (should show new student added)
  console.log("students:", students);

  // get the element that will hold names of currently entered students
  let studentEl = document.getElementById("students");

  // student names will be contained in a string (to be displayed in studentEl element)
  // studentNames will hold student names and is initialized as empty string
  let studentNames = "";

  // iterate through through the student object
  // the student object has two key/value pairs (name:<studentName>, house:null) for each student
  // we are using square bracket notation to work with students object programmatically
  for (const key in students) {

    // display the key for each student (should be student name but used as an object key)
    console.log("key:", key);

    // display the value of the current key (note that object[key] is the syntax for getting value)
    console.log("value:", students[key]);

    // get the current student name from the student object
    let studentName = students[key].name;
    console.log("studentName:", studentName);

    // add the studentName to the studentNames string
    studentNames += studentName + ", ";   // note the "+=" operator adds new content to existing content
                                          // the ", " string adds a parenthesee and a space after each name
  }

  // set the contents of the studentEl (<p> tag) to the completed studentNames string
  studentEl.innerText = studentNames;
}


// ======= activateAllBtns =======
function activateAllBtns() {
  console.log("== activateAllBtns ==");

  // get the addStudentBtn and addProfBtn elements from the DOM into the javascript process
  let addStudentBtn = document.getElementById("addStudentBtn");
  let addProfBtn = document.getElementById("addProfBtn");

  // this adds a click listener and a function to call when element is clicked
  // vocabulary: a function used like this is called a "callback"
  addStudentBtn.addEventListener("click", validateNewStudent);  // call validateNewStudent when clicked

  // alternative syntax for assigning an event listener
  // this format defines an anonymous function (it does not have a name) for the callback
  addProfBtn.addEventListener("click", function() {
    console.log("-- addProfBtn.click --");
  });
}


// ======= makeWeeklySchedule =======
function makeWeeklySchedule() {
  console.log("== makeWeeklySchedule ==");

  // ======= concepts =======
  // some array methods that mutate the array (change its contents)
  // other methods generate alternative arrays (and leave original untouched)

  // ======= spread =======
  // the spread operator (...) delivers (or "spreads") the contents of its array into a new array
  let weekend = ['Sat', 'Sun'];
  let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  // above two arrays are combined into a new allDays array
  let allDays = [...weekend, ...weekDays];

  // verify that allDays contains both weekend and weekdays
  console.log("allDays:", allDays);


  // ======= shift =======
  // shift adds an item to the BEGINNING of the array (the array is changed or MUTATED)
  let saturday = allDays.shift();
  console.log("allDays:", allDays);


  // ======= push =======
  // push adds an item to the END of the array (the array is changed or MUTATED)
  allDays.push(saturday);
  console.log("allDays:", allDays);


  // ======= splice (remove and add) =======
  // splice can add, remove or remove/add items to an array
  // this example shows first removing then adding items
  // syntax: array.splice(index, howmany, item1, ..., itemX)
  allDays.splice(3, 1, "HumpDay");      // start removal at index 3 (contains 'Wed')
                                        // remove 1 item ('Wed')
                                        // add 1 item ('HumpDay')
  console.log("allDays:", allDays);


  // ======= splice (add only) =======
  // this example shows adding an item
  // syntax: array.splice(index, 0, item1, ..., itemX)
  allDays.splice(5, 0, "Pre-Friday");   // start adding at index 5 (contains 'Thu')
                                        // do not remove any items (the "howmany" parameter is set to 0) 
                                        // add 1 item ('Pre-Friday') at index 5 position
  console.log("allDays:", allDays);

  // same syntax (we are again adding without removing)
  allDays.splice(7, 0, "Pre-Saturday");   // start adding at index 7 (contains 'Sat')
                                          // add 1 item ('Pre-Saturday') at index 7 position
  console.log("allDays:", allDays);


  // ======= splice (remove only) =======
  // this example shows removing 1 item
  // to remove more than 1 item change the howmany parameter
  // syntax: array.splice(index, howmany)
  let extraDay1 = allDays.splice(5, 1);   // start removal at index 5 (contains 'Pre-Friday')
  console.log("allDays:", allDays);

  let extraDay2 = allDays.splice(6, 1);   // start removal at index 6 (contains 'Pre-Saturday')
  console.log("allDays:", allDays);


  // ======= replace item =======
  // by using the array[index] syntax you can directly change the value at that position

  // change value at index 3 from "HumpDay" to "Wed"
  allDays[3] = 'Wed';     
  console.log("allDays:", allDays);


  // ======= for...of =======
  // this is an alternative syntax to the for loop (many coders find it easier to read)
  // iterate through an array (alternative to for loop)
  for (const day of allDays) {
    console.log("day:", day);     // confirm the current value of the allDays array
  }
}


// ======= updateTitle =======
function updateTitle(newTitle) {
  console.log("== updateTitle ==");

  // varify that the newTitle variable is being received by updateTitle
  console.log("newTitle:", newTitle);

  // get element that holds title text (check via CRTL - click > Elements pane in Chrome)
  let titleEl = document.getElementById("mainTitle");

  // verify that element was saved to titleEl variable
  console.log("titleEl:", titleEl);

  // set text for titleEl to newTitle text
  titleEl.innerText = newTitle;
}


// ======= initialize =======
function initialize() {
  console.log("== initialize ==");    // all methods should be identified with console printout of name

  // create a variable to hold the text for the new title
  const newTitle = "Hogwarts";

  updateTitle(newTitle);    // epass the newTitle variable to the updateTitle() function
  makeWeeklySchedule();     // demonstrats array methods
  activateAllBtns();        // examples of adding event listeners to DOM elements
}


// ======= kick off project =======
initialize();               // calls initialize function (which in turn calls other functions)










// =======
