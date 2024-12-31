// import { useState } from "react";
// import toast from "react-hot-toast";


// const useSignup = ()=>{
//     const [loading, setLoading] = useState(false);

//     const signup = async({ fullName, userName, password, confirmPassword, gender }) => {
//         const success  = handleInputErrors({ fullName, userName, password, confirmPassword, gender })
//         if(!success) return;

//         setLoading(true);
//         try {
//             const res = await fetch("/api/auth/signup",{
//                 method: "POST",
//                 headers : {"Content-Type": "application/json"},
//                 body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
//             });


//             const data = await res.json();
//             console.log(dara)
            
//         } catch (error) {
//             toast.error(error.message);
//         } finally {
//             setLoading(false)
//         }
//     }
//     return {loading,signup}
// };

// export default useSignup;

// function handleInputErrors({ fullName, userName, password, confirmPassword, gender }){
//     if (!fullName || !userName || !password || !confirmPassword || !gender){
//         console.log(fullName, userName, password, confirmPassword, gender)
//         toast.error('Please fill in all fields')
//         return false
//     }

//     if (password != confirmPassword){
//         toast.error("Password do not match")
//         return false
//     }

//     if (password.length < 6){
//         toast.error("Password must be atleast 6 characters")
//         return false
//     }
//     return true;
// }


import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("https://real-time-chat-application-ilv4.onrender.com/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            
            // localstorage
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("chat-user",JSON.stringify(data))
            // context
            setAuthUser(data)
            
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred while signing up.");
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}
