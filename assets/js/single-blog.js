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

    const {judul, konten, image} = singleData[0];
    console.log(judul);

    const contentTitle = document.getElementById('content-title');
    const content = document.getElementById('content');
    const contentThumbnail = document.getElementById('image-content');

    contentThumbnail.src = image;
    contentTitle.innerHTML = judul; 
    content.innerHTML = konten;

}

renderData();
