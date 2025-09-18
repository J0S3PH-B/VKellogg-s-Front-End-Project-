function validateForm() {
    const form = document.getElementById('contactForm');
    const firstName = form['firstName'].value.trim();
    const lastName = form['lastName'].value.trim();
    const email = form['email'].value.trim();
    const phoneNumber = form['phoneNumber'].value.trim();
    const inquiry = form['inquiry'].value.trim();
    
    if (!firstName) {
        alert('First Name is required.');
        return false;
    }
    
    if (!lastName) {
        alert('Last Name is required.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }
    
    if (!inquiry) {
        alert('Inquiry is required.');
        return false;
    }

    console.log('Berhasil')
    alert('data is valid')
    return true; 
}
