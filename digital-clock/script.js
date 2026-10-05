const timezones = [
  { id: 'time-ny', city: 'America/New_York', label: 'NY' },
  { id: 'time-london', city: 'Europe/London', label: 'LON' },
  { id: 'time-paris', city: 'Europe/Paris', label: 'PAR' },
  { id: 'time-dubai', city: 'Asia/Dubai', label: 'DXB' },
  { id: 'time-tokyo', city: 'Asia/Tokyo', label: 'TYO' },
  { id: 'time-sydney', city: 'Australia/Sydney', label: 'SYD' },
  { id: 'time-la', city: 'America/Los_Angeles', label: 'LAX' },
  { id: 'time-singapore', city: 'Asia/Singapore', label: 'SIN' },
];

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
}

function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function updateClock() {
  const now = new Date();

  timezones.forEach(({ id, city }) => {
    const el = document.getElementById(id);
    const dateEl = document.getElementById(`date-${id.replace('time-', '')}`);

    if (el) {
      el.textContent = formatTime(now, city);
    }

    if (dateEl) {
      dateEl.textContent = formatDate(now, city);
    }
  });

  const localTimeEl = document.getElementById('local-time');
  const localZoneEl = document.getElementById('local-zone');

  if (localTimeEl) {
    localTimeEl.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  }

  if (localZoneEl) {
    localZoneEl.textContent = `(${Intl.DateTimeFormat().resolvedOptions().timeZone})`;
  }
}

updateClock();
setInterval(updateClock, 1000);
