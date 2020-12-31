const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  
  tab.addEventListener('click', () => {
       
    const target = document.querySelector(tab.dataset.tabTarget)
    
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    
    tab.classList.add('active')
    target.classList.add('active')
    

  })
})

const profileNavigation = document.querySelectorAll('.ProfileNavigation ul li')
const contentStatus     = document.querySelectorAll('.Category .Content .Content-status')

profileNavigation.forEach(category => {
  
  category.addEventListener('click', contentSwitch)

  function contentSwitch(){
    
    contentStatus.forEach(content => {
      
      if(content.classList.contains('active')){
        content.classList.remove('active')
      } else{
        
        profileNavigation.forEach(li => {
          li.classList.remove('active')
        });
        
        category.classList.add('active')

        if(content.id === category.id){
          content.classList.add('active')
        }

      }

    })

  }

})

const PostActions = document.querySelectorAll('.Post .Post-actions li');

PostActions.forEach((item) => {
  item.addEventListener('click', function(){    
    if(item.classList.contains('active')){
      item.classList.remove('active')
    } else{
      item.classList.add('active')
      item.id = 'saved';
    }
  })
})

const postVideo = document.querySelectorAll('#postVideo');
postVideo.forEach(video => {
  var pause = 1;
    video.addEventListener('click', function(){    
      
      if(pause != 0){
        pause = 0;
        video.pause();

      }
      else{
        pause = 1;
        video.play();
      }

    })
});

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  pagination: {
    el: '.Post-swipper .swiper-pagination',
    dynamicBullets: true,
  },
  
  

})