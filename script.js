let currentTab = document.getElementById("html-tab");

console.log = function(x)
{
  document.getElementById("console").value += x + "\n";
};

console.error = function(x)
{
  document.getElementById("console").value += "****ERROR****\n" + x + "\n*************";
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
  
  if(tab == 'page')
  {
    document.getElementbyId("pageCreated").contentWindow.  // next line is inside the iframe
      document.getElementsByTagName("html")[0].innerHTML = document.getElementById("html-code").value.slice(this.html.indexOf("<html>")+6, this.html.indexOf("</html>"));
    console.log(document.getElementById("html-code").value.slice(this.html.indexOf("<html>")+6, this.html.indexOf("</html>")));
    document.getElementbyId("pageCreated").contentWindow.
      document.getElementsByTagName("body")[0].appendChild(
        s = document.getElementbyId("pageCreated").contentWindow.
          document.createElement("script")
      );
    s.innerHTML = document.getElementById("js-code").value;
    
    document.getElementbyId("pageCreated").contentWindow.
      document.getElementsByTagName("head")[0].appendChild(
        s = document.getElementbyId("pageCreated").contentWindow.
          document.createElement("style")
      );
    s.innerHTML = document.getElementById("css-code").value;
  }
}

document.getElementById("code").onclick = function()
{
  document.getElementById(currentTab.id != "console-tab" && currentTab.id != "page-tab" ? currentTab.id.slice(0, -4) : currentTab.id == "consoleTab" ? "console" : "i am under the water").focus();
};

for(let i = 0; i < 4; i++)
{
  document.getElementsByTagName("textarea")[i].oninput = function()
  {
    if(document.getElementsByTagName("textarea")[i].parentElement == currentTab)
    {
      document.getElementById("code").innerHTML = document.getElementsByTagName("textarea")[i].value;
    }
  };
}
