describe('Application pages', function() {

	it('main page should contain a login button', function() {
		browser().navigateTo('/');
		expect(element('button#login').count()).toBe(1);
	});

	it('Application page should contain Welcome header', function() {
		browser().navigateTo('/app');
		expect(element('')).not().toBe('/');
	});
});
