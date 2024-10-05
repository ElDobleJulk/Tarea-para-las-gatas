// Mostrar sección específica
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    document.getElementById(sectionId).style.display = 'block';
}

// Volver al menú principal
function goToMenu() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    document.querySelector('.menu').style.display = 'flex';
}

// Enviar formulario y mostrar confirmación
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const task = document.getElementById('taskName').value;
    const status = document.getElementById('taskStatus').value;
    const owner = document.getElementById('taskOwner').value;
    const phase = document.getElementById('taskPhase').value;
    const date = document.getElementById('taskDate').value;
    const notes = document.getElementById('taskNotes').value;

    // Aquí puedes añadir la lógica para enviar los datos a tu Google Sheets o a Telegram
    // sendTaskToGoogleSheets(task, status, owner, phase, date, notes);

    // Mostrar la confirmación
    showSection('confirmation');
});
