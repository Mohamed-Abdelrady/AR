function contactJSON(){$.getJSON("contact.json",function(e){for(c=0;c<e.length;c++)$(".contacts").append(`<a href="${e[c].link}" target="_blank"><img src="img/icons/${e[c].img}.svg"/></a>`)})}function testimonials_slider_JSON(){$.getJSON("testimonials.json",function(e){for(t=0;t<e.length;t++)$(".testimonials").append(`<div class="testimonial">\n          <div class="profile"> \n            <div class="image"> \n              <img src="img/clients/${0!=e[t].avatar.length?e[t].avatar:"avatar.svg"}" alt="">\n            </div>\n            <div class="text"> \n              <h2>${e[t].clientName}</h2>\n              <span>${e[t].clientAddress}</span>\n            </div>\n          </div>\n          <div class="testi">\n            <h3>${e[t].projectTitle}</h3>\n            <q ${0!=e[t].projectFeedback.length?"":'style = "display: none;"'}">\n              ${e[t].projectFeedback}\n            </q>\n            <img src="img/icons/five_stars.webp">\n          </div>\n        </div>`)}).done(function(){$(".testimonials").slick({arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,prevArrow:'\n        <button class="slick-prev slick-arrow">\n          <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g filter="url(#filter0_d_1220_5)">\n              <path d="M30.875 38.2499L8.125 20.4999L30.875 2.74988" stroke="white" stroke-width="4" stroke-linecap="round"/>\n            </g>\n            <defs>\n              <filter id="filter0_d_1220_5" x="0.873535" y="0.749756" width="36.0015" height="47.5002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n                <feOffset dy="4"/>\n                <feGaussianBlur stdDeviation="2"/>\n                <feComposite in2="hardAlpha" operator="out"/>\n                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>\n                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1220_5"/>\n                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1220_5" result="shape"/>\n              </filter>\n            </defs>\n          </svg>\n        </button>\n        ',nextArrow:'\n        <button class="slick-next slick-arrow">\n          <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <g filter="url(#filter0_d_1220_16)">\n              <path d="M6.125 2.75L28.875 20.5L6.125 38.25" stroke="white" stroke-width="4" stroke-linecap="round"/>\n            </g>\n            <defs>\n              <filter id="filter0_d_1220_16" x="0.125" y="0.749878" width="36.0015" height="47.5002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n                <feOffset dy="4"/>\n                <feGaussianBlur stdDeviation="2"/>\n                <feComposite in2="hardAlpha" operator="out"/>\n                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>\n                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1220_16"/>\n                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1220_16" result="shape"/>\n              </filter>\n            </defs>\n          </svg>\n        \n        </button>\n        '})}).done(function(){var e=[];document.querySelectorAll(".testimonial .testi q").forEach(function(t,o){var n=t.textContent.trim();e.push(n),e[o].length>110&&$(t).html(e[o].slice(0,110)+'...<span class="show"> See more</span>'),$(t.childNodes[1]).click(function(n){$(this).hasClass("show")?(t.childNodes[0].textContent=e[o],$(this).text(" less"),$(this).removeClass("show"),$(this).addClass("hide")):(t.childNodes[0].textContent=e[o].slice(0,110)+"...",$(this).text(" See more"),$(this).removeClass("hide"),$(this).addClass("show"))})})})}function technologies_slider_JSON(){$.getJSON("web_technology.json",function(e){for(w=0;w<e.length;w++)$(".technologies_slider").append(`<div class="technology">\n          <img src="img/tech/${e[w].icon}.svg"/>\n          <span>${e[w].name}</span> \n        </div>`)}).done(function(){$(".technologies_slider").slick({arrows:!1,dots:!1,slidesToShow:3,slidesToScroll:3,rows:3,slidesPerRow:1,dots:!0,autoplay:!0,autoplaySpeed:3e3})})}function projects_slider_JSON(){$.getJSON("projects.json",function(e){for(p=0;p<e.length;p++)"umart"!=e[p].image&&$(".projects_slider").append(`<div  id="project-pop-up" class="proj_slider"  data-index="${p}">\n          <div style="--bg: url('../../img/projects/${e[p].bg}.webp')">\n            <h3>${e[p].title}</h3>\n          </div>\n        </div>`)}).done(function(){$(".projects_slider").slick({arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:3,speed:600,centerMode:!0,focusOnSelect:!0,draggable:!1,rows:2,slidesPerRow:1,autoplay:!0,autoplaySpeed:5e3,prevArrow:'\n      <button class="slick-prev slick-arrow">\n        <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <g filter="url(#filter0_d_1220_5)">\n            <path d="M30.875 38.2499L8.125 20.4999L30.875 2.74988" stroke="white" stroke-width="4" stroke-linecap="round"/>\n          </g>\n          <defs>\n            <filter id="filter0_d_1220_5" x="0.873535" y="0.749756" width="36.0015" height="47.5002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n              <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset dy="4"/>\n              <feGaussianBlur stdDeviation="2"/>\n              <feComposite in2="hardAlpha" operator="out"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>\n              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1220_5"/>\n              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1220_5" result="shape"/>\n            </filter>\n          </defs>\n        </svg>\n      </button>\n      ',nextArrow:'\n      <button class="slick-next slick-arrow">\n        <svg width="37" height="49" viewBox="0 0 37 49" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <g filter="url(#filter0_d_1220_16)">\n            <path d="M6.125 2.75L28.875 20.5L6.125 38.25" stroke="white" stroke-width="4" stroke-linecap="round"/>\n          </g>\n          <defs>\n            <filter id="filter0_d_1220_16" x="0.125" y="0.749878" width="36.0015" height="47.5002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n              <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n              <feOffset dy="4"/>\n              <feGaussianBlur stdDeviation="2"/>\n              <feComposite in2="hardAlpha" operator="out"/>\n              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>\n              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1220_16"/>\n              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1220_16" result="shape"/>\n            </filter>\n          </defs>\n        </svg>\n      \n      </button>\n      ',responsive:[{breakpoint:992,settings:{vertical:!0,slidesToShow:2,slidesToScroll:1}}]})})}if(window.addEventListener("load",function(){contactJSON(),testimonials_slider_JSON(),technologies_slider_JSON(),projects_slider_JSON(),$(".loader").addClass("hide"),$(".wrapper").addClass("show"),$("body").removeClass("active")}),ScrollReveal({distance:"100px",duration:500}),ScrollReveal().reveal(".navbar-up > *, .footer *",{delay:150,distance:"0px",opacity:0}),ScrollReveal().reveal(".about h1, .contact h1",{delay:50,origin:"bottom"}),ScrollReveal().reveal(".projects *",{delay:100,origin:"bottom",interval:50}),ScrollReveal().reveal(".services .left h1",{delay:100,origin:"bottom"}),ScrollReveal().reveal(".services .left p",{delay:150,origin:"bottom"}),ScrollReveal().reveal(".services  .right",{delay:250,origin:"right",opacity:0}),ScrollReveal().reveal(".home .left > *, .about .left > *, .contact .left > *",{delay:100,origin:"left",interval:25}),ScrollReveal().reveal(".home .right > *, .about .right > *, .contact .right > form",{delay:150,origin:"right",interval:50}),$(".services").on("click",".service",function(e){$(".left").addClass("shrink"),$(".right").addClass("grow"),$(".service").removeClass("grow"),$(e.target).addClass("grow")}),$(".services").on("click",".service.grow",function(e){$(".service").removeClass("grow"),$(".left").removeClass("shrink"),$(".right").removeClass("grow"),$(".right").addClass("ungrow")}),$(".projects_slider").on("click","#project-pop-up",e=>{e.preventDefault(),$(document.body).addClass("active"),$(".projects-pop-up").addClass("show")}),$(".projects-pop-up .close").on("click",e=>{e.preventDefault(),$(document.body).removeClass("active"),$(".projects-pop-up").removeClass("show")}),$(".projects_slider").on("click","#project-pop-up",function(e){e.preventDefault(),$.getJSON("projects.json",function(t){let o=$(e.target).data("index");$(".projects-pop-up").attr("style",`--bg-pop: url('../../img/projects/${t[o].bg}.webp')`),$(".projects-pop-up .image").html(`<img src="img/projects/${t[o].image}.webp"/>`),$(".projects-pop-up .title").html(t[o].title),$(".projects-pop-up .description").html(t[o].desc),$(".projects-pop-up .link").html(`<a target="_blank" href="${t[o].link}">Visit website</a>`),$(".projects-pop-up .skills").empty(),jQuery.each(t[o].skills,function(e,t){$(".projects-pop-up .skills").append("<li>"+t+"</li>")})})}),$(".navbar-up .open-menu").bind("click",()=>{$(".navbar-up .nav-parent").addClass("active"),$(document.body).addClass("active")}),$(".navbar-up .close-menu").bind("click",()=>{$(".navbar-up .nav-parent").removeClass("active"),$(document.body).removeClass("active")}),window.addEventListener("scroll",function(){window.scrollY>0?($(".navbar-up").addClass("resize"),$(".navbar-up .btn").addClass("btn-blue")):($(".navbar-up").removeClass("resize"),$(".navbar-up .btn").removeClass("btn-blue"))}),document.forms.ar_form){let e=!0,t=!0,o=!0;const n=document.forms.ar_form;function validateName(){if(""==$("#name").val().length)return $("#name").parents(".input-field").addClass("invalid"),e=!1,!1;$("#name").parents(".input-field").removeClass("invalid"),e=!0}function validateEmail(){let e=$("#email").val();if(!/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/.test(e))return $("#email").parents(".input-field").addClass("invalid"),t=!1,!1;$("#email").parents(".input-field").removeClass("invalid"),t=!0}function validateMessage(){if(""==$("#message").val().length)return $("#message").parents(".input-field").addClass("invalid"),o=!1,!1;$("#message").parents(".input-field").removeClass("invalid"),o=!0}n.addEventListener("submit",function(s){if(s.preventDefault(),validateName(),validateEmail(),validateMessage(),1!=e||1!=t||1!=o)return!1;{const e=new FormData(n),t=s.target.action;fetch(t,{method:"POST",body:e}).then(e=>{$(".contact #ar_form").addClass("hide"),$(".contact .success").addClass("show"),$("#name").val(""),$("#email").val(""),$("#message").val(""),$("#ar_form .input-field").removeClass("invalid"),$("#ar_form .input-field").removeClass("not-empty")}).catch(e=>console.error("Error!",e.message))}}),$(".contact .success .show_form").on("click",e=>{e.preventDefault(),$(".contact #ar_form").removeClass("hide"),$(".contact .success").removeClass("show")}),$("#ar_form .form-input").blur(function(e){"name"==e.target.id&&validateName(),"email"==e.target.id&&validateEmail(),"message"==e.target.id&&validateMessage(),0!==$(this).val().length&&$(this).parents(".input-field").addClass("not-empty"),0==$(this).val().length&&$(this).parents(".input-field").removeClass("not-empty")})}window.addEventListener("click",e=>{e.target.classList.contains("page-content")&&(document.body.classList.remove("active"),document.querySelector(".projects-pop-up").classList.remove("show"))}),$.getJSON("projects.json",function(e){e.length>0&&$(".navbar-up #projects").append("<span>"+e.length+"</span>")});