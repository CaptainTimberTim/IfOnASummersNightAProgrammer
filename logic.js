
TabDivsString = `
				<div id=home></div>
				<div id=projects></div>
				<div id=aboutMe></div>`

BannerString = `<div id=innerBanner style="background-color: #263422 ; position: absolute; top: 20px; left: 0px; 
          	      width: 1200px; padding-bottom: 20px; padding-left: 60px"> 
					<h1>If on a summer's night a programmer...</h1>
					<div style="padding-right: 40px;text-align: right;">
						by Tim J. Dierks
					</div>
				</div>`

OpenSiteColor = GetColorForHome(FileId);
HomeString = `<a href="index.html">
				<div id=innerHome style="background-color: `+OpenSiteColor+`; position: absolute; top: 160px; left: 0px;  
                    width: 500px; height: 65px; text-align: center">
					<h1>Hello, Sailor! </h1><br>
				</div>
			  </a>`

OpenSiteColor = GetColorForProject(FileId);
ProjectsString = `<a href="projects.html">
					<div id=innerProjects style="background-color: `+OpenSiteColor+`; position: absolute; top: 160px; left:
                        515px; width: 500px; height: 65px; text-align: center">
						<h1> Projects<br> </h1>
					</div>
				 </a>`

OpenSiteColor = GetColorForAboutMe(FileId);
AboutMeString = `<a href="aboutMe.html">
					<div id=innerAboutMe style="background-color: `+OpenSiteColor+`; position: absolute; top: 160px; left: 
                        1300px; width: 200px; height: 65px; text-align: center">
						<h1> About Me </h1>
					</div>
				</a>`

AddHtml("banner",   BannerString);
AddHtml("mainTabs", TabDivsString);
AddHtml("home",     HomeString);
AddHtml("projects", ProjectsString);
AddHtml("aboutMe",  AboutMeString);

// Helper to access color.
function GetColorForHome(fileId)
{
	return GetColorForLevel(0, fileId === 0); 
}

function GetColorForProject(fileId)
{
	var IsActive = IsInList(fileId, listOfProjects);
	return GetColorForLevel(0, IsActive);
}

function GetColorForAboutMe(fileId)
{
	return GetColorForLevel(0, fileId === 2); 
}
