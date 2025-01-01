//if we know there is a certain code that may throw an error then use try
//because if it try and fail to generate output it will go to catch block and run the remaining code

try {
  let a;
  console.log(a.length); // Correct way to access the length property
  console.log("hi there from inside");
} catch (e) {
  console.log("inside catch");
}

//here try didnt run so it went to catch, try correcting try block it will run ie give some string to a
