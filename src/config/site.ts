export const SITE_VERSION = "0.1.0";

/**
 * Single source of truth for the public origin. Change this (and `site` in
 * astro.config.mjs) once the real domain is registered — nothing else
 * hardcodes a URL.
 */
export const SITE_URL = "https://dorianblack.example";
export const SITE_NAME = "Dorian Black";
export const SITE_TAGLINE = "Synth-pop from the city after dark.";

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
	{ label: "Instagram", href: null, icon: "simple-icons:instagram" },
	{ label: "TikTok", href: null, icon: "simple-icons:tiktok" },
];

export const ACTIVE_SOCIALS = SOCIALS.filter(
	(s): s is SocialLink & { href: string } => s.href !== null,
);

/** Contact address shown on the About page. */
export const CONTACT_EMAIL = "hello@dorianblack.example";
