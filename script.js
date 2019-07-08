let input = document.querySelector('input');
fetch(`https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`)
.then(result => {
    return result.json();
})
.then(data => {
    // document.querySelector('input').addEventListener('keyup', () => {
    //    typeAhead(data);
    // })
    document.querySelector('input').addEventListener('input', () => {
        typeAhead(data);
     })
})
.catch(error => {
    document.write(error);
}) 

function typeAhead(data) {
    alert(input.value);
    document.querySelector('ul').innerHTML = '';
    if(document.querySelector('input').value === '') {
    document.querySelector('ul').innerHTML = '';

    }
data.forEach(e => {
    if(e.city.toLowerCase().includes(document.querySelector('input').value) && document.querySelector('input').value !== '') {
        document.querySelector('ul').insertAdjacentHTML('afterbegin', `<li> ${e.city.slice(0, e.city.toLowerCase().indexOf(input.value.toLowerCase().charAt(0)))}    <span>${e.city.slice(e.city.toLowerCase().indexOf(input.value.toLowerCase().charAt(0)),  e.city.toLowerCase().indexOf(input.value.toLowerCase().charAt(input.value.length -1)) + 1)}</span> ${e.city.slice(e.city.toLowerCase().indexOf(input.value.toLowerCase().charAt(input.value.length -1)) + 1 )} </li>`)
    }
});

}
