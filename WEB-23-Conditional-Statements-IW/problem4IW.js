//Credentials saved in the Database after registration
let database_user = "abc@gmail.com";
let database_pass = "abc123";
//User Login
let user = "abc@gmail.com";
let pass = "abc123";

if (database_user==user) {
  if (database_pass==pass){
    console.log ("Login Successful");
  }else {
    console.log ("Incorrect Password");
  }
}else {
  console.log ("Incorrect Username");
}