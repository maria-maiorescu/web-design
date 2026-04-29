document.getElementById("contactForm").addEventListener("submit", function (e) {

  // --- Full name ---
  const fullname = document.getElementById("fullname").value.trim();
  const namePattern = /^[A-Za-z\s]+$/;

  if (fullname.length < 5) {
    alert("Full name must contain at least 5 characters.");
    e.preventDefault();
    return;
  }

  if (!namePattern.test(fullname)) {
    alert("Full name must contain only letters and spaces.");
    e.preventDefault();
    return;
  }

  // --- Email ---
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

  if (!emailPattern.test(email)) {
    alert("Email must be valid and end with @e-uvt.ro");
    e.preventDefault();
    return;
  }

  // --- Phone (optional) ---
  const phone = document.getElementById("phone").value.trim();
  const phonePattern = /^\d{10}$/;

  if (phone !== "" && !phonePattern.test(phone)) {
    alert("Phone number must contain exactly 10 digits.");
    e.preventDefault();
    return;
  }

  // --- Subject ---
  const subject = document.getElementById("subject").value;

  if (!subject) {
    alert("Please select a subject.");
    e.preventDefault();
    return;
  }

  // --- Message ---
  const msg = document.getElementById("msg").value.trim();

  if (!msg) {
    alert("Message cannot be empty.");
    e.preventDefault();
    return;
  }

  // --- Radio button ---
  const radioSelected = document.querySelector('input[name="hear"]:checked');

  if (!radioSelected) {
    alert("Please select how you heard about us.");
    e.preventDefault();
    return;
  }

  // --- Date of Birth (must be at least 18) ---
  const dobValue = document.getElementById("dob").value;

  if (!dobValue) {
    alert("Please enter your date of birth.");
    e.preventDefault();
    return;
  }

  const dobDate = new Date(dobValue);
  const today = new Date();
  let computedAge = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    computedAge--;
  }

  if (computedAge < 18) {
    alert("You must be at least 18 years old.");
    e.preventDefault();
    return;
  }

  // --- Age (18–60) ---
  const ageValue = parseInt(document.getElementById("age").value, 10);

  if (isNaN(ageValue) || ageValue < 18 || ageValue > 60) {
    alert("Age must be a number between 18 and 60.");
    e.preventDefault();
    return;
  }

  // --- Website URL (must start with https://) ---
  const website = document.getElementById("website").value.trim();

  if (!website) {
    alert("Please enter your website URL.");
    e.preventDefault();
    return;
  }

  if (!website.startsWith("https://")) {
    alert("Website URL must start with https://");
    e.preventDefault();
    return;
  }

  try {
    new URL(website);
  } catch (_) {
    alert("Please enter a valid website URL.");
    e.preventDefault();
    return;
  }

  // --- File upload (.pdf or .docx, max 2 MB) ---
  const fileInput = document.getElementById("fileUpload");

  if (fileInput.files.length === 0) {
    alert("Please upload a file.");
    e.preventDefault();
    return;
  }

  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();
  const validExtensions = [".pdf", ".docx"];
  const hasValidExtension = validExtensions.some(ext => fileName.endsWith(ext));

  if (!hasValidExtension) {
    alert("Only .pdf or .docx files are allowed.");
    e.preventDefault();
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("File size must not exceed 2 MB.");
    e.preventDefault();
    return;
  }

  // --- Favourite colour ---
  const favColor = document.getElementById("favColor").value;

  if (!favColor) {
    alert("Please select your favourite colour.");
    e.preventDefault();
    return;
  }

  // --- Confirmation dialog ---
  const confirmed = confirm("All fields are valid. Are you sure you want to submit the form?");
  if (!confirmed) {
    e.preventDefault();
  }
});
