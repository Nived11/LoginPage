const API="http://localhost:3000";
async function getHome(){
    try {
        const token=sessionStorage.getItem("token")
        console.log(token);
        
        const res= await fetch(API+"/api/home",{
            method:"GET",
            headers:{"authorization":`Bearer ${token}`}
        })
        console.log(res);
        
        if(res.status==200){
           
            const data=await res.json();
            const  {username}=data
            console.log(username);
            document.getElementById("usname").textContent=`Hello ${username}..`;
        }
        else{
            const {msg}=await res.json();
                alert(msg);
                window.location.href="../pages/login.html"
        }
    } catch (error) {
        console.log(error);
        
    }
}
getHome()

