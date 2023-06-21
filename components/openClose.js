export function open(item) {
    item.classList.add('active');
    document.addEventListener('keydown', closeByEsc);
    item.addEventListener('click', closeByOverlay);

};

export function close() {
    const popapOpen = document.querySelector('.active');
    popapOpen.classList.remove('active');
    document.removeEventListener('keydown', closeByEsc);
    popapOpen.removeEventListener('click', closeByOverlay);
};


function closeByEsc(e) {
    if (e.key === 'Escape') {
        close();
    }
};

function closeByOverlay(e) {
    console.log(e)
    if (e.target.classList.contains('active')) {
        close();
    };
};