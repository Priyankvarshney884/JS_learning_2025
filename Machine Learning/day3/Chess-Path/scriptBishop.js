document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach(box => {
        box.addEventListener("click", function () {
            // Step 1: Clear previous highlights
            checkboxes.forEach(b => {
                const originalColor = (parseInt(b.id) + Math.floor((parseInt(b.id) - 1) / 8)) % 2 === 0 ? "black" : "white";
                b.style.backgroundColor = originalColor;
            });

            // Step 2: Get clicked box ID and its coordinates
            const clickedId = parseInt(this.id);
            const row = Math.ceil(clickedId / 8);
            const col = ((clickedId - 1) % 8) + 1;

            // Step 3: Highlight the clicked square
            this.style.backgroundColor = "red";

            // Step 4: Highlight bishop diagonals
            traceBishopPath(row, col);
        });
    });

    function traceBishopPath(row, col) {
        const directions = [
            [-1, -1], // top-left
            [-1, +1], // top-right
            [+1, -1], // bottom-left
            [+1, +1], // bottom-right
        ];

        directions.forEach(dir => {
            let [dx, dy] = dir;
            let r = row + dx;
            let c = col + dy;

            while (r >= 1 && r <= 8 && c >= 1 && c <= 8) {
                const id = (r - 1) * 8 + (c - 1) + 1;
                const target = document.getElementById(id.toString());
                if (target) target.style.backgroundColor = "red";

                r += dx;
                c += dy;
            }
        });
    }
});


