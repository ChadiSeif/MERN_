const mongoose = require("mongoose");

/////// require schema
const { Schema } = mongoose;

/////email validator******

// var validateEmail = function (email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email);
// };
////************* */

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});

// validate: [validateEmail, "Please fill a valid email address"],
// match: [
//   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//   "Please fill a valid email address",
// ],

module.exports = Contact = mongoose.model("contact", contactSchema);
