import React, {useState} from 'react';
const URL = "http://localhost:8000"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`${URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
          });
          const data = await response.json();
          
          if (response.ok) {
            console.log('Login successful:', data);
            console.log(data.cookie)
            if (data.cookie) {
              const [token, maxAge] = data.cookie;
               const cookieName = 'jwt';  
              localStorage.setItem(cookieName, token)

      console.log('Token cookie set:', token);
            }
            //window.location.assign('/employees'); 
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