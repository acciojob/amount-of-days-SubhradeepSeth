//your JS code here. If required.
let r=prompt();
function daysOfAYear(r){
	if(r%4===0 && r%100!==0) return 366;
	else if(r%400==0) return 366;
	else return 365;
}
alert(daysOfAYear(r));


