window.maps = {};

maps['classic5x3'] = {
	name: '5 x 3 经典',
	data: [
		[0, 3, 0, 6, 0],
		[2, 7, 0, 7, 1],
		[0, 5, 0, 4, 0]
	],
	isDefault: true
}

maps['empty5x5'] = {
	name: '5 x 5 空地图',
	data: [ 
		[1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 2]
	]
};

maps['trigram5x5'] = {
	name: '5 x 5 八卦阵',
	data: [
		[1, 0, 6, 0, 0],
		[0, 3, 0, 4, 0],
		[5, 0, 0, 0, 3],
		[0, 6, 0, 5, 0],
		[0, 0, 4, 0, 2]
	]
};

maps['complicate15x10'] = {
	name: '15 x 10 复杂图',
	data: [
		[1, 6, 0, 5, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0],
		[0, 0, 0, 4, 0, 0, 0, 6, 6, 5, 0, 0, 3, 0, 0],
		[3, 4, 0, 3, 0, 3, 0, 4, 0, 0, 5, 0, 5, 0, 0],
		[0, 0, 0, 6, 6, 0, 5, 0, 0, 3, 3, 0, 3, 5, 0],
		[0, 6, 5, 5, 0, 0, 3, 0, 6, 0, 0, 0, 6, 0, 0],
		[0, 0, 0, 3, 0, 3, 3, 0, 5, 0, 3, 0, 5, 0, 4],
		[4, 6, 0, 4, 0, 3, 0, 6, 4, 0, 6, 0, 4, 0, 0],
		[0, 0, 3, 5, 5, 0, 0, 5, 0, 0, 5, 0, 3, 0, 6],
		[0, 0, 0, 6, 0, 0, 0, 0, 0, 5, 0, 0, 6, 5, 0],
		[0, 0, 5, 0, 0, 0, 0, 6, 0, 0, 0, 0, 5, 0, 2]
	]
};