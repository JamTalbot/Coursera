// console.log(document.getElementById("title"));
document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello () {
            // console.log(this);
            // console.log(event);
            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";
            document.getElementById("content").innerHTML = message;
            if (name == "student") {
                var title = document.querySelector("#title").textContent;
                title += " & Lovin' it!";
                document.querySelector("#title").textContent = title;
            }
        }
        document.querySelector("button").onclick = sayHello;
    }
);