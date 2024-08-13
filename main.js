const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let drops = [];
const fontSize = 72;
const keyIcon = '\uf084';
const outlineColor = "#FFFFFF"; // White for RGB effect

const keyMappings = {
    '\uf084': 'auction.html',
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columns = Math.ceil(canvas.width / fontSize);
    drops = new Array(columns).fill(null).map(() => ({
        position: -fontSize,
        color: getRandomColor()
    }));
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function interpolateColor(color1, color2, factor) {
    return {
        r: Math.round(color1.r + (color2.r - color1.r) * factor),
        g: Math.round(color1.g + (color2.g - color1.g) * factor),
        b: Math.round(color1.b + (color2.b - color1.b) * factor)
    };
}

function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const columns = Math.ceil(canvas.width / fontSize);
    context.font = `${fontSize}px FontAwesome`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.shadowColor = outlineColor;
    context.shadowBlur = 10;
    context.lineWidth = 2;

    for (let i = 0; i < columns; i++) {
        const x = i * fontSize + fontSize / 2;
        const y = drops[i].position;
        const direction = Math.random() > 0.2 ? 0 : 1;

        const baseColor = drops[i].color;
        const nextColor = getRandomColor();
        const factor = (drops[i].position % canvas.height) / canvas.height;
        const currentColor = interpolateColor(baseColor, nextColor, factor);
        context.strokeStyle = `rgb(${currentColor.r},${currentColor.g},${currentColor.b})`;
        context.fillStyle = `rgb(${currentColor.r},${currentColor.g},${currentColor.b})`;

        context.save();
        context.translate(x, y);
        context.rotate(direction * Math.PI / 2);
        context.strokeText(keyIcon, 0, 0);
        context.fillText(keyIcon, 0, 0);
        context.restore();

        drops[i].position += fontSize;
        if (drops[i].position > canvas.height || Math.random() > 0.95) {
            drops[i].position = -fontSize;
            drops[i].color = getRandomColor();
        }
    }
}

function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const columns = Math.ceil(canvas.width / fontSize);

    for (let i = 0; i < columns; i++) {
        const keyX = i * fontSize + fontSize / 2;
        const keyY = drops[i].position;
        const distance = Math.sqrt((x - keyX) ** 2 + (y - keyY) ** 2);

        if (distance < fontSize / 2) {
            const key = keyIcon;
            if (keyMappings[key]) {
                window.location.href = keyMappings[key];
            }
        }
    }
}

resizeCanvas();
setInterval(draw, 50);
window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('click', handleClick);

context.clearRect(0, 0, canvas.width, canvas.height);
draw();
