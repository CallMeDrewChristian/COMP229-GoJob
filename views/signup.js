<form action="/signup">
    <input type="text" name="email" required/>
    <div class="email error"></div>
    <input type="text" name="password" required/>
    <div class="password error"></div>

    <label>
        <input type="radio" name="role" value="Job-Seeker" required/>
    </label>
    <label>
        <input type="radio" name="role" value="Employer" required/>
    </label>

    <button>signup</button>
</form>

const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
    try{
        e.preventDefault();
        const email = form.email.value
        const password = form.email.value
        const role = form.role.value
        const res = await fetch('/signup', {
            method: 'post',
            body: JSON.stringify({email, password, role}),
            headers: {'Content-type': 'application/json'}

        });
        const data = await res.json();
        console.log(data);
    }
    catch(ex) {
        console.log("error")
        console.dir(ex)

    }
})