document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach(box => {
        box.addEventListener("click", function () {
            // Reset all squares to original color
            checkboxes.forEach(b => {
                const id = parseInt(b.id);
                const originalColor = (id + Math.floor((id - 1) / 8)) % 2 === 0 ? "black" : "white";
                b.style.backgroundColor = originalColor;
            });

            const clickedId = parseInt(this.id);
            const row = Math.ceil(clickedId / 8);
            const col = ((clickedId - 1) % 8) + 1;

            // Color clicked box
            this.style.backgroundColor = "red";

            // Trace rook's path
            traceRookPath(row, col);
        });
    });

    function traceRookPath(row, col) {
        const directions = [
            [-1, 0], // up
            [+1, 0], // down
            [0, -1], // left
            [0, +1], // right
        ];

        directions.forEach(dir => {
            let [dx, dy] = dir;
            let r = row + dx;
            let c = col + dy;

            while (r >= 1 && r <= 8 && c >= 1 && c <= 8) {
                const id = (r - 1) * 8 + (c - 1) + 1;
                const box = document.getElementById(id.toString());
                if (box) box.style.backgroundColor = "red";

                r += dx;
                c += dy;
            }
        });
    }
});
