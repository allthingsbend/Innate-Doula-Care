// All business facts and page copy live here so they are easy to review and edit.
// Prices and details were taken from innatedoulacare.com in October 2026. Aleah to confirm.

export const business = {
  name: 'Innate Doula Care',
  owner: 'Aleah Hancock',
  phone: '(541) 280-4048',
  phoneHref: 'tel:5412804048',
  email: 'aleah@innatedoulacare.com',
  booking: 'https://calendly.com/innate-doula-care',
  towns: ['Bend', 'Redmond', 'Sisters', 'Sunriver', 'La Pine', 'Prineville', 'Terrebonne', 'Culver', 'Madras'],
  social: {
    Instagram: 'https://www.instagram.com/innatedoulacare',
    Facebook: 'https://www.facebook.com/197241490144371',
    YouTube: 'https://www.youtube.com/@AleahHancock',
    LinkedIn: 'https://www.linkedin.com/in/aleah-hancock-7637572b9/',
  },
  credentials: [
    'Certified Doula (THW), Oregon Health Authority',
    'Certified Lactation Counselor (CLC)',
    'Child Passenger Safety Technician, Safe Kids Worldwide',
    'Certified Placenta Specialist',
    'OHP-approved doula',
    'Oregon Doula Association member',
  ],
};

const areaFaq = {
  q: 'What areas do you serve?',
  a: 'I provide in-person support across Central Oregon, including Bend, Redmond, Terrebonne, Culver, Madras, Sisters, Sunriver, La Pine and Prineville.',
};

