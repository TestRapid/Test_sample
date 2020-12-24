function accordion(start) {

	const accordion = Array.from(document.querySelector(".accordion").children);
	const accordion_title = accordion.filter(child => child.classList.contains("accordion__title"));
	const accordion_body = accordion.filter(child => child.classList.contains("accordion__body"));
	if (!!start) {
		accordion_body.forEach((accord, i) => {
			if (i === 0) {
				accord.style["max-height"] = `${accord.scrollHeight}px`;
				accord.previousElementSibling.classList.add("toggle");
			}
		})
	}
	accordion_title.forEach((accordion) => {
		accordion.addEventListener("click", (e) => {
			const next = e.target.nextElementSibling;
			if (!next.classList.contains("accordion__body")) {
				return;
			}
			if (!start) {
				if (e.target.classList.contains("toggle")) {
					e.target.classList.remove("toggle");
					next.style["max-height"] = "0";
				} else {
					e.target.classList.add("toggle");
				}
			} else {
				e.target.classList.add("toggle");
			}
			if (!e.target.classList.contains("toggle")) {
				return;
			}
			next.style["max-height"] = `${next.scrollHeight}px`;
			accordion_body.filter(accord => next !== accord).forEach((accord) => {
				accord.previousElementSibling.classList.remove("toggle");
				accord.style["max-height"] = "0";
			});
		});
	});
}
accordion();