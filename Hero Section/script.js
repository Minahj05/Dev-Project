// ======================================================
// SKILLS CRUD
// ======================================================

// Get data from Local Storage
let skills = JSON.parse(localStorage.getItem("skills")) || [];


// CREATE
function addSkill() {

    let input = document.getElementById("skillInput");

    let skill = input.value.trim();

    if (skill === "") {
        alert("Please enter a skill");
        return;
    }

    skills.push(skill);

    // Save to Local Storage
    localStorage.setItem("skills",
         JSON.stringify(skills));

    input.value = "";

    displaySkills();
}


// READ
function displaySkills() {

    let list = document.getElementById("skillList");

    list.innerHTML = "";

    skills.forEach(function(skill, index) {

        list.innerHTML += `
            <div class="mb-3">

                <span class="mr-4 text-lg">
                    ${skill}
                </span>

                <button
                    onclick="editSkill(${index})"
                    class="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>

                <button
                    onclick="deleteSkill(${index})"
                    class="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

            </div>
        `;
    });
}


// UPDATE
function editSkill(index) {

    let newSkill = prompt(
        "Enter new skill:",
        skills[index]
    );

    if (newSkill !== null && newSkill.trim() !== "") {

        skills[index] = newSkill.trim();

        localStorage.setItem(
            "skills",
            JSON.stringify(skills)
        );

        displaySkills();
    }
}


// DELETE
function deleteSkill(index) {

    skills.splice(index, 1);

    localStorage.setItem(
        "skills",
        JSON.stringify(skills)
    );

    displaySkills();
}



// ======================================================
// EXPERIENCE CRUD
// ======================================================

let experiences =
    JSON.parse(localStorage.getItem("experiences")) || [];


// CREATE
function addExperience() {

    let input =
        document.getElementById("experienceInput");

    let experience = input.value.trim();

    if (experience === "") {
        alert("Please enter your experience");
        return;
    }

    experiences.push(experience);

    localStorage.setItem(
        "experiences",
        JSON.stringify(experiences)
    );

    input.value = "";

    displayExperiences();
}


// READ
function displayExperiences() {

    let list =
        document.getElementById("experienceList");

    list.innerHTML = "";

    experiences.forEach(function(experience, index) {

        list.innerHTML += `
            <div class="mb-3">

                <span class="mr-4 text-lg">
                    ${experience}
                </span>

                <button
                    onclick="editExperience(${index})"
                    class="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>

                <button
                    onclick="deleteExperience(${index})"
                    class="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

            </div>
        `;
    });
}


// UPDATE
function editExperience(index) {

    let newExperience = prompt(
        "Enter new experience:",
        experiences[index]
    );

    if (
        newExperience !== null &&
        newExperience.trim() !== ""
    ) {

        experiences[index] =
            newExperience.trim();

        localStorage.setItem(
            "experiences",
            JSON.stringify(experiences)
        );

        displayExperiences();
    }
}


// DELETE
function deleteExperience(index) {

    experiences.splice(index, 1);

    localStorage.setItem(
        "experiences",
        JSON.stringify(experiences)
    );

    displayExperiences();
}



// ======================================================
// PROJECTS CRUD
// ======================================================

let projects =
    JSON.parse(localStorage.getItem("projects")) || [];


// CREATE
function addProject() {

    let input =
        document.getElementById("projectInput");

    let project = input.value.trim();

    if (project === "") {
        alert("Please enter your project");
        return;
    }

    projects.push(project);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    input.value = "";

    displayProjects();
}


// READ
function displayProjects() {

    let list =
        document.getElementById("projectList");

    list.innerHTML = "";

    projects.forEach(function(project, index) {

        list.innerHTML += `
            <div class="mb-3">

                <span class="mr-4 text-lg">
                    ${project}
                </span>

                <button
                    onclick="editProject(${index})"
                    class="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>

                <button
                    onclick="deleteProject(${index})"
                    class="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>

            </div>
        `;
    });
}


// UPDATE
function editProject(index) {

    let newProject = prompt(
        "Enter new project:",
        projects[index]
    );

    if (
        newProject !== null &&
        newProject.trim() !== ""
    ) {

        projects[index] =
            newProject.trim();

        localStorage.setItem(
            "projects",
            JSON.stringify(projects)
        );

        displayProjects();
    }
}


// DELETE
function deleteProject(index) {

    projects.splice(index, 1);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    displayProjects();
}



// ======================================================
// DISPLAY DATA WHEN PAGE LOADS
// ======================================================

displaySkills();
displayExperiences();
displayProjects();