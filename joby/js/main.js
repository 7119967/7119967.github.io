//Инициализация глобальных переменных
var input_login = $("#id_login");
var input_pass1 = $("#id_pass1");

var user = {
  email: "",
  password1: ""
};

//Инициализация функций
$(".fa-eye-slash").click(function() {
  input_pass1.get(0).type = "password";
  $(".fa-eye-slash").hide();
  $(".fa-eye").show();
});

$(".fa-eye").click(function() {
  input_pass1.get(0).type = "text";
  $(".fa-eye").hide();
  $(".fa-eye-slash").show();
});

//По нажатию кнопки Зарегистрироваться
$("#submit").click(function() {
  event.preventDefault();

    $(".modal-header.form-group").hide();
    $(".modal-body.form-group").hide();
    $(".modal-footer.form-group").hide();
    $(".welcome").show();
});