function validEmail(){
    const email = document.getElementById('UserName').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("올바른 이메일 형식이 아닙니다!");
   
    }else{
         alert("로그인 성공");
    }
}