export const services = [
  {
    slug: 'car-seat-installation-bend',
    nav: 'Car Seat Help',
    title: 'Car Seat Installation Help in Bend, OR',
    h1: 'Car seat installation help in Bend, Oregon',
    description: 'In-home car seat installation help and safety checks in Bend and Central Oregon from a certified Child Passenger Safety Technician. $50, by appointment.',
    image: 'river',
    summary: 'One-on-one, at your home. Learn to install and adjust your seat with confidence.',
    intro: [
      'As a certified Child Passenger Safety Technician (CPST), I come to your home and teach you how to install and adjust your car seat correctly, in your own vehicle. The goal is not for me to install it for you. It is for you to leave knowing how to do it yourself, every time.',
      'Many car seats are installed incorrectly without the parent knowing. A session before your baby arrives, or any time you change seats or vehicles, takes the guesswork out.',
    ],
    includesTitle: 'What happens in a session',
    includes: [
      ['Review your manuals', 'We go through the car seat manual and your vehicle manual together so placement and use match what the manufacturers require.'],
      ['Hands-on installation practice', 'You install the seat with both the seat belt and the LATCH system while I guide you step by step.'],
      ['Common mistakes', 'I show you the issues I see most often and how to avoid them.'],
      ['Harness and fit check', 'We adjust the seat for your child\'s age, height and weight.'],
      ['Questions and follow-up', 'You leave with answers and resources for later.'],
    ],
    pricing: [
      ['Full car seat safety check and education session', '$50', '45 to 60 minutes, at your home'],
      ['Each additional seat, same appointment', '$15', ''],
      ['Virtual car seat check', '$40', 'Education and guidance by video'],
    ],
    faqs: [
      { q: 'Where do you do car seat checks?', a: 'At your home, in your own vehicle, anywhere in Central Oregon: Bend, Redmond, Sisters, Sunriver, La Pine, Prineville and nearby towns.' },
      { q: 'How is this different from the free fire department clinic?', a: 'Bend Fire & Rescue hosts free drive-through car seat clinics on set dates through the year, and they are a great resource. I offer a private, by-appointment session at your home, on a day that works for you, with as much time as you need to practice.' },
      { q: 'Will you install the seat for me?', a: 'I will guide you while you install it. Parents who do the installation themselves are far more likely to get it right the next time.' },
      { q: 'When should I book?', a: 'Before your baby arrives is ideal, so the seat is ready for the ride home. It is also worth a check when you move to a new seat or a different vehicle.' },
    ],
  },
  {
    slug: 'birth-doula-bend',
    nav: 'Birth Doula',
    title: 'Birth Doula in Bend, Oregon',
    h1: 'Birth doula in Bend, Oregon',
    description: 'Birth doula support in Bend and Central Oregon for hospital, birth center and home births. Packages from $1,500. OHP covered. Free consultation.',
    image: 'forest',
    summary: 'Steady support through pregnancy, labor and birth, wherever you plan to deliver.',
    intro: [
      'As your birth doula, I provide steady support through pregnancy, labor and birth. My role is to give you the knowledge, confidence and comfort to have a positive birth experience, whatever your birth plan looks like.',
      'Whether you are planning a home birth, a hospital delivery or something in between, I tailor my care to you. I also help keep communication clear with your medical team so you can advocate for your choices.',
    ],
    includesTitle: 'What the Birth Package includes',
    includes: [
      ['On-call support', 'I am on call for about four weeks around your due date. You can call, text or email any time once care begins, up to a year after your baby arrives.'],
      ['Two prenatal meetings', 'Usually at 32 to 34 weeks and 36 to 38 weeks. We cover your preferences, comfort measures, newborn care and car seat safety.'],
      ['Labor and birth support', 'Continuous support at home, the hospital or a birth center, plus one to two hours after delivery.'],
      ['Backup doula', 'A backup is arranged in case I cannot be there because of an emergency or another birth.'],
      ['Postpartum follow-up', 'One or two visits, usually in the first week and around week six.'],
    ],
    pricing: [
      ['Birth Package', '$2,100', 'Everything listed above'],
      ['Birth & Postpartum Package', '$2,600', 'The Birth Package plus 12 hours of postpartum care'],
      ['Birth Support Only', '$1,500', 'One consultation, on call from 38 weeks, labor and birth support'],
      ['OHP Birth Package', 'Covered', 'No out-of-pocket cost for Oregon Health Plan members'],
    ],
    faqs: [
      { q: 'What is a birth doula?', a: 'A birth doula is a trained professional who provides physical, emotional and informational support during pregnancy, birth and the early postpartum period. Doulas do not provide medical care. We work alongside your healthcare team.' },
      { q: 'Will a doula replace my partner?', a: 'Not at all. I support partners too, helping them feel confident and involved. Your partner knows you. I know birth. Together we make a strong team.' },
      { q: 'Do you support hospital, birth center and home births?', a: 'Yes. I support all birth settings in Central Oregon.' },
      { q: 'Does insurance cover a birth doula in Oregon?', a: 'The Oregon Health Plan covers doula services, and I am an OHP-approved doula. Some private plans, HSAs and FSAs also cover doula care. I can provide a superbill for possible reimbursement.' },
      areaFaq,
    ],
  },
  {
    slug: 'postpartum-doula-bend',
    nav: 'Postpartum Doula',
    title: 'Postpartum Doula in Bend, Oregon',
    h1: 'Postpartum doula in Bend, Oregon',
    description: 'In-home postpartum doula care in Bend and Central Oregon. Newborn care, feeding support and rest for new parents. From $50 per hour. OHP accepted.',
    image: 'cascades-dawn',
    summary: 'Practical help and calm company at home in the first weeks with your baby.',
    intro: [
      'Welcoming a new baby is beautiful and often overwhelming. As your postpartum doula, I offer practical help, emotional support and guidance in a calm, nurturing way.',
      'Whether you need help with newborn care, feeding support, or simply a chance to rest while I take care of things around the house, every visit is shaped around what your family needs. Overnight support is available case by case.',
    ],
    includesTitle: 'What a visit can include',
    includes: [
      ['Infant care', 'Soothing, bathing, diapering and sleep routines.'],
      ['Feeding support', 'Help with breastfeeding, bottle feeding or pumping.'],
      ['Practical help', 'Light household tasks, sibling and pet support.'],
      ['Emotional support', 'Someone to listen and check in on how you are doing.'],
      ['Local resources', 'Referrals to lactation consultants, therapists and parent groups.'],
    ],
    pricing: [
      ['A la carte', '$50 per hour', 'Add hours as needed'],
      ['10 hours', '$500', ''],
      ['20 hours', '$975', ''],
      ['30 hours', '$1,425', ''],
      ['40 hours', '$1,800', ''],
      ['OHP', 'No out-of-pocket cost', 'OHP clients may qualify for four additional postpartum visits'],
    ],
    faqs: [
      { q: 'What is the difference between a postpartum doula and a nanny?', a: 'A postpartum doula supports the whole family as you adjust, with education and guidance for parents. A nanny mainly provides childcare, usually long term.' },
      { q: 'When should I book a postpartum doula?', a: 'During pregnancy is best, to make sure I am available. If you find you need support after your baby is born, I will do my best to fit you in.' },
      { q: 'Can a postpartum doula help with breastfeeding?', a: 'Yes. I am also a Certified Lactation Counselor, and I refer to an IBCLC for more complex concerns.' },
      { q: 'Do you accept HSA and FSA?', a: 'Yes, HSA and FSA are accepted, and I can provide a superbill for insurance.' },
      areaFaq,
    ],
  },
  {
    slug: 'lactation-counselor-bend',
    nav: 'Lactation Support',
    title: 'Lactation Counselor in Bend, Oregon',
    h1: 'Lactation support in Bend, Oregon',
    description: 'In-home and virtual lactation support in Bend and Central Oregon from a Certified Lactation Counselor (CLC). Visits from $60. Judgment-free feeding help.',
    image: 'cascades-dawn',
    summary: 'Evidence-based, judgment-free feeding help at home or by video.',
    intro: [
      'As a Certified Lactation Counselor (CLC), I provide evidence-based, compassionate support to help your family meet its feeding goals.',
      'Whether you are preparing during pregnancy, working through the early days, or facing a feeding challenge later on, you will get practical guidance tailored to you. If something is outside my scope, I will connect you with an IBCLC or another provider.',
    ],
    includesTitle: 'What I can help with',
    includes: [
      ['Latch and positioning', 'Comfortable, effective feeding for you and your baby.'],
      ['Pain and discomfort', 'Sore nipples, engorgement and plugged ducts.'],
      ['Milk supply', 'Concerns about low supply or oversupply.'],
      ['Pumping', 'Pump setup, flange sizing and exclusive pumping.'],
      ['Bottle and combination feeding', 'Paced bottle feeding and mixing breast milk with formula.'],
    ],
    pricing: [
      ['In-home visit', '$100', '90 minutes'],
      ['Lactation package', '$250', 'One virtual prenatal consultation and two in-home visits'],
      ['Virtual visit', '$75', 'One hour'],
      ['Virtual prenatal education', '$60', ''],
    ],
    faqs: [
      { q: 'How is a CLC different from an IBCLC?', a: 'Both support feeding families, but training and scope differ. As a CLC I provide education and hands-on help for common concerns. For complex medical situations I refer to an IBCLC or another provider.' },
      { q: 'When should I schedule a visit?', a: 'You do not have to wait until you are struggling. Pregnancy, the first days after birth, returning to work and weaning are all good times.' },
      { q: 'Do you support formula and combination feeding?', a: 'Yes. Every family\'s feeding journey is different, and you will get the same judgment-free support.' },
      { q: 'Will insurance cover lactation support?', a: 'Coverage varies. I can provide a superbill to submit to your insurance.' },
    ],
  },
  {
    slug: 'placenta-encapsulation-bend',
    nav: 'Placenta Services',
    title: 'Placenta Encapsulation in Bend, Oregon',
    h1: 'Placenta encapsulation in Bend, Oregon',
    description: 'Placenta encapsulation, tinctures, prints and keepsakes in Bend and Central Oregon from a Certified Placenta Specialist. Pickup and delivery included.',
    image: 'forest',
    summary: 'Capsules, tinctures, prints and keepsakes, prepared with strict safety practices.',
    intro: [
      'Whether you want capsules, a tincture, or a keepsake to honor your pregnancy, I offer placenta services with care, from pickup after your birth to delivery of your chosen preparation.',
      'Some people find that placenta consumption supports their recovery. Scientific research is limited, so I always recommend talking with your healthcare provider first. Non-consumption options like prints and cord keepsakes are available too, including in times of loss.',
    ],
    includesTitle: 'How it works',
    includes: [
      ['Pickup', 'I arrange timely pickup of your placenta after delivery.'],
      ['Preparation', 'Your placenta is inspected, cleaned and prepared in the method you chose.'],
      ['Safety', 'I follow OSHA bloodborne pathogen and food safety guidelines in a controlled space.'],
      ['Delivery', 'Your preparation is returned with usage and storage instructions.'],
    ],
    pricing: [
      ['Encapsulation (capsules only)', '$250', ''],
      ['Placenta powder', '$175', ''],
      ['Placenta tinctures (3)', '$100', ''],
      ['Placenta print and cord keepsake', '$40', ''],
      ['Placenta prints (2)', '$25', ''],
      ['Cord keepsake only', '$25', ''],
      ['Complete package', '$300', 'Capsules, one tincture, one print and a cord keepsake'],
    ],
    faqs: [
      { q: 'Is placenta consumption safe?', a: 'When properly handled and prepared it is generally considered safe for healthy individuals, but research is limited. Please talk with your healthcare provider before deciding.' },
      { q: 'How should I store my placenta until pickup?', a: 'Place it in a clean sealed container or double bag and refrigerate or keep it in a cooler within two to four hours of birth. I provide detailed instructions when you book.' },
      { q: 'When should I book?', a: 'In your third trimester or earlier. A deposit holds your spot.' },
    ],
  },
  {
    slug: 'surrogacy-doula-bend',
    nav: 'Surrogacy Doula',
    title: 'Surrogacy Doula in Bend, Oregon',
    h1: 'Surrogacy doula in Bend, Oregon',
    description: 'Doula support for surrogates and intended parents in Bend and Central Oregon, from a two-time surrogate. Packages from $150. Free consultation.',
    image: 'river',
    summary: 'Support for surrogates and intended parents, from someone who has been a surrogate twice.',
    intro: [
      'I have been a surrogate twice, so I know this journey from the inside. I provide specialized doula support for both surrogates and intended parents through pregnancy, birth and the postpartum period.',
      'For surrogates, that means a comfortable, supported labor and recovery. For intended parents, it means preparing for your baby\'s arrival and stepping into parenthood with guidance.',
    ],
    includesTitle: 'Who I support',
    includes: [
      ['Surrogates', 'Guidance from matching and medical appointments through labor, birth and recovery.'],
      ['Intended parents', 'Understanding the birth process, creating a birth plan, and newborn care education.'],
      ['Everyone together', 'Helping the relationship between surrogate and parents stay clear and warm.'],
    ],
    pricing: [
      ['Surrogate: The Mini', '$2,000', 'Labor and birth support with one to two prenatal visits'],
      ['Surrogate: The Standard', '$2,600', 'The Mini plus 10 hours of postpartum support'],
      ['Surrogate: The Whole Kit & Caboodle', '$3,200', 'From matching and IVF through birth and postpartum'],
      ['Intended parents: Newborn Care Education', '$150', 'A three hour visit, virtual or in person'],
      ['Intended parents: Labor & Delivery', '$1,500', 'Birth planning and support at the birth of your child'],
      ['Intended parents: Newborn Care', '$1,100', 'Newborn care education and 20 hours of newborn support'],
    ],
    faqs: [
      { q: 'How is a surrogacy doula different from a birth doula?', a: 'A surrogacy doula focuses on the unique dynamics of surrogacy: supporting the surrogate through pregnancy and recovery, preparing intended parents, and helping everyone work well together.' },
      { q: 'Do you provide medical or legal advice?', a: 'No. I offer emotional, physical and informational support, and I refer to qualified professionals for medical and legal questions.' },
      { q: 'Do you offer virtual support?', a: 'Yes, depending on your location and needs.' },
      areaFaq,
    ],
  },
  {
    slug: 'pregnancy-loss-support-bend',
    nav: 'Pregnancy Loss Support',
    title: 'Pregnancy Loss Support in Bend, Oregon',
    h1: 'Pregnancy loss support in Bend, Oregon',
    description: 'Gentle, trauma-informed doula support in Bend and Central Oregon for miscarriage, stillbirth and TFMR. In person or virtual. Sliding scale available.',
    image: 'cascades-twilight',
    summary: 'Tender, trauma-informed support before, during and after a loss.',
    intro: [
      'I offer tender, trauma-informed support for individuals, surrogates, intended parents and families experiencing pregnancy loss at any stage, including miscarriage, stillbirth and termination for medical reasons.',
      'Whether your loss was expected or sudden, early or late, you deserve to be met with care and understanding. You do not have to move through this alone.',
    ],
    includesTitle: 'How I can support you',
    includes: [
      ['A safe space', 'Somewhere to talk through what you are experiencing, without judgment.'],
      ['Understanding your options', 'Information on what to expect and help communicating with providers.'],
      ['Presence during care', 'Emotional support during procedures, induction or delivery if you want it.'],
      ['After a loss', 'Follow-up when you are ready, support for grief, and ideas for remembrance.'],
      ['Referrals', 'Connections to grief therapists, specialists and peer support.'],
    ],
    pricing: [
      ['Support packages', 'Flexible', 'Full support, virtual-only sessions and sliding scale are all available'],
    ],
    faqs: [
      { q: 'Is support available virtually?', a: 'Yes. Support is available in person across Central Oregon or virtually.' },
      { q: 'What does it cost?', a: 'Pricing is flexible, with sliding scale availability. Please reach out and we will find something that works.' },
    ],
  },
  {
    slug: 'abortion-doula-support-bend',
    nav: 'Abortion Support',
    title: 'Abortion Doula Support in Bend, Oregon',
    h1: 'Abortion doula support in Bend, Oregon',
    description: 'Compassionate, judgment-free doula support before, during and after an abortion in Bend and Central Oregon. In person or virtual. Sliding scale available.',
    image: 'cascades-twilight',
    summary: 'Compassionate, judgment-free support before, during and after.',
    intro: [
      'I offer compassionate, judgment-free support before, during and after the procedure. Whether you want emotional reassurance, practical guidance or someone by your side, I am here to help you feel informed and supported.',
    ],
    includesTitle: 'How I can support you',
    includes: [
      ['Before', 'A private space to talk through feelings and logistics, with help planning transportation, childcare and comfort.'],
      ['During', 'A calming presence in person, or virtual and text support.'],
      ['After', 'A follow-up within 24 to 72 hours and support for your recovery.'],
    ],
    pricing: [
      ['Support packages', 'Flexible', 'Package rates, tiered support and sliding scale are available'],
    ],
    faqs: [
      { q: 'Is this confidential?', a: 'Yes. Everything you share with me is kept private.' },
      { q: 'What does it cost?', a: 'Pricing is flexible, with sliding scale availability, so you can get the care you need.' },
    ],
  },
];

