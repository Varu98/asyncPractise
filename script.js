console.log(0)
console.log(1)
console.log(2)
setTimeout(()=>{
  console.log("Shots Fired After Two Seconds");
},2000)
console.log(3)
console.log(4)

const apiUrl = "https://jsonplaceholder.typicode.com/users/1/todos"

const getTodos = async () => {
  const response = await fetch(apiUrl);

  const data = await response.json();
  console.log(data[0].title);


}
getTodos();

