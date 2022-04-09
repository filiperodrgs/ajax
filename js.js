var ajax;
var customerData ;

window.onload = function populateTable() {

    if (window.XMLHttpRequest) {
        // Mozilla, Safari, IE7+ ...
        ajax = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE 6 and older
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    // run this when the ajax request completes
    ajax.onreadystatechange = function() {
      if (ajax.readyState === 4 && ajax.status === 200) {
        customerData= JSON.parse(ajax.responseText);

        var table = "";

      for (var i in customerData) {
        table += "<tr>";
        table +=
          "<td>" +
          customerData[i].id +
          "</td>" +
          "<td>" +
          customerData[i].firstName +
          "</td>" +
          "<td>" +
          customerData[i].lastName +
          "</td>" +
          "<td>" +
          customerData[i].email +
          "</td>" +
          "<td>" +
          customerData[i].phone +
          "</td>" +
          "<td><button type='button' class='btn btn-warning'>Edit</button></td>" +
          "<td><button type='button' class='btn btn-danger'>Delete</button></td>";
        table += "</tr>";
      }

      document.getElementById("user-table").innerHTML = table;
      }
    }
    
    // start the AJAX request
    ajax.open('GET', 'http://localhost:8080/javabank5/api/customer', true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send();
};




  

