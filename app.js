const mainElement = document.querySelector("#app");
const headerElement = document.querySelector("#nav-header");
const formElement = document.querySelector("#form-section");
const listElement = document.querySelector("#list-section");
//let firstNameArea = document.querySelector("#first-name");
//let lastNameArea = document.querySelector("#last-name");
//let ageArea = document.querySelector("#age");

let list = [];






function createHeader() {
    return `
            <nav class="navbar navbar-primary bg-primary">
                <a class="navbar-brand text-dark" href="#">School of St. Moritz</a>
            </nav>
    `
}

function createFormSection() {
    return `
    <form>
        <h2>Student</h2>
        <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" class="form-control" id="first-name"
                placeholder="Example input">
        </div>
        <div class="form-group">
            <label for="last-name">Second Name</label>
            <input type="text" class="form-control" id="last-name"
                placeholder="Another input">
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age"
                placeholder="Another input">
        </div>
            <button id="add"  class="btn btn-primary">Add Student</button>
    </form>
    `
}

function createStudentListSection() {
    return `
    <h2>Student List</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th></th>
            </tr>
        </thead>
        ${addStudent()}
    </table>
    `
}

function addStudent() {
    return list
        .map((student, index) => {
            return `
            <tbody>
            <tr>
                <th>${index+1}</th>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.age}</td>
                <td> <button id="del-${index}" type="button" class="btn btn-danger delete">DELETE</button></td>
            </tr>
        </tbody>`
        })
}

function createUI() {
    headerElement.innerHTML = createHeader();
    formElement.innerHTML = createFormSection();

}

createUI()

mainElement.addEventListener("click", function (event) {
    event.preventDefault();
    let firstNameArea = document.querySelector("#first-name");
    let lastNameArea = document.querySelector("#last-name");
    let ageArea = document.querySelector("#age");
    if (event.target.id === "add") {
        list.push({
            firstName: firstNameArea.value,
            lastName: lastNameArea.value,
            age: ageArea.value
        })
        firstNameArea.value = "";
        lastNameArea.value = "";
        ageArea.value = "";
        listElement.innerHTML = createStudentListSection();

    }
})

mainElement.addEventListener("click", function (event) {
    if(event.target.className === "btn btn-danger delete"){
        console.log("22")
        list.filter((student, index)=>{
            if(event.target.id === `del-${index}`){
                list.splice(index, 1);
                listElement.innerHTML = createStudentListSection();
            }
        })
    }
})