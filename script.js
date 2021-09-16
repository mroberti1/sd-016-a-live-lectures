let doNotClickButton = document.querySelector('#do-not-click');

doNotClickButton.addEventListener('click', function() {
  let myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
});