//Инициализация глобальных переменных

var input_email = $("#id_email");
var input_pass1 = $("#id_pass1");
var input_pass2 = $("#id_pass2");

var user = {
  email: "",
  password1: "",
  password2: ""
};

//Инициализация функций
$(".fa-eye-slash").click(function() {
  input_pass1.get(0).type = "password";
  input_pass2.get(0).type = "password";
  $(".fa-eye-slash").hide();
  $(".fa-eye").show();
});

$(".fa-eye").click(function() {
  input_pass1.get(0).type = "text";
  input_pass2.get(0).type = "text";
  $(".fa-eye").hide();
  $(".fa-eye-slash").show();
});

$(document).ready(function() {
  input_email.blur(function() {
    if ($(this).val() != "") {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      if (pattern.test($(this).val())) {
        if ($(this).hasClass("is-invalid")) {
          $(this).toggleClass("is-invalid is-valid");
        } else {
          $(this).addClass("is-valid");
        }
        if ($("#ntf_email").hasClass("invalid-feedback")) {
          $("#ntf_email").toggleClass("invalid-feedback valid-feedback");
        }
        $("#ntf_email").text("Проверка email прошла успешно.");
      } else {
        if ($(this).hasClass("is-valid")) {
          $(this).toggleClass("is-valid is-invalid");
        } else {
          $(this).addClass("is-invalid");
        }
        if ($("#ntf_email").hasClass("valid-feedback")) {
          $("#ntf_email").toggleClass("valid-feedback invalid-feedback");
        }
        $("#ntf_email").text("Не верный формат email!");
      }
    }
  });
});

$(document).ready(function() {
  input_pass1.blur(function() {
    if ($(this).val() != "") {
      if ($(this).val().length >= 6) {
        if ($(this).hasClass("is-invalid")) {
          $(this).toggleClass("is-invalid is-valid");
        } else {
          $(this).addClass("is-valid");
        }
        if ($("#ntf_pass1").hasClass("invalid-feedback")) {
          $("#ntf_pass1").toggleClass("invalid-feedback valid-feedback");
        }
        $("#ntf_pass1").text("Пароль валидный.");
      } else {
        if ($(this).hasClass("is-valid")) {
          $(this).toggleClass("is-valid is-invalid");
        } else {
          $(this).addClass("is-invalid");
        }
        if ($("#ntf_pass1").hasClass("valid-feedback")) {
          $("#ntf_pass1").toggleClass("valid-feedback invalid-feedback");
        }
        $("#ntf_pass1").text("Пароль должен быть не короче 6 символов!");
      }
    }
  });
});

$(document).ready(function() {
  input_pass2.blur(function() {
    if ($(this).val() != "") {
      if ($(this).val() === input_pass1.val()) {
        if ($(this).hasClass("is-invalid")) {
          $(this).toggleClass("is-invalid is-valid");
        } else {
          $(this).addClass("is-valid");
        }
        if ($("#ntf_pass2").hasClass("invalid-feedback")) {
          $("#ntf_pass2").toggleClass("invalid-feedback valid-feedback");
        }
        $("#ntf_pass2").text("Пароли совпадают.");
      } else {
        if ($(this).hasClass("is-valid")) {
          $(this).toggleClass("is-valid is-invalid");
        } else {
          $(this).addClass("is-invalid");
        }
        if ($("#ntf_pass2").hasClass("valid-feedback")) {
          $("#ntf_pass2").toggleClass("valid-feedback invalid-feedback");
        }
        $("#ntf_pass2").text("Пароли не совпадают!");
      }
    }
  });
});

function getFocus(item, ntf) {
  $(item).removeClass("is-valid");
  $(item).removeClass("is-invalid");
  $(ntf).toggleClass("invalid-feedback valid-feedback");
  $(ntf).text("");
}

//Если поле получает фокус, то возвращаем статус в исходное положение
$("#id_email").focus(function () {getFocus("#id_email", "#ntf_email")});
$("#id_pass1").focus(function () {getFocus("#id_pass1", "#ntf_pass1")});
$("#id_pass2").focus(function () {getFocus("#id_pass2", "#ntf_pass2")});

//По нажатию кнопки Зарегистрироваться
$("#submit").click(function() {
  event.preventDefault();

  if (
    input_email.hasClass("is-valid") &
    input_pass1.hasClass("is-valid") &
    input_pass2.hasClass("is-valid") &
    (input_email.val() != "") &
    (input_pass1.val() != "") &
    (input_pass2.val() != "")
  ) {
    $(".modal-header.form-group").hide();
    $(".modal-body.form-group").hide();
    $(".modal-footer.form-group").hide();
    $(".welcome").show();

    user.email = input_email.val();
    user.password1 = input_pass1.val();
    user.password2 = input_pass2.val();

    console.log(user.email);
    console.log(user.password1);
    console.log(user.password2);
    console.log(user);
  } else {
    alert(
      "Вы ввели неверные данные на форме. \nИсправьте пожалуйста ошибку, чтобы отправить форму."
    );
  }
});
