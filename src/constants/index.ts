const PORT = process.env.PORT || 3000;

// SITE INFO
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://yurikoshiishi.com"
    : `http://localhost:${PORT}`;
export const SITE_NAME = "Site Name";
export const DEFAULT_DESCRIPTION = "A description for the website";

// STYLES
export const HEADER_HEIGHT = 64;
export const SIDEBAR_WIDTH = 240;
