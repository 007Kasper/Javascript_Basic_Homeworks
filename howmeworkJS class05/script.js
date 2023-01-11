// console.log("Connected");

//                   HOMEWORK  1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed



let paragraphs = document.querySelectorAll('p'); // gi selektirame site paragrafi
let headers = document.querySelectorAll('h1, h2, h3'); // gi selektirame site hederi


// zemame eden brojac koj ce gi pomne site paragrafi i bidejci HTML-ot se cita od gore na dole preku nivniot index ce go smenime nivtiot tekst.
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[0].innerText = 'The paragraph has been changed';
  paragraphs[1].innerText = 'We have Change the paragraph again :)';

}


// isto i tuka 
for (let i = 0; i < headers.length; i++) {
  headers[0].innerText = 'We Change the first header';
  headers[1].innerText = 'We Change the second header ';
  headers[2].innerText = 'We Change the third header';
}



//                          HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
//                     Don't forget to use google! :)

function createTable(numRows, numCols) {
  
  let table = document.createElement('table');
  table.border = "1"

  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  
  for (let i = 0; i < numRows; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
      let cell = document.createElement('td');
      cell.textContent = `Row-${i + 1} Column-${j + 1}`;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

 
  document.body.appendChild(table);
}

createTable(20,20);
















