const workers = [

{
    name: 'Tom A',age:25,salary: '1000',src:"images/TomA.jpeg"
},
{
    name: 'Mike A',age:28,salary: '1500',src:"images/MikeA.jpeg"
},
{
    name: 'John A',age:30,salary: '2500',src:"images/JohnA.jpeg"
},
{
    name: 'Sam A',age:32,salary: '4200',src:"images/SamA.jpeg"
},
{
    name: 'Jennifer A',age:35,salary: '2000',src:"images/JenniferA.jpeg"
},
{
    name: 'Jennifer B',age:40,salary: '3000',src:"images/JenniferB.jpeg"
},
{
    name: 'Sam B',age:45,salary: '6000',src:"images/SamB.jpeg"
}


];

workers.forEach(worker => {
    
    const newDiv = document.createElement('div');
    const newImage = document.createElement('img');
    const newP = document.createElement('p');
    const newP2 = document.createElement('p');
    const newP3 = document.createElement('p');
    newDiv.className = 'worker';
    newImage.src = worker.src;
    newP.innerHTML = "Name: " + worker.name;
    newP2.innerHTML = "Age: " + worker.age;
    newP3.innerHTML = "Salary: " + worker.salary;
    document.getElementById("container").appendChild(newDiv);
    newDiv.appendChild(newImage);
    newDiv.appendChild(newP);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newP3);
   
    
  })


  function showallworkers() {

        document.getElementById("container").innerHTML = "";

        workers.forEach(worker => {
    
        const newDiv = document.createElement('div');
        const newImage = document.createElement('img');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        const newP3 = document.createElement('p');
        newDiv.className = 'worker';
        newImage.src = worker.src;
        newP.innerHTML = "Name: " + worker.name;
        newP2.innerHTML = "Age: " + worker.age;
        newP3.innerHTML = "Salary: " + worker.salary;
        document.getElementById("container").appendChild(newDiv);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newP3);
        
      })
  }

  function itincludesornot() {
    
        document.getElementById("container").innerHTML = "";
    
        const input = document.getElementById("input").value;

        const filteredworkers = workers.filter(worker => worker.name.includes(input));
    
        filteredworkers.forEach(worker => {
            const newDiv = document.createElement('div');
            const newImage = document.createElement('img');
            const newP = document.createElement('p');
            const newP2 = document.createElement('p');
            const newP3 = document.createElement('p');
            newDiv.className = 'worker';
            newImage.src = worker.src;
            newP.innerHTML = "Name: " + worker.name;
            newP2.innerHTML = "Age: " + worker.age;
            newP3.innerHTML = "Salary: " + worker.salary;
            document.getElementById("container").appendChild(newDiv);
            newDiv.appendChild(newImage);
            newDiv.appendChild(newP);
            newDiv.appendChild(newP2);
            newDiv.appendChild(newP3);
        });

    }
