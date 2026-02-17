const button = document.getElementById("myTable + button");
const tb = document.querySelector("#myTable tbody" );




button.addEventListener("click",(evt)=>{
    const tr = document.createElement("tr");
    
    const tdId = document.createElement("td");
    tdId.textContent = "1";

    const tdName = document.createElement("td");
    tdName.textContent = "Mario";

    const tdLastname = document.createElement("td");
    tdLastname.textContent = "Rossi"
    
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdLastname);

    tb.appendChild(tr);
    
})