const tutorials = [
    {
      name: "Magic Circle",
      description: "This tutorial by MJ Carlos teaches you how to begin crocheting in a circle.",
      image: "images/Optimized/Magic-circle-min.png",
      link: "https://www.youtube.com/watch?v=Z6rbZMSCJ7Q&ab_channel=MJCarlos"
    },
    {
      name: "Single Crochet",
      description: "This tutorial by Melody Crochet explains how to do the base stitch: The Single Crochet.",
      image: "images/Optimized/Single-Crochet-min.png",
      link: "https://www.youtube.com/watch?v=TPhqXsk-NGE&t=1s&ab_channel=MelodyCrochet"
    },
    {
      name: "Crochet Chain",
      description: "This tutorial by Melody Crochet teaches how to chain, which is the beginning of many projects.",
      image: "images/Optimized/Chain-Crochet-min.png",
      link: "https://www.youtube.com/watch?v=3yQKKFHPZqE&ab_channel=MelodyCrochet"
    }
  ];

  function tutorialCardTemplate(tutorial) {
    const safeDescription = tutorial.description.replace(/'/g, "\\'");
    return `
      <div class="pattern-card">
        <div class="flip-cards">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${tutorial.image}" height="200" alt="${tutorial.name}" loading="lazy">
              </div>
              <div class="flip-card-back">
                <h1>${tutorial.name}</h1>
                <div class="back-links">
                  <div class="link-wrapper">
                    <a href="#" class="show-description" onclick="showDescription('${safeDescription}'); return false;">Show Description</a>
                  </div>
                  <div class="link-wrapper">
                    <a href="${tutorial.link}" target="_blank" rel="noopener noreferrer" class="visit-pattern">Visit Tutorial</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderTutorials(tutorialList) {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = tutorialList.map(tutorialCardTemplate).join('');
  }

  function filterTutorials(query) {
    query = query.toLowerCase();
    return tutorials.filter(tutorial =>
      tutorial.name.toLowerCase().includes(query)
    ).sort((a, b) => a.name.localeCompare(b.name));
  }

  function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector('.search-bar input');
    const query = searchInput.value.trim();
    renderTutorials(filterTutorials(query));
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderTutorials(tutorials);
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

  window.showDescription = showDescription;
  