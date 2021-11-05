function viewData(){
    var sno = document.getElementById("sno").value
    fetch('http://localhost:3000/dept?deptname='+sno)
    .then(res => {
        if(res.ok){
            console.log("Successfully read the data");
        }
        else{
            console.log("Error getting the data");
        }
        return res.json()
    })
    .then(dept => console.log(dept[0].id+"\n"+dept[0].deptname+"\n"+dept[0].location))
    // .catch(error => console.log(error))
}   

function insertData(){
    var dept = {
        "id":"125",
        "deptname":"Admin",
        "location":"Hyderabad"
    }

    fetch('http://localhost:3000/dept', {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(dept)
    })
    .then(res => console.log(res))
}

function updateData(){
    var dept = {
        "id":"125",
        "deptname":"Finance",
        "location":"Chennai"
    }

    fetch('http://localhost:3000/dept/125', {
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(dept)
    })
    .then(res => console.log(res))
}

function deleteData(){
    fetch('http://localhost:3000/dept/125', {
        method:'Delete',
        headers:{
            "Content-Type":"application/json"
        }
    })
}