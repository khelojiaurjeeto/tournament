const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyowEKXI74FyL0HhmGm3sRPMOE8ExD7TUMe__8qIU2Zf2CKUYqKhNZYaPvmIt_1oOZKEQ/exec";
if (localStorage.getItem('khelo_local')) {
    window.location.href = 'index.html';
}

async function generateOtp() {
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({ action: "generateOtp", email }),
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert('OTP sent to your email!');
            document.getElementById('otpSection').style.display = 'flex';
        } else {
            alert('Failed to send OTP. Try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send OTP. Please try again later.');
    }
}

async function submitData() {
    const formData = {
        action: "verifyAndSubmit",
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        username: document.getElementById('username').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        password: document.getElementById('password').value,
        gameId: document.getElementById('gameId').value,
        email: document.getElementById('email').value,
        otp: document.getElementById('otp').value,
    };

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert('Signup successfully!');
            window.location.href = 'login.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit data. Please try again later.');
    }
}