const bigImg = document.querySelector(".product-content-left-big-img img")
const  smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function (imgItem, X) {
    imgItem.addEventListener("click", function () {
        bigImg.src = imgItem.src;
    })
})

const danhgia = document.querySelector(".danhgia")
const mota = document.querySelector(".mota")
console.log(danhgia)
console.log(mota)

if (danhgia) {
    danhgia.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-product-bottom-content-danhgia").style.display = "block"
    })
}
if (mota) {
    mota.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-product-bottom-content-danhgia").style.display = "none"
    })
}

const butTon = document.querySelector(".product-content-right-product-bottom-top")
if (butTon) {
    butTon.addEventListener("click", function () {
        document.querySelector(".product-content-right-product-bottom-content-big").classList.toggle("activeB")
    })
}