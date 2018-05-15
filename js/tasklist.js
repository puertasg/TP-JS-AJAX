function removeTask(task)
{
	if(window.confirm("Souhaitez vous supprimer la tache " + task.innerHTML + " ?"))
	{
		task.remove();
	}
}

function addTask()
{
	var task = document.getElementById("todotxt").value;
		
	var newTask = document.createElement("li");
	var newTaskText = document.createTextNode(task);
	newTask.appendChild(newTaskText);
	newTask.addEventListener("click", function() {
		removeTask(this);
	});
	
	document.getElementById("todolist").appendChild(newTask);
}

function loading()
{
	button = document.getElementById("addtodo");
	button.addEventListener('click', function(event) {
		addTask();
	});
}