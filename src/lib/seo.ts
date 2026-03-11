export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://dakotaautismcenter.com';

export const SITE_NAME = 'Dakota Autism Center';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function withSiteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
