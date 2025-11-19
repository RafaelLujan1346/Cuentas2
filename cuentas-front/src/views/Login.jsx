import './css/login.css';
import { useState } from 'react';
export default function Login() {
    const [email,setEmail]= useState("Rafa@gmail.com")
    const [password, setPassword]= useState("123")

            const submit=async (e)=>{
                e.preventDefault()
                try{
                    const res = await fetch("http://localhost:8000/api/login",{
                        method:"POST",
                        headers:{
                            "Content-type":"application/json"
                        },body:JSON.stringify({
                            email:email,
                            password:password
                        })
                    })
                    const data = await res.json()
                    console.log("RESPUESTA",data)
                }catch(err){
                 console.log(err)
                }
            }

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <img 
                        id="profile-img" 
                        className="rounded-circle profile-img-card" 
                        src="https://i.imgur.com/6b6psnA.png"
                        alt="profile"
                    />

                    <form onSubmit={submit} className="form-signin">

                        {/* 🔹 Nuevo campo de correo */}
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="inputEmail" className="form-control form-group" placeholder="Email"
                            required
                        />

                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="inputPassword"className="form-control form-group" 
                            placeholder="Password" 
                            required
                        />

                        <button 
                            className="btn btn-lg btn-primary btn-block btn-signin" 
                            type="submit"
                        >
                            Enter
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
