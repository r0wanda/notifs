class Notifs {
	boxes;
	constructor() {
		this.boxes = [];
		this.#loadCSS();
	}
	#loadCSS() {
		if (!document.querySelector('link[data-ckdev="notif-css"]')) {
			
		}
	}
	add(type='info')
}