// Look and feel per service: which illustration, its handwritten caption, and the quick facts row.
const extras = {
  'car-seat-installation-bend': { image: 'road', caption: 'The road west out of Bend', from: 'from $50', facts: [['Starts at', '$50'], ['Takes', '45 to 60 minutes'], ['Where', 'Your home, your vehicle']] },
  'birth-doula-bend': { image: 'sunrise', caption: 'Sunrise over the Three Sisters', from: 'from $1,500', facts: [['Starts at', '$1,500'], ['On call', 'About 4 weeks around your due date'], ['Where', 'Home, hospital or birth center']] },
  'postpartum-doula-bend': { image: 'cabin', caption: 'A quiet night in the pines', from: '$50 per hour', facts: [['Rate', '$50 per hour'], ['Visits', 'Day or evening, overnight case by case'], ['Where', 'Your home']] },
  'lactation-counselor-bend': { image: 'lake', caption: 'Still morning on a Cascade lake', from: 'from $60', facts: [['Starts at', '$60'], ['Takes', '60 to 90 minutes'], ['Where', 'Your home or by video']] },
  'placenta-encapsulation-bend': { image: 'tree', caption: 'A tree of life in a mountain meadow', from: 'from $25', facts: [['Starts at', '$25'], ['Book by', 'Your third trimester'], ['Includes', 'Pickup and delivery']] },
  'surrogacy-doula-bend': { image: 'confluence', caption: 'Two streams becoming one river', from: 'from $150', facts: [['Starts at', '$150'], ['For', 'Surrogates and intended parents'], ['Where', 'In person or virtual']] },
  'pregnancy-loss-support-bend': { image: 'dusk', caption: 'First star over the Cascades', from: 'sliding scale', facts: [['Cost', 'Flexible, sliding scale'], ['When', 'Before, during or after'], ['Where', 'In person or virtual']] },
  'abortion-doula-support-bend': { image: 'night', caption: 'Moonrise over the Cascades', from: 'sliding scale', facts: [['Cost', 'Flexible, sliding scale'], ['When', 'Before, during and after'], ['Where', 'In person or virtual']] },
};
services.forEach((s) => Object.assign(s, extras[s.slug]));

