let fields = [];
let markedFields = [];

setupFields();

function setupFields() {
	let doc = document.getElementById("board");
	let board = doc.getContext("2d");
	let thirdSize = Math.floor(board.canvas.offsetWidth / 3);

	fields = [
		{
			fieldId: 11,
			fromX: 0,
			fromY: 0,
			toX: thirdSize,
			toY: thirdSize,
		},
		{
			fieldId: 12,
			fromX: thirdSize,
			fromY: 0,
			toX: thirdSize * 2,
			toY: thirdSize,
		},
		{
			fieldId: 13,
			fromX: thirdSize * 2,
			fromY: 0,
			toX: thirdSize * 3,
			toY: thirdSize,
		},
		{
			fieldId: 21,
			fromX: 0,
			fromY: thirdSize,
			toX: thirdSize,
			toY: thirdSize * 2,
		},
		{
			fieldId: 22,
			fromX: thirdSize,
			fromY: thirdSize,
			toX: thirdSize * 2,
			toY: thirdSize * 2,
		},
		{
			fieldId: 23,
			fromX: thirdSize * 2,
			fromY: thirdSize,
			toX: thirdSize * 3,
			toY: thirdSize * 2,
		},
		{
			fieldId: 31,
			fromX: 0,
			fromY: thirdSize * 2,
			toX: thirdSize,
			toY: thirdSize * 3,
		},
		{
			fieldId: 32,
			fromX: thirdSize,
			fromY: thirdSize * 2,
			toX: thirdSize * 2,
			toY: thirdSize * 3,
		},
		{
			fieldId: 33,
			fromX: thirdSize * 2,
			fromY: thirdSize * 2,
			toX: thirdSize * 3,
			toY: thirdSize * 3,
		},
	];
}

function handleClick(e) {
	let doc = document.getElementById("board");
	let board = doc.getContext("2d");
	let size = board.canvas.offsetWidth;

	const clickField = this.getClickedField(e);

	// if (sendClick(clickField)) {
	// 	// get the type mark user and call drawMark
	// 	drawMark("CIRCLE", clickField);
	// }

	drawMark("CIRCLE", clickField);
}

function getClickedField(e) {
	let clickField;

	for (let field of fields) {
		if (
			e.layerX > field.fromX &&
			e.layerX < field.toX &&
			e.layerY > field.fromY &&
			e.layerY < field.toY
		) {
			clickField = field.fieldId;
		}
	}

	return clickField;
}
