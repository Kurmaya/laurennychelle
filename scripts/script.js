let hero = document.querySelector(".hero-heading");
const showsList = document.querySelectorAll(".shows-list-select");
const showsTabs = document.querySelectorAll(".shows-tabs");
const close = document.querySelector('.close');
const left = document.querySelector('.left'), right = document.querySelector('.right');
const lightBox = document.querySelector('.lightbox');
let store ,parnt,store2;
store2=showsTabs[0].id;
const clases = ['.show-1-img','.show-2-img','.show-3-img','.show-4-img','.show-5-img','.show-6-img'];

document.getElementById('show-1').querySelectorAll('img').forEach(img=>{
    img.classList.add('show-1-img');
})
document.getElementById('show-2').querySelectorAll('img').forEach(img=>{
    img.classList.add('show-2-img');
})
document.getElementById('show-3').querySelectorAll('img').forEach(img=>{
    img.classList.add('show-3-img');
})
document.getElementById('show-4').querySelectorAll('img').forEach(img=>{
    img.classList.add('show-4-img');
})
document.getElementById('show-5').querySelectorAll('img').forEach(img=>{
    img.classList.add('show-5-img');
})
document.getElementById('show-6').querySelectorAll('img').forEach(img=>{
    img.classList.add('show-6-img');
})

showsTabs.forEach(tab=>{
    let imgs = tab.querySelectorAll('img');
    imgs.forEach(img=>{
        // console.log(imgs,imgs.parnt);
        img.classList.add('shows-tabs-img');
    })
    
});

showsList.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        showsList.forEach(l=>{
            l.classList.remove('active');
        })
        el.classList.add('active');
        parnt= showsTabs[i].id;
        console.log(parnt);
        store2= i;
        // parnt= showsTabs[store2];
        document.querySelector(".shows-gallery h4").textContent=el.textContent;
        showsTabs.forEach(s=>{
            s.classList.add('hide');
        })
        showsTabs[i].classList.remove('hide');
    })
})
close.addEventListener('click',()=>{
  lightBox.classList.remove('active')  ;
  document.body.style.overflowY='scroll';
  document.body.style.overflowX='hidden';
  left.style.opacity='1';
  right.style.opacity='1';
})



const show1Imgs = showsTabs[0].querySelectorAll(clases[0]),
show2Imgs = showsTabs[1].querySelectorAll(clases[1]),
show3Imgs = showsTabs[2].querySelectorAll(clases[2]),
show4Imgs = showsTabs[3].querySelectorAll(clases[3]),
show5Imgs = showsTabs[4].querySelectorAll(clases[4]),
show6Imgs = showsTabs[5].querySelectorAll(clases[5]);

const arr = [show1Imgs,show2Imgs,show3Imgs,show4Imgs,show5Imgs,show6Imgs];


arr.forEach((el,i)=>{
    el.forEach((e,n)=>{
        e.addEventListener('click',()=>{
            document.body.style.overflow='hidden';
            store2=e.parentNode;
            store=n;
            console.log(store2.id,store);
            lightBox.classList.add('active');
            lightBox.querySelector('img').src=e.src;
            lightBox.querySelector('h2').textContent= showsList[i].textContent;
        })
        
    })
})


