(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				// querySelectorAll is for a one to many relationship and returns a NodeList (an array) of matching elements
				puzzlePieces = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone"),
				gameBoard = document.querySelector(".puzzle-board"); // one to one relationship -> returns the first matching element

	let imageNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let couldDrag_tl = true, couldDrag_tr = true, couldDrag_bl = true, couldDrag_br = true;

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?
	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources
		imageNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
		});

		// and set the drop zone background
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
	}

	function allowDrag(event) {
		// let the drag happen, and store a reference of the ID of the element we're dragging
		console.log('started dragging an image: this one - ', event.target.id);

		event.dataTransfer.setData("draggedImg", this.id);
		// event.dataTransfer.setData("targetTrack", this.dataset.track);
		// set a reference to a data track so i can retrieve it later in the drop
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log("dragged something over me!");
	}

	function allowDrop(event) {
		console.log("dropped something on me");

		let droppedImage = event.dataTransfer.getData("draggedImg");
		// let currentTrack = event.dataTransfer.getData('targetTrack');

		event.target.appendChild(document.querySelector(`#${droppedImage}`));
	}

		// set a function for reset puzzle piece
		function resetPuzzlePieces(event) {
			let sectionLeft = document.getElementById("left");

			let zone1 = document.getElementById("zone1");
			if (zone1.firstChild){
				img = zone1.firstChild;
				zone1.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone2 = document.getElementById("zone2");
			if (zone2.firstChild){
				img = zone2.firstChild;
				zone2.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone3 = document.getElementById("zone3");
			if (zone3.firstChild){
				img = zone3.firstChild;
				zone3.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone4 = document.getElementById("zone4");
			if (zone4.firstChild){
				img = zone4.firstChild;
				zone4.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone5 = document.getElementById("zone5");
			if (zone5.firstChild){
				img = zone5.firstChild;
				zone5.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone6 = document.getElementById("zone6");
			if (zone6.firstChild){
				img = zone6.firstChild;
				zone6.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone7 = document.getElementById("zone7");
			if (zone7.firstChild){
				img = zone7.firstChild;
				zone7.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone8 = document.getElementById("zone8");
			if (zone8.firstChild){
				img = zone8.firstChild;
				zone8.removeChild(img)
				sectionLeft.appendChild(img);
			}
			let zone9 = document.getElementById("zone9");
			if (zone9.firstChild){
				img = zone9.firstChild;
				zone9.removeChild(img)
				sectionLeft.appendChild(img);
			}
			// reset
			couldDrag_tl = true, couldDrag_tr = true, couldDrag_bl = true, couldDrag_br = true;
		}

			// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzleButtons.forEach(reset => reset.addEventListener('click', resetPuzzlePieces));
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));


	for (let zone of dropZones) {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	}

	changeImageSet.call(puzzleButtons[0]);

	var myMusic= document.getElementById("audio_play");
    function play() {
    	myMusic.play();
    }


})();
