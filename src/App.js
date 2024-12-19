import React, { useState,useEffect } from 'react'
import App2 from './App2'

const App = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [users,setUsers] = useState([])

    
    
    
    const handleAuthentication = (e) => {
        e.preventDefault();
        console.log(email.length)
        
    
        if (isRegister) {
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                setIsLogin(true);
            } else {
                alert("Login Failed! Please check your data.");
            }
        }
        else if(email.length < 12){
            alert('email lenght is so short')
        }

        else {
            const newUser = { email, password, userName, fullName };
            
    
            // Use functional update to ensure the previous state is correctly used
            setUsers((prevUsers) => {
                const updatedUsers = [...prevUsers, newUser];
                localStorage.setItem("users", JSON.stringify(updatedUsers)); // Sync with localStorage
                return updatedUsers;
            });
     // This will show the old state because `setUsers` is asynchronous
            setIsLogin(true);
        }
    };
    
    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(savedUsers); // Initialize state from localStorage
    }, []);
    

const handleLogOut=()=>{
    setIsLogin(false)
}



    return (
        <div>
            {
                !isLogin ?
                <div >
                        <h1 className='text-4xl text-center mt-5 underline'>
                            {
                                isRegister ? 'Login Form' : "Register Form"
                            }
                        </h1>
                        <div className="h-screen md:flex">
                            <div
                                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr i justify-around items-center hidden">
                                <img src="https://media.istockphoto.com/id/1351148968/vector/detailed-world-map-divided-into-six-continents-accurate-correct-version.jpg?s=612x612&w=0&k=20&c=J9ZRhjqGtHODcSfisVa50SOO11WGz1Wbmr72m6JOpAk=" alt="" />


                            </div>
                            <div className="flex flex-col md:w-1/2 justify-center py-10 items-center ">
                                {
                                    !isRegister ? <form className="bg-white p-10 pb-0 rounded ">
                                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Friends!</h1>
                                        <p className="text-sm font-normal text-gray-600 mb-7">Welcome to this Website.</p>
                                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <input className="pl-2 outline-none border-none" type="text" name="Fullname" id="" placeholder="Full name" onChange={(e) => setFullName(e.target.value)} required />
                                        </div>
                                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                            </svg>
                                            <input className="pl-2 outline-none border-none" type="text" name=" UserName" id="" placeholder="Username" onChange={(e) => setUserName(e.target.value)}required />
                                        </div>
                                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                            <input className="pl-2 outline-none border-none" type="text" name="Email" id="" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required/>
                                        </div>
                                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fillRule="evenodd"
                                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <input className="pl-2 outline-none border-none" type="text" name="Password" id="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                                        </div>
                                        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "onClick={handleAuthentication}>Register</button>
                                    </form> 
                                    
                                    
                                    :



                                <>
                                <form className="bg-white p-10 pb-0 rounded ">
                                <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Friends!</h1>
                                <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back.</p>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    <input className="pl-2 outline-none border-none" type="text" name="Email" id="" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} required/>
                                </div>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input className="pl-2 outline-none border-none" type="text" name="Password" id="" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}required/>
                                </div>
                                <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={handleAuthentication}>Login</button> 
                            </form>
                            </>
                                }
                               <p>
                               {
                                    isRegister ? `Don't Have an Account?` : "Already Have an Account? "
                                }
                                <a className='cursor-pointer text-sm text-blue-700 underline ml-2' onClick={()=>setIsRegister(!isRegister)}>
                                    {
                                        isRegister ? 'Register':"Login"
                                    }
                                </a>
                               </p>
                            </div>
                        </div>
                    </div>
                    :
                    <App2  handleLogOut={handleLogOut}/>
            }

        </div>
    )
}

export default App;
