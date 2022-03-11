// console.log(document.getElementById("title"));
// document.addEventListener("DOMContentLoaded",
//     function (event) {
//         function sayHello () {
//             console.log(this);
//             console.log(event);
//             this.textContent = "Said it!";
//             var name = document.getElementById("name").value;
//             var message = "<h2>Hello " + name + "!</h2>";
//             document.getElementById("content").innerHTML = message;
//             if (name == "student") {
//                 var title = document.querySelector("#title").textContent;
//                 title += " & Lovin' it!";
//                 document.querySelector("#title").textContent = title;
//             }
//         }
//         document.querySelector("button").onclick = sayHello;
//     }
// );

// -----------------------

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("button").addEventListener("click", function () {
            var self = this;
            var name = "";

            $ajaxUtils.sendGetRequest("/data/name.txt", function (request) {
                var name = request.ResponseText;
                document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
            });
        });
    }
);