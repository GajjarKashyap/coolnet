// Movie Data (using TMDB API format)
const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1&mute=1",
        year: "1994",
        duration: "2h 22m",
        rating: "9.3",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        badge: "Classic"
    },
    {
        id: 2,
        title: "The Godfather",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
        trailer: "https://www.youtube.com/embed/sY1S34973zA?autoplay=1&mute=1",
        year: "1972",
        duration: "2h 55m",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        badge: "Classic"
    },
    {
        id: 3,
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?autoplay=1&mute=1",
        year: "2008",
        duration: "2h 32m",
        rating: "9.0",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        badge: "Action"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY?autoplay=1&mute=1",
        year: "1994",
        duration: "2h 34m",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        badge: "Classic"
    },
    {
        id: 5,
        title: "Fight Club",
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        trailer: "https://www.youtube.com/embed/qtRKdVHc-cE?autoplay=1&mute=1",
        year: "1999",
        duration: "2h 19m",
        rating: "8.8",
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        badge: "Drama"
    },
    {
        id: 6,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1&mute=1",
        year: "2010",
        duration: "2h 28m",
        rating: "8.8",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        badge: "Sci-Fi"
    },
    {
        id: 7,
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?autoplay=1&mute=1",
        year: "1999",
        duration: "2h 16m",
        rating: "8.7",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        badge: "Sci-Fi"
    },
    {
        id: 8,
        title: "Goodfellas",
        poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg",
        trailer: "https://www.youtube.com/embed/2ilzidi_J8Q?autoplay=1&mute=1",
        year: "1990",
        duration: "2h 26m",
        rating: "8.7",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        badge: "Crime"
    },
    {
        id: 9,
        title: "The Silence of the Lambs",
        poster: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
        trailer: "https://www.youtube.com/embed/W6Mm8Sbe__o?autoplay=1&mute=1",
        year: "1991",
        duration: "1h 58m",
        rating: "8.6",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        badge: "Thriller"
    },
    {
        id: 10,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&mute=1",
        year: "2014",
        duration: "2h 49m",
        rating: "8.6",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        badge: "Sci-Fi"
    }
];

// DOM Elements
const header = document.getElementById('header');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalTrailer = document.getElementById('modal-trailer');
const trendingRow = document.getElementById('trending');
const topRatedRow = document.getElementById('top-rated');
const recentRow = document.getElementById('recent');
const myListRow = document.getElementById('my-list');

// Create Movie Card
function createMovieCard(movie, large = false) {
    const card = document.createElement('div');
    card.className = large ? 'movie movie-large' : 'movie';
    card.innerHTML = `
        ${movie.badge ? `<span class="movie-badge">${movie.badge}</span>` : ''}
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <iframe 
            src="${movie.trailer}" 
            class="movie-trailer"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <div class="movie-info">
            <h4 class="movie-title">${movie.title}</h4>
            <div class="movie-meta">
                <span>${movie.year}</span>
                <span class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.rating}</span>
                </span>
            </div>
        </div>
        <div class="movie-actions">
            <button class="movie-action">
                <i class="fas fa-play"></i>
            </button>
            <button class="movie-action">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    `;
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.movie-action') && !e.target.classList.contains('movie-trailer')) {
            openModal(movie);
        }
    });
    return card;
}

// Open Modal
function openModal(movie) {
    modalTrailer.src = movie.trailer;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    modalTrailer.src = '';
    document.body.style.overflow = 'auto';
}

// Search Movies
function searchMovies(query) {
    searchResults.innerHTML = '';
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const results = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
        results.forEach(movie => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <img src="${movie.poster}" class="search-result-poster" alt="${movie.title}">
                <div class="search-result-info">
                    <div class="search-result-title">${movie.title}</div>
                    <div class="search-result-meta">
                        <span>${movie.year}</span>
                        <span class="movie-rating">
                            <i class="fas fa-star"></i>
                            <span>${movie.rating}</span>
                        </span>
                    </div>
                </div>
            `;
            item.addEventListener('click', () => {
                openModal(movie);
                searchInput.value = '';
                searchResults.style.display = 'none';
            });
            searchResults.appendChild(item);
        });
        searchResults.style.display = 'block';
    } else {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.textContent = 'No results found';
        searchResults.appendChild(item);
        searchResults.style.display = 'block';
    }
}

// Initialize Movie Rows
function initializeMovieRows() {
    // Shuffle movies for different rows
    const shuffled = [...movies].sort(() => 0.5 - Math.random());

    // Add to Trending (10 movies)
    shuffled.slice(0, 10).forEach(movie => {
        trendingRow.appendChild(createMovieCard(movie));
    });

    // Add to Top Rated (10 movies - sorted by rating)
    [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10).forEach(movie => {
        topRatedRow.appendChild(createMovieCard(movie));
    });

    // Add to Recently Added (10 movies - newest first)
    [...movies].sort((a, b) => b.year - a.year).slice(0, 10).forEach(movie => {
        recentRow.appendChild(createMovieCard(movie));
    });

    // Add to My List (5 random movies)
    shuffled.slice(0, 5).forEach(movie => {
        myListRow.appendChild(createMovieCard(movie));
    });
}

// Row Navigation
function setupRowNavigation() {
    document.querySelectorAll('.row-button').forEach(button => {
        button.addEventListener('click', function() {
            const rowId = this.getAttribute('data-row');
            const row = document.getElementById(rowId);
            const isNext = this.classList.contains('next');
            const scrollAmount = 300;

            row.scrollBy({
                left: isNext ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        });
    });
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Event Listeners
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

searchInput.addEventListener('input', () => {
    searchMovies(searchInput.value);
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeMovieRows();
    setupRowNavigation();
});