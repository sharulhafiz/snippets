                // Get all checkboxes on the page
                const checkboxes = document.querySelectorAll('input[type=checkbox]');
                
                // Initialize a counter to track the number of selected checkboxes
                let selectedCount = 0;
                if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0){
                    selectedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
                }
                
                element = document.querySelectorAll('.group-title');
                jumlahcalon = parseInt(element.textContent);
                
                if (checkboxes.length > 0) {
                	// Add a change event listener to each checkbox
                	checkboxes.forEach((checkbox) => {
                		checkbox.addEventListener('change', () => {
                			// If the checkbox is checked, increment the counter; otherwise, decrement it
                			if (checkbox.checked) {
                				selectedCount++;
                			} else {
                				selectedCount--;
                			}
                
                			// Update the page to reflect the current number of selected checkboxes
                			document.getElementById('selected-count').innerText = 'Bilangan calon telah dipilih: ' + selectedCount + '/' + jumlahcalon;
                		});
                	});
                
                	// Create a new element to display the selected count
                	const selectedCountElement = document.createElement('div');
                	selectedCountElement.id = 'selected-count';
                	selectedCountElement.style.position = 'fixed';
                	selectedCountElement.style.bottom = '0';
                	selectedCountElement.style.right = '0';
                	selectedCountElement.style.padding = '10px';
                	selectedCountElement.style.backgroundColor = 'white';
                	selectedCountElement.style.border = '1px solid black';
                	selectedCountElement.innerText = 'Bilangan calon telah dipilih: ' + selectedCount + '/' + jumlahcalon;
                
                	// Add the element to the page
                	document.body.appendChild(selectedCountElement);
                } else {
                	console.log('No checkboxes found on the page');
                }
