var HashValue = document.getElementById('HashVal');
var Field= document.getElementById('data');

var DataValue = Field.value;
var Hash = sha256(DataValue);
HashValue.innerHTML = Hash;

Field.addEventListener("input", function(e) {
	if (e.target.value.length > 0) {
		var DataValue = e.target.value;
		console.log(DataValue);
		var Hash = sha256(DataValue);
		return HashValue.innerHTML = Hash;	
	}
});
