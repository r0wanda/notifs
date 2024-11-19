# Notifications

A tiny on-page (not push) notification/toast engine
![Screenshot](screenshot.png)

## Installation
The CSS will be loaded automatically when a instance is created
```html
<!-- Load font awesome -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/fontawesome.min.css">
<script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js"></script>
<!-- Load notification engine -->
<script src="https://cdn.jsdelivr.net/gh/r0wanda/notifs@latest/notifs.min.js"></script>
```
## Usage
```javascript
var notifs = new Notifs();

// Note: notifs.log may be used instead of info
notifs.info('Info'); // Sends an info notification, disappears after awhile

notifs.warn('Warning'); // Same as info, but styled to indicate a warning

notifs.error('Error!'); // Sends an error notification, will not disappear unless manually dismissed
```