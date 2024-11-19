class Notifs {
	boxes;
	#ids;
	constructor(css='https://cdn.jsdelivr.net/gh/r0wanda/notifs@latest/notifs.min.css') {
		this.boxes = [];
		this.#ids = [];
		this.#loadCSS(css);
		window.addEventListener('resize', () => {
			setTimeout(() => { this.resetPositions(); }, 1100);
		});
	}
	#getId() {
		var id;
		do {
			id = (Math.random() + 1).toString(36).substring(7);
		} while (this.#ids.includes(id));
		this.#ids.push(id);
		return id;
	}
	boxesHeight(idx=null) {
		var h = 0;
		for (var i = 0; i < this.boxes.length; i++) {
			if (idx !== null && i == idx) break;
			h += this.boxes[i].clientHeight + 20;
		}
		return h;
	}
	cleanBoxes() {
		this.boxes = this.boxes.filter(b => document.querySelector(`div.notif[data-id="${b.dataset.id}"]`));
	}
	resetPositions() {
		for (var i = 0; i < this.boxes.length; i++) {
			var n = this.boxes[i];
			n.style.top = `${this.boxesHeight(i)}px`;
		}
	}
	#loadCSS(css) {
		if (!document.querySelector('link[data-notif="notif-css"]')) {
			const head = document.getElementsByTagName('head')[0];
			if (!head) alert('ERROR: `head` element not found (notifs)');
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = css;
			link.type = 'text/css';
			link.dataset.notif = 'notif-css';
			head.appendChild(link);
		}
	}
	send(msg, type='info', fa='info', timeout=true) {
		var notif = document.createElement('div');
		notif.className = `notif ${type}`;
		const id = this.#getId();
		notif.dataset.id = id;
		if (this.boxes.length > 0) notif.style.top = `${this.boxesHeight()}px`;
		var notifsClass = this;
		function rem() {
			this.style.animation = 'notif-fade-out .5s linear forwards';
			setTimeout(() => {
				this.remove();
				notifsClass.boxes.splice(notifsClass.boxes.indexOf(this), 1);
				notifsClass.resetPositions();
			}, 1000);
		}
		notif.addEventListener('click', function() {
			rem.bind(this)();
		});
		console.log(notif);
		const faElem = document.createElement('i');
		faElem.className = `fa-solid fa-${fa}`;
		const msgElem = document.createElement('span');
		msgElem.innerText = msg;
		notif.appendChild(faElem);
		notif.appendChild(msgElem);
		document.body.appendChild(notif);
		notif = document.querySelector(`div.notif[data-id="${id}"]`);
		this.boxes.push(notif);
		this.resetPositions();
		if (timeout != false) setTimeout(() => {
			rem.bind(notif)();
		}, timeout === true ? msg.split(/\s/).length * 1000 + 5000 : parseInt(timeout));
	}
	info(msg) {
		this.send(msg);
	}
	log(msg) {
		this.send(msg);
	}
	warn(msg) {
		this.send(msg, 'warning', 'triangle-exclamation');
	}
	error(msg) {
		this.send(msg, 'error', 'circle-exclamation', false);
	}
}
