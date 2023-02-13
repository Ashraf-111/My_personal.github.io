window.onload = () => {


    document.getElementById("input1").style.display = "none";


    anime.timeline({ loop: true })
        .add({
            targets: '.ml15 .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 800 * i
        }).add({
            targets: '.ml15',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

    setTimeout(() => {
        document.getElementById("input1").style.display = "block";
        document.getElementById("in2").style.display = "none";
        document.getElementById("all").classList.add("show");
    }, 2000)
}