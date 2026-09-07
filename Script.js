document.getElementById('greetBtn').addEventListener('click', function() {
    const messages = [
        "Welcome to Einrejhay's profile!",
        "Ready to play some basketball or mobile games?",
        "Thanks for stopping by! Keep learning and grinding!"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('greetingMsg').textContent = randomMsg;
});