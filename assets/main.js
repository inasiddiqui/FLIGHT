window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

	// Get all of my image blocks; querySelectorAll takes a CSS selector
	let imageBlocks = document.querySelectorAll('li.image-block')
    let audioBlocks = document.querySelectorAll('li.audio-file-block')
    let audioembedBlocks = document.querySelectorAll('li.audio-embed')
    let videoBlocks = document.querySelectorAll('li.video-file-block')
    let videoembedBlocks = document.querySelectorAll('li.video-embed-block')
    let linkBlocks = document.querySelectorAll('li.link-block')
    let textBlocks = document.querySelectorAll('li.text-block')

    let allBlocks=  [...imageBlocks, ...audioembedBlocks, ...audioBlocks, ...videoBlocks, ...videoembedBlocks, ...linkBlocks,...textBlocks ]; // ...textBlocks
    // allBlocks = Array.prototype.concat.apply([], allBlocks);
    // allBlocks.flat(1);
    console.log (allBlocks)
	// Go through all of my image blocks
	allBlocks.forEach((block) => {
		// Make the blocks react on click

		// Target the figure element of the block
		block.querySelector('figure').onclick = () => {
			// Add a class called active
			block.classList.add('active')
		}

		// Target the aside element of the block
		block.querySelector('aside').onclick = () => {
			// Remove a class called active
			block.classList.remove('active')
		}
	})
}

