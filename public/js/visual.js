window.onload = () => {
	this.setupBoard();
};

function setupBoard() {
	let doc = document.getElementById("board");
	let board = doc.getContext("2d");
	let size = board.canvas.offsetWidth;
	let thirdSize = Math.floor(size / 3);

	board.beginPath();
	board.moveTo(thirdSize, 0);
	board.lineTo(thirdSize, size);
	board.stroke();

	board.beginPath();
	board.moveTo(thirdSize * 2, 0);
	board.lineTo(thirdSize * 2, size);
	board.stroke();

	board.beginPath();
	board.moveTo(0, thirdSize);
	board.lineTo(size, thirdSize);
	board.stroke();

	board.beginPath();
	board.moveTo(0, thirdSize * 2);
	board.lineTo(size, thirdSize * 2);
	board.stroke();
}

function drawMark(type, clickField) {
	let doc = document.getElementById("board");
	let board = doc.getContext("2d");

	const field = fields.find((field) => {
		return field.fieldId == clickField;
	});

	if (type == "CIRCLE") {
		let circle = getCircleDef(field);

		board.beginPath();
		board.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
		board.stroke();
	} else {
		const X = getXDef(field);

		board.beginPath();
		//board.arc(X.x, X.y, X.r, 0, 2 * Math.PI);
		board.stroke();
	}
}

function getCircleDef(field) {
	let pointX = (field.fromX + field.toX) / 2;
	let pointY = (field.fromY + field.toY) / 2;
	let radius = (field.toX - field.fromX) * 0.35;

	return { x: pointX, y: pointY, r: radius };
}

function getXDef(field) {
	let widthField = field.toX - field.fromX;
	let xWidth = widthField * 0.7;
	let markMarging = field.pointX + (widthField + xWidth) / 2;
}
