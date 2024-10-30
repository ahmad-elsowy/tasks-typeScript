
// 1. **Add a new employee** to the system.

type Employee ={
    id: number;
    name: string;
    position: string;
    salary: number;
    department: string;
    promote (percentage : number):number
}

let employeeArr :Employee[]= []

function addNewEmployee(emp : Employee):Employee[] | string{
    let employ =  employeeArr.find(e=>e.id === emp.id)
    if(employ){
        return `this employee with id ${emp.id} is exist`
    }else{
        employeeArr.push(emp) 
    }
    return employeeArr
}


// 2. **Increase the salary** of an employee by `id` based on a percentage.

function increaseSalary(id:number , percentage : number):Employee[] | string{
    let employ =  employeeArr.find(e=>e.id === id)
    
    if(employ){
        employ.salary *= (1 + percentage)
    }else{
        return `this employee with id ${id} is not exist`
    }
    return employeeArr
}



// 3. **Find all employees** within a specific department.

function findEmployeeDepartment(dap : string):Employee[] | string{
    let employ =  employeeArr.filter(e=>e.department === dap)
    return employ
}


// 4. **Calculate the total salary** for all employees.

function calcSalary():number{
  return  employeeArr.reduce((total,curr)=> total + curr.salary, 0)
   
}

// 5. Implement a method in the employee object to **promote an employee** by increasing their salary by a fixed percentage.

  function promote(this: Employee,percentage:number): number {
   
    return   this.salary *= (1 + percentage)
  }
 

console.log(addNewEmployee( {
    id: 1,
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 75000, 
    department: "IT",
    promote
}),`\n##################################`)

console.log(addNewEmployee( {
    id: 2,
    name: "Bob Smith",
    position: "Project Manager",
    salary: 90000,
    department: "Management",
    promote
}),`\n##################################`)
console.log(addNewEmployee( {
    id: 3,
    name: "Charlie Brown",
    position: "Marketing Specialist",
    salary: 60000,
    department: "Marketing",
    promote
}),`\n##################################`)


console.log(increaseSalary(1 , 0.10),`\n##################################`)

console.log(findEmployeeDepartment("Marketing"),`\n##################################`)

console.log(calcSalary())

console.log(employeeArr[0].promote(0.50))


