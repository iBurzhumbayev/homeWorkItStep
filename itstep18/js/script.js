let xhr = new XMLHttpRequest,
    url = "https://fakestoreapi.com/products",
    flexcard = document.querySelector(".flexcard"),
    modal = document.querySelector("#myModal"),
    modalcontent = document.querySelector(".modalcontent"),
    openModal = document.querySelector(".openmodal"),
    closeModatl = document.querySelector("#closemodal"),
    saveItem = document.querySelector("#saveItem"),
    newTitle = document.querySelector("#newtitle"),
    newImage = document.querySelector("#newImage"),
    newPrice = document.querySelector("#newprice"),
    newdesc = document.querySelector("#desc");


if(localStorage.getItem("Data") === null || localStorage.getItem("Data").length === 2){
    getData();
}else{
    getCard();
}

function getData() {
    xhr.open("GET", url, false);
    xhr.send();
    localStorage.setItem("Data", xhr.response);
    getCard();
}


function getCard() {
    let data = JSON.parse(localStorage.getItem("Data"));
    data.forEach((el) =>{
        flexcard.innerHTML +=`;
        <div class="card">
        <p class="title">${el.title}</p>
        <p class="price">${el.price}$</p>
        <img width="100px" height="100px" src="${el.image}" alt="">
        <p class="desc">${el.description}</p>
        <input class="delete" type="button" value="delete" onclick="delItem(${el.id})">
        </div>
        `;
    });  
}

//Функция удаления значения
function delItem(id) {
    let olddata = JSON.parse(localStorage.getItem("Data"));
    let newdata = olddata.filter( item => item.id !== id);
    localStorage.setItem("Data", JSON.stringify(newdata));
    flexcard.innerHTML = ""
    if(localStorage.getItem("Data").length === 2){
        getData();
    }else{
        getCard();
    }
}
//функция открытия модального окна
function openModalAdd() {
    modal.style.display = "block";
}
//Функция закрытия модального окна
function closeModal() {
    modal.style.display = "none";
}
//Функция добавления карты

function addItem() {
    let id = JSON.parse(localStorage.getItem("Data").length);
    let newItem = {
        id: id,
        title: newTitle.value,
        price: newPrice.value,
        image: newImage.value,
        desc: newdesc.value,
    };

    let olddata = JSON.parse(localStorage.getItem("Data"));
    olddata.push(newItem)
    localStorage.setItem("Data", JSON.stringify(olddata));
    flexcard.innerHTML = "";
    getCard();
    newTitle.value = "";
    newPrice.value = "";
    newImage.value = "";
    newdesc.value = "";
    closeModal();
}



