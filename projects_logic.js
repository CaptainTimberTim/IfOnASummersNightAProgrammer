
OpenSiteColor = GetColorForAcademicProject(FileId);
AcademicString = `<a href="projects.html">
					<div id=innerStudium style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 0px; 
					 width: 400px; height: 60px; text-align: center">
						<h2>Academic projects</h2>
					</div>
				  </a>`

OpenSiteColor = GetColorForHobbyProject(FileId);
HobbyString = `<a href="project_hobby.html">
			  	<div id=innerHobby style="background-color: `+OpenSiteColor+`; position: absolute; top: 30px; left: 415px; 
				   width: 400px; height: 60px; text-align: center">
			  		<h2>Hobby projects</h2>
			  	</div>
		 	 </a>`

AddHtml("studium", AcademicString);
AddHtml("hobby",   HobbyString);


// Helper to access color.
function GetColorForAcademicProject(fileId)
{
	var IsActive = IsInList(fileId, listOfAcademicProjects);
	return GetColorForLevel(1, IsActive); 
}

function GetColorForHobbyProject(fileId)
{
	var IsActive = IsInList(fileId, listOfHobbyProjects);
	return GetColorForLevel(1, IsActive);
}
