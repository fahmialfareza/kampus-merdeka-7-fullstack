// Import json data from data/students.json with module
import studentsData from "../data/students.json" with { type: "json" };
// with commonjs
// const studentsData = require("../data/students.json")

/* Start to show all students */
// Get id of student-content to control the view
const studentContent = document.getElementById("student-content");

// Helper variable
let studentContentHTML = "";
studentsData.map((student) => {
    // variable that will be show in student-content id
    const studentContent = `
        <div class="col-md-3">
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">${student.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        ${student.education.bachelor}
                    </h6>
                    <p class="card-text">
                        My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am student of ${student.education.bachelor}.
                    </p>
                </div>
            </div>
        </div>
    `;
    studentContentHTML += studentContent;
});

studentContent.innerHTML = "<h1>Loading...</h1>";

// Edit the html content in student-content
setTimeout(() => {
    // It will execute after 3 seconds
    studentContent.innerHTML = studentContentHTML;
}, 3000);
/* End to show all students */

/* Start to search the students */
const search = document.getElementById("search");
const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

search.addEventListener("input", (e) => {
    studentContent.innerHTML = "<h1>Loading...</h1>";

    // If the search is change, the function will be running
    const searchValue = e.target.value.toLowerCase();

    // search student by input
    const filteredStudent = studentsData.filter((student) => {
        return student.name.toLowerCase().includes(searchValue) || student.education.bachelor.toLowerCase().includes(searchValue);
    });

    let studentContentHTML = "";
    filteredStudent.map((student) => {
        // variable that will be show in student-content id
        const studentContent = `
            <div class="col-md-3">
                <div class="card" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                            ${student.education.bachelor}
                        </h6>
                        <p class="card-text">
                            My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am student of ${student.education.bachelor}.
                        </p>
                    </div>
                </div>
            </div>
        `;
        studentContentHTML += studentContent;
    });

    studentContent.innerHTML = studentContentHTML;
});
/* End to search the students */