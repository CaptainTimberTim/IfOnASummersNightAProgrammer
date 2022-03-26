
TabDivsString = `
		<div id=hobbyMain></div>
		<div id=vrBike></div>
		<div id=mPlay3></div>
		<div id=aGameADay></div>
		<div id=unityProtos></div>
		<div id=cppProtos></div>
		<div id=gameJams></div>`

OpenSiteColor = GetColorForHobbyMain(FileId);
HobbyMainString = `
		<a href="project_hobby.html">
		<div id=innerHobby style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 0px; width: 200px; height: 60px; text-align: center">
			<h3>Overview</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForVRBike(FileId);
VRBikeString = `
		<a href="project_hobby_VRCycle.html">
		<div id=innerVRBike style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 215px; width: 200px; height: 60px; text-align: center">
			<h3 style="margin-top: 10px">VR-Bicycle Simulation</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForMPlay3(FileId);
MPlay3String = `
		<a href="project_hobby_MPlay3.html">
		<div id=innerMPlay3 style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 430px; width: 200px; height: 60px; text-align: center">
			<h3>Audio Player</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForAGameADay(FileId);
AGameADayString = `
		<a href="project_hobby_GameADay.html">
		<div id=innerAGameADay style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 645px; width: 200px; height: 60px; text-align: center">
			<h3>A game a day</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForUnityProtos(FileId);
UnityProtosString = `
		<a href="project_hobby_UnityGames.html">
		<div id=innerUnityProtos style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 860px; width: 200px; height: 60px; text-align: center">
			<h3 style="margin-top: 10px">Unity - Game Prototypes</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForCppProtos(FileId);
CppProtosString = `
		<a href="project_hobby_CPPPrototypes.html">
		<div id=innerCppProtos style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 1075px; width: 200px; height: 60px; text-align: center;">
			<h3 style="margin-top: 10px">C/C++ <br>Prototypes</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForGameJams(FileId);
GameJamsString = `
		<a href="project_hobby_GameJams.html">
		<div id=innerGameJams style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 1290px; width: 200px; height: 60px; text-align: center;">
			<h3>Game Jams</h3>
		</div>
		</a>`

AddHtml("hobbyTabs", TabDivsString);
AddHtml("hobbyMain",   HobbyMainString);
AddHtml("vrBike",      VRBikeString);
AddHtml("mPlay3",      MPlay3String);
AddHtml("aGameADay",   AGameADayString);
AddHtml("unityProtos", UnityProtosString);
AddHtml("cppProtos",   CppProtosString);
AddHtml("gameJams",    GameJamsString);

// Helper to access color.
function GetColorForHobbyMain(fileId)
{
	return GetColorForLevel(2, fileId == 3); 
}

function GetColorForVRBike(fileId)
{
	return GetColorForLevel(2, fileId == 9); 
}

function GetColorForMPlay3(fileId)
{
	return GetColorForLevel(2, fileId == 10); 
}

function GetColorForAGameADay(fileId)
{
	return GetColorForLevel(2, fileId == 11); 
}

function GetColorForUnityProtos(fileId)
{
	return GetColorForLevel(2, fileId == 12); 
}

function GetColorForCppProtos(fileId)
{
	return GetColorForLevel(2, fileId == 13); 
}

function GetColorForGameJams(fileId)
{
	return GetColorForLevel(2, fileId == 14); 
}
