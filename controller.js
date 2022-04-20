var now_theme = 0;

// Used to change the value of a global variable
function setGlobalVariable(variable_name, variable_value){
	document.documentElement.style.setProperty(variable_name, variable_value);
}

// The response function of the switch themem button changes the value of 
// the global variable when the button is clicked to achieve the effect of switching themes.
function switch_theme(){
	if(now_theme==0){
		setGlobalVariable("--background_color", "#26333A");
		setGlobalVariable("--text_color", "#FFFFFF");
		setGlobalVariable("--link_color", "#FBB317");
		now_theme=2;
	}else if(now_theme==2){
		setGlobalVariable("--background_color", "#DDEFE3");
		setGlobalVariable("--text_color", "#2A484E");
		setGlobalVariable("--link_color", "#CE4A50");
		now_theme=1;
	}else if(now_theme==1){
		setGlobalVariable("--background_color", "#FFFFFF");
		setGlobalVariable("--text_color", "#000000");
		setGlobalVariable("--link_color", "#4E00FF");
		now_theme=0;
	}
}
//color code from https://www.w3schools.com/colors/colors_picker.asp