// Towns with real map positions and rough drive times from Bend (for the service-area map).
export const towns = [
  { name: 'Bend', lat: 44.058, lon: -121.315, min: 0 },
  { name: 'Redmond', lat: 44.273, lon: -121.174, min: 25 },
  { name: 'Sisters', lat: 44.291, lon: -121.549, min: 30 },
  { name: 'Sunriver', lat: 43.884, lon: -121.439, min: 25 },
  { name: 'Terrebonne', lat: 44.353, lon: -121.178, min: 30 },
  { name: 'La Pine', lat: 43.67, lon: -121.504, min: 40 },
  { name: 'Prineville', lat: 44.3, lon: -120.834, min: 50 },
  { name: 'Culver', lat: 44.526, lon: -121.213, min: 50 },
  { name: 'Madras', lat: 44.634, lon: -121.13, min: 55 },
];

// Town pages. Each note should say something true and specific to that town.
// These are first drafts for Aleah to confirm and add to (families served, local partners).
const townNotes = {
  Redmond: {
    where: 'north of Bend on Highway 97',
    note: 'The hospital in Redmond stopped delivering babies in 2019, so most Redmond families give birth in Bend or Madras. I meet you wherever you deliver, and postpartum, lactation and car seat visits all happen at your home in Redmond.',
    faq: { q: 'Where do Redmond families give birth?', a: 'St. Charles Redmond closed its Family Birthing Center in 2019. Most families deliver at St. Charles Bend, at a birth center, or at home. I support all of those.' },
  },
  Sisters: { where: 'northwest of Bend on Highway 20', note: 'Sisters has no hospital of its own, so planning the drive is part of planning the birth. We talk through timing, routes and winter roads at your prenatal visits.' },
  Sunriver: { where: 'south of Bend off Highway 97', note: 'Whether you live in Sunriver year-round or are settling in before your due date, visits happen at your home, and I am a short drive away when labor starts.' },
  'La Pine': { where: 'south of Bend on Highway 97', note: 'La Pine families often have the longest drive to give birth. We build that into your plan early, and postpartum and lactation visits come to you so you do not have to make the trip with a newborn.' },
  Prineville: { where: 'east of Bend by way of Redmond', note: 'I travel to Prineville for prenatal, postpartum, lactation and car seat visits, and I meet you wherever you plan to give birth.' },
  Terrebonne: { where: 'north of Redmond, near Smith Rock', note: 'Terrebonne sits between Redmond and Madras, so you have options in both directions. I come to your home for visits and meet you wherever you plan to deliver.' },
  Culver: { where: 'north of Redmond in Jefferson County', note: 'I travel to Culver for home visits and meet you wherever you plan to give birth, whether that is north in Madras or south in Bend.' },
  Madras: { where: 'the northern edge of my service area, on Highway 97', note: 'Madras is the farthest town I serve in person. For families here, we plan visits and on-call timing a little further ahead, and virtual check-ins fill the gaps.' },
};
towns.forEach((t) => {
  t.slug = `doula-${t.name.toLowerCase().replace(/\s+/g, '-')}-oregon`;
  Object.assign(t, townNotes[t.name] || {});
});
export const townPages = towns.filter((t) => t.min > 0);

// ---- URL structure: /town/ and /town/service/ ----
// Bend gets every service. Other towns get a hub page, plus a service page only where
// there is something specific to say (add to `townServices` to switch more on).
const paths = {
  'car-seat-installation-bend': ['car-seat-installation', 'Car seat installation help'],
  'birth-doula-bend': ['birth-doula', 'Birth doula'],
  'postpartum-doula-bend': ['postpartum-doula', 'Postpartum doula'],
  'lactation-counselor-bend': ['lactation-support', 'Lactation support'],
  'placenta-encapsulation-bend': ['placenta-encapsulation', 'Placenta encapsulation'],
  'surrogacy-doula-bend': ['surrogacy-doula', 'Surrogacy doula'],
  'pregnancy-loss-support-bend': ['pregnancy-loss-support', 'Pregnancy loss support'],
  'abortion-doula-support-bend': ['abortion-doula-support', 'Abortion doula support'],
};
// Stock photos (Unsplash), placeholders until Aleah has her own. id, photographer, what it shows.
const P = (id, by, alt) => ({ id, by, alt });
const servicePhotos = {
  'car-seat-installation': P('1687451225150-e25d21b013cc', 'Mick Haupt', 'A road leading toward a mountain'),
  'birth-doula': P('1457342813143-a1ae27448a82', 'freestocks', 'A pregnant woman cradling her belly'),
  'postpartum-doula': P('1582486225644-aeacf6aa0b1b', 'Nathan Dumlao', 'An adult hand holding a tiny baby hand'),
  'lactation-support': P('1511948374796-056e8f289f34', 'Luma Pimentel', 'A baby wrapped in a white blanket'),
  'placenta-encapsulation': P('1539457981288-ca69c8b06b48', 'Naresh Bojja', 'Green trees in daylight'),
  'surrogacy-doula': P('1493894473891-10fc1e5dbd22', 'Suhyeon Choi', 'A person holding a pregnant belly'),
  'pregnancy-loss-support': P('1724535225245-fd5d173c8623', 'James Sestric', 'The sun setting over a mountain range'),
  'abortion-doula-support': P('1580615527048-c8e3915b1bb7', 'Caleb Kastein', 'Still water near a mountain'),
};
services.forEach((s) => {
  [s.path, s.name] = paths[s.slug];
  s.photo = servicePhotos[s.path];
});
export const photos = {
  feet: P('1510154221590-ff63e90a136f', 'Omar Lopez', 'A parent holding a newborn\'s feet'),
  hands: P('1582486225644-aeacf6aa0b1b', 'Nathan Dumlao', 'An adult hand holding a tiny baby hand'),
  skyline: P('1718927445954-b050d18bc135', 'Porter Raab', 'A mountain range with trees in the foreground'),
  lake: P('1587656421406-273a011cad8d', 'Clay Banks', 'A lake with a mountain behind it'),
  river: P('1637109716852-63355bcba580', 'Daniel Herron', 'A river running through green forest'),
  rock: P('1599015358183-1491f78bd55b', 'josh ludahl', 'Rock cliffs beside a river'),
  field: P('1566882526208-3856e4ac09d0', 'Dan Meyers', 'A green field with a mountain beyond'),
  snow: P('1646528487362-962045c5eeb9', 'Rei Yamazaki', 'A snow covered mountain with trees in the foreground'),
  desert: P('1568666062525-111347cc88e4', 'Derek Sears', 'Brown high desert mountains'),
};
export const photoUrl = (p, w = 1600, h) =>
  `https://images.unsplash.com/photo-${p.id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=70`;

