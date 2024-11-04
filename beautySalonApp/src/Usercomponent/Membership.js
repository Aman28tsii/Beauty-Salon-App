import React, { useState } from 'react';
import axios from 'axios';
// import * as bcrypt from 'bcryptjs'; // Import bcrypt package

const Membership = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, setHasSpecial] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSignUp = async () => {
        setIsSubmitting(true);

        if (!username) {
            console.error("Please enter your username");
            return;
        }

        if (!email || !email.includes('@')) {
            console.error("Please enter a valid email address");
            return;
        }

        if (!password) {
            console.error("Please enter your password");
            return;
        }

        // Password strength check
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain at least 1 number, 1 special character, 1 uppercase letter, and be at least 8 characters long");
            return;
        }

        // Update character requirements state
        setHasNumber(/[0-9]/.test(password));
        setHasSpecial(/[!@#$%^&*]/.test(password));
        setHasUppercase(/[A-Z]/.test(password));

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            return;
        }

        // // Hash the password before sending to the server
        // const hashedPassword = bcrypt.hashSync(password, 10);

        try {
            const response = await axios.post('http://localhost:3001/api/xxx/signup', {
                username: username,
                email: email,
                password: password
            });

            console.log('Sign up successful:', response.data);
            setConfirmPasswordError(''); // Reset confirmation password error if passwords match

            alert('Congratulations! You have successfully become a member.'); // Add this line
            setIsSubmitting(false); // Set the form as not submitting
        } catch (error) {
            console.error('Error signing up:', error);
            setIsSubmitting(false); // Set the form as not submitting
        }
    };

    return (
        <div className='MembershipContain'>
            <h2 className='MB-h2'><b>Sign Up</b></h2>
            <form className='form-MB'>
                <input
                    className='input-MB'
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='input-MB'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='input-MB'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className='input-MB'
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                {passwordError && <div className="error-message">{passwordError}</div>}
                <span>Password must contain at least:</span>
                <ul>
                    <li>{hasNumber ? '✓' : '❌'} 1 number</li>
                    <li>{hasSpecial ? '✓' : '❌'} 1 special character</li>
                    <li>{hasUppercase ? '✓' : '❌'} 1 uppercase letter</li>
                </ul>
                <button type="button" className={`btn-MB ${isSubmitting ? 'disabled' : ''}`} onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    );
};

export default Membership;