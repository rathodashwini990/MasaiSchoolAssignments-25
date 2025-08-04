let domUpdates = 0;

document.getElementById("vanillaBtn").addEventListener("click", () => {
  const titleElement = document.getElementById("title");
  titleElement.textContent = "Updated by Vanilla JS - " + Date.now();
  
  domUpdates++;
  document.getElementById("domCount").textContent = domUpdates;
});