function shortcut(s1, s2) {
  // your code here
	let a = "";
	let b = "";
	if (s1.length>0){
		a = s1[0];
	}
	if (s2.length>0){
		b = s2[0];
	}
	if (a==="" || b===""){
		return " ";
	}
	else{
		return a+b;
	}
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
