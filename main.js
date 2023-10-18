document.addEventListener("DOMContentLoaded", () => {
  const heartIcon = document.querySelector(".like-glyph");
  const errorModal = document.querySelector("#modal");

  errorModal.classList.add("hidden");

  function handleSuccessResponse() {
    heartIcon.classList.add("activated-heart");
  }

  function handleErrorResponse(errorMsg) {
    errorModal.classList.remove("hidden");
    errorModal.textContent = errorMsg;

    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 3000);
  }

  heartIcon.addEventListener("click", () => {
    mimicServerCall()
      .then((response) => {
        // Check if the server response is a success (no need to inspect response data)
        if (response === "success") {
          handleSuccessResponse();
        } else {
          // Handle the error response
          handleErrorResponse("Server request failed.");
        }
      })
      .catch((error) => {
        // Handle any potential network or other errors
        handleErrorResponse("Server request failed.");
      });
  });

  heartIcon.addEventListener("click", () => {
    // Toggle the heart icon on click
    if (heartIcon.classList.contains("activated-heart")) {
      heartIcon.classList.remove("activated-heart");
    } else {
      // Add the class to make the heart appear red
      heartIcon.classList.add("activated-heart");
    }
  });
});