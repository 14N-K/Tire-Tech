const header = document.querySelector('#header_container');
const nav = document.querySelector('.navList');
const mainBtn = document.querySelectorAll('ul.navList > li > a.mainBtn');

// 서브메뉴 열림
header.addEventListener('mouseenter', (e)=>{
    if(window.innerWidth > 1169){
        header.classList.add('menuOpen');
    }
})

header.addEventListener('mouseleave', (e)=>{
    if(window.innerWidth > 1169){
        header.classList.remove('menuOpen');
    }
})

// 모바일 - 서브메뉴 열림
mainBtn.forEach(btn => {
    btn.addEventListener('click', function(e){
        if(window.innerWidth < 1170){
            e.preventDefault();

            const li = this.parentElement;      // 클릭한 메인메뉴a 의 부모 li;

            if(li.classList.contains('on')){    // 이미 열려있으면 닫아줌
                li.classList.remove('on');
            } else {
                document.querySelectorAll('ul.navList > li').forEach(item => {
                    item.classList.remove('on');
                });
                li.classList.add('on');
            }
        }
    })
})



// 모바일 - trigger 버튼 클릭
const trigger = document.querySelector('.trigger');

trigger.addEventListener('click', function(){
    document.querySelector('header').classList.toggle('open');
})


// 화면 내의 모든 가상 링크 클릭 시 화면 스크롤 막아줌
const a = document.querySelectorAll('a');

a.forEach((anchor) => {
    anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');

        if(href === '#'){
            e.preventDefault();
        }
    })
})
