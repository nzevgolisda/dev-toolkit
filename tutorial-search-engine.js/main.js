
let categories = [];

function render() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    const grid = document.getElementById('grid');
    let visibleCount = 0;
    grid.innerHTML = '';

    categories.forEach(category => {
        if (selectedCategory !== 'all' && category.name !== selectedCategory) return;
        const items = (category.items || []).filter(item =>
            `${item.title} ${item.excerpt || ''} ${category.name}`.toLowerCase().includes(query)
        );
        if (!items.length) return;

        const section = document.createElement('section');
        section.className = 'card';
        section.innerHTML = `<div class="card-top"><p class="card-label">${category.name}</p><span>${items.length}</span></div><h3>${category.name}</h3>`;
        const list = document.createElement('ul');
        list.className = 'list';
        items.forEach(item => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = item.title;
            link.href = item.url || '#';
            li.appendChild(link);
            if (item.excerpt) {
                const excerpt = document.createElement('p');
                excerpt.className = 'excerpt';
                excerpt.textContent = item.excerpt;
                li.appendChild(excerpt);
            }
            list.appendChild(li);
        });
        section.appendChild(list);
        grid.appendChild(section);
        visibleCount += items.length;
    });

    document.getElementById('result-count').textContent = `${visibleCount} ${visibleCount === 1 ? 'tutorial' : 'tutorials'}`;
    document.getElementById('empty-state').hidden = visibleCount !== 0;
}

async function loadContent() {
    try {
        const res = await fetch('content.json', {cache: 'no-store'});
        if (!res.ok) throw new Error('Could not load content.json');
        const data = await res.json();
        categories = data.categories || [];
        const filter = document.getElementById('category-filter');
        categories.forEach(category => filter.appendChild(new Option(category.name, category.name)));
        render();
    } catch (err) {
        document.getElementById('grid').innerHTML = '<div class="card">Error loading content.json. See the guide for setup help.</div>';
        console.error(err);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('input', render);
    document.getElementById('category-filter').addEventListener('change', render);
    document.addEventListener('keydown', event => {
        if (event.key === '/' && document.activeElement.tagName !== 'INPUT') {
            event.preventDefault();
            document.getElementById('search').focus();
        }
    });
    loadContent();
});