const townPhoto = { Bend: 'river', Redmond: 'rock', Terrebonne: 'rock', Sisters: 'snow', Sunriver: 'river', 'La Pine': 'lake', Prineville: 'desert', Culver: 'field', Madras: 'field' };
towns.forEach((t) => {
  t.slug = t.name.toLowerCase().replace(/\s+/g, '-');
  t.photo = photos[townPhoto[t.name]];
});

export const townServices = {
  redmond: {
    'car-seat-installation': {
      note: 'Redmond Fire & Rescue offers free car seat checks by appointment on set days. I offer a private session at your home in Redmond on a day that suits you, with as much time as you need to practice.',
      faq: { q: 'How is this different from the free car seat checks in Redmond?', a: 'Redmond Fire & Rescue holds free car seat check days by appointment, and they are a great resource. My sessions are private, at your home, on a day you choose, and built around teaching you to do it yourself.' },
    },
    'birth-doula': {
      note: 'The hospital in Redmond stopped delivering babies in 2019, so most Redmond families give birth in Bend or Madras. We plan the drive and the timing together, and I meet you wherever you deliver.',
      faq: { q: 'Where do Redmond families give birth?', a: 'St. Charles Redmond closed its Family Birthing Center in 2019. Most families deliver at St. Charles Bend, at a birth center, or at home. I support all of those.' },
    },
  },
};
// Towns that get a page for every service. Terrebonne and Culver keep a hub page only.
export const serviceTowns = ['bend', 'redmond', 'sisters', 'sunriver', 'la-pine', 'prineville', 'madras'];
// The region itself has a page for every service: /central-oregon/birth-doula/ and so on. These are the main service pages.
export const region = { slug: 'central-oregon', name: 'Central Oregon', min: 0, region: true };
export const hasPage = (townSlug, path) => townSlug === region.slug || serviceTowns.includes(townSlug) || Boolean(townServices[townSlug]?.[path]);

// One honest, service-specific line per town page. Aleah should replace these with real local detail over time.
export const localLine = (s, t) => ({
  'car-seat-installation': `Car seat checks in ${t.name} happen in your own driveway, in your own vehicle. I drive up from Bend, about ${t.min} minutes away, so there is no clinic line to wait in.`,
  'birth-doula': `For ${t.name} families, we plan the drive to your birth place and my on-call timing at your prenatal visits, so there are no surprises when labor starts.`,
  'postpartum-doula': `Postpartum visits happen at your home in ${t.name}, so you do not have to pack up a newborn and make the drive to Bend.`,
  'lactation-support': `Lactation visits come to you in ${t.name}, and virtual visits are available on days when a home visit is not practical.`,
  'placenta-encapsulation': `I arrange pickup after your birth and deliver your finished preparation to your home in ${t.name}.`,
  'surrogacy-doula': `I support surrogates and intended parents in ${t.name} in person, with virtual check-ins between visits.`,
  'pregnancy-loss-support': `Support is available at your home in ${t.name} or virtually, whichever feels right to you.`,
  'abortion-doula-support': `Support is available in person for ${t.name} families, or by phone, text and video.`,
}[s.path]);
export const svcUrl = (s, townSlug = region.slug) => `/${hasPage(townSlug, s.path) ? townSlug : region.slug}/${s.path}/`;

// =====================================================================================
// Fuller content carried over from innatedoulacare.com (October 2026), lightly edited.
// =====================================================================================
business.hours = 'Office hours 8:00 am to 5:00 pm. On call for clients 24 hours a day.';
business.welcome = [
  'Whether you are gearing up for the adventure of childbirth, navigating the early days of parenthood or exploring other big life moments, you have come to the right place.',
  'As your Central Oregon doula, I am here to cheer you on, hold your hand (literally or figuratively) and make sure you feel empowered every step of the way. Let\'s do this together. You\'ve got this, and I\'ve got you!',
];
export const whatIsADoula = 'A doula is a trained professional who offers non-medical emotional, informational, physical and advocacy support to individuals or families during transformative health experiences. Doulas can provide care through pregnancy, labor, birth and the postpartum period, and can also support individuals or families navigating experiences such as surrogacy, miscarriage, abortion, stillbirth or end-of-life transitions.';

Object.assign(photos, {
  heart: P('1688053579473-51af77337561', 'Leo_Visions', 'Hands making a heart shape'),
  couch: P('1705746401439-cefe49abb9cd', 'Febe Vanermen', 'A couple sitting together on a couch'),
  holding: P('1651083230817-481f3c3895a4', 'Olivia Anne Snyder', 'A person holding a baby'),
  hold2: P('1564020435666-f67ed5319a32', 'Nguyen Tan', 'Two people holding hands'),
  mother: P('1560707854-fb9a10eeaace', 'Jonathan Borba', 'A smiling woman carrying a baby'),
});
export const doulaDoes = [
  { title: 'Emotional support', photo: photos.heart, items: ['Encouraging words and reassurance', 'A listening ear for concerns and feelings', 'Creating a calm and positive environment', 'Helping build confidence in decisions', 'Support during unexpected changes'] },
  { title: 'Informational support', photo: photos.couch, items: ['Explaining pregnancy, birth and postpartum options', 'Sharing evidence-based resources', 'Helping you understand medical procedures and terms', 'Tips for newborn care and feeding', 'Guidance in creating birth and postpartum plans'] },
  { title: 'Physical support', photo: photos.holding, items: ['Massage and comfort measures during labor', 'Suggesting and demonstrating positions for labor and birth', 'Help with newborn care techniques', 'Light household tasks in the postpartum period', 'Nourishment and hydration reminders'] },
  { title: 'Advocacy support', photo: photos.hold2, items: ['Making sure your preferences reach your providers', 'Encouraging informed decision-making', 'Helping you navigate discussions with medical staff', 'Supporting your right to ask questions', 'Affirming your role as the decision-maker in your care'] },
];

Object.assign(servicePhotos, {
  'car-seat-installation': P('1665578325705-cfe6de3ae2eb', 'Silverius Trandafir', 'A baby sleeping in a car seat'),
  'postpartum-doula': P('1542385151-efd9000785a0', 'Kelly Sikkema', 'A mother carrying her baby'),
  'lactation-support': P('1567073931033-07972e6081bd', 'Fanny Renaud', 'A mother breastfeeding her baby'),
  'placenta-encapsulation': P('1664956618021-73c47736845e', 'Supliful', 'Capsules beside green pine needles'),
  'surrogacy-doula': P('1532706302136-347336b002ec', 'John Looy', 'A hand resting on a pregnant belly'),
  'pregnancy-loss-support': P('1604881991720-f91add269bed', 'Priscilla Du Preez', 'Two people holding hands across a table'),
  'abortion-doula-support': P('1610986719243-7cdf28a29772', 'Zoe', 'One person holding another person\'s hand'),
});
services.forEach((s) => { s.photo = servicePhotos[s.path]; });

