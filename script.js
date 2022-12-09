let currentTab = document.getElementById("html-tab");

function changeTab(tab)
{
  if(currentTab.id == tab + "-tab")
  {
    return;
  }
  else
  {
    currentTab.style.display = "none";
    currentTab = document.getElementById(tab + "-tab");
    currentTab.style.display = "block";
  }
}
