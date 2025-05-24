const complaints = [
  {
    id: 'GR-54321',
    description: 'Large pothole on Main Street',
    location: 'Main & 5th Ave',
    date: '2025-05-20',
    status: 'New'
  },
  {
    id: 'GR-54322',
    description: 'Streetlight not working',
    location: 'Oak & Pine',
    date: '2025-05-19',
    status: 'In Progress'
  },
  {
    id: 'GR-54319',
    description: 'Garbage not collected',
    location: 'Maple Drive',
    date: '2025-05-18',
    status: 'Resolved'
  }
];

const tableBody = document.getElementById('complaint-table-body');

complaints.forEach(complaint => {
  const row = document.createElement('tr');

  const statusClass = complaint.status.toLowerCase().replace(' ', '-');
  const actions =
    complaint.status === 'Resolved'
      ? `<button class="action-btn">View</button><button class="action-btn">Reopen</button>`
      : `<button class="action-btn">View</button><button class="action-btn">Resolve</button>`;

  row.innerHTML = `
    <td>${complaint.id}</td>
    <td>${complaint.description}</td>
    <td>${complaint.location}</td>
    <td>${complaint.date}</td>
    <td><span class="status-badge ${statusClass}">${complaint.status}</span></td>
    <td>${actions}</td>
  `;

  tableBody.appendChild(row);
});
