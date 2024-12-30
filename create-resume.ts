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

    const handleFormSubmit = (event: Event): void => {
        event.preventDefault();
        const form = document.getElementById('resumeForm') as HTMLFormElement;

        if (!form) {
            console.error('Form not found');
            return;
        }

        const formData: ResumeForm = {
            fullName: (document.getElementById('fullName') as HTMLInputElement).value,
            profileImage: null,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            address: (document.getElementById('address') as HTMLInputElement).value,
            summary: (document.getElementById('summary') as HTMLTextAreaElement).value,
            skill1: (document.getElementById('skill1') as HTMLInputElement).value,
            skill2: (document.getElementById('skill2') as HTMLInputElement).value,
            skill3: (document.getElementById('skill3') as HTMLInputElement).value,
            skill4: (document.getElementById('skill4') as HTMLInputElement).value,
            skill5: (document.getElementById('skill5') as HTMLInputElement).value,
            jobTitle1: (document.getElementById('jobTitle1') as HTMLInputElement).value,
            jobDescription1: (document.getElementById('jobDescription1') as HTMLTextAreaElement).value,
            jobTitle2: (document.getElementById('jobTitle2') as HTMLInputElement).value,
            jobDescription2: (document.getElementById('jobDescription2') as HTMLTextAreaElement).value,
            education: (document.getElementById('education') as HTMLInputElement).value,
            certifications: (document.getElementById('certifications') as HTMLInputElement).value
        };

        const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
        if (profileImageInput.files && profileImageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function () {
                formData.profileImage = reader.result as string;
                localStorage.setItem('resumeData', JSON.stringify(formData));
                alert('Data saved to local storage successfully!');
            };
            reader.readAsDataURL(profileImageInput.files[0]);
        } else {
            localStorage.setItem('resumeData', JSON.stringify(formData));
            alert('Data saved to local storage successfully!');
        }
    };

    const form = document.getElementById('resumeForm') as HTMLFormElement;
    form?.addEventListener('submit', handleFormSubmit);
});
