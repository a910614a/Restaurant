const items = [
    { img: "images/door.jpg", title: "淡水店", subtitle: "地址：新北市淡水區學府路8號", phone:"電話：02-2626-5270" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" },
    { img: "placeholder.png", title: "測試", subtitle: "測試" }
];

let gridHTML = "";
items.forEach(item => {
    gridHTML += ` <div class="cell"> <img src="${item.img}" alt="${item.title}"> <p class="title">${item.title}</p> <p class="subtitle">${item.subtitle}</p> <p>${item.phone}</p> </div> `;
});

document.getElementById("demo").innerHTML = gridHTML;