const start = { q: 'How do I get started?', a: 'Book a free consultation, or call or text (541) 280-4048. We will talk through what you need and how I can best support you.' };
const choose = 'Choosing a doula is a personal decision, and most Bend doulas offer free consultations so you can meet a few. Start early, ask friends and your provider for recommendations, interview more than one, ask for references, and trust your instincts about who you feel comfortable with.';
const more = {
  'birth-doula': {
    sections: [
      { title: 'What each package includes', pairs: [
        ['Birth Package · $2,100', 'On-call support, two prenatal meetings, continuous labor and birth support, a backup doula, and one or two postpartum follow-up visits.'],
        ['Birth & Postpartum Package · $2,600', 'Everything in the Birth Package plus 12 hours of postpartum care, used in 2, 3 or 4 hour shifts during the day or evening: recovery support, newborn care education, infant feeding support, light household tasks, emotional support and resource referrals.'],
        ['Birth Support Only · $1,500', 'For families who feel confident in their preparation: one 45 minute consultation, on-call availability 24/7 from 38 weeks, continuous labor and birth support, and a backup doula.'],
        ['OHP Birth Package · Covered', 'The Oregon Health Plan covers doula services in Central Oregon. As an OHP-approved doula, I provide everything in the Birth Package at no out-of-pocket cost.'],
      ] },
      { title: 'What happens at prenatal and postpartum visits', groups: [
        { h: 'Prenatal: two visits at your home, 2 to 3 hours each', items: ['Birth plan: your hopes, preferences, concerns and questions', 'Education: the physiology of birth, hospital and home birth procedures, interventions and feeding', 'Practical preparation: positions and comfort techniques with your partner or support person', 'Postpartum planning: recovery, newborn care, visitors, meals and extra care'] },
        { h: 'Postpartum: two visits at your home, 1 to 2 hours each', items: ['Emotional support: processing the birth and checking in on feeding, sleep and recovery', 'Newborn care: answers to your questions and help with newborn tasks', 'Household help: dishes, laundry, tidying and pet support', 'Resources: classes, specialists, therapists and more'] },
      ] },
    ],
    faqs: [
      { q: 'Why should I hire a birth doula?', a: 'Research summarized by Evidence Based Birth links continuous doula support with shorter labors, more spontaneous vaginal births, less use of pain medication, fewer cesareans and more satisfaction with the birth experience.' },
      { q: 'What is the difference between a midwife and a birth doula?', a: 'A midwife is medically trained and provides clinical care, including delivering the baby and monitoring health. A doula offers non-medical support focused on emotional well-being, comfort and advocacy. The roles are distinct and work well together.' },
      { q: 'When should I hire a birth doula?', a: 'It is never too early or too late. Many families book early in pregnancy, but I am happy to work with you at any stage.' },
      { q: 'How do I choose the right birth doula?', a: choose },
      { q: 'Do you offer virtual support?', a: 'Yes. Virtual doula services include video calls, virtual prenatal sessions and real-time guidance during labor, and are available nationwide.' },
      start,
    ],
  },
  'postpartum-doula': {
    includes: [['Sibling and pet support', 'A hand with older children and pets so you can focus on the baby.'], ['A calm environment', 'A steady, reassuring presence in the house.']],
    faqs: [
      { q: 'What is a postpartum doula?', a: 'A trained professional who provides physical, emotional and informational support to families after a baby arrives, with hands-on help, guidance and reassurance.' },
      { q: 'Why hire a postpartum doula?', a: 'The postpartum period can be overwhelming. Families who work with a postpartum doula often report feeling more supported, less stressed and better able to enjoy the newborn stage.' },
      { q: 'How long does a postpartum doula provide support?', a: 'It depends on your family. Some hire a doula for a few weeks, others for several months. You choose the frequency and length of visits.' },
      { q: 'Do you offer overnight support?', a: 'On a case by case basis. During overnight shifts I care for your baby while you sleep and help with feeding and diaper changes. Overnight support is billed at a higher rate, so please reach out to discuss.' },
      { q: 'Are postpartum doulas only for first-time parents?', a: 'No. Postpartum doulas support families with any number of children, and can be especially helpful with multiples, after a difficult birth, or when older children need attention too.' },
      { q: 'How do I find the right postpartum doula?', a: choose },
      start,
    ],
  },
  'surrogacy-doula': {
    faqs: [
      { q: 'Who do you support during the surrogacy process?', a: 'Both gestational surrogates and intended parents, and sometimes their families.' },
      { q: 'When should I hire a surrogacy doula?', a: 'At any point. Many clients start early in the surrogacy process, and others reach out during pregnancy or shortly before delivery.' },
      { q: 'How do you support intended parents?', a: 'I help you prepare for your baby\'s arrival, understand the birth process and navigate your relationship with your surrogate, and I am available for questions throughout.' },
      { q: 'How do you support surrogates?', a: 'With guidance through every stage of pregnancy, from preparing for medical procedures to postpartum recovery. I am here to listen, support and advocate for your needs.' },
      { q: 'Do you offer postpartum support?', a: 'Yes. For surrogates, support with physical and emotional recovery. For intended parents, help with the transition to parenthood.' },
      start,
    ],
  },
  'lactation-support': {
    sections: [
      { title: 'Ways to work together', pairs: [
        ['Prenatal education', 'A personal session before your baby arrives: breastfeeding basics, feeding cues, latch and positioning, milk production, pumping, partner support and what to expect in the early days.'],
        ['In-home, hands-on support', 'We work on latch and positioning, observe and assess a full feeding, do pre- and post-feed weight checks when appropriate, address pain or discomfort and build a feeding plan that fits you.'],
        ['Virtual support', 'We talk through your concerns, observe a feeding when possible and work on latch, positioning, pumping and milk supply from wherever you are.'],
        ['Lactation package', 'One virtual prenatal session and two in-home visits, for consistent support through pregnancy and postpartum. More sessions can be added at standard rates.'],
      ] },
      { title: 'A Certified Lactation Counselor can help with', list: ['Prenatal breastfeeding education', 'Latch and positioning', 'Painful breastfeeding and nipple discomfort', 'Low supply or oversupply', 'Pumping and flange sizing', 'Exclusive pumping', 'Combination feeding', 'Bottle feeding and paced feeding', 'Newborn feeding cues and patterns', 'Cluster feeding and developmental leaps', 'Feeding frequency and routines', 'Engorgement and common breast discomforts', 'Milk storage and handling', 'Returning to work or school', 'Weaning', 'Feeding multiples', 'NICU or early-term feeding transitions, within scope', 'Building confidence and realistic expectations', 'Referrals for medical concerns'] },
    ],
    faqs: [
      { q: 'What is a Certified Lactation Counselor (CLC)?', a: 'A trained breastfeeding and infant feeding professional who has completed comprehensive education and demonstrated competency in lactation support, certified through the Academy of Lactation Policy and Practice (ALPP).' },
      { q: 'Do I need a prenatal lactation consultation?', a: 'It is not required, but it can make a real difference. We cover what to expect after birth, normal newborn feeding behavior, hand expression and common challenges, so you feel prepared.' },
      { q: 'What happens during a lactation visit?', a: 'We talk about your goals, review your health and feeding history, observe a feeding when appropriate, answer your questions and make a practical plan.' },
      { q: 'What should I have ready for my appointment?', a: 'If possible, have your baby ready to feed around the time of our visit, and your pump and accessories if you are pumping. No need to clean the house. I am there to support you, not judge your home.' },
      { q: 'How long are appointments?', a: 'Most lactation consultations last between one and two hours.' },
      { q: 'Is everything we discuss confidential?', a: 'Yes. Everything shared during our visits is kept confidential.' },
      { q: 'What if I need more than one visit?', a: 'Many families benefit from follow-up visits as feeding changes over time. We make a plan based on your needs, and more visits can always be scheduled.' },
    ],
  },
  'placenta-encapsulation': {
    sections: [
      { title: 'Preparation options', pairs: [
        ['Encapsulation', 'The placenta is steamed, dehydrated, ground into a powder and placed in easy-to-take capsules.'],
        ['Powder', 'The dehydrated, ground placenta as a loose powder, to mix into food or smoothies.'],
        ['Tincture', 'A portion of the placenta steeped in alcohol for extended use.'],
        ['Prints and keepsakes', 'A placenta print made with natural, non-toxic methods, or a dried umbilical cord keepsake.'],
      ] },
    ],
    faqs: [
      { q: 'What is placenta consumption?', a: 'Preparing and ingesting the placenta after delivery, most often through encapsulation, tinctures or powder. Many people choose it to support postpartum recovery.' },
      { q: 'What are the potential benefits?', a: 'Scientific research is limited. Many parents report more energy, mood support, help with milk supply and a smoother recovery. Please talk with your healthcare provider about whether it is right for you.' },
      { q: 'Can anyone consume their placenta?', a: 'Most healthy people can, but some conditions may make it unsafe, such as infections during labor or placenta abnormalities. I am happy to help you think it through.' },
      { q: 'How long do capsules and powder last?', a: 'Stored in a cool, dry place, several months to a year. Some people freeze a portion for later.' },
      { q: 'How do I use a placenta tincture?', a: 'Typically in small doses, a few drops under the tongue or in a drink. Stored in a cool, dark place, a tincture keeps for years.' },
      { q: 'Are there risks to consuming raw placenta?', a: 'Yes. There is a higher risk of bacterial contamination with raw placenta than with encapsulation. Always consult your care provider first.' },
      { q: 'What is a placenta print?', a: 'A keepsake made by pressing the placenta onto paper, which captures its "tree of life" shape.' },
      { q: 'Can I keep a keepsake and still encapsulate?', a: 'Yes. You can have a print, a cord keepsake or a tincture and still encapsulate the rest.' },
    ],
  },
  'pregnancy-loss-support': {
    sections: [
      { title: 'What support can look like', groups: [
        { h: 'Before, during and after a loss', items: ['A safe, nonjudgmental space to talk through your experience', 'Guidance on your options for managing miscarriage or stillbirth', 'Support navigating medical systems, appointments and providers', 'Advocacy so your voice and needs are respected', 'Emotional support during procedures, induction or delivery if you want it', 'Comfort techniques for pain, anxiety and overwhelm', 'Referrals to grief therapists, loss specialists and peer support'] },
        { h: 'After a loss', items: ['Follow-up within 24 to 72 hours, or when you are ready', 'What to expect physically after miscarriage or stillbirth', 'Support for processing grief, guilt, relief, confusion or numbness', 'Guidance on rituals, memory-making and honoring your baby', 'Resources for partners, family or children coping with loss'] },
        { h: 'Additional support', items: ['Continued postpartum-style care, check-ins or home visits', 'Light household help', 'Help with practical logistics such as memorial planning', 'Support in returning to daily life, work or future pregnancy planning', 'Referrals to trauma-informed therapy, support groups or spiritual care'] },
      ] },
    ],
  },
  'abortion-doula-support': {
    sections: [
      { title: 'What support can look like', groups: [
        { h: 'Before', items: ['A private, supportive space to discuss your feelings, options and logistics', 'Evidence-based information about medication and procedures', 'Help planning transportation, childcare and comfort measures', 'Help connecting to funds and practical support resources'] },
        { h: 'During', items: ['A calming presence for in-clinic procedures or an at-home medication process', 'Virtual or text support for reassurance and check-ins', 'Comfort techniques, including breathwork and guided relaxation'] },
        { h: 'After', items: ['A follow-up session within 24 to 72 hours', 'Personal guidance on recovery and self-care', 'Emotional support for processing your experience', 'Additional virtual or in-person check-ins'] },
      ] },
    ],
  },
};
services.forEach((s) => {
  const m = more[s.path];
  if (!m) return;
  s.sections = m.sections || [];
  if (m.includes) s.includes = [...s.includes, ...m.includes];
  if (m.faqs) {
    const area = s.faqs.filter((f) => f.q === 'What areas do you serve?');
    s.faqs = [...s.faqs.filter((f) => f.q !== 'What areas do you serve?'), ...m.faqs, ...area];
  }
});

