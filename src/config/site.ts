import pkg from "../../package.json";

/** Sourced from package.json — bump the version there (and tag the release to match) to update this everywhere. */
export const SITE_VERSION: string = pkg.version;

/**
 * Single source of truth for the public origin. Change this (and `site` in
 * astro.config.mjs) once the real domain is registered — nothing else
 * hardcodes a URL.
 */
export const SITE_URL = "https://dorianblack.com";
export const SITE_NAME = "Dorian Black";
export const SITE_TAGLINE = "Synth-pop from the city after dark.";

/**
 * Cloudflare Turnstile site key for the contact form. The key is public by
 * design and committed so production cannot silently render a form-less page
 * when a build variable is missing. The matching secret must only exist in
 * Cloudflare or .dev.vars. PUBLIC_TURNSTILE_SITE_KEY remains an optional
 * override for another deployment.
 */
export const TURNSTILE_SITE_KEY: string =
	import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? "0x4AAAAAAER8KqCPg1Pn7fHL";

/**
 * Social and streaming profiles.
 *
 * Nothing is released yet, so every entry is `href: null`. The header and
 * footer skip null entries entirely, so the site renders clean today and
 * lights up the moment a URL is pasted in.
 */
export interface SocialLink {
	label: string;
	href: string | null;
	icon: string;
}

export const SOCIALS: SocialLink[] = [
	{ label: "Spotify", href: "https://open.spotify.com/artist/1e0DxuIekYHipCZlcNwVVt", icon: "simple-icons:spotify" },
	{ label: "Apple Music", href: "https://music.apple.com/us/artist/dorian-black/6801309828", icon: "simple-icons:applemusic" },
	{ label: "YouTube", href: null, icon: "simple-icons:youtube" },
	{ label: "SoundCloud", href: null, icon: "simple-icons:soundcloud" },
	{
		label: "Instagram",
		href: "https://www.instagram.com/dorian.black.music/",
		icon: "simple-icons:instagram",
	},
	{
		label: "TikTok",
		href: "https://www.tiktok.com/@dorian.black.band",
		icon: "simple-icons:tiktok",
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/people/Dorian-Black/61593270907107/",
		icon: "simple-icons:facebook",
	},
	{ label: "X", href: "https://x.com/dorianblackband", icon: "simple-icons:x" },
];

export const ACTIVE_SOCIALS = SOCIALS.filter(
	(s): s is SocialLink & { href: string } => s.href !== null,
);

/** Contact-form destination and fallback address when Turnstile is unavailable. */
export const CONTACT_EMAIL = "hello@dorianblack.com";
