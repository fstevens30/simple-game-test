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

const drawForeground = () => {
    context.fillStyle = '#FF69EB';
    context.fillRect(0, height * .95, width, height);

    context.fillStyle = '#FFDC5E';
    context.fillRect(0, height * .955, width, height);
};

const drawSus = () => {
    const image = new Image();
    image.src = './images/sus.png';

    image.onload = function () {
        /**
         * this - references the image object
         * draw at 90% of the width of the canvas - the width of the image
         * draw at 95% of the height of the canvas - the height of the image 
         */
        context.drawImage(this, (width * .9) - this.width, (height * .95) - this.height);
    };
};
