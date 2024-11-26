const data = [
    {
        judul : 'testing',
        konten : 'testing',
        image : './assets/images/1.jpg',
        slug : 'testing'
    },
    {
        judul : 'testing2',
        konten : 'testing2',
        image : './assets/images/1.jpg',
        slug : 'testing2'
    },
    {
        judul : 'testing3',
        konten : 'testing3',
        image : './assets/images/1.jpg',
        slug : 'testing3'
    },
    {
        judul : 'testing4',
        konten : 'testing4',
        image : './assets/images/1.jpg',
        slug : 'testing4'
    },
]
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const value = urlParams.get('blog');

const singleData = data.filter((item) => {
    if(item.slug == value) {
        return item
    }
});

console.log(singleData);

const emptyContainer = document.getElementById('empty-container');
let tester = `
    <h1>${singleData[0].judul}</h1>
`;
emptyContainer.innerHTML = tester;