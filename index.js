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
  const FORM_RULES = {
    firstName: (exp) => {console.log(sourceObject);return /^[a-zA-Z ]+$/.test(exp)},
    lastName: (exp) => /^[a-zA-Z ]+$/.test(exp),
    address: (exp) => /^[a-zA-Z0-9 ]+$/.test(exp),
    mobile: (exp) => exp.length == 10,
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
    alert("invalid details!");
    return false;
  }
};
