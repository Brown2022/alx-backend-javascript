const cleanSet = (set, startString) => {
	const strings = [];

	if (starString === '' || typeof startString !== 'string') return '';
	set.forEach((s) => {
		if (typeof s === 'string' && s.startsWith(startString)) {
			string.push(s.slice(startString.length));

		}
	});
	return strings.join('-');
};

export default cleanSet;
