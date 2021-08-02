console.log('Starting up');

function onInitPage() {
    renderProtfolio();
}

function renderProtfolio() {
    var projs = getGProjs();
    var strHTMLS = projs.map(function (proj, idx) {
        return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="updateProjModal(${idx})">
                    <a class="portfolio-link" data-toggle="modal" href = "#portfolioModal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/0${idx + 1}-thumbnail.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>`
    });
    document.querySelector('.projects').innerHTML = strHTMLS.join('');
}

function updateProjModal(idx) {
    var projs = getGProjs();
    var proj = projs[idx];
    console.log('proj', proj);
    var strHTML = `<h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/0${idx + 1}-full.jpg" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
    <li>${proj.publishedAt.toLocaleString()}</li>
    <li><a target="_blank" href="${proj.url}">${proj.url}</a></li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project
    </button>`;
    var elModalBody = document.querySelector('.modal-body');
    elModalBody.innerHTML = strHTML;
}

function onContactMe() {
    var elConSub = document.querySelector('[name=contact-subject]');
    var conSub=elConSub.value;
    var elConMes=document.querySelector('[name=contact-message]');
    var conMes=elConMes.value;
    window.location=`https://mail.google.com/mail/u/0/?fs=1&to=shir0lavi@gmail.com&su=${conSub}&body=${conMes}&&tf=cm`;
    elConSub.value='';
    elConMes.value='';
}


