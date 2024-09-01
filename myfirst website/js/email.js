$(document).ready(function () {
    // form submit
    $("#contact-form").on("submit", function (event) {
      event.preventDefault();
      
      // formData 넣어주고
      const formData = new FormData(this);
      
      // 파라미터 조건들 넣어줘야함
      // ID나 Key들은 각자 다르기때문에 EmailJS에서 확인하고 기입
      formData.append('service_1lsz87j', 'YOUR_SERVICE_ID');
      formData.append('template_1gc368c', 'YOUR_TEMPLATE_ID');
      formData.append('by15QWHoALhllmlAz', 'YOUR_PUBLIC_KEY');
  
      $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
      })
        .done(function () {
          alert('성공');
        })
        .fail(function (error) {
          alert("Oops... " + JSON.stringify(error));
        });
    });
  });