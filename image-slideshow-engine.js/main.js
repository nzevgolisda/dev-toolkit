
const items = [
    { title: 'Field Study 01', description: 'A measured form with a warm, tactile finish.', price: '350' },
    { title: 'Field Study 02', description: 'A compact silhouette designed for daily use.', price: '180' },
    { title: 'Field Study 03', description: 'A bold accent piece with a quiet profile.', price: '240' },
    { title: 'Field Study 04', description: 'A considered object built around simple geometry.', price: '290' },
    { title: 'Field Study 05', description: 'A final study in proportion, texture, and light.', price: '420' },
];

const imagePath = index => `./img/${index}.jpg`;
const image = document.getElementById('slide-image');
const title = document.getElementById('slide-title');
const description = document.getElementById('slide-description');
const price = document.getElementById('slide-price');
const number = document.getElementById('slide-number');
const dots = document.getElementById('dots');
const thumbnails = document.getElementById('thumbnails');
const status = document.getElementById('status');
const playToggle = document.getElementById('play-toggle');
const reset = document.getElementById('reset');
const fullscreen = document.getElementById('fullscreen');
let currentIndex = 0;
let isPlaying = true;
let timer;

function setSlide(index) {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    image.src = imagePath(currentIndex);
    image.alt = item.title;
    title.textContent = item.title;
    description.textContent = item.description;
    price.textContent = `${item.price} EUR`;
    number.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    document.querySelectorAll('.dot, .thumbnail').forEach((control, index) => {
        const selected = index === currentIndex;
        control.classList.toggle('selected', selected);
        control.setAttribute('aria-current', selected ? 'true' : 'false');
    });
}

function startAutoPlay() {
    clearInterval(timer);
    timer = setInterval(() => setSlide(currentIndex + 1), 3500);
}

function setPlaying(playing) {
    isPlaying = playing;
    playToggle.textContent = isPlaying ? 'Pause' : 'Play';
    playToggle.setAttribute('aria-pressed', String(isPlaying));
    playToggle.title = isPlaying ? 'Pause slideshow' : 'Play slideshow';
    playToggle.querySelector('span').textContent = isPlaying ? '⏸' : '▶';
    status.textContent = isPlaying ? 'Playing' : 'Paused';
    if (isPlaying) startAutoPlay();
    else clearInterval(timer);
}

items.forEach((item, index) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show ${item.title}`);
    dot.addEventListener('click', () => setSlide(index));
    dots.appendChild(dot);

    const thumbnail = document.createElement('button');
    thumbnail.className = 'thumbnail';
    thumbnail.type = 'button';
    thumbnail.setAttribute('aria-label', `Show ${item.title}`);
    thumbnail.innerHTML = `<img src="${imagePath(index)}" alt="">`;
    thumbnail.addEventListener('click', () => setSlide(index));
    thumbnails.appendChild(thumbnail);
});

document.getElementById('previous').addEventListener('click', () => setSlide(currentIndex - 1));
document.getElementById('next').addEventListener('click', () => setSlide(currentIndex + 1));
playToggle.addEventListener('click', () => setPlaying(!isPlaying));
reset.addEventListener('click', () => {
    setSlide(0);
    setPlaying(true);
});
fullscreen.addEventListener('click', async () => {
    if (!document.fullscreenElement) {
        await document.querySelector('.gallery').requestFullscreen();
        fullscreen.textContent = '⛶';
        fullscreen.title = 'Exit fullscreen';
        fullscreen.setAttribute('aria-label', 'Exit gallery fullscreen');
    } else {
        await document.exitFullscreen();
    }
});
document.addEventListener('fullscreenchange', () => {
    const active = Boolean(document.fullscreenElement);
    fullscreen.textContent = active ? '⛶' : '⛶';
    fullscreen.title = active ? 'Exit fullscreen' : 'Open fullscreen';
    fullscreen.setAttribute('aria-label', active ? 'Exit gallery fullscreen' : 'Open gallery fullscreen');
});
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') setSlide(currentIndex - 1);
    if (event.key === 'ArrowRight') setSlide(currentIndex + 1);
    if (event.key === ' ') {
        event.preventDefault();
        setPlaying(!isPlaying);
    }
});

setSlide(0);
startAutoPlay();
