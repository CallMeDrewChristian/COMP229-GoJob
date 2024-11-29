import React, {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Prevent Default")
        try {
          const response = await fetch('http://192.168.0.15:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
    
          if (response.ok) {
            console.log('Login successful:', data);
            window.location.assign('/'); 
          } else {
            console.error('Login failed:', data);
            setError({
              email: data.emailError || '',
              password: data.passwordError || '',
            });
          }
        } catch (ex) {
          console.error('Error during login:', ex);
        }
      };

    return  (
        <>
         <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <div className="email error">{error.email}</div>

      <label>
        Password:
        <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="password error">{error.password}</div>

      <button type="submit">Login</button>
    </form>

        </>

    )
}
export default Login