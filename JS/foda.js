document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.foda-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.foda-item').forEach(i => {
                if (i !== item) i.classList.remove('activo');
            });
            item.classList.toggle('activo');
        });
    });
});
