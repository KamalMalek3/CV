const helloWorldExamples = [
    'std::cout << "Hello, World!" << std::endl;',  // C++
    'print("Hello, World!")',                     // Python
    'console.log("Hello, World!");',              // JavaScript
    'System.out.println("Hello, World!");',       // Java
    'echo "Hello, World!";',                      // PHP
    'printf("Hello, World!\\n");',                // C
    'puts "Hello, World!"',                       // Ruby
    'Console.WriteLine("Hello, World!");',        // C#
    'fmt.Println("Hello, World!")',               // Go
    'echo "Hello, World!"',                       // Bash
];



document.addEventListener("DOMContentLoaded", function() {
    var text = helloWorldExamples[Math.floor(Math.random() * helloWorldExamples.length)];
    var text2 = "> Hello, World!";
    var speed = 125; // Adjust the typing speed (in milliseconds)
    var delay = 1250;
    var appearIn = 500;
    var delay2 = delay + text.length * speed * 1.1 + appearIn;

    // Function to simulate typing effect
    function typeEffect() {
        var i = 0;
        setTimeout(function () {
            var typingInterval = setInterval(function () {
                if (i < text.length) {
                    document.getElementById("typing-text").innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);
        }, delay); // Delay of 1 second before starting the typing effect
        document.getElementById("typing-text").innerHTML = "";
        setTimeout(function () {
            document.getElementById("typing-text").innerHTML = text2;
        }, delay2)
    }

    // Call the function to start the typing effect
    typeEffect();
});