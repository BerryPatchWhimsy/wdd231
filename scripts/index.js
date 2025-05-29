document.querySelector("#name").innerHTML = "Anissa Pooley";

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseButtons(courses);

const allCoursesLink = document.querySelector("#all");
const wddCoursesLink = document.querySelector("#wdd");
const cseCoursesLink = document.querySelector("#cse");

allCoursesLink.addEventListener("click", () => {
    allCoursesLink.classList.add("active2");
    wddCoursesLink.classList.remove("active2");
    cseCoursesLink.classList.remove("active2");

    document.querySelector("#credits").innerHTML = "";
    let credits = calculateCredits(courses);
    document.querySelector("#credits").innerHTML = ` <span> ${credits}</span>`;

    return createCourseButtons(courses);

    
});

wddCoursesLink.addEventListener("click", () => {
    allCoursesLink.classList.remove("active2");
    wddCoursesLink.classList.add("active2");
    cseCoursesLink.classList.remove("active2");

    let wddCourses = courses.filter(course => {
        const subject = course.subject;
        const crs = parseInt(course.number);

        if (subject == "WDD") {
            return `${subject} ${crs}`;
        }
    });
    createCourseButtons(wddCourses);

    document.querySelector("#credits").innerHTML = "";
    let credits = calculateCredits(wddCourses);
    document.querySelector("#credits").innerHTML = ` <span> ${credits}</span>`;
});

cseCoursesLink.addEventListener("click", () => {
    allCoursesLink.classList.remove("active2");
    wddCoursesLink.classList.remove("active2");
    cseCoursesLink.classList.add("active2");

    let cseCourses = courses.filter(course => {
        const subject = course.subject;
        const crs = parseInt(course.number);

        if (subject == "CSE") {
            return `${subject} ${crs}`;
        }
    });
    createCourseButtons(cseCourses);

    document.querySelector("#credits").innerHTML = "";
    let credits = calculateCredits(cseCourses);
    document.querySelector("#credits").innerHTML = ` <span> ${credits}</span>`;
});

function createCourseButtons(filteredCourses) {
    document.querySelector(".certificate").innerHTML = "";
    filteredCourses.forEach((course) => {
        let card = document.createElement("button");
        card.classList.add = "course-button";

        let courseInfo = document.createElement("p");
        let subject = course.subject;
        let courseNumber = parseInt(course.number);
        courseInfo.textContent = `${subject} ${courseNumber}`;
        card.appendChild(courseInfo);

        let completion = course.completed;
        if (completion == true) {
            card.id = "completed";
        } else {
            card.id = "todo"
        }

        document.querySelector(".certificate").appendChild(card);

        
        let dialog = document.createElement("dialog");
        dialog.classList.add("course-dialog");
        dialog.id.add = `${subject}-${courseNumber}`;
        dialog.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.credits} credits</p>
            <p>Certificate: ${course.certificate}</p>
            <p>${course.description}</p>
            <p>Technology: ${course.technology.join(', ')}</p>
            <button class="close-button">❌</button>
        `;
        document.querySelector(".certificate").appendChild(dialog);
        card.addEventListener("click", () => {
            dialog.showModal();
        });
        
        let closeModal = dialog.querySelector(".close-button");
        closeModal.addEventListener("click", () => {
            dialog.close();
        });

    });
}


// function createCourseCard(filteredCourses) {
//     document.querySelector(".certificate").innerHTML = "";
//     filteredCourses.forEach((course) => {
//         let card = document.createElement("div");
//         card.classList.add = "card";

//         let courseInfo = document.createElement("p");
//         let subject = course.subject;
//         let courseNumber = parseInt(course.number);
//         courseInfo.textContent = `${subject} ${courseNumber}`;
//         card.appendChild(courseInfo);

//         let completion = course.completed;
//         if (completion == true) {
//             card.id = "completed";
//         } else {
//             card.id = "todo"
//         }

//         document.querySelector(".certificate").appendChild(card);
//     });
// }

function calculateCredits(filteredCourses) {
    let totalCredits = 0;
    filteredCourses.forEach((course) => {
        totalCredits += course.credits;
    });
    return totalCredits;
}
