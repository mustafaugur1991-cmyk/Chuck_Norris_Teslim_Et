const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('new-joke-btn');

async function getJoke() {
    try {
        // Butonu geçici olarak pasif yap
        jokeBtn.disabled = true;
        jokeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Aranıyor...';
        
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        
        // Animasyon için sınıfı temizle ve tekrar ekle
        jokeText.classList.remove('animate-text');
        void jokeText.offsetWidth; // DOM reflow tetikleme
        
        // Şakayı ekrana yaz ve animasyonu başlat
        jokeText.innerText = data.value;
        jokeText.classList.add('animate-text');
        
    } catch (error) {
        jokeText.innerText = "Chuck Norris şu an meşgul, dünyayı kurtarıyor. Lütfen tekrar dene.";
    } finally {
        jokeBtn.disabled = false;
        jokeBtn.innerHTML = '<i class="fas fa-bolt"></i> Yeni Şaka Gör';
    }
}

jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);