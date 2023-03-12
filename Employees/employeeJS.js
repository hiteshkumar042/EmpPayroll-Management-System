$(document).ready(function () {
    $.get('http://localhost:3000/Employee', function(data) {
      // code to run when the request is successful
      console.log(data);
    

    for (let i = 0; i < data.length; i++) {
      // 1) to create a <tr> for every object in the array
      // template lieteral
      let departments = JSON.parse(data[i].departments);
      const tr = `<tr>
          <td>${data[i].name}</td>
          <td>${data[i].gender}</td> 
          <td>${departments.map((department) => {
             return `<span>${department}</span>`;
           })}</td>
           <td>${data[i].salary}</td>
            <td>${data[i].date}</td>
            <td> <span><button style="font-size:20px"><i class="fa fa-edit"></i></button></span> &nbsp &nbsp &nbsp &nbsp
            <span><button style="font-size:20px"><i class="fa fa-trash-o"></i></button></span>
            </td>
             
              
          </tr>`;
  
      $(".tablebody").append(tr);
    }
});

});

