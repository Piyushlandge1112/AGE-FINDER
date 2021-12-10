var current = getNumber("CurrentYear");
var birth = getNumber("BirthYear");
onEvent("button1", "click", function( ) {
  setScreen("screenHome");
});
onEvent("buttonFind", "click", function( ) {
  var current = getNumber("CurrentYear");
  var birth = getNumber("BirthYear");
  //Declare Current to Number in "CurrentYear"
  //Declare Birth to Number in "BirthYear"
  //Change "birth" to "Birth"
  setNumber("ShowAge", current - birth);
});
