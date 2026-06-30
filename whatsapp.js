// WhatsApp Floating Button
(function () {
	function initWhatsAppButton() {
		const button = document.createElement('a');
		button.id = 'whatsapp-btn';
		button.className = 'whatsapp-float';
		button.innerHTML = '💬';
		button.setAttribute('aria-label', 'Contact us on WhatsApp');

		// Determine which phone number to use based on current page
		const currentPage = window.location.pathname.toLowerCase();
		const isParochetPage = currentPage.includes('parochet.html');

		const phoneNumber = isParochetPage ? '0544451906' : '0587707552';
		const messageText = isParochetPage ? 'הגעתי אלייכם דרך כתר המלך אשמח לקבל מידע' : 'שלום, אני רוצה למצוא עוד מידע';
		const message = encodeURIComponent(messageText);

		// Format phone number for WhatsApp (with country code)
		const whatsappPhone = phoneNumber.replace(/^0/, '972');
		button.href = `https://wa.me/${whatsappPhone}?text=${message}`;
		button.target = '_blank';
		button.rel = 'noopener noreferrer';

		document.body.appendChild(button);
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initWhatsAppButton);
	} else {
		initWhatsAppButton();
	}
})();
