/**
 * Yeni ögrenciyi listeye ekler ve toplam ögrenci sayisini yazdirir
 */
function addStudent() {
    return `${createStudent()}
            <tr>
            <th>Total Student</th>
            <td>${list.length}</td>
            </tr>
        </tbody>`
}
/**
 * yeni ögrenci olusturur
 */
function createStudent() {
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
            </tr>`
        }).join("")
}
/**
 * baslangic sayfasini UI'a yazdirir
 */
function createUI() {
    headerElement.innerHTML = createHeader();
    formElement.innerHTML = createFormSection();
}
/**
 * Yas alanina sadece sayi girilmesini saglar(bootsrap ile de yapilabilir)
 * @param {*} pValue 
 */
function validateNumber(pValue) {
    if (isNaN(pValue) || pValue == "") {
        alert("Invalid Age!");
        throw new Error("Invalid Age!");
    }
    return (pValue);
}
/**
 * Isim alanlarina sadece harf girilmesini saglar (A-Z)
 * @param {*} pValue 
 */
function validateText(pValue) {
    if (pValue == "") {
        alert("Invalid Name!");
        throw new Error("Empty!");
    }
    if (!/^[a-zA-Z]*$/g.test(pValue)) {
        alert("Invalid Characters!");
        throw new Error("Invalid Character");
    }
    return (pValue)
}
/**
 * formdaki bilgileri arraye atar, listeyi görüntüler
 */
function showStudentList() {
    mainElement.addEventListener("click", (event) => {
        event.preventDefault();
        let firstNameArea = document.querySelector("#first-name");
        let lastNameArea = document.querySelector("#last-name");
        let ageArea = document.querySelector("#age");
        if (event.target.id === "add") {
            list.push({
                firstName: validateText(firstNameArea.value),
                lastName: validateText(lastNameArea.value),
                age: validateNumber(ageArea.value)
            })
            firstNameArea.value = "";
            lastNameArea.value = "";
            ageArea.value = "";
            listElement.innerHTML = createStudentListSection();
        }
    })
}
/**
 * tiklandiginda listeden ögrenci siler
 */
function deleteStudentfromUI() {
    mainElement.addEventListener("click", function (event) {
        if (event.target.className === "btn btn-danger delete") {
            list.filter((student, index) => {
                if (event.target.id === `del-${index}`) {
                    list.splice(index, 1);
                    listElement.innerHTML = createStudentListSection();
                }
            })
        }
    })
}

/**Initialization */
function start() {
    createUI();
    showStudentList();
    deleteStudentfromUI();
}