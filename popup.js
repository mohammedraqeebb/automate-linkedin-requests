document.addEventListener('DOMContentLoaded', function () {

  function connectWithPeople() {
    chrome.runtime.sendMessage({ command: "connect" }, function (response) {
      if (response.result === "success") {

      } else {

      }
    });
  }
  const button = document.querySelector('#startButton');
  if (button) {
    button.addEventListener('click', connectWithPeople);
  }
})

