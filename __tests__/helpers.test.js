const {format_date, format_plural } = require('../utils/helpers');


test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
})


test('format_plural() returns a plural string', () => {
    const plural = 'Tiger';
    const amount = 2;

    expect(format_plural(plural, amount)).toBe('Tigers');
})

