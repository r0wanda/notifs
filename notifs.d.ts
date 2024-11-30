/**
 * Toast notification client
 */
declare class Notifs {
    boxes: HTMLElement[];
    #ids: string[];
    /**
     * Notifs
     * @param css Link to css file to load
     */
    constructor(css?: string);
    /**
     * Get id string
     * @internal
     */
    #getId(): string;
    /**
     * Get height of all boxes
     * @internal
     */
    boxesHeight(idx?: number): number;
    /**
     * Reload box list
     * @internal
     */
    cleanBoxes(): void;
    /**
     * Reset box positions
     */
    resetPositions(): void;
    /**
     * Load css file
     * @internal
     * @param css Css file to load
     */
    #loadCSS(css: string): void;
    /**
     * Send notification
     * @param msg The message
     * @param type Notification type (for css)
     * @param fa Font awesome icon
     * @param timeout true for auto, false for none, number for ms
     */
    send(msg: string, type?: 'info' | 'warning' | 'error', fa?: string, timeout?: boolean | number): void;
    /**
     * Send an info notification
     * @param msg Message
     */
    info(msg: string): void;
    /**
     * Send an info notification
     * @alias info
     * @param msg Message
     */
    log(msg: string): void;
    /**
     * Send a warning notification
     * @param msg Message
     */
    warn(msg: string): void;
    /**
     * Send an error notification
     * @param msg Message
     */
    error(msg: string): void;
}

declare const notifs: Notifs;