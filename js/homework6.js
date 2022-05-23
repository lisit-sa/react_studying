

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form =  document.querySelector('form.add'),
        checkbox = form.querySelector('[type="checkbox"]'),
        formInput = document.querySelector('.adding__input');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formInputVal = formInput.value;
        if(formInputVal) {
            
            if(formInputVal.length > 21){
                formInputVal = `${formInputVal.substring(0, 22)}...`;
            }
            movieDB.movies.push(formInputVal);
            movieList.innerHTML = "";

            createMovieList();

            if(checkbox) {
                console.log('Добавляем любимый фильм');
            }
            
        }
        
        e.target.reset();

    });

    function createMovieList(){
        movieList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach(function(item, i) {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        let delFilms = document.querySelectorAll('.delete');

        delFilms.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList();
            });
        });
    }
    

    deleteAdv(adv);
    makeChanges();
    createMovieList();

});