// ──────────────────────────────────────
// Single source of truth for all profile data
// ──────────────────────────────────────

export interface ProfileType {
  name: string;
  shortName: string;
  alias: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  resumeHref: string;
  resumeFilename: string;
  web3formsKey: string;
}

export const PROFILE: ProfileType = {
  name: 'Shushank Ranjan',
  shortName: 'Shushank Ranjan',
  alias: 'shushank',
  title: 'DevOps Engineer',
  email: 'shushankranjan07@gmail.com',
  phone: '+918409807662',
  website: 'www.shushankranjan.cloud',
  resumeHref: '/KumarShushankRanjan.pdf',
  resumeFilename: 'ShushankRanjan_Resume.pdf',
  web3formsKey: '558a59b5-52f2-42fd-83f4-11f4518ca50c',
};

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Shushankranjan',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shushank-ranjan',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/shuuushank',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:shushankranjan07@gmail.com',
  },
];

export type SocialLinkId = SocialLink['id'];

/** Helper to get a social link by id */
export const getSocialLink = (id: SocialLinkId) =>
  SOCIAL_LINKS.find((link) => link.id === id)!;
