/**
 * One shared set of motion tokens for every GSAP tween on the site.
 * Restrained and "expensive": soft fades, 12-20px rises, 40ms stagger.
 * Exits run at ~65% of an enter's duration.
 */
export const EASE_ENTER = "power2.out";
export const EASE_EXIT = "power2.in";
export const EASE_FLOW = "power1.inOut";

export const DUR_ENTER = 0.65;
export const DUR_EXIT = DUR_ENTER * 0.65;

/** Per-item stagger for a line-by-line text reveal. */
export const STAGGER_LINES = 0.04;

/** Per-item stagger for a card/list reveal. */
export const STAGGER_ITEMS = 0.04;
