
TabDivsString = `
		<div id=academic></div>
		<div id=modelling></div>
		<div id=movieDesign></div>
		<div id=bachelorThesis></div>
		<div id=masterProject></div>
		<div id=masterThesis></div>`

OpenSiteColor = GetColorForAcademicMain(FileId);
AcademicString = `
		<a href="projects.html">
		<div id=innerAcademic style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 0px; width: 200px; height: 60px; text-align: center">
			<h3>Overview</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForModelling(FileId);
ModellingString = `
		<a href="project_3DModelling.html">
		<div id=innerModellig style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 215px; width: 200px; height: 60px; text-align: center">
			<h3>3D modelling</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForMovieDesign(FileId);
MovieDesignString = `
		<a href="project_Filmgestaltung.html">
		<div id=innerMovieDesign style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 430px; width: 200px; height: 60px; text-align: center">
			<h3>Movie design</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForBachelorThesis(FileId);
BachelorThesisString = `
		<a href="project_BachelorThesis.html">
		<div id=innerBachelorThesis style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 645px; width: 200px; height: 60px; text-align: center">
			<h3>Bachelor thesis</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForMasterProject(FileId);
MasterProjectString = `
		<a href="project_MasterProject.html">
		<div id=innerMasterProject style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 860px; width: 200px; height: 60px; text-align: center">
			<h3>Master project</h3>
		</div>
		</a>`

OpenSiteColor = GetColorForMasterThesis(FileId);
MasterThesisString = `
		<a href="project_MasterThesis.html">
		<div id=innerMasterThesis style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 1075px; width: 200px; height: 60px; text-align: center">
			<h3>Master Thesis</h3>
		</div>
		</a>`

AddHtml("academicTabs",   TabDivsString);
AddHtml("academic",       AcademicString);
AddHtml("modelling",      ModellingString);
AddHtml("movieDesign",    MovieDesignString);
AddHtml("bachelorThesis", BachelorThesisString);
AddHtml("masterProject",  MasterProjectString);
AddHtml("masterThesis",   MasterThesisString);

// Helper to access color.
function GetColorForAcademicMain(fileId)
{
	return GetColorForLevel(2, fileId == 1); 
}

function GetColorForModelling(fileId)
{
	return GetColorForLevel(2, fileId == 4); 
}

function GetColorForMovieDesign(fileId)
{
	return GetColorForLevel(2, fileId == 5); 
}

function GetColorForBachelorThesis(fileId)
{
	return GetColorForLevel(2, fileId == 6); 
}

function GetColorForMasterProject(fileId)
{
	return GetColorForLevel(2, fileId == 7); 
}
function GetColorForMasterThesis(fileId)
{
	return GetColorForLevel(2, fileId == 8); 
}