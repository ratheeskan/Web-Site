(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let currentYear = new Date().getFullYear() + 2;
        let targetDate = new Date(2024, 5, 8);
        let onStart = () => {
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'));
        };
        let onTick = ({ years, days, hours, minutes, seconds }) => {
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let sufixes = new LsCountdownSufixes({
            years: 'y', // You might want to specify a suffix for years if needed
            days: '', // Remove the suffix for days
            hours: '', // Remove the suffix for hours
            minutes: '', // Remove the suffix for minutes
            seconds: '' // Remove the suffix for seconds
        });
        let options = new LsCountdownOptions({ targetDate, onStart, onTick, sufixes });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;




        
    });
})();


