let wrapEl = document.querySelector('.container');
let btnEl = document.getElementById('push');

wrapEl.addEventListener('click', push);

function push(event) {
   if(event.target.tagName === 'BUTTON') {    

    let link = document.getElementById('link').value;

    if(link.includes('https://') || link.includes('http://')) {
        window.location.href = link;
    } else {window.location.href = `https://${link}`}

   }
}