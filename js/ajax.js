var xhttp = new XMLHttpRequest();
		
function listerUsers()
{
	var tabUsers = JSON.parse(xhttp.responseText);
	for(user in tabUsers)
	{
		console.log(tabUsers[user].name);
	}
}

function addUser(submitEvent)
{
	var name = document.getElementById("inputNom").value;
	var passwd = document.getElementById("inputPassword").value;
	
	var user = {
		"name": name,
		"password": passwd
	};
	
	xhttp.open("POST", "http://loisirs-web-backend.cleverapps.io/users", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify(user));
}

function listerHobbies()
{
	var tabHobbies = JSON.parse(xhttp.responseText);
	for(hobby in tabHobbies)
	{
		console.log(tabHobbies[hobby].name);
	}
}

function loading()
{
	buttonUsers = document.getElementById("btnListUser");
	buttonUsers.addEventListener("click", function() {
		xhttp.onloadend = listerUsers;
		xhttp.open("GET", "http://loisirs-web-backend.cleverapps.io/users", true);
		xhttp.send();
	});

	buttonHobbies = document.getElementById("btnListHobbies");
	buttonHobbies.addEventListener("click", function() {
		xhttp.onloadend = listerHobbies;
		xhttp.open("GET", "http://loisirs-web-backend.cleverapps.io/hobbies", true);
		xhttp.send();
	});
	
	buttonAddUser = document.getElementById("btnAddUser");
	buttonAddUser.addEventListener("click", addUser);
}