import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// AOS

AOS.init({
  duration:1000
});

// Loader

window.addEventListener("load",() => {

  document.querySelector(".loader").style.display="none";

});

emailjs.init("n_Nr1hm4mH0vcR_nb");

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.send("service_27e3qvc", "template_mrvbsde", {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    service: document.getElementById("mainService").value,
    message: this.message.value,
    date: this.date.value
  })
  .then(() => {
    alert("Booking Sent Successfully!");
    this.reset();
  })
  .catch((error) => {
    alert("Error sending email");
    console.log(error);
  });
});

// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.onclick=()=>{

  navLinks.classList.toggle("active");

};

// Typed JS

new Typed(".typing",{

  strings:[
    "Ticket Booking & Online Services",
    "One Place for All Travel Services",
    "Fast & Trusted Service Center"
  ],

  typeSpeed:60,
  backSpeed:40,
  loop:true

});

// Counter

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

  counter.innerText='0';

  const update=()=>{

    const target=+counter.getAttribute("data-target");

    const c=+counter.innerText;

    const increment=target/100;

    if(c<target){

      counter.innerText=`${Math.ceil(c+increment)}`;

      setTimeout(update,30);

    }else{

      counter.innerText=target;

    }

  }

  update();

});

// Gallery Slider

const slides=document.querySelectorAll(".slide");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

let index=0;

function showSlide(i){

  slides.forEach(slide=>slide.classList.remove("active"));

  slides[i].classList.add("active");

}

next.onclick=()=>{

  index++;

  if(index>=slides.length){
    index=0;
  }

  showSlide(index);

};

prev.onclick=()=>{

  index--;

  if(index<0){
    index=slides.length-1;
  }

  showSlide(index);

};

setInterval(()=>{

  index++;

  if(index>=slides.length){
    index=0;
  }

  showSlide(index);

},4000);

// Scroll Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

  if(window.scrollY>300){

    topBtn.style.display="block";

  }else{

    topBtn.style.display="none";

  }

});

topBtn.onclick=()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

};

// Form Validation

//const form=document.getElementById("bookingForm");

//form.addEventListener("submit",(e)=>{

  //alert("Booking Submitted Successfully!");

//});
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  try {

    await addDoc(collection(db, "bookings"), {

      name: document.querySelector('input[name="name"]').value,

      phone: document.querySelector('input[name="phone"]').value,

      email: document.querySelector('input[name="email"]').value,

      service: document.getElementById("mainService").value,

      message: document.querySelector("textarea").value,

      createdAt: new Date()

    });

    alert("Booking Submitted Successfully!");

    bookingForm.reset();

  } catch (error) {

    console.error(error);

    alert("Error while saving booking.");

  }

});