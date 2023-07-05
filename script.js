const loadAi = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayAi(data.data.tools))
}

const displayAi = allAis => {
    const allAiContainer = document.getElementById('all-ai-container');
    allAis.forEach(ai => {
        console.log(ai);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                  <div class="card">
                    <img src="${ai.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <ol>
                        <li>${ai.features[0]}</li>
                        <li>${ai.features[1]}</li>
                        <li>${ai.features[2]}</li>
                      </ol>
                      <hr>
                      <div class="details d-flex justify-content-between align-items-center bg-light p-2">
                        <div class="name">
                            <h5 class="card-title">${ai.name}</h5>
                            <p><i class="fa-solid fa-calendar-days"></i> ${ai.published_in}</p>
                        </div>
                        <div class="modal-icon text-primary">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        `
       allAiContainer.appendChild(div);
    });
}


loadAi();