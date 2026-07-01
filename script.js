// Prem-Energy Website

console.log("Prem-Energy Website Loaded");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

function showPayment(){

const payment=document.getElementById("paymentMethod").value;

document.getElementById("waveInfo").style.display="none";
document.getElementById("kpayInfo").style.display="none";

if(payment==="wave"){
document.getElementById("waveInfo").style.display="block";
}

if(payment==="kpay"){
document.getElementById("kpayInfo").style.display="block";
}

}

function copyWave(){

navigator.clipboard.writeText("09682506493");

alert("Wave Pay Number Copied!");

}

function copyKpay(){

navigator.clipboard.writeText("09682506493");

alert("KBZPay Number Copied!");

}
