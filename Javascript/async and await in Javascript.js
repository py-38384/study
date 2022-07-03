console.log("This is tutorial 43");

async function getData() {
  const response = await fetch('https://api.github.com/users');
  const users = await response.json();
  return users;
}

getData().then(data => console.log(data))