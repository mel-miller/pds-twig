Drupal.behaviors.modal = {
	attach(context) {
		const openBtn = document.getElementById("openBtn");
		const closeBtn = document.querySelector(".modal .close-btn");
		const modal = closeBtn.closest(".modal");

		openBtn.addEventListener("click", (e) => {
			e.preventDefault();
			modal.style.display = "block";
			openBtn.style.display = "none";
		});

		closeBtn.addEventListener("click", (e) => {
			e.preventDefault();
			modal.style.display = "none";
			openBtn.style.display = "block";
		});

		window.addEventListener("keydown", function (event) {
			if (event.key === "Escape") {
				modal.style.display = "none";
				openBtn.style.display = "block";
			}
		});
	},
};
