// Class that handles all rendering to the UI
class UI {
  constructor() {
    this.partialSearchResult = document.getElementById("partialSearchResult");
    this.selectedResult = document.getElementById("selectedResult");
    this.id = 0;
  }
  //Show search result in card partialSearchResult
  showSearch(countries) {
    let output = `<div class="card text-left border-radius grid-2" >
    `;
    countries.forEach(function(country) {
      output += ` <p> ${country.name} </p> 
      <button class="btn btn-add" onClick="ui.addResult('${country.name}')"> 
      Add to search History 
      </button>`;
    });
    output += `</div>`;
    this.partialSearchResult.innerHTML = output;
  }

  // Add result to selected result
  addResult(country) {
    let node = document.createElement("LI");
    let textnode = document.createTextNode(
      country + " " + this.generateTimeStamp()
    );
    node.appendChild(textnode);

    node.setAttribute("id", "item" + this.id);
    var removeButton = document.createElement("button");
    removeButton.className = "btn btn-delete";
    removeButton.appendChild(document.createTextNode("Delete entry"));
    removeButton.setAttribute(
      "onClick",
      'ui.removeResult("' + "item" + this.id + '")'
    );
    node.appendChild(removeButton);
    this.id += 1;

    this.selectedResult.appendChild(node);
  }
  //removes li from ul list.
  removeResult(itemid) {
    console.log(itemid);
    var item = document.getElementById(itemid);
    selectedResult.removeChild(item);
  }

  // generates a timestamp from date
  generateTimeStamp() {
    var m = new Date();
    var dateString =
      m.getUTCFullYear() +
      "/" +
      ("0" + (m.getUTCMonth() + 1)).slice(-2) +
      "/" +
      ("0" + m.getUTCDate()).slice(-2) +
      " " +
      ("0" + m.getUTCHours()).slice(-2) +
      ":" +
      ("0" + m.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + m.getUTCSeconds()).slice(-2);
    return dateString;
  }

  clearResult() {
    console.log("was clicked");
    this.selectedResult.innerHTML = "";
  }
}
