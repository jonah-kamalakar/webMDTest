document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".form-check-input").forEach((e) => {
    if (e.id !== "swap_media_text") {
      e.checked = true;
    }
  });
  document.querySelector("#blade_title").addEventListener("change", (event) => {
    if (event.target.checked == true) {
      document.querySelector("#blade-title").style.display = "block";
    } else {
      document.querySelector("#blade-title").style.display = "none";
    }
  });
  document.querySelector("#blade_caption").addEventListener("change", (event) => {
      if (event.target.checked == true) {
        document.querySelector("#blade-subtitle").style.display = "block";
      } else {
        document.querySelector("#blade-subtitle").style.display = "none";
      }
    });
  document.querySelector("#blade_read_more").addEventListener("change", (event) => {
      if (event.target.checked == true) {
        document.querySelector("#read-more").style.display = "block";
      } else {
        document.querySelector("#read-more").style.display = "none";
      }
    });
  document.querySelector("#blade_cta1").addEventListener("change", (event) => {
    if (event.target.checked == true) {
      document.querySelector("#cta1").style.display = "block";
    } else {
      document.querySelector("#cta1").style.display = "none";
    }
  });
  document.querySelector("#blade_cta2").addEventListener("change", (event) => {
    if (event.target.checked == true) {
      document.querySelector("#cta2").style.display = "block";
    } else {
      document.querySelector("#cta2").style.display = "none";
    }
  });
  document.querySelector("#swap_media_text").addEventListener("change", (event) => {
      if (window.innerWidth > 768) {
        if (event.target.checked == true) {
          document.querySelector(".blade-text-col").classList.add("order-md-2");
        } else {
          document.querySelector(".blade-text-col").classList.remove("order-md-2");
        }
      }
    });
  document.querySelector(".drawer-close").addEventListener("click", () => {
    document.querySelector(".module-drawer").style.display = "none";
    document.querySelector(".section-container").classList.remove("col-md-8");
    document.querySelector(".section-container").classList.add("col-12");
    document.querySelector(".drawer-open").style.display = "block";
  });
  document.querySelector(".drawer-open").addEventListener("click", () => {
    document.querySelector(".module-drawer").style.display = "block";
    document.querySelector(".section-container").classList.remove("col-12");
    document.querySelector(".section-container").classList.add("col-md-8");
    document.querySelector(".drawer-open").style.display = "none";
  });
  document.querySelector("#read-more").addEventListener("click", (event) => {
    if (document.querySelector("#blade-content").style.height != "100%") {
      event.target.textContent = "Read Less";
      document.querySelector("#blade-content").style.height = "100%";
    } else {
      event.target.textContent = "Read More";
      document.querySelector("#blade-content").style.height = "72px";
    }
  });
  document.querySelector("#blade_edit_title").addEventListener("input",(event)=>{
    if(event.target.value !== ''){
      document.querySelector("#blade-title").textContent = event.target.value;
    }else{
      document.querySelector("#blade-title").textContent = "Blade Title"
    }
  })
  document.querySelector("#blade_edit_subtitle").addEventListener("input",(event)=>{
        if(event.target.value !== ''){
      document.querySelector("#blade-subtitle").textContent = event.target.value;
    }else{
      document.querySelector("#blade-subtitle").textContent = "Blade Subtitle"
    }
  })
  document.querySelector("#blade_edit_content").addEventListener("input",(event)=>{
    document.querySelector("#blade-content").textContent = event.target.value;
  })
});
