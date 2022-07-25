(() => {
    const canvas = document.getElementById('background');
    const context = canvas.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;

    //set canvas to full screen
    canvas.width = width;
    canvas.height = height;
})();