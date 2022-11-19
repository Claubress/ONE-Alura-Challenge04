import { loadFormAddproduct } from "../components/form-addproduct/load.component.js";

loadFormAddproduct();

const fileInput = document.getElementById('inputImage')
const buttonInput = document.getElementById('file-button');
const dropZone = document.getElementById('result-image')
const img = document.getElementById('img-result')
const url = document.getElementById('form-input');


buttonInput.addEventListener('click', (e) => {
	e.preventDefault();
	fileInput.click();
});


url.addEventListener('change', (e) => {
	e.preventDefault();

	fetch(url.value)
		.then(res => res.blob())
		.then(blob => {
			const file = new File([blob], 'image', {type: blob.type});
			const dt = new DataTransfer();
			dt.items.add(file);
			fileInput.files = dt.files;		
			uploadImage(file);
		})
		.catch(error => console.error(error));
});


dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropZone.classList.add('file__result--active');
})


dropZone.addEventListener('dragleave', (e) => {
	e.preventDefault();
	dropZone.classList.remove('file__result--active');
})


dropZone.addEventListener('drop', (e) => {
	e.preventDefault();
	fileInput.files = e.dataTransfer.files;
	const file = fileInput.files[0];		
	url.value = fileInput.value;
	url.focus();
	url.blur();
	uploadImage(file);
})


fileInput.addEventListener('change', (e) => {
	const file = e.target.files[0];
	url.value = fileInput.value;
	url.focus();
	url.blur();
	uploadImage(file);
})


const uploadImage = (file) => {
	const fileReader = new FileReader();
	fileReader.readAsDataURL(file);
	fileReader.addEventListener('load', (e) => {
		img.setAttribute('src', e.target.result);		
	});
}

