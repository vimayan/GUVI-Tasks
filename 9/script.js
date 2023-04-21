


  const searchAnime = (event) => {
    event.preventDefault();
    
    const name = document.getElementById('animeName').value;
    const genres = document.getElementById('animeGenres').value;
    
    let query = `
      query ($search: String, $genres: [String]) {
        Page (perPage: 10) {
          media (type: ANIME, search: $search, genre_in: $genres) {
            id
            title {
              romaji
              english
              native
            }
            coverImage {
              medium
            }
            format
            genres
            averageScore
          }
        }
      }
    `;
    
    let variables = {};
    
    if (name) {
      variables.search = name;
    }
    
    if (genres) {
      variables.genres = genres.split(",");
    }
    
    fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables
      })
    })
      .then(res => res.json())
      .then(data => {
        let results = '';
        data.data.Page.media.forEach(anime => {
          results += `
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${anime.coverImage.medium}" class="card-img" alt="${anime.title.romaji}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${anime.title.romaji}</h5>
                    <p class="card-text"><strong>Format:</strong> ${anime.format}</p>
                    <p class="card-text"><strong>Genres:</strong> ${anime.genres.join(", ")}</p>
                    <p class="card-text"><strong>Average Score:</strong> ${anime.averageScore}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
        });
        
        document.getElementById('animeResults').innerHTML = results;
      })
      .catch(error => console.error(error));
  };
  
  document.getElementById('searchForm').addEventListener('submit', searchAnime);