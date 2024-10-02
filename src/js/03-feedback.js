import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Load form data from local storage
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
};

// Save form data to local storage
const saveFormData = throttle(() => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}, 500);

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

// Event listeners
form.addEventListener('input', saveFormData);
form.addEventListener('submit', handleSubmit);

// Initialize form with saved data
loadFormData();

