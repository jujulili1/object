let listFruits = [{
        image: "https://awsimages.detik.net.id/community/media/visual/2018/10/11/bb3a4647-77f9-47eb-90e9-f31c08a4cbe9.jpeg?a=1",
        nama: "Apple",
        namaLatin: "Malus domestica",
        biji: "plantae",
    },
    {
        image: "https://statik.tempo.co/data/2016/03/17/id_490391/490391_620.jpg",
        nama: "Orange",
        namaLatin: "Citrus",
        biji: "plantae",
    },
    {
        image: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000x2000fit/7/5/6/108756_strawberry.jpg",
        nama: "Strawberry",
        namaLatin: "Fragaria × ananassa",
        biji: "plantae",
    },
    {
        image: "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/1/0/0_7c248d41-52a9-4f19-9d74-04f8e89c6bbc_703_543.jpg",
        nama: "Kiwi",
        namaLatin: "Actinidia deliciosa",
        biji: "plantae",
    },
    {
        image: "data:image/jpeg;base64,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",
        nama: "Pear",
        namaLatin: "Pyrus",
        biji: "plantae",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqITKq93EtmJNtDXFeGP9gfaF9fxBHtT97G7GGLGHzgBfKi6f6&usqp=CAU",
        nama: "Guava",
        namaLatin: "Psidium guajava",
        biji: "plantae",
    },
    {
        image: "https://www.femina.co.id/images/images/manfaat%20mangga.jpg",
        nama: "Manggo",
        namaLatin: "Mangifera indica",
        biji: "plantae",
    },
    {
        image: "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/05/18/1528467099.jpg",
        nama: "Papaya",
        namaLatin: "Carica papaya",
        biji: "plantae",
    },
    {
        image: "https://cdns.klimg.com/merdeka.com/i/w/news/2019/06/12/1085780/540x270/di-balik-bau-durian-tersimpan-sejumlah-manfaat-untuk-tingkatkan-kesuburan-wanita.jpg",
        nama: "Durian",
        namaLatin: "Durio zibethinus",
        biji: "plantae",
    },
    {
        image: "https://cdn.akurat.co/images/uploads/images/akurat_20180220011306_1MW1Y2.jpg",
        nama: "Sirsak",
        namaLatin: "Annona muricata",
        biji: "plantae",
    },
    {
        image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1521684374/attached_image/khasiat-buah-mengkudu-masih-diragukan-alodokter.jpg",
        nama: "Mengkudu",
        namaLatin: "Morinda citrifolia",
        biji: "plantae",
    },
    {
        image: "https://awsimages.detik.net.id/community/media/visual/2017/04/04/800bbc40-5898-466e-bc75-3420c28aaa43_169.jpg?w=700&q=90",
        nama: "Nanas",
        namaLatin: "Ananas comosus",
        biji: "plantae",
    },
];


const displayBuah = () => {
    listFruits.forEach((ambilData, data) => {
        let tampil = document.getElementById("content1");
        let cards = document.createElement("div");
        cards.setAttribute("class", "display-card");
        cards.innerHTML = `
        <img src="${ambilData.image}" class="header" alt="${ambilData.nama}" />
        <div class="card-body">
        <h4 class="card-title">${ambilData.nama}</h4>
          <div class="card-text">
            <span>
            ${ambilData.biji}
          </span><br/>
          <span>
            ${ambilData.namaLatin}
          </span>
          </div>
    `;
        tampil.appendChild(cards);
    });
};
displayBuah();