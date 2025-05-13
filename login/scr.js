 function validateForm() {

      document.getElementById("mobileError").textContent = "";
      document.getElementById("passwordError").textContent = "";

      var mobile = document.getElementById("mobile").value.trim();
      var password = document.getElementById("password").value.trim();
      var valid = true;

      var mobilePattern = /^09\d{9}$/;
      if (mobile === "") {
        document.getElementById("mobileError").textContent = "لطفاً شماره موبایل را وارد کنید.";
        valid = false;
      } else if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").textContent = "شماره موبایل وارد شده معتبر نیست. فرمت صحیح: 09123456789";
        valid = false;
      }

      
      if (password === "") {
        document.getElementById("passwordError").textContent = "لطفاً رمز عبور را وارد کنید.";
        valid = false;
      }
      return valid;
    }