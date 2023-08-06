# Notifications

A tiny on-page (not push) notification/toast engine
![Screenshot](screenshot.png)
### IMPORTANT: For icons to work, [Font Awesome](https://fontawesome.com/) must be included

## Installation
The CSS will be loaded automatically when a instance is created
```html
<script src="https://cdn.jsdelivr.net/gh/cookey-dev/notifs@latest/notifs.min.js"></script>
```
## Usage
```javascript
var notifs = new Notifs();

// Note: notifs.log may be used instead of info
notifs.info('Info'); // Sends an info notification, disappears after awhile

notifs.warn('Warning'); // Same as info, but styled to indicate a warning

notifs.error('Error!'); // Sends an error notification, will not disappear unless manually dismissed
```