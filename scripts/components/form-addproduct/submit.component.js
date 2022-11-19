export function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const fileInput = document.getElementById('inputImage')
    const img = document.getElementById('img-result')
    fileInput.value = '';
    img.setAttribute('src', '');
    this.reset();

}