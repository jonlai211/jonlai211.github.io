document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button');
    const details = document.querySelectorAll('.about-more');

    expandButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (details[index].style.display === 'block') {
                details[index].style.display = 'none';
                button.textContent = 'Expand';
            } else {
                details[index].style.display = 'block';
                button.textContent = 'Collapse';
            }
        });
    });
});
