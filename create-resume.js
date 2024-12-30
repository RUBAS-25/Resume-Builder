"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = document.getElementById('resumeForm');
        if (!form) {
            console.error('Form not found');
            return;
        }
        const formData = {
            fullName: document.getElementById('fullName').value,
            profileImage: null,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            summary: document.getElementById('summary').value,
            skill1: document.getElementById('skill1').value,
            skill2: document.getElementById('skill2').value,
            skill3: document.getElementById('skill3').value,
            skill4: document.getElementById('skill4').value,
            skill5: document.getElementById('skill5').value,
            jobTitle1: document.getElementById('jobTitle1').value,
            jobDescription1: document.getElementById('jobDescription1').value,
            jobTitle2: document.getElementById('jobTitle2').value,
            jobDescription2: document.getElementById('jobDescription2').value,
            education: document.getElementById('education').value,
            certifications: document.getElementById('certifications').value
        };
        const profileImageInput = document.getElementById('profileImage');
        if (profileImageInput.files && profileImageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function () {
                formData.profileImage = reader.result;
                localStorage.setItem('resumeData', JSON.stringify(formData));
                alert('Data saved to local storage successfully!');
            };
            reader.readAsDataURL(profileImageInput.files[0]);
        }
        else {
            localStorage.setItem('resumeData', JSON.stringify(formData));
            alert('Data saved to local storage successfully!');
        }
    };
    const form = document.getElementById('resumeForm');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleFormSubmit);
});
