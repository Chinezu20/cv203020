function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        msg: document.getElementById("msg").value,
    };
} 

const serviceID = "service_v0wip5m";
const templateID = "template_igyzsvo";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
    }
)
.catch((err) => console.log(err))