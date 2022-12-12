let currentTab = document.getElementById("html-tab");

let code = {
            html: "", 
            css: "",
            js: "",
            console: "",
            get htu(){return this.html.slice(this.html.indexOf("<html>")+6, this.html.indexOf("</html>"))}
           };



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
  
  if(currentTab == document.getElementById("page-tab"))
  {
    document.getElementById("code").style.display = "none";
    document.getElementbyId("pageCreated").contentWindow.  // next line is inside the iframe
      document.getElementsByTagName("html")[0].innerHTML = code.htu;
  }
  else
  {
    document.getElementById("code").style.display = "block";
  }
}

document.getElementById("code").onclick = function()
{
  document.getElementById(currentTab.id != "console-tab" && currentTab.id != "page-tab" ? currentTab.id.slice(0, -4) : currentTab.id == "consoleTab" ? "console" : "i am under the water").focus();
};

for(let i = 0; i < 4; i++)
{
  document.getElementsByTagName("input")[i].oninput = function()
  {
    if(document.getElementsByTagName("input")[i].parentElement == currentTab)
    {
      document.getElementById("code").innerHTML = document.getElementsByTagName("input")[i].value;
    }
  };
}
