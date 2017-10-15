
var currTime = $("#currTime");
var input = $("#timeInput");
var output = $("#timeOutput");

currTime.text(Math.floor(new Date().getTime()/1000));

input.on('input',function() {
	var text = input.val();
	output.text(convertTimestamp(parseInt(text)));
});

output.on('click', function() {
	var select = document.getSelection();
	var range = document.createRange();
	range.selectNodeContents($(this)[0]);
	select.removeAllRanges();
	select.addRange(range);
});

currTime.on('click', function() {
	var select = document.getSelection();
	var range = document.createRange();
	range.selectNodeContents($(this)[0]);
	console.log(range);
	select.removeAllRanges();
	select.addRange(range);
});


function convertTimestamp(timestamp) {
  	var d = new Date(0);
  	d.setUTCMilliseconds(timestamp*1000);
  	var str = d.toUTCString();

  	// ghetto af, but works
  	var strArr = str.split(", ");
  	if (strArr.length == 2)
  		str = strArr[1];


  	return str;
  	
}