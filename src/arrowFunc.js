//Goal:  create a method to get incomplete tasks.

// Define tasksToDo method
// use filter to return the incompleted tasks.
// Test your work by running the script.

const tasks = {
        tasks :[
            {
                text : 'Groceery Shopping',
                completed : true
            },
            {
                text : 'Clean yard',
                completed : false
            },
            {
                text : 'film Course',
                completed : false
            },
        ],
    // One way Of doing it , 
        // getTasksToDo(){ 
        //     let incompleTasks = this.tasks.filter((task)=>{
        //         return task.completed === false;
        //     });
        //     return incompleTasks;
        // }
    // Second Way Of doing it.
        // getTasksToDo(){ // another way . here we avoid the variable incompleteTasks.
        //     return this.tasks.filter((task)=>{
        //         return task.completed === false;
        //     });
        // }

        getTasksToDo(){ // another way . here we used the short hand 
            return this.tasks.filter((task)=> task.completed === false);
            
        }
    
        
}


console.log(tasks.getTasksToDo());
