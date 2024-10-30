let otpReceived; // Variable to store the OTP received

document.getElementById('otpForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        if (data.success) {
            otpReceived = data.otp; // Store the received OTP
            document.getElementById('otpSection').style.display = 'block'; // Show OTP input section
            alert('OTP sent! Check your email.');
        } else {
            alert('Failed to send OTP.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Verify OTP
document.getElementById('verifyOtpBtn').addEventListener('click', () => {
    const otpEntered = document.getElementById('otp').value;
    if (otpEntered === otpReceived) {
        alert('Welcome! OTP verified successfully.');
    } else {
        alert('Incorrect OTP. Please try again.');
    }
});
