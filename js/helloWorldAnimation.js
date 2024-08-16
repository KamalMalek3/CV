const helloWorldExamples = [
    'cout<<"Hello, World!\\n";',  // C++
    'print("Hello, World!")',     // Python
    'console.log("Hello, World!");', // JavaScript
    'System.out.println("Hello, World!");', // Java
    'echo "Hello, World!";',      // PHP
    'printf("Hello, World!\\n");', // C
    'puts "Hello, World!"',       // Ruby
    'Console.WriteLine("Hello, World!");', // C#
    'fmt.Println("Hello, World!")', // Go
    'echo "Hello, World!"',       // Bash
];

document.addEventListener("DOMContentLoaded", function() {
    let typingInterval;

    // Function to simulate typing effect
    function typeEffect() {
        // Clear any existing interval to avoid overlap
        if (typingInterval) {
            clearInterval(typingInterval);
        }

        const text = helloWorldExamples[Math.floor(Math.random() * helloWorldExamples.length)];
        const text2 = "> Hello, World!";
        const speed = 125; // Adjust the typing speed (in milliseconds)
        const delay = 1250;
        const appearIn = 500;
        const delay2 = delay + text.length * speed * 1.1 + appearIn;

        let i = 0;

        document.getElementById("typing-text").innerHTML = ""; // Clear the text before starting

        setTimeout(function () {
            typingInterval = setInterval(function () {
                if (i < text.length) {
                    document.getElementById("typing-text").innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);
        }, delay); // Delay before starting the typing effect

        setTimeout(function () {
            if (text === document.getElementById("typing-text").innerHTML) {
                document.getElementById("typing-text").innerHTML = text2;
            }
        }, delay2);

        // Start the next typing effect after the current one finishes
        setTimeout(typeEffect, delay2 + delay + text2.length * speed * 1.1 + appearIn);
    }

    // Start the typing effect
    typeEffect();
});
