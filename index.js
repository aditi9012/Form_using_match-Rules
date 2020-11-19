// Import stylesheets
import "./style.css";
import matchRules from "match-rules";

window.formValidation = function() {
  let form = document.forms["registration"];
  let firstName = form["firstName"].value;
  let lastName = form["lastName"].value;
  let email = form["email"].value;
  let address = form["address"].value;
  let pinCode = form["pinCode"].value;
  let mobile = form["mobile"].value;
  let social = form["social"].value;

  // window.validate = function() {
  //   let form = document.forms["form"];
  //   let fname = form["fname"].value;
  //   let lname = form["lname"].value;
  //   let address = form["address"].value;
  //   let email = form["email"].value;
  //   let dob = form["dob"].value;
  //   let mobile = form["mobile"].value;
  //   let city = form["city"].value;
  //   let country = form["country"].value;
  //   let pincode = form["code"].value;
  //   let gender = form["gender"].value;
  //   let linkedin = form["linkedin"].value;
  //   let github = form["github"].valu

  //let dOB=document.registration.dOB;
  // let social = document.registration.social;
  //     if(valid_firstName(firstName))
  //     {
  //       if(valid_lastName(lastName)){
  //          if(valid_email(email)){
  //             if(valid_address(address)){
  //               if(valid_pin(pinCode)){
  //                 if(valid_mobile(mobile)){
  //                   if(valid_social(social)){

  //                   }
  //                 }
  //               }
  //             }
  //          }
  //       }
  //     }

  const FORM_RULES = {
    firstName: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    lastName: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    address: (exp, sourceObject) => /^[a-zA-Z0-9 ]+$/.test(exp),
    mobile: (exp, sourceObject) => exp.length == 10,
    pinCode: (exp, sourceObject) => exp.length == 6
  };

  // source object
  const user = {
    firstName,
    lastName,
    address,
    mobile,
    pinCode,
    social
  };
  console.log(user);

  console.log(matchRules(user, FORM_RULES));

  if (matchRules(user, FORM_RULES)) {
    return true;
  } else {
    // alert("invalid details!");
    return false;
  }
};

function valid_firstName(firstName) {
  if (firstName.value.length == 0) {
    return alert("First Name is required!!!");
  } else {
    return true;
  }
}
function valid_lastName(lastName) {
  if (lastName.value.length == 0) {
    return alert("Last Name is required!!!");
  } else {
    return true;
  }
}
function valid_email(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
  }
}
function valid_address(address) {
  if (address.value.length == 0) {
    return alert("Address is required!!!");
  } else {
    return true;
  }
}
function valid_pin(pinCode) {
  var numbers = /^[0-9]+$/;
  if (pinCode.value.match(numbers)) {
    return true;
  } else {
    alert("Pin code must have numeric characters only");
    pinCode.focus();
    return false;
  }
}
function valid_mobile(mobile) {
  var numbers = /^[0-9]+$/;
  if (mobile.value.match(numbers)) {
    if (mobile.value.length < 10 || mobile.value.length >= 11) {
      alert("Mobile Number is invalid!!!");
    } else {
      return true;
    }
  } else {
    alert("Mobile Number must have numeric characters only");
    mobile.focus();
    return false;
  }
}
function valid_social(social) {
  var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (social.value.match(regexp)) {
    return true;
  } else {
    alert("Invalid Social Link !!!");
  }
}
