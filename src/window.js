$("#currTime").text("Time: " + Math.floor(new Date().getTime()/1000));

var input = $("#timeInput");
var output = $("#timeOutput");
input.on('input',function() {
	var text = input.val();
	output.text(convertTimestamp(parseInt(text)));
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