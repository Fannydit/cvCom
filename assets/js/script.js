console.log('coucou');


/*********************compétences**********************/

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 90;
var phpProgressValueElement = document.querySelector('.progress-value');
fillProgressBar(phpProgressValue, phpProgressValueElement);


function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 80;
var phpProgressValueElement = document.querySelector('.progress-value2');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 40;
var phpProgressValueElement = document.querySelector('.progress-value3');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 73;
var phpProgressValueElement = document.querySelector('.progress-value4');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 56;
var phpProgressValueElement = document.querySelector('.progress-value5');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 62;
var phpProgressValueElement = document.querySelector('.progress-value6');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 88;
var phpProgressValueElement = document.querySelector('.progress-value7');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 72;
var phpProgressValueElement = document.querySelector('.progress-value8');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 87;
var phpProgressValueElement = document.querySelector('.progress-value9');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 92;
var phpProgressValueElement = document.querySelector('.progress-value10');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 85;
var phpProgressValueElement = document.querySelector('.progress-value11');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 87;
var phpProgressValueElement = document.querySelector('.progress-value12');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 78;
var phpProgressValueElement = document.querySelector('.progress-value13');
fillProgressBar(phpProgressValue, phpProgressValueElement);

function fillProgressBar(progressValue, progressValueElement) {
    var width = 0;
    var interval = setInterval(function () {
        if (width >= progressValue) {
            clearInterval(interval);
        } else {
            width++;
            progressValueElement.style.width = width + '%';
            progressValueElement.innerHTML = width + '%';
        }
    }, 10);
}

var phpProgressValue = 90;
var phpProgressValueElement = document.querySelector('.progress-value14');
fillProgressBar(phpProgressValue, phpProgressValueElement);


/*********************Expériences**********************/

(function () {
    "use strict";

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();


window.addEventListener("scroll", function () {
    var competences = document.querySelectorAll(".competence");
    competences.forEach(function (competence, index) {
        var competenceTop = competence.offsetTop;
        var competenceHeight = competence.clientHeight;
        var scrollTop = window.pageYOffset;
        var windowHeight = window.innerHeight;
        if (scrollTop > competenceTop - windowHeight + competenceHeight / 2) {
            competence.classList.add("visible");
        }
    });
});


/*********************Formations**********************/

function animateElementsOnScroll() {
    const elements = document.querySelectorAll(".education-item");

    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add("animate");
        }
    });
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", animateElementsOnScroll);
animateElementsOnScroll();


/*********************Portfolio**********************/


function showImage(imageSrc, title, description) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeImage()">&times;</span>
            <img src="${imageSrc}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden"; // Pour désactiver le défilement de la page
}

function closeImage() {
    const modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
        document.body.style.overflow = "auto"; // Réactiver le défilement de la page
    }
}
