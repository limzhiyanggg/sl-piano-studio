export const colors = {
  // Brand
  primary:         '#B89A7A',           // warm gold — accent, step numbers, decorative elements

  // Text
  textDark:        '#1F2A33',           // headings, primary body
  textMid:         '#696E71',           // secondary body, card copy
  textLight:       '#758490',           // FAQ, icon labels
  textPlaceholder: '#939594',           // placeholder labels

  // Backgrounds
  bgWhite:         '#FFFFFF',
  bgSecondary:     '#F3F3F3',           // offer / rates sections
  bgWarm:          '#FBF8F2',           // testimonial card warm variant
  bgDark:          '#000000',           // contact section overlay base

  // Borders
  borderSubtle:    'rgba(31, 42, 51, 0.08)',
  borderMid:       'rgba(31, 42, 51, 0.14)',
};

export const fonts = {
  // Families
  serif:    '"Cormorant Garamond", serif',  // headings, logo, hero — roman + italic
  serifAlt: '"EB Garamond", serif',         // subheadings (h3/h4), step numbers, rates
  sans:     '"Manrope", sans-serif',        // body, nav, UI copy

  // Weights
  weight: {
    light:   300,
    regular: 400,
    medium:  500,
  },
};

export const type = {
  // { size, lineHeight, tracking }
  display: { size: '70px',  lineHeight: '74px',    tracking: '-1.4px'  }, // hero headline
  h2:      { size: '52px',  lineHeight: '58px',    tracking: '-0.32px' }, // section headings
  h3:      { size: '28px',  lineHeight: '34px',    tracking: '0'       }, // card titles (EB Garamond)
  h4:      { size: '22px',  lineHeight: '28.6px',  tracking: '0'       }, // FAQ questions (EB Garamond)
  bodyLg:  { size: '18px',  lineHeight: '32px',    tracking: '0'       }, // hero subtext, CTA body
  bodyMd:  { size: '18px',  lineHeight: '28px',    tracking: '0'       }, // general body
  bodySm:  { size: '14px',  lineHeight: '18.15px', tracking: '0'       }, // nav links, tags
  caption: { size: '12px',  lineHeight: '18.15px', tracking: '0'       }, // footer
};

export const spacing = {
  sectionPad:    '80px', // top/bottom padding on all sections
  sectionSideLg: '78px', // hero, testimonials, FAQ, contact — side padding
  sectionSideSm: '40px', // nav — side padding
  colGap:        '64px', // gap between benefit cards, step columns
  cardGap:       '20px', // gap between testimonial cards
  elementGap:    '24px', // gap within content stacks
  itemGap:       '16px', // gap within benefit cards
};

export const radius = {
  pill:   '999px', // buttons, tags, avatar borders
  card:   '28px',  // testimonial cards, photo cards
  avatar: '50px',  // avatar images
  icon:   '4px',   // small UI labels
};
