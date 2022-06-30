let body = document.querySelector('body');
body.innerHTML = `
<div id="contener">
    <p>Hi my name is piyal</p>
    <p>Hi my name is rakib</p>
    <p>Hi my name is mursalin</p>
    <p>Hi my name is ridoy</p>
    <p>Hi my name is rekha</p>
    <p>Hi my name is mottakin</p>
</div>
`;
let contener = document.getElementById('contener');
contener.innerHTML += '<p>my name is ahoshan</p>';
contener.removeChild(contener.children[0]);
console.log(contener.children[0]);