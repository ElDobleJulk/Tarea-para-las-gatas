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
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    const task = document.getElementById('task').value;
    const date = document.getElementById('date').value;

    // Enviar los datos al script de Google Apps
    fetch('https://script.google.com/macros/s/AKfycbzijD5yRfqYWpQElgfXUv0sQv_bnfL4ETGfF2pgHxs1aAqZ50EtUN-nq21Lnq750rbj/exec', {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: task, date: date })
    })
    .then(response => {
        if (response.ok) {
            alert('Tarea enviada correctamente!');
        } else {
            alert('Error al enviar la tarea.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
