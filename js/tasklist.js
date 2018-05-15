function removeTask(task)
{
	if(window.confirm("Souhaitez vous supprimer la tache " + task.innerHTML + " ?"))
	{
		console.log("remove task");
		task.remove();
	}
}

function loading()
{
	button = document.getElementById("addtodo");
	button.addEventListener('click', function(event) {
		var task = document.getElementById("todotxt").value;
		
		var newTask = document.createElement("li");
		var newTaskText = document.createTextNode(task);
		newTask.appendChild(newTaskText);
		newTask.addEventListener("click", function() {
			removeTask(this);
		});
		
		document.getElementById("todolist").appendChild(newTask);
	});
}