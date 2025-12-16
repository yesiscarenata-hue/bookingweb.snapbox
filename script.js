// Ambil form dan tabel
const bookingForm = document.getElementById('bookingForm');
const bookingTableBody = document.querySelector('#bookingTable tbody');
const successMsg = document.getElementById('successMsg');

// Load booking dari localStorage
let bookings = JSON.parse(localStorage.getItem('snapboxBookings')) || [];
displayBookings();

// Submit form
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const newBooking = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        people: document.getElementById('people').value
    };

    // Simpan ke localStorage
    bookings.push(newBooking);
    localStorage.setItem('snapboxBookings', JSON.stringify(bookings));

    // Tampilkan di tabel
    displayBookings();

    // Reset form
    bookingForm.reset();

    // Tampilkan pesan sukses
    successMsg.textContent = 'Booking berhasil disimpan!';
    setTimeout(() => successMsg.textContent = '', 3000);
});

// Fungsi tampilkan booking di tabel
function displayBookings() {
    bookingTableBody.innerHTML = '';
    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.email}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
            <td>${booking.people}</td>
        `;
        bookingTableBody.appendChild(row);
    });
}
