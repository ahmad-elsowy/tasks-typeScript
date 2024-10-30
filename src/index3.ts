//    1. **Add a new task** to the list.
type Task = {
    taskId : number,
    description : string,
    status : "pending" | "in progress" | "completed",
    priority : 1 | 2 | 3
}
let tasks :Task[]= []

function addNewTask(task:Task) : Task[] | string{
    let exist = tasks.find(t=>t.taskId === task.taskId)
    if(exist){
        return `the task with id ==> ${task.taskId} is already exist`
    }else{
        tasks.push(task)
        return tasks
    }
}
// 2. **Change the status** of a task by `taskId`.

function changeStatus(id : number , status : "pending" | "in progress" | "completed"):Task[] | string{
    let exist = tasks.filter(t=>t.taskId === id )
    if(exist){
        exist[0].status = status
        return exist
    }else{
        return `the task with id ==> ${id} is already exist`
    }
}

// 3. **Display all tasks** sorted by priority.
function sortPeriority():Task[]{
    return tasks.sort((a,b)=>b.priority - a.priority)
}

// 4. **Filter tasks** based on their current status.
function filterTask(status:"pending" | "in progress" | "completed") : Task[]{
    return tasks.filter(t=>t.status === status) 
}







console.log(addNewTask({
    taskId : 1,
    description : "Complete TypeScript assignment",
    status : "pending" ,
    priority : 1 
}),`\n*********************`)
console.log(addNewTask({
    taskId : 4,
    description : "Complete TypeScript assignment",
    status : "pending" ,
    priority : 3 
}),`\n*********************`)
console.log(addNewTask({
    taskId : 2,
    description : "Review project proposal",
    status :  "in progress" ,
    priority : 2 
}),`\n*********************`)
console.log(addNewTask({
    taskId : 3,
    description :"Prepare for team meeting",
    status : "completed" ,
    priority : 3
}),`\n*********************`)
console.log(addNewTask({
    taskId : 5,
    description :"Prepare for team meeting",
    status : "completed" ,
    priority : 3
}),`\n*********************`)
console.log(addNewTask({
    taskId : 6,
    description :"Prepare for team meeting",
    status : "completed" ,
    priority : 3
}),`\n*********************`)
console.log(addNewTask({
    taskId : 7,
    description :"Prepare for team meeting",
    status : "completed" ,
    priority : 3
}),`\n*********************`)
console.log(addNewTask({
    taskId : 8,
    description :"Prepare for team meeting",
    status : "completed" ,
    priority : 3
}),`\n*********************`)

// console.log(changeStatus(3 , "pending"),`\n*********************`)
console.log(sortPeriority())
console.log(filterTask("pending"),`\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\`)

// 5. **Count the number of tasks** in each status category.
function countTasks():string{
    let arrStatus =  tasks.map(t=>t.status) 
    let countP =0
    let countC =0
    let countI =0
    for(let i=0;i<arrStatus.length;i++){
        if(arrStatus[i] === "pending"){
            countP++
        }else if(arrStatus[i] === "completed"){
            countC++
        }else {
            countI++    
        }
    }
    return `"pending" status ==> ${countP} ${countP > 1 ? 'tasks' : 'task'} \n "completed" status ==> ${countC} ${countC > 1 ? 'tasks' : 'task'} \n "in progress" status ==> ${countI} ${countI > 1 ? 'tasks' : 'task'}` 
 }
 console.log(countTasks())