function switchTheme() {
    const html = document.documentElement;
    const knob = document.getElementById("theme-knob");
    html.classList.toggle("dark");
    knob.classList.toggle("translate-x-5");
  }

  // File upload name change
  document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("sourceFile");
    const uploadText = document.getElementById("upload-text");

    fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0) {
        uploadText.textContent = fileInput.files[0].name;
      }
    });
  });