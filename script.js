const loadAi = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    console.log(url);
    // try{
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   displayAi(data.data)
    // }
    // catch(error){
    //   console.log('Error:-', error)
    // }
    fetch(url)
    .then(res => res.json())
    .then(data => displayAi(data.data.tools))
}

const displayAi = allAis => {
    const allAiContainer = document.getElementById('all-ai-container');
    allAis.forEach(ai => {
        // console.log(ai.id);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col car-height">
                  <div class="card">
                    <img src="${ai.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <ol>
                        <li>${ai.features[0]}</li>
                        <li>${ai.features[1] ? ai.features[1]  : 'No found'}</li>
                        <li>${ai.features[2] ? ai.features[2] : 'No found'}</li>
                      </ol>
                      <hr>
                      <div class="details d-flex justify-content-between align-items-center bg-light p-2">
                        <div class="name">
                            <h5 class="card-title">${ai.name}</h5>
                            <p><i class="fa-solid fa-calendar-days"></i> ${ai.published_in}</p>
                        </div>
                        <div class="modal-icon text-primary">
                            <button onclick="loadModalDetails('${ai.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

const loadModalDetails = async(aiId) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${aiId}`;
    console.log(url);
    try{
      const res = await fetch(url);
      const data = await res.json();
      displayModalDetails(data.data)
    }
    catch(error){
      console.log('Error:-', error)
    }
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayModalDetails(data.data))
}

const displayModalDetails = (idAi) => {
    console.log(idAi);
    const detailsContainer = document.getElementById('modal-container');
    detailsContainer.innerHTML = '';
    const modalBody = document.createElement('div');
    
        modalBody.innerHTML = `
        <div id="modal-container" class="modal-body gap-5 d-lg-flex m-3">
        <div class="modal-details py-3 px-4 rounded-3 mt-4">
        <h4>${idAi.description}</h4>
        <div class="packes mt-4 d-lg-flex d-md-flex gap-3 justify-content-center">
          <div class="one bg-white p-3 rounded-3 mb-3 text-success ">
            <h5 class="plan fs-5 text-center fw-bold">${idAi.pricing[0].plan}</h5>
            <h5 class="price fs-5 text-center fw-bold">${idAi.pricing[0].price}</h5>
          </div>
          <div class="two bg-white p-3 rounded-3 mb-3 text-warning">
            <h5 class="plan fs-5 text-center fw-bold">${idAi.pricing[1].plan}</h5>
            <h5 class="price fs-5 text-center fw-bold">${idAi.pricing[1].price}</h5>
          </div>
          <div class="three bg-white p-3 rounded-3 mb-3 text-danger">
            <h5 class="plan fs-5 text-center fw-bold">${idAi.pricing[2].plan}</h5>
            <h5 class="price fs-5 text-center fw-bold">${idAi.pricing[2].price}</h5>
          </div>
        </div>
        <div class="inpormation d-flex justify-content-between mt-3">
          <div class="features">
            <h3>Featuras</h3>
            <ul>
              <li>${idAi.features['1'].feature_name ? idAi.features['1'].feature_name : 'No found'}</li>
              <li>${idAi.features['2'].feature_name ? idAi.features['2'].feature_name : 'No found'}</li>
              <li>${idAi.features['3'].feature_name ? idAi.features['3'].feature_name : 'no found'}</li>
            </ul>
          </div>
          <div class="integrations">
            <h3>Integrations</h3>
            <ul>
              <li>${idAi.integrations['1'] ? idAi.integrations['1'] : 'No found'}</li>
              <li>${idAi.integrations['2'] ? idAi.integrations['2'] : 'No found'}</li>
              <li>${idAi.integrations['3'] ? idAi.integrations['3'] : 'No found'}</li>
            </ul>
          </div>
        </div>
       </div>
       <div class="img-area px-4 py-3 rounded-3 mt-4">
        <div class="img-box position-relative">
          <div class="img position-relative">
            <img class="img-fluid rounded-3" src="${idAi.image_link[0]}" alt="">
          </div>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <div class="badge-tex">
              94% accuracy
            </div>
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>
        <div class="img-details text-center mt-3">
          <h2>Hi, how are you doing today?</h2>
          <p class="fs-5">I'm doing well, thank you for asking. How can I assist you today?</p>
        </div>
       </div>
       </div>
    `

    detailsContainer.appendChild(modalBody);
}


loadAi();