(() => {
    const canvas = document.getElementById('background');
    const context = canvas.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;

    //set canvas to full screen
    canvas.width = width;
    canvas.height = height;
})();

//Creating a gradient background
const drawBackground = () => {
    // starts from x, y to x1, y1
    const background = context.createLinearGradient(0, 0, 0, height);
    background.addColorStop(0, '#FF69EB');
    background.addColorStop(1, '##FFDC5E');

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);
};

