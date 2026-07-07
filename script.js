document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Спасибо, что нажали! 🎉';
        message.style.color = '#007bff';
    });
});
