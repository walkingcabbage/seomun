function validate() {
    //event.preventDefault();
    var objEmail = document.getElementById("email");
    var objName = document.getElementById("name");
    var objPwd1 = document.getElementById("pw1");
    var objPwd2 = document.getElementById("pw2");
    var userbirth = document.getElementById("birth");

    //아이디와 패스워드 값 데이터 정규화 공식
    //이메일 값 데이터 유효성 체크
    //[]안에 있는 값만 쓰겠다
    var regul1 = /^[a-zA-Z0-9]{4,12}$/;
    //이메일 정규화 공식
    var regul2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    //이름 정규화 공식
    var regul3 = /^[가-힝a-zA-Z]{2,}$/;
    //var email = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);



    //이메일 입력 안했을 경우
    if ((objEmail.value) == "") {
        alert("이메일을 입력해 주세요");
        objEmail.focus();
        return false;
    }
    //이메일이 잘못된 경우
    if (!check(regul2, objEmail, "이메일을 잘못 입력 했습니다.")) {
        return false;
    }
    //이름 입력 안 한 경우
    if ((objName.value) == "") {
        alert("이름을 입력해 주세요");
        objName.focus();
        return false;
    }
    //이름에 특수 문자가 들어간 경우
    if (!check(regul3, objName, "이름이 잘못 되었습니다.")) {
        return false;
    }

    //비밀번호 입력 하지 않았을 경우
    if ((objPwd1.value) == "") {
        alert("비밀번호를 입력해 주세요");
        objPwd1.focus();
        return false;
    }
    if ((objPwd2.value == "")) {
        alert("비밀번호를 입력해 주세요");
        objPwd2.focus();
        return false;
    }

    //비밀번호 유효성 검사
    //만약 내가 비밀번호에 정규화 방식을 하나라도 지키지 않으면 if문 안으로 들어가서 alert message를 띄움
    if (!check(regul1, objPwd1, "비밀번호는 4~12자의 대소문자와 숫자로만 입력 가능합니다.")) {
        return false;
    }

    //비밀번호와 비밀번호 확인이 일치 하지 않을 경우
    if ((objPwd1.value) != (objPwd2.value)) {
        alert("비밀번호가 일치 하지 않습니다.");
        objPwd1.focus();
        objPwd2.focus();
        return false;
    }

    let birth_pattern = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
    if(!check(birth_pattern,userbirth,'생년월일이 잘못 입력 되었습니다.')){
        return false; 
   }
}

function check(re, what, message) { //정규화데이터,아이템 id,메세지
    if (re.test(what.value)) { //what의 문자열에 re의 패턴이 있는지 나타내는 함수 test
        //만약 내가 입력한 곳의 값이 정규화 데이터를 썼다면 true를 반환해서 호출 된 곳으로 리턴됨
        return true;
    }
    alert(message);
    what.value = "";
    what.focus();
}