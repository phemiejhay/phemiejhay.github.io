document.addEventListener("DOMContentLoaded", function () {
    // Get references to the list items and sections
    const educationTab = document.querySelector(".tab-links:nth-child(1)");
    const professionalSkillsTab = document.querySelector(".tab-links:nth-child(2)");
    const experienceTab = document.querySelector(".tab-links:nth-child(3)");

    const educationSection = document.getElementById("education");
    const professionalSkillsSection = document.getElementById("professional-skills");
    const experienceSection = document.getElementById("experience");

    // Function to hide all sections
    function hideAllSections() {
        educationSection.style.display = "none";
        professionalSkillsSection.style.display = "none";
        experienceSection.style.display = "none";
    }

    // Show education section by default
    hideAllSections();
    educationSection.style.display = "block";

    // Add click event listeners to the tabs
    educationTab.addEventListener("click", function () {
        hideAllSections();
        educationSection.style.display = "block";
    });

    professionalSkillsTab.addEventListener("click", function () {
        hideAllSections();
        professionalSkillsSection.style.display = "block";
    });

    experienceTab.addEventListener("click", function () {
        hideAllSections();
        experienceSection.style.display = "block";
    });
});