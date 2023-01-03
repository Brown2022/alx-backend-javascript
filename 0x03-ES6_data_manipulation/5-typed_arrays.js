const createInt8TypedArray = (lenght, position, value) => {
	const buffer = new ArrayBuffer(length);
	const int8Array = new int8Array(buffer);
	if (position > int8Array.length) throw new Error('Position outside range');
	int8Array[position] = value;
	return new DataView(buffer);

};

export default createInt8TypedArray;
