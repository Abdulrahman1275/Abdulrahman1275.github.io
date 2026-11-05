fetch('api/news.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('news').textContent =
            data.message + " - Version " + data.version;
    })
    .catch(error => {
        document.getElementById('news').textContent =
            "Unable to load news.";
    });
