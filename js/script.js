if (document.body.contains(document.querySelector('.media'))) {
    const man = document.querySelector('.media');

    man.addEventListener('click', () => {
     let i = getRandomInt(17);
     man.innerHTML = '<img src="images/man_' + i + '.svg" class="shadow" alt="random funny image">';
    });
    
    function getRandomInt(max) {
     return Math.floor(Math.random() * max);
    }
};

// MODAL

const MODAL_TRIGGER = document.querySelector('.btn-modal'),
      MODAL = document.querySelector('.overlay'),
      MODAL_CLOSE = document.querySelector('.modal__close');


// console.log(MODAL_TEXT_TRIGGER);

MODAL_TRIGGER.addEventListener('click', (e) => {
    console.log(e.target);
    MODAL.classList.add('show');
    document.body.style.overflow = 'hidden';
});

function closeModal(x) {
 x.classList.remove('show');
 document.body.style.overflow = '';
};

MODAL_CLOSE.addEventListener('click', closeModal(MODAL));

// const AREA = document.querySelector('.modal__dialog');

MODAL.addEventListener('click', (e) => {
 if (e.target === MODAL || e.target === MODAL_CLOSE) {
  closeModal(MODAL);
 }
});

document.addEventListener('keydown', (e) => {
 if (e.code === "Escape" && MODAL.classList.contains('show')) {
  closeModal(MODAL);
 }
});

// join us text

if (document.body.contains(document.querySelector('.join_us'))) {
    const MODAL_TEXT_TRIGGER = document.querySelector('.join_us');

    MODAL_TEXT_TRIGGER.addEventListener('click', (e) => {
        console.log(e.target);
        MODAL.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
}

// funny dialog

if (document.body.contains(document.querySelector('.dialog'))) {

    const DIALOG = document.querySelector('.dialog');
    const MAN = document.querySelector('.hello_animation');

    console.log(MAN);

    function showDialog() {
        DIALOG.showModal();
    };

    function closeDialog() {
        DIALOG.close();
    };

    setTimeout(showDialog, 10500);
    setTimeout(closeDialog, 14000);

    function goodbyeMan() {
        MAN.classList.add('goodbye_animation');
    }

    setTimeout(goodbyeMan, 13000);

    // if (DIALOG.hasAttribute('open')) {
    // document.addEventListener('click', {
    //     closeDialog();
    // });

    // function changeDisplay(item) {
    //     item.css('display', 'block');
    // }
    
    // setTimeout(changeDisplay(DIALOG), 1000);
}