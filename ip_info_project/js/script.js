
document.getElementById('searchButton').addEventListener('click', function() {
    const ip = document.getElementById('ipInput').value;
    const apiUrl = `https://ipinfo.io/${ip}/json?token=TOKEN`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('ipInfoTable').getElementsByTagName('tbody')[0];
            table.innerHTML = ''; // Limpar dados antigos

            const row = table.insertRow();
            row.insertCell(0).textContent = data.ip;
            row.insertCell(1).textContent = data.hostname || 'Não disponível';
            row.insertCell(2).textContent = data.city + ', ' + data.region + ', ' + data.country;
        })
        .catch(error => {
            console.error('Erro ao buscar informações:', error);
            alert('Erro ao buscar informações para o IP fornecido.');
        });
});
