window.addEventListener('DOMContentLoaded', function() {
    //Getting all of selectors
    let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

        //function that adds classes to tabs to hide them
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }

        //function that adds classes to tabs to show them
        function showTabContent(i = 0) {
            tabsContent[i].classList.remove('hide');
            tabsContent[i].classList.add('show', 'fade');
            tabs[i].classList.add('tabheader__item_active');
        }
        hideTabContent();
        showTabContent();
        
        //After clicking on a tab, this function shows or hides the content
        function tabClick() {
            tabsParent.addEventListener('click', (event) => {
                const target = event.target;

                if(target && target.classList.contains('tabheader__item')) {
                    tabs.forEach((item, i) => {
                        if (target == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
                }         
            });
        }
        tabClick();


        //Timer

    
        function timer() {
            setInterval(timer, 1000);

            const deadline = Date.parse('2023-04-12 11:6:10'),//Setting a deadline date
                  today = Date.parse(new Date()),//Getting today's date
                  time = deadline - today,//Getting at a difference between dates

                  seconds = Math.floor((time / 1000) % 60),
                  minutes = Math.floor((time / 1000 / 60) % 60),
                  hours = Math.floor((time / 1000 / 60 / 60) % 24),
                  days = Math.floor((time / 1000 / 60 / 60 / 24)),
            
                  secondsHTML = document.querySelector('#seconds'),
                  minutesHTML = document.querySelector('#minutes'),
                  hoursHTML = document.querySelector('#hours'),
                  daysHTML = document.querySelector('#days');

            secondsHTML.innerHTML = getZero(seconds);
            minutesHTML.innerHTML = getZero(minutes);
            hoursHTML.innerHTML = getZero(hours);
            daysHTML.innerHTML = getZero(days);

            if (time <= 0) {
                secondsHTML.innerHTML = '00';
                minutesHTML.innerHTML = '00';
                hoursHTML.innerHTML = '00';
                daysHTML.innerHTML = '00';
            } 

            function getZero(num) {
                if(num >= 0 &&  num < 10) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }
        }
        timer();
    

    //Modal

    const openModalBtn = document.querySelectorAll('[data-modal]'),
          closeModalBtn = document.querySelector('[data-modalClose]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
    }

    function openModalEvent() {
        openModalBtn.forEach((item) => {
            item.parentNode.addEventListener('click', (event) => {
                event.preventDefault();
                openModal();
            });
        }
    )}

    

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-modalClose') == "") {
            closeModal();
        }
    });



    document.addEventListener('keydown', (event) => {
        if (event.key == "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });
    
    openModalEvent();


    const timeOut = setTimeout(showModalByScroll, 2000);
    
    function showModalByScroll() {
        let height = window.pageYOffset,
            scroll = document.documentElement.scrollHeight,
            docHeight = document.documentElement.clientHeight;

        if (height + docHeight === scroll) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    
    //Menu
    
    class Menu__item {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        addItem() {
            let newItem = document.createElement('div');

            if(this.classes.length === 0) { //if the are no classes in Menu__item
                this.newItem = 'menu__item';
                newItem.classList.add(this.newItem);
            } else {
                this.classes.forEach(className => newItem.classList.add(className))
            }
            newItem.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>

            `;
            this.parent.append(newItem);   
        }
    } 
    new Menu__item(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"

    ).addItem();

    new Menu__item(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        ".menu .container",
        'menu__item'
    ).addItem();

    new Menu__item(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        ".menu .container",
        'menu__item'
    ).addItem();


    //Forms

    // loop through all forms on the page
    const forms = document.querySelectorAll('form');
    forms.forEach( item => {
        postData(item);
    });

    // creating messages for all situations
    const message = { 
        loading: 'img/form/spinner.svg',
        success: 'Thank you!',
        failure: 'Something go wrong'
    };
    
    // Creating json file & sending it to backend
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();


            // If the form was submitted, this div will be added to the page with right message
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            // creating request to server
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');

            // creating an object from the received data
            const formData = new FormData(form);

            // Because of FormData is very specific object, we`ll get a JSON string from our object
            const object = {};

            // Stringifying JSON
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    showThanksModal(message.success);
                    statusMessage.remove();
                    form.reset();
                } else {
                    showThanksModal(message.failure);
                }
            })
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-modalClose>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);

        // after 4 seconds our form returns to her initial state

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

});

