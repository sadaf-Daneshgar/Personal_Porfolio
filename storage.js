const emailInput = document.querySelector('.contact-form-email');
const nameInput = document.querySelector('.contact-form-name');
const textarea = document.querySelector('.contact-form-message');

const updateInputs = (value, type) => {
  const getLocalData = localStorage.getItem('form');
  if (getLocalData === null) {
    const newValue = {
      name: '',
      email: '',
      message: '',
    };
    localStorage.setItem('form', JSON.stringify(newValue));
  }

  const getExistingData = JSON.parse(localStorage.getItem('form'));
  getExistingData[type] = value;
  localStorage.setItem('form', JSON.stringify(getExistingData));
};

const updateLoadedData = () => {
  const getFormData = JSON.parse(localStorage.getItem('form'));
  if (getFormData === null) return;

  emailInput.value = getFormData.email;
  nameInput.value = getFormData.name;
  textarea.value = getFormData.message;
};

// events
emailInput.addEventListener('keyup', (e) => updateInputs(e.target.value, 'email'));
nameInput.addEventListener('keyup', (e) => updateInputs(e.target.value, 'name'));
textarea.addEventListener('keyup', (e) => updateInputs(e.target.value, 'message'));
window.addEventListener('load', () => updateLoadedData());
