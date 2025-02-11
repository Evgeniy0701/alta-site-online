/******* Do not edit this file *******
Woody Code Snippets CSS and JS
Saved: Jan 31 2024 | 14:37:36 */
window.onload = function() {
    document.getElementById("site-header").style.top = "0"; // Залишаємо хедер видимим при завантаженні сторінки
};

// Якщо вікно перегляду більше 768px (загальновживаний поріг для ПК), хедер завжди показується
if (window.innerWidth >= 768) {
    document.getElementById("site-header").style.top = "0";
}

// Якщо вікно змінює розмір, перевіряємо, чи хедер має залишатися видимим на ПК
window.onresize = function() {
    if (window.innerWidth >= 768) {
        document.getElementById("site-header").style.top = "0";
    } else {
        // Якщо вікно менше 768px, хедер перевіряється за допомогою попереднього скрипту при прокручуванні
        window.onscroll = function() {
            var scrollPosition = window.pageYOffset;
            if (scrollPosition > 300) {
                var prevScrollpos = window.pageYOffset;
                window.onscroll = function() {
                    var currentScrollPos = window.pageYOffset;
                    if (prevScrollpos > currentScrollPos) {
                        document.getElementById("site-header").style.top = "0";
                    } else {
                        document.getElementById("site-header").style.top = "-100px"; /* Змініть -100px на висоту вашого хедера */
                    }
                    prevScrollpos = currentScrollPos;
                }
            } else {
                document.getElementById("site-header").style.top = "0";
            }
        }
    }
};
