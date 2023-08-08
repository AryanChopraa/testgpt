**Shared Dependencies:**

1. **Exported Variables:** 
   - `app` from `app.js`
   - `router` from all `routes` files
   - `User`, `Video`, `Chatbot` from `models` files

2. **Data Schemas:** 
   - `UserSchema` in `userModel.js`
   - `VideoSchema` in `videoModel.js`
   - `ChatbotSchema` in `chatbotModel.js`

3. **DOM Element IDs:** 
   - `video-url-input` in `video.html`
   - `video-transcript-display` in `video.html`
   - `chatbot-interface` in `chatbot.html`
   - `note-display` in `notes.html`
   - `login-form` in `login.html`
   - `register-form` in `register.html`
   - `profile-info` in `profile.html`

4. **Message Names:** 
   - `video-transcript` for video transcription
   - `video-summary` for video summarization
   - `note-generated` for note generation
   - `chatbot-response` for chatbot responses

5. **Function Names:** 
   - `transcribeVideo` in `videoController.js`
   - `summarizeTranscript` in `videoController.js`
   - `generateNote` in `videoController.js`
   - `webResearch` in `videoController.js`
   - `interactChatbot` in `chatbotController.js`
   - `registerUser` in `userController.js`
   - `loginUser` in `userController.js`
   - `updateProfile` in `userController.js`
   - `searchNotes` in `searchFilter.js`
   - `filterNotes` in `searchFilter.js`
   - `saveNote` in `notes.js`
   - `exportNote` in `export.js`