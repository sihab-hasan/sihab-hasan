import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";

/**
 * The markup lives in index.html. This file only animates it — it does not
 * build, render, or template any HTML. See src/data.js if you need a plain
 * data reference for the content shown on the page.
 */

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Entrance timeline: avatar pops in first, identity lines fade up in a
 * stagger, the CTA follows, then the content sections (About / Stack /
 * Projects / Experience) reveal with their own stagger, and finally the
 * individual list/grid items inside each section settle in.
 */
const animateEntrance = () => {
  const avatar = document.querySelector('[data-gsap="avatar"]');
  const fades = document.querySelectorAll('[data-gsap="fade"]');
  const cta = document.querySelector('[data-gsap="cta"]');
  const sections = document.querySelectorAll('[data-gsap="section"]');
  const items = document.querySelectorAll('[data-gsap="item"]');

  gsap.set([avatar, ...fades, cta, ...sections], { opacity: 0, y: 14 });
  gsap.set(avatar, { scale: 0.92 });
  gsap.set(items, { opacity: 0, y: 8 });

  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline
    .to(avatar, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
    .to(fades, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, "-=0.35")
    .to(cta, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25")
    .to(sections, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, "-=0.2")
    .to(items, { opacity: 1, y: 0, duration: 0.4, stagger: 0.04 }, "-=0.3");
};

/** Slow breathing pulse on the "available" status dot. */
const animateStatusDot = () => {
  const dot = document.querySelector('[data-gsap="pulse"]');
  if (!dot) return;

  gsap.to(dot, {
    opacity: 0.35,
    scale: 1.5,
    transformOrigin: "center",
    duration: 1.1,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
};

/** Small directional nudge on links, gentle scale on the CTA. */
const animateInteractiveElements = () => {
  document.querySelectorAll('[data-gsap="link"]').forEach((link) => {
    const nudgeIn = () => gsap.to(link, { x: 3, duration: 0.25, ease: "power2.out" });
    const nudgeOut = () => gsap.to(link, { x: 0, duration: 0.3, ease: "power2.out" });

    link.addEventListener("mouseenter", nudgeIn);
    link.addEventListener("mouseleave", nudgeOut);
    link.addEventListener("focus", nudgeIn);
    link.addEventListener("blur", nudgeOut);
  });

  const cta = document.querySelector('[data-gsap="cta"]');
  if (cta) {
    const growIn = () => gsap.to(cta, { scale: 1.04, duration: 0.25, ease: "power2.out" });
    const growOut = () => gsap.to(cta, { scale: 1, duration: 0.3, ease: "power2.out" });

    cta.addEventListener("mouseenter", growIn);
    cta.addEventListener("mouseleave", growOut);
    cta.addEventListener("focus", growIn);
    cta.addEventListener("blur", growOut);
  }
};

/**
 * Aurora background: one element, five layered radial-gradients. GSAP tweens
 * background-position (one coordinate pair per layer) back and forth so the
 * gradients drift slowly — no separate blob elements involved.
 */
const animateAuroraBackground = () => {
  const auroraBg = document.querySelector("[data-aurora-bg]");
  if (!auroraBg) return;

  gsap.set(auroraBg, {
    backgroundPosition: "0% 0%, 100% 0%, 100% 100%, 0% 100%, 50% 50%",
  });

  gsap.to(auroraBg, {
    backgroundPosition:
      "20% 30%, 80% 25%, 75% 80%, 25% 75%, 55% 45%",
    duration: 20,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
};

const initializeAnimations = () => {
  if (prefersReducedMotion()) return;

  animateEntrance();
  animateStatusDot();
  animateInteractiveElements();
  animateAuroraBackground();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAnimations, { once: true });
} else {
  initializeAnimations();
}
