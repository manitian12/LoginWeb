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
            alert('OTP sent! Check your email.');
        } else {
            alert('Failed to send OTP.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
