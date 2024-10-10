drawSignature();

function drawSignature() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "#FFFAF0";
	context.beginPath();
	context.rect(25, 50, 300, 300);
	context.fill();

	context.fillStyle = "green";
	context.beginPath();
	context.rect(50, 50, 250, 50);
	context.rect(50, 150, 50, 100);
	context.rect(150, 150, 50, 50);
	context.rect(250, 150, 50, 100);
	context.fill();
}
