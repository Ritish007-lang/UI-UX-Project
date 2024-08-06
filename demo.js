document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = 'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.webp?s=2048x2048&w=is&k=20&c=ytN9tDsTJjScOZs9lwZDGORezN2P36OdlN-_6syvAqU='; // Replace with your image URL
    img.alt = 'Sample Image';
    imageContainer.appendChild(img);
});