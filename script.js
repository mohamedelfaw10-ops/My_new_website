function sendMail(e){

  e.preventDefault();

  let name =
    document.getElementById("name").value;

  let message =
    document.getElementById("message").value;

  let subject =
    encodeURIComponent(
      "Portfolio Contact - " + name
    );

  let body =
    encodeURIComponent(message);

  window.location.href =
    "mailto:mohamedelfaw10@gmail.com" +
    "?subject=" + subject +
    "&body=" + body;
}