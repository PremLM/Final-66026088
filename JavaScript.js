fetch('https://ghibliapi.vercel.app/films/')
        .then(response => response.json())
        .then(data => {
            const filmsTable = document.getElementById('films');
            data.forEach(film => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${film.image}" alt="${film.title}"></td>
                    <td>${film.title}</td>
                    <td>${film.description}</td>
                    <td>${film.release_date}</td>
                `;
                filmsTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching films:', error));