document.addEventListener("DOMContentLoaded", () => {
    interface ResumeForm {
        fullName: string;
        profileImage: string | null;
        email: string;
        phone: string;
        address: string;
        summary: string;
        skill1: string;
        skill2: string;
        skill3: string;
        skill4: string;
        skill5: string;
        jobTitle1: string;
        jobDescription1: string;
        jobTitle2: string;
        jobDescription2: string;
        education: string;
        certifications: string;
    }

    const displayData = (): void => {
        const resumeData: any = localStorage.getItem("resumeData");

        if (!resumeData) {
            const resumeContainer = document.querySelector(".main");
            if (resumeContainer) {
                resumeContainer.className = "hide";
                let body = document.querySelector("body")
                body?.classList.add("center")
            }
            const noResumeMessage = document.createElement("p");
            noResumeMessage.innerText = "No resume available.";
            document.body.appendChild(noResumeMessage);
            return;
        }

        const data: ResumeForm = JSON.parse(resumeData);

        // Show the resume layout
        const resumeContainer = document.getElementById("resume-container");
        if (resumeContainer) resumeContainer.style.display = "block";  
        // Display data in HTML elements
        (document.getElementById("name") as HTMLHeadingElement).innerText = data.fullName;
        (document.getElementById("job") as HTMLHeadingElement).innerText = data.jobTitle1;
        (document.getElementById("email") as HTMLSpanElement).innerText = data.email;
        (document.getElementById("phone") as HTMLSpanElement).innerText = data.phone;
        (document.getElementById("address") as HTMLSpanElement).innerText = data.address;
        (document.getElementById("summary") as HTMLParagraphElement).innerText = data.summary;
        (document.getElementById("references-content") as HTMLParagraphElement).innerText = data.certifications;

        // Load profile image if available
        if (data.profileImage) {
            (document.getElementById("profileImage") as HTMLImageElement).src = data.profileImage;
        }

        const educationList = data.education.split(",");
        const educationElement = document.getElementById("education-list") as HTMLUListElement;
        educationElement.innerHTML = ""; 
        educationList.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item.trim();
            educationElement.appendChild(li);
        });

        // Display skills
        const skills = [data.skill1, data.skill2, data.skill3, data.skill4, data.skill5];
        const skillsElement = document.getElementById("skills-list") as HTMLUListElement;
        skillsElement.innerHTML = ""; // Clear previous content
        skills.forEach((skill) => {
            if (skill) {
                const li = document.createElement("li");
                li.innerText = skill;
                skillsElement.appendChild(li);
            }
        });

        const workExperience = [data.jobDescription1, data.jobDescription2];
        const workExperienceElement = document.getElementById("work-experience-list") as HTMLUListElement;
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
