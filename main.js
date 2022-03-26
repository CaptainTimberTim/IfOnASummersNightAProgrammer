
var listOfFilenames = 
[
	"index.html",                       // 0
	"projects.html",                    // 1
	"aboutMe.html",                     // 2
	"project_hobby.html",               // 3
	"project_3DModelling.html",         // 4
	"project_Filmgestaltung.html",      // 5
	"project_BachelorThesis.html",      // 6
	"project_MasterProject.html",       // 7
	"project_MasterThesis.html",        // 8
	"project_hobby_VRCycle.html",       // 9
	"project_hobby_MPlay3.html",        // 10
	"project_hobby_GameADay.html",      // 11
	"project_hobby_UnityGames.html",    // 12
	"project_hobby_CPPPrototypes.html", // 13
	"project_hobby_GameJams.html",      // 14
];

// These index into listOfFilenames.
var listOfProjects         = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var listOfAcademicProjects = [1, 4, 5, 6, 7, 8];
var listOfHobbyProjects    = [3, 9, 10, 11, 12, 13, 14];

// ********************************
// Create file information.
// ********************************
var      Url = location.href;
var Filename = Url.substring(Url.lastIndexOf('/')+1);
var   FileId = GetFilenameId(Filename);

// ********************************
// Common functionality.
// ********************************
function AddHtml(Id, Content)
{
	document.getElementById(Id).innerHTML += Content;
}

function GetFilenameId(Filename)
{
	for(var it = 0; it < listOfFilenames.length; ++it)
	{
		if(Filename === listOfFilenames[it])
		{
			return it;
		}
	}
	return -1;
}

function IsInList(FileId, list)
{
	for(var it = 0; it < list.length; ++it)
	{
		if(FileId === list[it])
		{
			return true;
		}
	}
	return false;
}

function GetColorForLevel(Level, IsActive)
{
	if(Level === 0)
	{ 
		if(IsActive)
			return "#cfc";
		return "#a1cca1";
	}
	else if(Level === 1)
	{
		if(IsActive)
			return "#9df29d";
		return "#7cf47c";
	}
	else if(Level === 2)
	{
		if(IsActive)
			return "#398439";
		return "#225422";
	}
}
