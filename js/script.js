var swiper = new Swiper('.mySwiper', {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev2',
	},
	breakpoints: {
		0: {
			
			slidesPerView: 1,
		},
		621: {

			slidesPerView: 2,
		},
	},
});

document.getElementById('send').addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.querySelector('.name').value.trim();
	const phone = document.querySelector('.phone').value.trim();
	const company = document.querySelector('.company').value.trim();
	const error = document.querySelector('.error');

	const phoneRegex = /^\+998\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

	if (name === '') {
		error.style.display = 'block';
		error.textContent = 'Iltimos, ismingizni kiriting!';
		return;
	}

	if (!phoneRegex.test(phone)) {
		error.style.display = 'block';
		error.textContent = 'Telefon raqam +998 XX XXX XX XX formatida bo‘lishi shart!';
		return;
	}

	if (company === '') {
		error.style.display = 'block';
		error.textContent = 'Kompaniya nomini kiriting!';
		return;
	}

	error.style.display = 'none';
	alert('Muvaffaqiyatli yuborildi!');
	this.submit();
});
