const fs = require('fs');
const content = fs.readFileSync('lib/products.ts', 'utf8');

const newReviews = `
  { id: 'rev-4', name: 'Liam C.', role: 'Director', production: 'Independent Film', rating: 5, comment: 'Incredible detail and fast shipping. Highly recommend for any indie filmmaker on a budget.', date: '2026-06-14' },
  { id: 'rev-5', name: 'Sophie L.', role: 'Set Decorator', production: 'Melbourne Theatre Co.', rating: 5, comment: 'Perfect for our stage production. They look completely real from the audience.', date: '2026-06-20' },
  { id: 'rev-6', name: 'James W.', role: 'Music Video Producer', production: 'Urban Soundscapes', rating: 5, comment: 'The money gun stacks fly perfectly. Great weight and feel. Essential for hip-hop shoots.', date: '2026-07-02' },
  { id: 'rev-7', name: 'Emma P.', role: 'Content Creator', production: 'YouTube/TikTok', rating: 5, comment: 'Looks so real on camera! Fast delivery and great customer service.', date: '2026-07-15' },
  { id: 'rev-8', name: 'Oliver B.', role: 'Prop Master', production: 'Action Feature', rating: 5, comment: 'Best prop money in Australia, hands down. The non-glare finish saves us in post-production.', date: '2026-07-22' },
  { id: 'rev-9', name: 'Mia D.', role: 'Event Coordinator', production: 'Casino Night Gala', rating: 5, comment: 'Used these for a corporate casino night. Everyone loved the realistic feel!', date: '2026-08-01' },
  { id: 'rev-10', name: 'Lucas T.', role: 'Photographer', production: 'Commercial Shoot', rating: 5, comment: 'Excellent quality for macro shots. The compliance marks are subtle enough not to ruin the aesthetic.', date: '2026-08-10' },
  { id: 'rev-11', name: 'Charlotte F.', role: 'Art Director', production: 'TV Commercial', rating: 5, comment: 'Exactly what we needed. The banded stacks look incredibly authentic on screen.', date: '2026-08-15' },
  { id: 'rev-12', name: 'William R.', role: 'Filmmaker', production: 'Short Film', rating: 5, comment: 'Great value for money. The double-sided print is a game changer.', date: '2026-08-20' },
  { id: 'rev-13', name: 'Amelia K.', role: 'Production Designer', production: 'Crime Series', rating: 5, comment: 'We ordered the briefcase bundle and it exceeded expectations. Premium quality.', date: '2026-08-25' },
  { id: 'rev-14', name: 'Henry S.', role: 'Indie Director', production: 'Student Film', rating: 5, comment: 'Fast shipping and looks amazing on camera. Will definitely buy again.', date: '2026-08-28' },
  { id: 'rev-15', name: 'Evelyn M.', role: 'Prop Assistant', production: 'Feature Film', rating: 5, comment: 'The colors are spot on. RBA compliant but still looks perfect on screen.', date: '2026-09-01' },
  { id: 'rev-16', name: 'Alexander G.', role: 'Producer', production: 'Web Series', rating: 5, comment: 'These are the gold standard for prop money. Highly recommended.', date: '2026-09-03' },
  { id: 'rev-17', name: 'Harper N.', role: 'Set Dresser', production: 'Commercial', rating: 5, comment: 'The blank fillers are perfect for filling up bags and safes affordably.', date: '2026-09-05' },
  { id: 'rev-18', name: 'Jack H.', role: 'Cinematographer', production: 'Music Video', rating: 5, comment: 'Lighting these is a dream. No weird reflections or gloss.', date: '2026-09-10' },
  { id: 'rev-19', name: 'Ella V.', role: 'Creative Director', production: 'Ad Campaign', rating: 5, comment: 'Fantastic product. The attention to detail is remarkable.', date: '2026-09-12' },
  { id: 'rev-20', name: 'Thomas C.', role: 'Prop Master', production: 'Drama Series', rating: 5, comment: 'I buy all my prop currency here now. Unbeatable quality and service.', date: '2026-09-15' }
];`;

const newContent = content.replace('];', ',' + newReviews);
fs.writeFileSync('lib/products.ts', newContent);