export const credentialsFull = [
  'THW Certified Doula, Oregon Health Authority (current)',
  'Certified Lactation Counselor (CLC), Academy of Lactation Policy and Practice',
  'Certified Placenta Specialist, Brilliant Birth Academy (current)',
  'Child Passenger Safety Technician, Safe Kids Worldwide (current)',
  'BLS certified: adult and pediatric CPR/AED, American Red Cross (current)',
  'Oregon Doula Association member (current)',
  'OSHA Bloodborne Pathogens training, Biologix (current)',
  'Oregon Food Handler certification (current)',
  'DONA-approved Birth Doula Workshop, Doula Love, 2023',
  'DONA-approved Postpartum Doula Workshop, Los Angeles Doula, 2023',
  'Six month Birth Doula Mentorship, Doula Love, 2023 to 2024',
  'VBAC trained, Blossoming Bellies, 2024',
  'Trauma Informed Care for Birthworkers, Mother Tree, 2024',
  'Trauma Informed Care advanced training for doulas, Mother Tree, 2024',
  'Cultural Sensitivity Training for Doulas, Mother Tree, 2024',
  'Inter-professional Collaborative Practice and HIPAA training, Mother Tree, 2024',
  'Oral Health Training for THW, Oregon Health Authority, 2023',
];

