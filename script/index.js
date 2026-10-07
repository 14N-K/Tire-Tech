// more버튼을 누르면 sns 내용이 더 보임
const moreBtn = document.querySelector('.moreBtn');
const itemWrap2 = document.querySelector('.itemWrap2');
const more = document.querySelector('.more');

moreBtn.addEventListener('click', function(){
    itemWrap2.style.display = 'block';
    more.style.display = 'none';
})


// popup 버튼을 클릭하면 popup창 닫기
// document.querySelector('.popup_close').addEventListener('click', ()=>{
//     document.querySelector('#popup').style.display = 'none';
// })

const popup = document.querySelector('#popup');
const checkbox = document.querySelector('#popup input[type="checkbox"]');
const closeBtn = document.querySelector('.popup_close');

// 한국 시간 기준 오늘 날짜
function getToday() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const today = getToday();
const hideDate = localStorage.getItem('popupHideDate');

// 오늘 숨기기로 저장되어 있다면 팝업 숨김
if (hideDate === today) {
    popup.style.display = 'none';
}

// 닫기
closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = 'none';
});

// 오늘 하루 열지 않기
checkbox.addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('popupHideDate', today);
        popup.style.display = 'none';
    }
});