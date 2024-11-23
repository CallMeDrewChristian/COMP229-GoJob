<form action="/login">
    <input type="text" name="email" required/>
    <div class="email error"></div>
    <input type="text" name="password" required/>
    <div class="password error"></div>
    <button>Login</button>
</form>

const form = document.querySelector('form')
form.addEventListener('submit', async(e)=>{
    try{
        e.preventDefault();
        const email = form.email.value
        const password = form.email.value
        const res = await fetch('/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {'Content-type': 'application/json'}

        });
        const data = await res.json();
        console.log(data);
        location.assign('/')
    }
    catch(ex) {
        console.log("error")
        console.dir(ex)

    }
})