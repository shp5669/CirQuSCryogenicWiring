document.addEventListener("DOMContentLoaded", function() {
    const onlineBtn = document.getElementById("onlineBtn");
    const offlineBtn = document.getElementById("offlineBtn");
  
    onlineBtn.addEventListener("click", function() {
      // Redirect to online version or handle other logic
      window.location.href = "/online";
    });
  
    offlineBtn.addEventListener("click", function() {
      // Redirect to offline version or handle other logic
      window.location.href = "/offline";
    });
  });
  