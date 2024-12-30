"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const displayData = () => {
        const resumeData = localStorage.getItem("resumeData");
        if (!resumeData) {
            const resumeContainer = document.querySelector(".main");
            if (resumeContainer) {
                resumeContainer.className = "hide";
                let body = document.querySelector("body");
                body === null || body === void 0 ? void 0 : body.classList.add("center");
            }
            const noResumeMessage = document.createElement("p");
            noResumeMessage.innerText = "No resume available.";
            document.body.appendChild(noResumeMessage);
            return;
        }
        const data = JSON.parse(resumeData);
        // Show the resume layout
        const resumeContainer = document.getElementById("resume-container");
        if (resumeContainer)
            resumeContainer.style.display = "block";
        // Display data in HTML elements
        document.getElementById("name").innerText = data.fullName;
        document.getElementById("job").innerText = data.jobTitle1;
        document.getElementById("email").innerText = data.email;
        document.getElementById("phone").innerText = data.phone;
        document.getElementById("address").innerText = data.address;
        document.getElementById("summary").innerText = data.summary;
        document.getElementById("references-content").innerText = data.certifications;
        // Load profile image if available
        if (data.profileImage) {
            document.getElementById("profileImage").src = data.profileImage;
        }
        const educationList = data.education.split(",");
        const educationElement = document.getElementById("education-list");
        educationElement.innerHTML = "";
        educationList.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item.trim();
            educationElement.appendChild(li);
        });
        // Display skills
        const skills = [data.skill1, data.skill2, data.skill3, data.skill4, data.skill5];
        const skillsElement = document.getElementById("skills-list");
        skillsElement.innerHTML = ""; // Clear previous content
        skills.forEach((skill) => {
            if (skill) {
                const li = document.createElement("li");
                li.innerText = skill;
                skillsElement.appendChild(li);
            }
        });
        const workExperience = [data.jobDescription1, data.jobDescription2];
        const workExperienceElement = document.getElementById("work-experience-list");
        workExperienceElement.innerHTML = "";
        workExperience.forEach((experience) => {
            if (experience) {
                const li = document.createElement("li");
                li.innerText = experience;
                workExperienceElement.appendChild(li);
            }
        });
    };
    displayData();
});
