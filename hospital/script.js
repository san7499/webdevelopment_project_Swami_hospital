const navBar = document.getElementById('nav-bar');
const homeSection = document.getElementById('home');
const makeAppointmentBtn = document.getElementById('make-appointment-btn');
const servicesList = document.getElementById('services-list');
const departmentsList = document.getElementById('departments-list');
const doctorsList = document.getElementById('doctors-list');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const appointmentForm = document.getElementById('appointment-form');
const bookAppointmentBtn = document.getElementById('book-appointment-btn');
const appointmentDoctorSelect = document.getElementById('appointment-doctor');

makeAppointmentBtn.addEventListener('click', () => {
    scrollToSection('appointments');
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});

bookAppointmentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    const appointmentDoctor = appointmentDoctorSelect.value;
    console.log(`Appointment: ${appointmentDate} at ${appointmentTime} with ${appointmentDoctor}`);
});

const departments = {
    "New York": ["Pediatrics", "Orthopedics", "Neurology"],
    "California": ["Gynecology", "Urology", "Ophthalmology"]
};

Object.keys(departments).forEach(state => {
    const departmentList = departments[state];
    departmentList.forEach(department => {
        const listItem = document.createElement('li');
        listItem.textContent = department + " - " + state;
        departmentsList.appendChild(listItem);
    });
});

const doctors = {
    "Dr. John Doe": "Cardiologist",
    "Dr. Jane Smith": "Dermatologist",
    "Dr. Michael Johnson": "Neurologist",
    "Dr. Sarah Lee": "Gynecologist",
    "Dr. David Kim": "Urologist",
    "Dr. Emily Chen": "Ophthalmologist"
};

Object.keys(doctors).forEach(doctor => {
    const doctorDiv = document.createElement('div');
    doctorDiv.textContent = `${doctor} - ${doctors[doctor]}`;
    doctorsList.appendChild(doctorDiv);

    const doctorOption = document.createElement('option');
    doctorOption.value = doctor;
    doctorOption.textContent = doctor;
    appointmentDoctorSelect.appendChild(doctorOption);
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navBarHeight = navBar.offsetHeight;
    const sectionPosition = section.offsetTop - navBarHeight;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}