right.addEventListener('click',()=>{
switch (store2.id) {
    case 'show-1':
        if(store == arr[0].length-2){
            store++;
            right.style.opacity='0';
            lightBox.querySelector('img').src=arr[0][store].src;
        }
        else if(store< arr[0].length){
            store++;
            // console.log(store);
            lightBox.querySelector('img').src=arr[0][store].src;
            right.style.opacity='1';
            left.style.opacity='1';
        }
        
        break;
        case 'show-2':
            if(store == arr[1].length-2){
                store++;
                right.style.opacity='0';
                lightBox.querySelector('img').src=arr[1][store].src;
            }
            else if(store< arr[1].length){
                store++;
                // console.log(store);
                lightBox.querySelector('img').src=arr[1][store].src;
                right.style.opacity='1';
                left.style.opacity='1';
            }
        break;
        case 'show-3':
            if(store == arr[2].length-2){
                store++;
            right.style.opacity='0';
            lightBox.querySelector('img').src=arr[2][store].src;
            }
            else if(store< arr[2].length){
                store++;
                // console.log(store);
                
                lightBox.querySelector('img').src=arr[2][store].src;
                right.style.opacity='1';
                left.style.opacity='1';
            }
            break;
            case 'show-4':
                if(store == arr[3].length-2){
                    store++;
                    right.style.opacity='0';
                    lightBox.querySelector('img').src=arr[3][store].src;
                }
                else if(store< arr[3].length){
                    store++;
                    // console.log(store);
                    lightBox.querySelector('img').src=arr[3][store].src;
                    right.style.opacity='1';
                    left.style.opacity='1';
                }
            break;
            case 'show-5':
                if(store == arr[4].length-2){
                    store++;
                    right.style.opacity='0';
                    lightBox.querySelector('img').src=arr[4][store].src;
                }
                else if(store< arr[4].length){
                    store++;
                    // console.log(store);
                    lightBox.querySelector('img').src=arr[4][store].src;
                    right.style.opacity='1';
                    left.style.opacity='1';
                }
            break;
            case 'show-6':
                if(store == arr[5].length-2){
                    store++;
            right.style.opacity='0';
            lightBox.querySelector('img').src=arr[5][store].src;
                }
                else if(store< arr[5].length){
                    store++;
                    // console.log(store);
                    lightBox.querySelector('img').src=arr[5][store].src;
                    right.style.opacity='1';
                    left.style.opacity='1';
                }
            break;
            
        

    default:
        break;
}    
})
left.addEventListener('click',()=>{
    switch (store2.id) {
        case 'show-1':
            if(store == 1){
                store--;
                left.style.opacity='0';
                lightBox.querySelector('img').src=arr[0][store].src;
            }
        else if(store> 0){
            store--;
            // console.log(store);
            lightBox.querySelector('img').src=arr[0][store].src;
            right.style.opacity='1';
            left.style.opacity='1';
        }
            break;
            case 'show-2':
                if(store == 1){
                    store--;
                left.style.opacity='0';
                lightBox.querySelector('img').src=arr[1][store].src;
                }
            else if(store> 0){
                store--;
                // console.log(store);
                lightBox.querySelector('img').src=arr[1][store].src;
                right.style.opacity='1';
                left.style.opacity='1';
            }
            break;
            case 'show-3':
                if(store == 1){
                    store--;
                left.style.opacity='0';
                lightBox.querySelector('img').src=arr[2][store].src;
                }
            else if(store> 0){
                store--;
                // console.log(store);
                lightBox.querySelector('img').src=arr[2][store].src;
                right.style.opacity='1';
                left.style.opacity='1';
            }
                break;
                case 'show-4':
                    if(store == 1){
                        store--;
                left.style.opacity='0';
                lightBox.querySelector('img').src=arr[3][store].src;
                    }
                else if(store> 0){
                    store--;
                    // console.log(store);
                    lightBox.querySelector('img').src=arr[3][store].src;
                    right.style.opacity='1';
                    left.style.opacity='1';
                }
                break;
                case 'show-5':
                    if(store ==1){
                        store--;
                left.style.opacity='0';
                lightBox.querySelector('img').src=arr[4][store].src;
                    }
                else if(store> 0){
                    store--;
                    // console.log(store);
                    lightBox.querySelector('img').src=arr[4][store].src;
                    right.style.opacity='1';
                    left.style.opacity='1';
                }
                break;
                case 'show-6':
                    if(store == 1){
                        store --;
                        left.style.opacity='0';
                        lightBox.querySelector('img').src=arr[5][store].src;
                    }
                else if(store> 0){
                    store--;
                    // console.log(store);
                    lightBox.querySelector('img').src=arr[5][store].src;
                    right.style.opacity='1';
                    left.style.opacity='1';
                }
                break;
                
            
    
        default:
            break;
    }    
    });

// window.addEventListener('load',()=>{
//     hero.classList.add('active');
//     document.querySelector('#hero h3').classList.add('active');
// });

//nav scrolling || document.querySelector("nav").scrollTop > '100vh'


//footer year 
document.querySelector('.year').textContent= new Date().getFullYear();