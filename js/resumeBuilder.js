/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var str = "Someone is AWESOME!";
// var newstr = str.replace("AWESOME", "FUN");
// $("#main").append(newstr);

var formattedName = "Pinco Pallino";
var formattedRole = "Test role";

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

$("#main").append(HTMLheaderName);
$("#main").append(HTMLheaderRole);

var bio = {
	"name": "My Name",
	"role": "My role",
	"contact_info": "contactinf",
	"picture_Url": "URL",
	"welcome_message": "Welcome!",
	"skills": "None"
};

var work = {
	"city": "Paperopoli",
	"position": "Unemployed"
};
var education = {
	"schools": ["Liceo f", "Pt"],
	"cities": ["Rome", "Turin"],
	"gradyear": 2012,
	"majors": "engineering"
};

var project = {};

$("#main").append(work["position"]);
$("#main").append(education.name);
