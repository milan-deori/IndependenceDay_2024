function countdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextIndependenceDay = new Date(`August 15, ${currentYear} 00:00:00`);

    if (now > nextIndependenceDay) {
        nextIndependenceDay.setFullYear(currentYear + 1);
    }

    const diff = nextIndependenceDay - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML =`365d ${hours}h ${minutes}m ${seconds}s` ;

    setTimeout(countdown, 1000);
}

countdown();
