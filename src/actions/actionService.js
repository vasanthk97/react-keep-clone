import axios from 'axios'
let nodeKey;
export function replaceAllService(object){

	console.log("here")
	console.log(object)
	var newState = []
	for (var each in object)
		newState.push(object[each])
		
	return {type:"REPLACE_ALL",newState}
}

export function addTodoService(todoObject,nextTodo){
	todoObject.id = nextTodo
	
    axios.post('https://todo-app-e9393.firebaseio.com/todos.json',todoObject)
        .then(res => {
        	console.log(res)
          
          
        })
	 return handleAddTodo(todoObject);

}

function handleAddTodo (todoObject) {
	return {
	    	type: "ADD_TODO",
	    	id : todoObject.id,
	    	text : todoObject.text,
	    	card : todoObject.card,

	    }
}