const pdf = (id, file) => `https://img1.wsimg.com/blobby/go/acc61bdb-dc0d-4e3c-846a-f7946ebecbb4/downloads/${id}/${file}`;
export const resources = {
  apps: [
    { name: 'Count the Kicks', note: 'Kick counter. Records how long it takes your baby to reach 10 movements and tracks changes over time.', url: 'https://countthekicks.org/download-app/' },
    { name: 'Full Term', note: 'Contraction timer.', url: 'http://www.fulltermapp.com/' },
    { name: 'Huckleberry', note: 'Sleep help, from short naps to sleep transitions.', url: 'https://huckleberrycare.com/pricing' },
  ],
  sites: [
    { name: 'Evidence Based Birth', note: 'Research-backed information, classes and support for expecting parents.', url: 'https://evidencebasedbirth.com/' },
    { name: 'The VBAC Link', note: 'Education, support and community for vaginal birth after cesarean.', url: 'https://www.thevbaclink.com/' },
    { name: 'Our Milky Way', note: 'Breastfeeding blog from the Healthy Children Project.', url: 'https://www.ourmilkyway.org/' },
    { name: 'ACOG', note: 'The American College of Obstetricians and Gynecologists: guidelines and patient information.', url: 'https://www.acog.org/' },
    { name: 'National Child Passenger Safety Board', note: 'Help installing car seats and boosters correctly.', url: 'https://www.cpsboard.org/' },
    { name: 'CDC: Pregnancy', note: 'Steps to take before, during and after pregnancy.', url: 'https://www.cdc.gov/pregnancy/index.html' },
  ],
  handouts: [
    { name: 'Questions to ask during a consultation: birth doula', url: pdf('7a462d31-3e4e-405d-9956-574018b4c83d', 'Questions%20To%20Ask%20During%20A%20Consultation%20-%20Birth.pdf') },
    { name: 'Questions to ask during a consultation: postpartum doula', url: pdf('1340ecd8-cf5c-467e-afae-c1d0a5a4a1c2', 'Questions%20To%20Ask%20During%20A%20Consultation%20-%20Postp.pdf') },
    { name: 'DONA International interview guide for parents', url: pdf('d949afef-5b81-479b-bcfa-3ee0b4a5a823', 'DONA%20International%20-%20Interview%20Guide%20for%20Paren.pdf') },
    { name: 'DONA International interview guide: postpartum doula', url: pdf('22ec7f28-1321-4d31-8855-ce3d9e7c3886', 'DONA%20International%20-%20Interview%20Guide%20for%20Paren.pdf') },
    { name: 'St. Charles Mommy and Me breastfeeding support group', url: pdf('d9659fb1-197b-4bac-a2d4-f1fa85b0fdac', 'St%20Charles%20Mommy%20and%20Me%20Breastfeeding%20Support%20.pdf') },
    { name: 'Summary of perinatal mental health conditions', url: pdf('6dc96b62-9d2f-42e2-8aae-2eb90cd4fb5e', 'Summary%20of%20Perinatal%20Mental%20Health%20Conditions.pdf') },
  ],
};

// =====================================================================================
// Extra stock photos (Unsplash) so each page has a few images. Placeholders until Aleah has her own.
// =====================================================================================
const gallery = {
  'car-seat-installation': [P('1633111046443-13a0c30033ea', 'Sam Barber', 'A little boy sitting in a car seat'), P('1730577776817-4166006be437', 'Miah Dailey', 'A small child sitting in a car seat'), P('1619719287848-883c8f26efbc', 'Erik Mclean', 'A gray and black car seat')],
  'birth-doula': [P('1538678867871-8a43e7487746', 'Devon Divine', 'A pregnant woman in a sunlit field'), P('1586102728466-46b99b3bc411', 'Omurden Cengiz', 'A pregnant woman standing by a crib in a sunlit nursery'), P('1568043625493-2b0633c7c491', 'Camylla Battani', 'A pregnant woman in a green dress holding her belly')],
  'postpartum-doula': [P('1583710457367-47de0ea21fef', 'Hollie Santos', 'A woman in a white shirt carrying a baby'), P('1686668108595-3c2171a8fc78', 'Jennifer Kalenberg', 'A woman sitting on a bed holding a baby'), P('1620737007484-2d3bd3079a35', 'Apostolos Vamvouras', 'A woman lying on a bed beside a baby')],
  'lactation-support': [P('1566906606688-642231fec1cf', 'Janko Ferlic', 'A woman breastfeeding her baby'), P('1509115429432-e9b549ffb669', 'Dave Clubb', 'A woman holding a baby while sitting under a tree'), P('1674637828373-3b8d7cded475', 'Alina Matveycheva', 'A woman holding a baby in her arms')],
  'placenta-encapsulation': [P('1596252732610-fce5ac542f8e', 'Jill Sauve', 'A person holding a baby\'s hand'), P('1626856295349-6f21d6e6cfef', 'Bia Octavia', 'A baby lying on a white bed'), P('1651663303138-4dc283e15992', 'Taisiia Stupak', 'A pregnant woman touching her belly by a window')],
  'surrogacy-doula': [P('1543342384-1f1350e27861', 'Kelly Sikkema', 'A woman holding a baby beside a smiling man'), P('1637184572364-a231e8b4c716', 'Taylor Gray', 'A man and woman holding a baby in their arms'), P('1541956799312-3f9df99e0006', 'Alicia Petresc', 'A person touching a pregnant belly')],
  'pregnancy-loss-support': [P('1604881991575-dfb1003d8811', 'Priscilla Du Preez', 'Two people holding hands on a white table'), P('1580869318757-a6c605b061ed', 'Joshua Hoehne', 'Three pairs of hands held together in support'), P('1724536523240-1cfdf382f590', 'James Sestric', 'The sun setting over a mountain range')],
  'abortion-doula-support': [P('1586324304780-c9a5031a3599', 'Nani Chavez', 'Two people holding hands'), P('1682352689072-7b2c0b8580c2', 'Saulo Meza', 'A close up of two people holding hands'), P('1574180436207-ac91a1675462', 'McKayla Crump', 'A lake in a forest')],
};
services.forEach((s) => { s.gallery = gallery[s.path]; });
export const scenery = [
  P('1574180436207-ac91a1675462', 'McKayla Crump', 'A lake in a forest'),
  P('1599430985024-742530f383ab', 'Shawn', 'Green trees beside a river'),
  P('1565070003762-00bee3f68666', 'Dan Meyers', 'A mountain range in daylight'),
  P('1542425967-a2dd69fefbb9', 'McKayla Crump', 'Woodland with a mountain view'),
];
export const family = [
  P('1637184572364-a231e8b4c716', 'Taylor Gray', 'A man and woman holding a baby in their arms'),
  P('1583710457367-47de0ea21fef', 'Hollie Santos', 'A woman in a white shirt carrying a baby'),
  P('1538678867871-8a43e7487746', 'Devon Divine', 'A pregnant woman in a sunlit field'),
  P('1596252732610-fce5ac542f8e', 'Jill Sauve', 'A person holding a baby\'s hand'),
];
// Each town page gets one landscape and two family photos, rotated so neighbours differ.
towns.forEach((t, i) => {
  const sv = services[(i * 3 + 1) % services.length], sv2 = services[(i * 3 + 2) % services.length];
  t.gallery = [scenery[i % scenery.length], sv.gallery[i % 2], sv2.gallery[(i + 1) % 2]];
});
