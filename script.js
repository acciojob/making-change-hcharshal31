const makeChange = (c) => {
	const change = {
		q: 0,
		d: 0,
		n: 0,
		p: 0
	}
	const changeValues = {
		q: 25,
		d: 10,
		n: 5,
		p: 1
	}

	change.q = (c - (c % changeValues.q)) / changeValues.q;
	c = c -changeValues.q;

	change.d = (c - (c % changeValues.d)) / changeValues.d;
	c = c -changeValues.d;

	change.n = (c - (c % changeValues.n)) / changeValues.n;
	c = c -changeValues.n;

	change.p = (c - (c % changeValues.p)) / changeValues.p;
	c = c -changeValues.p;

	return change;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
