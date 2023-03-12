$(document).ready(() => {
  $(".form").submit(function (event) {
    let departments = [];
    let name = $("#name").val();
    let profileImage = $("input[name='profile']").val();
    let gender = $("input[name='gender']").val();
    $("input[name='department']:checked").each(function () {
      departments.push($(this).val());
    });
    let salary = $("#salary").val();
    let day = $("#day").val();
    let month = $("#month").val();
    let year = $("#year").val();
    let notes = $("#notes").val();

    console.log(name, profileImage, gender,departments,salary,day,month,year,notes);
   
    let obj = {
        name:name,
        departments:JSON.stringify(departments),
        profileImage:profileImage,
        gender:gender,
        salary:salary,
        date:day+"/"+month+"/"+year,
        notes:notes,
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/Employee",
        data: obj,
        success: function () {
          alert("data posted succesfully");
        },
        error: function () {
          alert("error in posting");
        },
    });


    
    event.preventDefault();
  });
});
