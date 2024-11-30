document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.getElementById('slider');
    const after = document.querySelector('.after');
    const sliderContainer = document.querySelector('.before-after-slider');

    let isDragging = false;

    sliderContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startDragging(e);
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            drag(e);
        }
    });

    function startDragging(e) {
        drag(e); // Initial call to position the slider properly
    }

    function drag(e) {
        const rect = sliderContainer.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width) offsetX = rect.width;
        const percentage = (offsetX / rect.width) * 100;
        after.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        slider.style.left = `${percentage}%`;
    }
});