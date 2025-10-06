const fetchData = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    console.log(data);
    const tbody = document.querySelector("#users tbody");


    if(data && data.length){
    data.forEach((user,index) => {
        tbody.innerHTML += ` 
        <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
        </tr>
`
    });
}
}
fetchData();

