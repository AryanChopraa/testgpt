```javascript
document.addEventListener('DOMContentLoaded', () => {
    const videoUrlInput = document.getElementById('video-url-input');
    const videoTranscriptDisplay = document.getElementById('video-transcript-display');

    videoUrlInput.addEventListener('change', async () => {
        const videoUrl = videoUrlInput.value;
        const response = await fetch(`/api/video/transcribe?videoUrl=${videoUrl}`);
        const data = await response.json();

        if (data.success) {
            videoTranscriptDisplay.textContent = data.transcript;
        } else {
            videoTranscriptDisplay.textContent = 'Error transcribing video. Please try again.';
        }
    });
});
```