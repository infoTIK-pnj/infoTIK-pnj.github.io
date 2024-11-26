const fetchData = async () => {
    try {
        const response = await fetch('./../assets/data.json');
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}
const renderData = async () => {
    const data = await fetchData();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const value = urlParams.get('blog');

    const singleData = data.filter((item) => {
        if (item.slug == value) {
            return item
        }
    });

    console.log(singleData);

    const emptyContainer = document.getElementById('empty-container');
    let tester = ` <h1>${singleData[0].judul}</h1> `;
    let content = singleData[0].konten
    emptyContainer.innerHTML = content;
}

renderData();