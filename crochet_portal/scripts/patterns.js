console.log("✅ patterns.js loaded from patterns.html");
const patterns = [
    {
      name: "Beginner Patterns",
      difficulty: "Beginner",
      description: "A collection of numerous beginner patterns by Love Crafts ranging from beanies to blankets.",
      image: "images/Optimized/Beginner-Patterns-min.png",
      link: "https://www.lovecrafts.com/en-us/l/crochet/crochet-patterns/free-crochet-patterns/free-crochet-patterns-for-beginners"
    },
    {
      name: "Crochet Dragon Pattern",
      difficulty: "Intermediate",
      description: "A detailed crochet dragon pattern by ComplicatedKnots.",
      image: "images/Optimized/Crochet-Dragon-Pattern-min.png",
      link: "https://www.youtube.com/watch?v=SV9055Msgck&t=1s&ab_channel=ComplicatedKnots"
    },
    {
      name: "Crochet Gloves Pattern",
      difficulty: "Intermediate",
      description: "A crochet gloves pattern by Bag-O-Day Crochet.",
      image: "images/Optimized/Crochet-Gloves-Pattern-min.png",
      link: "https://www.youtube.com/watch?v=MMS8-Skqt_k&t=3s&ab_channel=Bag-O-DayCrochet"
    }
  ];
  
  function patternCardTemplate(pattern) {
    const safeDescription = pattern.description.replace(/'/g, "\\'");
    
    return `
      <div class="pattern-card">
        <div class="flip-cards">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${pattern.image}" height="200" alt="${pattern.name}" loading="lazy">
              </div>
              <div class="flip-card-back">
                <h1>${pattern.name}</h1>
                <p>Difficulty: ${pattern.difficulty}</p>
                <div class="back-links">
                  <div class="link-wrapper">
                    <a href="#" class="show-description" onclick="showDescription('${safeDescription}'); return false;">Show Description</a>
                  </div>
                  <div class="link-wrapper">
                    <a href="${pattern.link}" target="_blank" rel="noopener noreferrer" class="visit-pattern">Visit Pattern</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderPatterns(patternList) {
    const container = document.getElementById('pattern-container');
    container.innerHTML = patternList.map(patternCardTemplate).join('');
  }

  function filterPatterns(query) {
    query = query.toLowerCase();
    return patterns.filter(pattern => {
      const inName = pattern.name.toLowerCase().includes(query);
      const inDifficulty = pattern.difficulty.toLowerCase().includes(query);
      return inName || inDifficulty;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }

  function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector('.search-bar input');
    const query = searchInput.value.trim();
    const filteredPatterns = filterPatterns(query);
    renderPatterns(filteredPatterns);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderPatterns(patterns);
    const searchIcon = document.querySelector('.search-bar .search-icon');
    searchIcon.addEventListener('click', searchHandler);
    
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        searchHandler(event);
      }
    });
  });

  function showDescription(desc) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <p>${desc}</p>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".close-button").addEventListener("click", () => {
      modal.remove();
    });
  }
  