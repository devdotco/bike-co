import type { ContentPage } from '@/lib/types'

/**
 * /product (overview) and the "Win work" + "Shop floor" product pages.
 *
 * Status rules: docs/SERVICE-STATUS.md is the source of truth. Live in Service
 * today: requests, quotes, work orders (jobs + visits), scheduling (week view),
 * time tracking, invoicing, reporting, checklists and permissions. Everything
 * else in Service is roadmap. Phony, CRM, Sign and Portal are other erp.io
 * modules that are live today.
 */

export const productOverview: ContentPage = {
  slug: '',
  title: 'Every repair you take in, from the counter to paid.',
  metaTitle: 'Bike Shop Management Software | BIKE.co Product',
  metaDescription:
    'BIKE.co runs on erp.io Service: requests, quotes, work orders, checklists, scheduling and invoices for bike shops. See what is live and what is next.',
  eyebrow: 'Product',
  lede:
    "BIKE.co is shop-management software for bike repair businesses, built on the erp.io Service module. It follows a bike from the phone call to the paid invoice. Here is how it fits together, and exactly which parts you can use today.",
  visual: 'job-detail',
  icon: 'wrench',
  summary: 'How BIKE.co follows a repair from intake to paid, and what is live today.',
  sections: [
    {
      kind: 'prose',
      heading: 'One repair, start to finish',
      body: [
        "A repair in a bike shop is not complicated, but it has a lot of handoffs. Someone calls or walks in. Someone writes the bike up and guesses at a price. The bike goes on a hook, then on a stand, then maybe back on a hook while a derailleur hanger ships. Someone calls the rider, someone else rings them up, and somewhere in there a mechanic's time should have been written down and usually wasn't.",
        "Most shops run those handoffs on a paper tag, a whiteboard, a retail POS that treats service as an afterthought, and a phone that never stops. BIKE.co is built to put every one of those steps in one place: the booking, the quote, the bike's history, the work order, the checklist, the parts, the invoice and the payment. One record per repair, one login for the whole shop.",
        "The software is the erp.io Service module, set up for bike shops. Service owns the work itself. The customer, the phone, the books and the signatures live in other erp.io modules that are already running, and Service connects to them instead of keeping its own copy. That is why the product is described below in five groups, following the order a bike moves through your shop.",
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'What is live today, and what is not',
      body:
        "Live in app.erp.io now: a requests inbox, repair quotes, work orders (jobs with visits and a checklist gate), a week schedule, technician time tracking with weekly approval, invoicing from the finished job, monthly reports, service checklists and role-based permissions. The whole chain from request to quote to job to invoice works, with payments recorded by hand. Still on the roadmap: slot-picking online booking, bike records with serials, a bench board by status, routing, parts and purchase orders, job costing, card payments and pay links, texts to riders, the customer portal and accounting sync. Quotes and invoices are not sent to the rider by the software yet; marking them Sent only changes their status. The AI receptionist runs today through Phony, a separate erp.io module.",
      href: '/roadmap',
      cta: 'See the roadmap',
    },
    {
      kind: 'prose',
      heading: 'Win work, then run the shop floor',
      body: [
        "Win work covers everything before the bike is on a stand. Today a rider can fill in a repair request form you publish, or the counter can type a request in, and it lands in the Requests inbox to be triaged into a quote. Quotes are live, with line items, optional parts, a discount and tax, and an approved quote turns into a job in one step. Picking a drop-off slot online, sending the quote to the rider for approval, and bike records with serials and history are on the roadmap. The phone is handled by Phony, the erp.io AI receptionist, which answers calls today.",
        "Shop floor is the bench, and most of it is live. Work orders are numbered jobs with one or more visits, each with a named mechanic, and a visit cannot close until its required checklist is submitted. The week schedule lists visits by day with an unscheduled queue for bikes that have no day yet. Mechanics clock time against the visit they are working on, and a manager approves the week. Service checklists give you tune-up, safety and e-bike checks you build yourself, with photos, signatures and a PDF for the rider. New: the field app installs from the browser and keeps working with no signal, queueing checklist answers and finished visits until it can send them. The bench board by status, drag-and-drop scheduling, bench capacity and van routing are on the roadmap.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Parts, getting paid, and running the numbers',
      body: [
        "Parts and inventory is where most bike shop software stops being honest. The Service plan includes real stock locations, including each van, usage recorded against the job, reorder points that write the purchase order, and job costing that sets labor and parts against what you charged. All of it is on the roadmap; parts and purchase orders are a later phase of the build.",
        "Getting paid already runs from the work order: once every visit on a job is closed, one click creates the invoice from the job's lines, with discount, tax, due date and terms. Payments are recorded by hand against the invoice today, including part payments. A Stripe payment link or QR code at pickup, delivering the invoice by email or text, and a 'your bike is ready' text are on the roadmap. Running the shop covers monthly reports on work, money, hours and checklists (live), team permissions by role (live), and, on the roadmap, a customer portal, accounting sync and reports on bench throughput, comebacks and margin.",
        "Nothing inside Service is gated by plan. When a roadmap feature ships, every shop on every plan gets it. The price is per user, and the 30-day trial includes every module without a card.",
      ],
    },
    {
      kind: 'features',
      heading: 'All nineteen product pages, with their status',
      intro:
        "Live means built and usable in app.erp.io today. Roadmap means planned in Service and not built. Suite means another erp.io module does it today.",
      items: [
        { title: 'Online repair booking', body: 'A public request form today; drop-off slots riders pick themselves are next.', icon: 'calendar', status: 'roadmap' },
        { title: 'Repair quotes', body: 'Line items, optional parts, discount and tax, approved quote to job.', icon: 'quote', status: 'live' },
        { title: 'Customer & bike records', body: 'The rider in CRM, the bike in Service: serial, size, components, history.', icon: 'bike', status: 'roadmap' },
        { title: 'AI receptionist', body: 'Phony answers the shop phone, takes messages and books callbacks.', icon: 'phone', status: 'suite' },
        { title: 'Work orders', body: 'Numbered jobs, visits with an assignee, and a checklist gate before close.', icon: 'kanban', status: 'live' },
        { title: 'Service checklists', body: 'Build tune-up, safety and e-bike checks with photos, signatures and a PDF.', icon: 'clipboard', status: 'live' },
        { title: 'Scheduling', body: 'A week view by day, an unscheduled queue and a Today page.', icon: 'calendar', status: 'live' },
        { title: 'Technician time tracking', body: 'Clock in on the visit, weekly approval, California overtime.', icon: 'stopwatch', status: 'live' },
        { title: 'Mobile repair & routing', body: 'Van stops in a sensible order, with foreground check-in.', icon: 'van', status: 'roadmap' },
        { title: 'Parts inventory', body: 'Stock on the shelf and in every van, used against the job.', icon: 'box', status: 'roadmap' },
        { title: 'Purchase orders & reorder', body: 'Reorder points that write the purchase order.', icon: 'barcode', status: 'roadmap' },
        { title: 'Job costing', body: 'Labor and parts against the price on every repair.', icon: 'chart', status: 'roadmap' },
        { title: 'Invoicing', body: 'One click from the finished job, with discount, tax and terms.', icon: 'invoice', status: 'live' },
        { title: 'Payments', body: 'Recorded by hand today; Stripe pay links and QR codes are next.', icon: 'card', status: 'roadmap' },
        { title: '"Your bike is ready" texts', body: 'Status texts sent when the work order changes.', icon: 'text', status: 'roadmap' },
        { title: 'Reporting', body: 'Work, money, hours and checklists by month.', icon: 'trend', status: 'live' },
        { title: 'Customer portal', body: 'Riders see quotes, history and invoices.', icon: 'portal', status: 'roadmap' },
        { title: 'Team & permissions', body: 'Fifteen named permissions, set from each person\'s erp.io role.', icon: 'team', status: 'live' },
        { title: 'Accounting sync', body: 'Invoices and parts cost posted to the erp.io ledger.', icon: 'ledger', status: 'roadmap' },
      ],
    },
    {
      kind: 'visual',
      visual: 'requests',
      heading: 'Where a repair starts today',
      caption:
        "The Requests inbox. Requests from your web form or typed in at the counter wait here to be triaged to a site, turned into a quote, or closed.",
    },
    {
      kind: 'visual',
      visual: 'suite-grid',
      heading: 'Service in the middle, the suite around it',
      caption:
        "Service owns the work. The erp.io CRM holds your customers, Phony answers the phone, Sign handles signatures, Accounting holds the books. They share one login and one workspace.",
    },
    {
      kind: 'prose',
      heading: 'Why a bike shop needs its own setup',
      body: [
        "General field-service software is built around a truck going to a house. A bike shop is the reverse most of the time: the job comes to you, sits in your building, and waits for a stand, a mechanic and sometimes a part. The work order has to know about a bike, not just an address. The checklist has to know the difference between a tune-up and a hydraulic bleed. The customer record has to hold three bikes for one rider and forty for one rental fleet.",
        "Service is not all the way there yet, and it is worth saying plainly. Today a job belongs to a site, which is a name and an address, so a work order does not carry a frame serial or the bike's history. Bike records, a bench board with shop statuses and bench capacity are the roadmap items that close that gap. What is live already covers the core of a repair: the request, the quote, the job and its visits, the safety check, the hours and the invoice.",
        "The field app is a web app you install on the phone, not an App Store app, so there is no Tap to Pay and no background GPS. When you are ready to try it, run one real repair through it: a request, a quote with an optional chain, a job with a required safety check, and the invoice at the end.",
      ],
    },
  ],
  faqs: [
    {
      q: 'What can a bike shop use in BIKE.co today?',
      a: "Today you can take in repair requests, write quotes, run work orders with visits and a required checklist, schedule the week, clock and approve mechanic hours, bill the finished job and see monthly reports. Checklists and role-based permissions are live too. Slot booking, bike records, parts, card payments, texts to riders and the customer portal are on the roadmap.",
    },
    {
      q: 'Is BIKE.co a point-of-sale system for selling bikes?',
      a: "No. BIKE.co is service and shop-management software for the repair side of the business: intake, the bench, parts used on repairs and getting paid for the work. It does not replace a retail POS for selling bikes and accessories off the floor.",
    },
    {
      q: 'Is there a mobile app for mechanics?',
      a: "The field app is a web app, installed to the phone's home screen as a PWA. It is new and keeps working with no signal: checklist answers and finished visits are queued on the phone and sent when the signal returns. The camera and signature work in the browser. There is no App Store or Play Store app, which also means no Tap to Pay and no background location tracking.",
    },
    {
      q: 'How is BIKE.co priced?',
      a: "BIKE.co is priced as erp.io. Starter is $20 per user per month with 2 modules, Growth is $99 a month including 10 users and 5 modules, Scale is $399 a month including 50 users and 10 modules, and Enterprise is by quote. Every plan starts with a 30-day free trial, no card, with every module included.",
    },
    {
      q: 'What is the difference between roadmap and suite on these pages?',
      a: "Roadmap means the feature is planned in the Service module and is not built yet. Suite means another erp.io module that is live today does the job, such as Phony for the phone, the CRM for customers or Sign for signatures, and Service will connect to it.",
    },
  ],
  related: ['/product/service-checklists', '/product/work-orders', '/roadmap', '/pricing'],
}

export const productPagesA: ContentPage[] = [
  // ---------------------------------------------------------------- online-booking
  {
    slug: 'online-booking',
    title: 'Online repair booking that respects your bench.',
    metaTitle: 'Online Bike Repair Booking Software | BIKE.co',
    metaDescription:
      'BIKE.co today: a public repair request form feeding a requests inbox. On the roadmap: drop-off slots riders pick, limited by bench capacity.',
    eyebrow: 'Win work · Roadmap',
    lede:
      "Riders will pick their own drop-off slot, and the slots will only exist where you have bench time for that kind of job. Slot booking is on the Service roadmap; a public request form that feeds your Requests inbox works today.",
    status: 'roadmap',
    visual: 'intake-phone',
    icon: 'calendar',
    summary: 'Drop-off slots riders pick themselves, limited by bench capacity.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Where this stands',
        body:
          "Live today: publish a checklist as a public repair request form, optionally behind an emailed six-digit code. Each submission raises a numbered request in the Requests inbox with the rider's own words, and staff triage it to a site, write a quote and turn it into a job. Public forms only accept submissions once spam protection is configured for your workspace. Not there yet: riders cannot pick a drop-off slot or see availability, and there are no bench capacity rules or confirmations. This is a request form, not booking.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The Saturday problem',
        body: [
          "Every shop has seen it. A sunny week in April, the booking link is wide open, and by Saturday noon there are nine bikes on the floor: two flat fixes, a brake bleed, four tune-ups and two full overhauls that each need most of a day. Nothing about the booking tool knew that an overhaul and a flat fix are not the same size.",
          "The Service plan treats booking as a question of bench time, not calendar time. Each bookable service will carry a duration and a price. A basic tune-up might be an hour of bench time, a full overhaul four, a hydraulic brake bleed forty-five minutes per end. When a rider picks a drop-off day, Service will only offer it if there is enough mechanic time left that day for the service they picked.",
          "That is the difference between booking appointments and booking work. A drop-off slot is really a promise about when the bike will be done, and the only way to keep that promise is to book against capacity.",
        ],
      },
      {
        kind: 'prose',
        heading: 'How booking will work',
        body: [
          "You will set up a list of bookable services with a price, a duration and a description riders can understand: 'Standard tune-up, includes brake and gear adjustment, wheel true, safety check.' You choose which mechanics can take each service, and Service will assign an available one automatically. An e-bike motor diagnostic might only be bookable against the two people who hold the Bosch and Shimano certifications.",
          "Booking rules come straight from the Service plan: a minimum lead time so nobody books a same-hour overhaul, buffer time between jobs, a visibility window so the calendar does not show slots three months out, and business hours that block booking when the shop is closed. For a mobile van, the same rules add a service area and a maximum drive time.",
          "Each booking can be a job or an assessment. A drop-off for a known service is a job. 'It makes a noise and I don't know why' is an assessment: the rider books a short look, a mechanic writes a quote, and the quote converts into the job once it is approved.",
        ],
      },
      {
        kind: 'steps',
        heading: 'From the booking page to the bench, as planned',
        steps: [
          { title: 'The rider picks a service', body: 'From your website or a link you share. Each service shows its price and what it includes.' },
          { title: 'Service offers real slots', body: 'Only days with enough bench time left for that service, inside your lead time and business hours.' },
          { title: 'The rider describes the bike', body: 'Intake questions you choose, such as make, model, e-bike or not, and what is wrong, plus up to four photos.' },
          { title: 'The request lands in Service', body: 'In the Requests inbox, as it already does from a public form today, ready to become a quote and a job.' },
          { title: 'Confirmation goes out', body: 'By email through the CRM. Text confirmations depend on the shop having a registered texting number.' },
        ],
      },
      {
        kind: 'visual',
        visual: 'requests',
        heading: 'What works today: the Requests inbox',
        caption:
          "Requests from your public form, or typed in by the counter with a name, email and phone, wait in one inbox to be triaged to a site, quoted or closed. This is live today; picking a drop-off slot is not.",
      },
      {
        kind: 'prose',
        heading: 'Request forms and your website',
        body: [
          "Not every job fits a booking slot. Fleet managers want to send twelve bikes at once, and some riders just want a call back. The plan includes multiple request forms with your own intake questions, built on the same question types as the checklist builder, with address autocomplete, duplicate detection and your brand colors.",
          "The request half of this is already running. A checklist template can be published to a public link, optionally behind an emailed code, with spam protection that refuses submissions until it is configured. Each submission raises a numbered request in the Requests inbox, carrying the rider's own description of the problem, and the counter triages it to a site, writes a quote and converts the approved quote into a job. Requests can also be typed in by hand with a contact name, email and phone when someone calls. Slot booking will be built on that same foundation rather than a second one.",
          "Every booking and request keeps its lead source, so later on you can see whether riders found you through Google, a club ride sponsorship or a referral. The customer record itself lives in the erp.io CRM, which is live today.",
        ],
      },
      {
        kind: 'features',
        heading: 'What is in the plan',
        items: [
          { title: 'Bookable services', body: 'Price, duration and description per service, from flat fix to full overhaul.', icon: 'wrench', status: 'roadmap' },
          { title: 'Bookable mechanics', body: 'Choose who can take each service; Service assigns an available person.', icon: 'team', status: 'roadmap' },
          { title: 'Booking rules', body: 'Lead time, buffer, visibility window, business hours, service area for vans.', icon: 'cog', status: 'roadmap' },
          { title: 'Job or assessment', body: 'Book known work directly, or a short look that turns into a quote.', icon: 'search', status: 'roadmap' },
          { title: 'Photos at booking', body: 'Riders attach up to four photos of the problem.', icon: 'bike', status: 'roadmap' },
          { title: 'Public request form', body: 'A published form that raises a numbered request in the Requests inbox.', icon: 'link', status: 'live' },
          { title: 'Request to quote to job', body: 'Triage a request to a site, quote it and convert the approved quote.', icon: 'quote', status: 'live' },
          { title: 'Customer in CRM', body: 'Every booking linked to the rider in the erp.io CRM.', icon: 'crm', status: 'roadmap' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can riders book bike repairs online with BIKE.co today?',
        a: "Not as slot booking. Picking a drop-off slot is on the Service roadmap. Today riders can fill in a public repair request form, which raises a request in your Requests inbox for the counter to quote and schedule, and Phony can answer the phone and queue a callback.",
      },
      {
        q: 'How will BIKE.co stop too many big jobs landing on one day?',
        a: "Each bookable service will carry a duration, and a day will only be offered while there is enough mechanic time left for the service the rider picked. An overhaul uses far more of the day than a flat fix, so the booking page will stop offering that day for overhauls first.",
      },
      {
        q: 'Will booking work for a mobile repair van?',
        a: "Yes, that is part of the plan. Booking rules include a service area and a maximum drive time, so a rider outside the area or too far from the day's other stops will not be offered the slot.",
      },
      {
        q: 'Will riders get a text confirmation?',
        a: "Email confirmations will go out through the erp.io CRM. Text confirmations depend on the shop having a registered business texting number, which the CRM's telephony needs before any SMS can be sent.",
      },
      {
        q: 'Can I put the booking page on my own website?',
        a: "A request form, yes; a slot picker, not yet. A checklist published as a public request form can be shown on the websites you allow today. Slot booking is designed to use the same layer once it is built.",
      },
    ],
    related: ['/product/scheduling', '/product/repair-quotes', '/product/ai-receptionist', '/roadmap'],
  },

  // ---------------------------------------------------------------- repair-quotes
  {
    slug: 'repair-quotes',
    title: 'Repair quotes with line items, options and a clean yes.',
    metaTitle: 'Bike Repair Quote Software | BIKE.co',
    metaDescription:
      'Live in BIKE.co: numbered repair quotes with line items, optional parts, discounts and tax, marked approved and turned into a job in one step.',
    eyebrow: 'Win work · Live',
    lede:
      "Write the quote on the stand, mark the parts the rider can take or leave, and turn the approved quote into a job with its lines already on it. Quotes are live in Service today.",
    status: 'live',
    visual: 'quote',
    icon: 'quote',
    summary: 'Line items, optional parts and approval to job, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body:
          "Live today: numbered quotes with line items, optional lines, a discount, tax, a frozen copy once sent, and one-step conversion of an approved quote into a job. Not there yet: marking a quote Sent only changes its status. Nothing is emailed or texted, there is no customer-facing quote page or PDF, and the rider cannot approve it themselves; staff record the answer. There are no good, better and best tiers, and there is no price book screen, so lines are typed in by hand.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The quote is where the money is decided',
        body: [
          "A rider drops off a bike for a tune-up. On the stand you find a chain at 0.75, a cassette that will skip with a new chain, a sticky rear pivot and brake pads down to the backing plate. That is a very different bill from the one they expected, and how you write it up decides whether you do the work or send the bike home with a note on the tag.",
          "The worst version of this is a price scribbled on the tag and read out over the phone. Nobody can find it later, the mechanic is not sure what was agreed, and the counter rings up something different at pickup. A written quote fixes that, because every line, every price and the rider's answer sit on one numbered record that the job and the invoice are built from.",
          "That is what Service does today. The quote is not a PDF you make on the side. It is the first link in a chain that runs from the request, to the quote, to the job, to the invoice, with the same lines carried forward at each step so nothing is retyped.",
        ],
      },
      {
        kind: 'prose',
        heading: 'What you can put on a quote today',
        body: [
          "Each quote gets its own number and is attached to a site in Service, which today means a name and an address for the customer. You add line items with a description, a quantity, a unit price and a taxable flag. Labor for a standard tune-up, a chain, a cassette, a set of pads and half an hour for a rear bleed each go on as a line, and the total builds as you type.",
          "Any line can be marked optional. That is how you handle the parts you found on the stand: the tune-up is the core of the quote, and the new chain and cassette sit underneath as optional lines. When the rider tells you what they want, you record which optional lines they took, and only those carry into the job.",
          "The quote takes a discount as a percentage or a fixed dollar amount, and a tax rate. The arithmetic is done in whole cents, tax is worked out after the discount, and rounding goes half up, so the total on the quote is the total on the invoice. When you mark the quote Sent, Service freezes a copy, so a price edit next week cannot quietly change what the rider was quoted.",
        ],
      },
      {
        kind: 'steps',
        heading: 'From stand to job, as it works today',
        steps: [
          { title: 'Start from a request or from scratch', body: 'A request from your web form or one typed in at the counter can be triaged straight into a quote, or you start a quote on a site directly.' },
          { title: 'Write the lines', body: 'Labor and parts as line items with quantity, unit price and a taxable flag. Mark the extras found on the stand as optional.' },
          { title: 'Mark it Sent', body: 'Service freezes the quote. You tell the rider the price yourself, by phone, at the counter or in your own email.' },
          { title: 'Record the answer', body: 'Mark it Customer approved or Declined, and tick which optional lines the rider accepted.' },
          { title: 'Convert to a job', body: 'The approved quote becomes a numbered job with visit dates, carrying the agreed lines so the mechanic does exactly what was approved.' },
        ],
      },
      {
        kind: 'visual',
        visual: 'job-costing',
        heading: 'Where quoting goes next',
        caption:
          "An illustration of planned job costing behind a quote: labor and parts cost against the price. It is on the roadmap. Service does not record parts cost or labor rates yet, so margin is not shown today.",
      },
      {
        kind: 'prose',
        heading: 'What the rider does not see yet',
        body: [
          "Be clear with your counter staff about one thing. Marking a quote Sent in Service does not send anything. No email or text goes out, there is no link the rider can open, and there is no quote PDF. The status exists so the shop knows which quotes are waiting on an answer. For now the price reaches the rider the way it does today: a call, a conversation at the counter, or an email you write yourself.",
          "The same goes for approval. The rider cannot tick options and approve on their phone. Someone at the shop records the yes or the no, along with the optional lines the rider chose. The customer-facing quote view, approval from a link and a signed approval through erp.io Sign are on the roadmap, alongside the customer portal.",
          "Tiers are also not built. You cannot lay out a basic, standard and overhaul side by side as three packages for the rider to pick from. The practical way to quote tiers today is one core line for the service the rider asked for, with the step-up work on optional lines. And because the price book has no screen yet, your common services and parts are typed in each time. A price book with saved items is part of the plan.",
        ],
      },
      {
        kind: 'features',
        heading: 'Quote features and their status',
        items: [
          { title: 'Numbered quotes with line items', body: 'Quantity, unit price and a taxable flag per line, attached to a site.', icon: 'quote', status: 'live' },
          { title: 'Optional lines', body: 'Mark extras as optional and record which ones the rider took.', icon: 'check', status: 'live' },
          { title: 'Discount and tax', body: 'Percent or dollar discount, tax after discount, whole-cent arithmetic.', icon: 'tag', status: 'live' },
          { title: 'Frozen once sent', body: 'A copy is locked when the quote is marked Sent.', icon: 'shield', status: 'live' },
          { title: 'Approved quote to job', body: 'Convert in one step, with visit dates and the accepted lines.', icon: 'kanban', status: 'live' },
          { title: 'Sending and customer approval', body: 'Email or text the quote, a customer quote page and a PDF.', icon: 'text', status: 'roadmap' },
          { title: 'Good, better, best tiers', body: 'Packaged service levels side by side for the rider.', icon: 'stack', status: 'roadmap' },
          { title: 'Price book', body: 'Saved services and parts to add without retyping.', icon: 'box', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why the chain matters more than the quote',
        body: [
          "The quote on its own is a nicer tag. What makes it worth using is what happens after the yes. The accepted lines become the job's lines. The job's visits get a date and a mechanic on the week schedule. A required safety checklist has to be submitted before the visit can close. And once every visit is closed, the job bills in one click from the same lines. At no point does anyone type the chain price in again.",
          "That chain is also what keeps arguments at pickup short. If the rider says they never agreed to the cassette, the quote shows which optional lines were accepted and the frozen copy shows what the price was when it was marked Sent.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I write repair quotes in BIKE.co today?',
        a: "Yes. Quotes are live in Service: numbered, with line items, optional lines, a discount and tax, frozen when marked Sent, and converted into a job once approved. What is not built yet is sending the quote to the rider or letting them approve it themselves.",
      },
      {
        q: 'Does BIKE.co email or text the quote to the rider?',
        a: "Not yet. Marking a quote Sent only changes its status and freezes a copy. There is no email, text, PDF or customer-facing quote page today, so you give the rider the price yourself. Sending and approval from a link are on the roadmap.",
      },
      {
        q: 'Can I offer good, better and best options?',
        a: "Not as tiers. Packaged tiers are on the roadmap. Today you can put the core service on the quote and add the step-up work and extra parts as optional lines, then record which ones the rider accepted.",
      },
      {
        q: 'What happens after a quote is approved?',
        a: "You convert it into a job in one step, with visit dates. The lines the rider accepted, including any optional ones, carry into the job, and the same lines become the invoice when the job is billed.",
      },
      {
        q: 'Is there a price book of my standard services?',
        a: "Not on screen yet. The data table for a price book exists, but there is no screen to manage it, so lines are typed in by hand today. A usable price book is on the roadmap.",
      },
    ],
    related: ['/product/work-orders', '/product/invoicing', '/product/online-booking', '/resources/repair-pricing-calculator'],
  },

  // ---------------------------------------------------------------- customer-bike-records
  {
    slug: 'customer-bike-records',
    title: 'Every rider, every bike, every repair.',
    metaTitle: 'Customer & Bike Service Records for Bike Shops | BIKE.co',
    metaDescription:
      'Planned in BIKE.co: the rider in the erp.io CRM, each bike in Service with make, model, size, serial, components and full service history.',
    eyebrow: 'Win work · Roadmap',
    lede:
      "The rider lives in the erp.io CRM. Each of their bikes will live in Service, with its serial, size, components and every job you have ever done on it. Bike records are on the Service roadmap; here is how they will work.",
    status: 'roadmap',
    visual: 'bike-record',
    icon: 'bike',
    summary: 'Serials, sizes and every past repair, per bike.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Where this stands',
        body:
          "Customer records are live today in the erp.io CRM. In Service today, work is attached to a site: a name, a free-text company name and an address, with that site's jobs, visits, quotes and invoices listed on it. The link from a site to the CRM customer is typed in, not picked. Bike records in Service, with serials, components and per-bike service history, are on the roadmap and not built. Checklists you run in Service today are stored with photos and signatures and will attach to the bike once bike records exist.",
        href: '/platform/crm',
        cta: 'See the CRM',
      },
      {
        kind: 'prose',
        heading: 'The rider and the bike are different records',
        body: [
          "Most shop software treats the customer as the thing you service. In a bike shop the thing you service is the bike, and one rider can own four of them: a road bike, a gravel bike, a kid's bike and an e-cargo bike that does the school run. A rental operator can own sixty. When someone rings and says 'the blue one', you need to know which blue one.",
          "The Service plan splits this cleanly. The person, their phone numbers, email, communication preferences, tags and lead source live in the erp.io CRM, which is live today. Service stores a link to that person and never keeps a second copy. The bike is a Service record of its own, attached to the rider.",
          "That split matters when a bike changes hands. The frame serial, the build and the history stay with the bike. The new owner gets linked to it, and the old owner keeps their own record of what they paid for.",
        ],
      },
      {
        kind: 'prose',
        heading: 'What a bike record will hold',
        body: [
          "The plan gives Service an equipment record with a type, serial, install date and full service history. For a bike shop that equipment is the bike. Make, model, year and frame serial are the basics. On top of that sit fields you define with erp.io's shared custom fields: frame size, wheel size, drivetrain, brake type, fork and shock model, tire setup, and for e-bikes the motor system, battery serial and display.",
          "Custom fields in the plan come with real types (text, number, true or false, dropdown, link, date) and default values, and they can be transferable, meaning a value set on the bike follows it onto the quote, the work order and the invoice as a snapshot. When a mechanic opens a work order they see 'Shimano XT 12-speed, 180 mm rotors, tubeless' without asking.",
          "Service history is every job, every checklist, every note and every photo on that bike, in order. The plan includes a media library that gathers photos from notes and checklists in one place, which is the fastest way to show a rider how their chain looked last spring.",
        ],
      },
      {
        kind: 'visual',
        visual: 'fleet',
        heading: 'One owner, many bikes',
        caption:
          "An illustration of the planned list view for a rider or fleet with many bikes, each with its serial and the service that is due next.",
      },
      {
        kind: 'features',
        heading: 'What each record holds',
        items: [
          { title: 'Rider in the CRM', body: 'Name, phones, email, preferences, tags and lead source.', icon: 'crm', status: 'suite' },
          { title: 'Bike identity', body: 'Make, model, year, frame serial, color.', icon: 'bike', status: 'roadmap' },
          { title: 'Fit and build', body: 'Frame size, wheel size, drivetrain, brakes, suspension, tires.', icon: 'hex', status: 'roadmap' },
          { title: 'E-bike details', body: 'Motor system, battery serial, display, firmware notes.', icon: 'ebike', status: 'roadmap' },
          { title: 'Service history', body: 'Every job, note, photo and checklist on the bike.', icon: 'wrench', status: 'roadmap' },
          { title: 'Checklists with photos', body: 'Run and store completed checklists in Service today.', icon: 'clipboard', status: 'live' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why the serial matters',
        body: [
          "The frame serial is the one fact about a bike that does not change. It is what a manufacturer asks for on a warranty claim, what an insurer asks for after a theft, and what tells you that the carbon frame on your stand is the same one you inspected after a crash last year.",
          "Keeping it on the record from the first visit makes the rest easy. A warranty claim starts with the serial, the purchase date and the service history already in one place. A recall notice becomes a search. A rider who asks 'when did I last have the fork serviced?' gets an answer from the counter instead of a shrug.",
          "The same record is what will drive service reminders later: a suspension service at a set interval or an annual safety check for a fleet, sent through the CRM's automations. That part depends on the rest of the roadmap and is not available today.",
        ],
      },
      {
        kind: 'prose',
        heading: 'Moving your history in',
        body: [
          "Most shops have years of customer data in a POS or a spreadsheet. Customers import into the erp.io CRM, which supports CSV import today. The Service plan includes an importer for work history, built first for moving shops off Jobber, and the same approach will apply to bike records once they exist.",
          "Until then, the practical first step is to get your customers into the CRM and start running real repairs through Service: a site for the rider, a quote, a job with a required inspection checklist, and an invoice. Put the frame serial in the checklist as a short answer. The submissions are kept, with their photos and signatures, and they are ready to hang off the bike when the bike record arrives.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I store bike serial numbers in BIKE.co today?',
        a: "Not on a dedicated bike record yet; bike records are on the Service roadmap. Jobs today are attached to a site, which is a name and an address, not a bike. Customer records are live in the erp.io CRM, and a Service checklist can capture the serial as an answer today.",
      },
      {
        q: 'Can one customer have several bikes?',
        a: "Yes, that is the design. The rider is one CRM record and each bike is its own Service record linked to them, so a family with four bikes or a fleet with sixty is handled the same way.",
      },
      {
        q: 'What details will a bike record hold?',
        a: "Make, model, year and frame serial, plus fields you define such as frame size, wheel size, drivetrain, brakes, suspension, tires and, for e-bikes, motor system and battery serial. Every job, note, photo and checklist on the bike forms its service history.",
      },
      {
        q: 'What happens when a bike is sold to a new owner?',
        a: "The bike record, its serial and its history stay with the bike. The new owner is linked to it in the CRM, and the previous owner keeps their own history of the work they paid for.",
      },
      {
        q: 'Can I import my existing customer list?',
        a: "Yes. The erp.io CRM imports customers from CSV today. Importing historical bike and repair records into Service is part of the roadmap.",
      },
    ],
    related: ['/platform/crm', '/product/service-checklists', '/product/work-orders', '/product/customer-portal'],
  },

  // ---------------------------------------------------------------- ai-receptionist
  {
    slug: 'ai-receptionist',
    title: 'An AI receptionist for the shop phone.',
    metaTitle: 'AI Receptionist for Bike Shops | Phony on BIKE.co',
    metaDescription:
      'Phony, the erp.io AI receptionist, answers your bike shop phone, rings your team first, takes callbacks and emails you the lead. $0.12 per minute.',
    eyebrow: 'Win work · Suite',
    lede:
      "The phone rings while you have a bleed kit in your hand. Phony, the erp.io AI receptionist, answers it: it tries your people first, answers from what you have told it, and takes a callback when nobody is free. It runs today.",
    status: 'suite',
    visual: 'phony-call',
    icon: 'phone',
    summary: 'Phony answers the shop phone when your hands are full.',
    sections: [
      {
        kind: 'prose',
        heading: 'The call you cannot take',
        body: [
          "In May the phone in a bike shop is a second job. Half the calls are 'is my bike ready?', a quarter are 'how much is a tune-up and how long is the wait?', and the rest are the ones you actually want: a new customer, a fleet manager, someone with a cracked frame and a race on Sunday. They all ring at the moment you are halfway through a brake bleed.",
          "Phony is the erp.io module that answers the phone. It is live today, separate from Service, and it works with BIKE.co the way the rest of the suite does: one login, one workspace, the same customer records. It speaks to callers in a natural voice, and it is built so a caller never reaches silence.",
          "It is worth being exact about what that means for a bike shop today, because an AI receptionist that promises things it cannot do is worse than voicemail.",
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What Phony cannot do yet',
        body:
          "Phony cannot look up whether a specific bike is ready or book a drop-off slot. Work orders are live in Service, but there is no link between Phony and Service yet, Service has no bike record to look up, and slot booking is still on the Service roadmap. The plan gives Phony a booking tool that calls Service's availability once it exists. Today it answers from the information you give it, rings your team, takes messages and queues callbacks.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'What Phony does on a call today',
        body: [
          "When a call comes in, Phony can screen it first, asking the caller to press a key, which drops auto-dialers before they cost you anything. During business hours it rings the people you list, in order, up to five numbers per site. If nobody picks up, the AI agent answers instead of the call dropping.",
          "The agent opens with a spoken disclosure that the caller is talking to an AI, and says the call is recorded if you have turned recording on and it actually started. From there it answers questions from the knowledge you give it: your hours, your tune-up prices, how long the current wait is, whether you work on a particular e-bike motor, where to park. It does not make things up to fill a gap.",
          "When the caller needs a person, the agent can hand them to someone on your team as a warm transfer, with a summary of what they need. When nobody is free, it takes their number and a preferred time and queues a callback, notifies your team and emails the lead to the people you choose. Leads flow into the erp.io CRM, so the next call from that number is not a stranger.",
        ],
      },
      {
        kind: 'steps',
        heading: 'A call to the shop, today',
        steps: [
          { title: 'Screening, if you want it', body: 'Callers press a key to continue; auto-dialers drop off.' },
          { title: 'Your people first', body: 'During hours, Phony rings your list in order for as long as you set.' },
          { title: 'The agent answers', body: 'With the AI disclosure first, then answers from your knowledge base.' },
          { title: 'Transfer or callback', body: 'A warm transfer to a person, or a callback queued with the caller\'s number and preferred time.' },
          { title: 'You hear about it', body: 'A notification in Phony, an email to the addresses you pick, and the lead in the CRM.' },
        ],
      },
      {
        kind: 'features',
        heading: 'What you can set up',
        items: [
          { title: 'Ring list per site', body: 'Up to five numbers, rung in order, with a ring time you choose.', icon: 'phone', status: 'suite' },
          { title: 'Call screening', body: 'Press-a-key screening to stop robocalls.', icon: 'shield', status: 'suite' },
          { title: 'Knowledge base', body: 'Answers about hours, prices and services from what you write.', icon: 'search', status: 'suite' },
          { title: 'Warm transfer', body: 'Hands the caller to a person with a summary.', icon: 'team', status: 'suite' },
          { title: 'Callbacks and lead alerts', body: 'Queued callbacks, notifications and email alerts.', icon: 'chat', status: 'suite' },
          { title: 'Bike status and booking', body: 'Answer "is my bike ready?" and book slots from Service.', icon: 'calendar', status: 'roadmap' },
        ],
      },
      {
        kind: 'visual',
        visual: 'suite-grid',
        heading: 'Phony next to Service',
        caption:
          "Phony is its own erp.io module. It shares your workspace, login and CRM with Service, and will call Service for availability and job status as those parts are built.",
      },
      {
        kind: 'prose',
        heading: 'What it costs',
        body: [
          "Phony is billed by the minute on top of your erp.io plan: $0.12 per minute of call time, the same rate on every plan. Warm transfers to a person on Phony telephony are $0.04 per minute, and telephony itself is billed at carrier cost. Minutes are counted by the second, not rounded up to the next minute.",
          "For a shop, the question is simple arithmetic. A two-minute call about opening hours costs about a quarter. A missed call from a rider with a broken bike and a race on Sunday usually goes to the next shop on the map.",
          "The erp.io plans themselves start at $20 per user per month on Starter, and every plan comes with a 30-day free trial, no card, with every module included.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can the AI receptionist tell a customer if their bike is ready?',
        a: "Not yet. Phony answers from the knowledge you give it and cannot look up a specific bike. Work orders are live in Service, but Phony is not connected to them yet. When a rider asks about their bike, it can take their number and queue a callback or transfer them to your team.",
      },
      {
        q: 'How much does the AI receptionist cost?',
        a: "Phony costs $0.12 per minute of call time on every erp.io plan. Warm transfers to a person on Phony telephony are $0.04 per minute, and telephony is billed at carrier cost.",
      },
      {
        q: 'Will callers know they are speaking to an AI?',
        a: "Yes. The agent opens every call with a spoken disclosure that it is an AI, and adds that the call is recorded only when recording is turned on and has actually started.",
      },
      {
        q: 'Does it ring my staff before answering?',
        a: "Yes, if you set it up that way. During business hours Phony rings your listed numbers in order, and the AI agent answers only if nobody picks up.",
      },
      {
        q: 'Can it book repair appointments?',
        a: "Not into Service yet. Slot booking is on the Service roadmap, and the plan gives Phony a booking tool that uses Service's availability. Today it queues a callback with the caller's preferred time, and your counter can enter the request in Service's Requests inbox.",
      },
    ],
    related: ['/platform/phony', '/product/online-booking', '/platform/crm', '/pricing'],
  },

  // ---------------------------------------------------------------- work-orders
  {
    slug: 'work-orders',
    title: 'Work orders with visits, owners and a safety gate.',
    metaTitle: 'Bike Shop Work Order Software | BIKE.co',
    metaDescription:
      'Live in BIKE.co: numbered jobs with visits, an assignee on each, a required checklist before a visit closes, and one-click billing when the work is done.',
    eyebrow: 'Shop floor · Live',
    lede:
      "Every repair gets a numbered job, every piece of bench time a visit with a name on it, and no visit closes until the required safety check is in. Work orders are live in Service today.",
    status: 'live',
    visual: 'job-detail',
    icon: 'kanban',
    summary: 'Numbered jobs, visits and checklist gates, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body:
          "Live today: numbered jobs with instructions, line items copied from the quote, one or more visits each with an assignee and a status, a required checklist that blocks a visit from closing, and one-click billing once every visit is closed. Not there yet: a bench board of bikes by status, shop statuses such as checked in, waiting on parts and ready for pickup, intake tags and ticket printing. Jobs belong to a site, which is a name and an address. There is no bike record yet, so a job does not carry a frame serial or the bike's history.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The hooks are not a system',
        body: [
          "Walk into most busy shops in June and the work order system is a paper tag on the handlebar, a row of hooks and a service manager's memory. It works until it doesn't. A bike sits three days waiting on a derailleur hanger and nobody remembers to call the rider. Two mechanics start on the same bike. The tag says 'tune-up' but the rider was promised new pads too.",
          "A job in Service is the single record of a repair: who it is for, what was agreed, who is doing the work, which checklist has to be done, and whether it is finished. The paper tag can still hang on the bike. The truth lives in the software, where the counter and the bench read the same thing.",
          "Service calls these jobs and visits. A job is the repair as a whole, with its instructions and its priced lines. A visit is a block of work on a day, with one person assigned. A simple tune-up is one job with one visit. A frame that needs a warranty inspection now and a rebuild when the new frame arrives is one job with two visits.",
        ],
      },
      {
        kind: 'prose',
        heading: 'What a job holds today',
        body: [
          "Each job gets a number and belongs to a site. In Service today a site is a name, a free-text company name and an address, which is how the module models the customer until bike and customer records arrive. The job carries instructions, which is where 'rider says it creaks under load, check the BB and the thru-axle first' goes, and line items for labor and parts.",
          "When the job comes from an approved quote, the lines the rider accepted are copied in, including the optional ones they said yes to, so the mechanic sees exactly what was agreed. You can also create a job directly for a walk-in who does not need a quote.",
          "Each visit moves through four statuses: unscheduled, scheduled, in progress and completed. It has an assignee, so there is never a question of whose bike it is, and it appears on the week schedule on the day it is booked. A visit with no day waits in the unscheduled queue until someone books it.",
        ],
      },
      {
        kind: 'features',
        heading: 'Work order features and their status',
        items: [
          { title: 'Numbered jobs', body: 'Instructions and priced lines, attached to a site.', icon: 'tag', status: 'live' },
          { title: 'Visits with assignees', body: 'One or more blocks of work per job, each with a person and a status.', icon: 'team', status: 'live' },
          { title: 'Checklist gate', body: 'A required checklist must be submitted before a visit can close.', icon: 'clipboard', status: 'live' },
          { title: 'Lines from the quote', body: 'Accepted lines, including chosen optional ones, copied in.', icon: 'quote', status: 'live' },
          { title: 'Bill the job', body: 'One click to an invoice once every visit is closed.', icon: 'invoice', status: 'live' },
          { title: 'Bench board by status', body: 'Checked in, waiting on parts, on the stand, ready for pickup.', icon: 'kanban', status: 'roadmap' },
          { title: 'Bike on the job', body: 'Frame serial, build and past repairs attached to the work order.', icon: 'bike', status: 'roadmap' },
          { title: 'Intake tags and tickets', body: 'Printed tags and tickets for the bike on the hook.', icon: 'barcode', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'No bike leaves without the safety check',
        body: [
          "This is the part of Service that most changes how a bench runs. A checklist template can be set to attach to every visit automatically and to be required. When it is, the visit cannot be closed until that checklist has been submitted, and a checklist cannot be submitted until its required answers are in.",
          "For a bike shop that is the final safety check: brakes bite, quick releases or thru-axles closed, headset tight, bar and stem bolts torqued, tire pressure set. For an e-bike it is the motor, battery and display checks you want on record before the bike goes back on the road. The mechanic fills it in on the phone or the shop computer, with photos and a signature, and the rider can be given the PDF.",
          "The checklist works from the installable field app too, which is new: answers and a completed visit are queued on the phone when there is no signal and sent in order when it comes back. It has not yet been tested widely on real phones, so try it in your back room before you rely on it.",
        ],
      },
      {
        kind: 'visual',
        visual: 'bench-board',
        heading: 'The board that is still to come',
        caption:
          "An illustration of the planned bench board, with bikes in columns by shop status. It is on the roadmap. Today visits are listed by day on the week schedule and on each job, with the statuses unscheduled, scheduled, in progress and completed.",
      },
      {
        kind: 'prose',
        heading: 'From drop-off to invoice, today',
        body: [
          "A rider fills in your repair request form or calls, and the request lands in the Requests inbox. Someone triages it to a site and writes a quote. The approved quote converts into a job with a visit. The visit gets a day and a mechanic on the week schedule. On the stand, the mechanic clocks time against the visit, runs the checklist and completes the visit. When every visit on the job is closed, 'Bill this job' creates the invoice from the job's lines.",
          "What you still do by hand is the status in between. There is no 'waiting on parts' or 'ready for pickup' column yet, so a bike on hold for a hanger is best left as a visit in progress with a note in the instructions, and the rider is still called when it is ready. Automatic 'your bike is ready' texts are on the roadmap.",
          "The honest fit today is a shop that wants one record per repair, a named owner on every piece of work and a safety check nobody can skip. A shop that runs entirely off a status board by the bench will find that board is the next thing on the list, not the thing it can use today.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I manage bike repair work orders in BIKE.co today?',
        a: "Yes. Service has numbered jobs with instructions and priced lines, visits with an assignee and a status, a required checklist before a visit closes, and one-click billing once the work is done. A bench board by bike status is still on the roadmap.",
      },
      {
        q: 'Does a work order hold the bike serial number?',
        a: "Not yet. Jobs belong to a site, which is a name and an address. Bike records with serials, build details and history are on the roadmap. Until then you can capture a serial as an answer on the job's checklist.",
      },
      {
        q: 'What statuses does a work order have?',
        a: "Visits move through unscheduled, scheduled, in progress and completed. Bike-shop statuses such as checked in, waiting on parts and ready for pickup, and a board that shows them, are on the roadmap.",
      },
      {
        q: 'Can a work order require a safety check before the bike goes back?',
        a: "Yes. A checklist template can attach to every visit and be required. The visit cannot be closed until that checklist is submitted, and the checklist cannot be submitted until its required answers are filled in.",
      },
      {
        q: 'How does a work order become an invoice?',
        a: "Once every visit on the job is closed, 'Bill this job' creates a numbered invoice from the job's lines. Billing is refused while any visit is still open.",
      },
    ],
    related: ['/product/service-checklists', '/product/scheduling', '/product/invoicing', '/resources/work-order-template'],
  },

  // ---------------------------------------------------------------- service-checklists
  {
    slug: 'service-checklists',
    title: 'Service checklists every mechanic fills in the same way.',
    metaTitle: 'Bike Service Checklist Software | BIKE.co',
    metaDescription:
      'Live in BIKE.co: build tune-up, safety and e-bike checklists with 8 question types, photos, signatures, required answers, a CSV report and a PDF.',
    eyebrow: 'Shop floor · Live',
    lede:
      "Build your tune-up, safety check and e-bike diagnostic once, and every mechanic runs it the same way, with photos, signatures and a PDF for the rider. This is live in Service today.",
    status: 'live',
    visual: 'checklist',
    icon: 'clipboard',
    summary: 'Build your tune-up, safety and e-bike checks, live today.',
    sections: [
      {
        kind: 'prose',
        heading: 'Your standard, written down',
        body: [
          "Every shop has a standard for a tune-up. The trouble is that it lives in the head of your best mechanic, and the new hire in April does it differently. One checks chain wear with a gauge, one eyeballs it. One torques the stem bolts, one does not. The rider cannot tell until something comes loose.",
          "Service checklists put your standard into a template. You build it once in the checklist builder, and every mechanic fills in the same questions in the same order, with photos where you want evidence and a signature where you want someone to put their name to it. When it is done, the rider gets a PDF showing what was checked.",
          "Checklists are live in Service today, and they are wired into the work. A template can attach itself to every visit and be marked required, and then the visit cannot be closed until the checklist is submitted. It is the same checklist engine that erp.io's other modules use. Service does not ship starter templates, so you build your own tune-up, safety and e-bike checks; the free templates on this site are a good place to start.",
        ],
      },
      {
        kind: 'features',
        heading: 'Eight question types',
        intro: "The builder groups questions into sections, such as Drivetrain, Brakes and Wheels. Each question has one of eight types and can be marked required.",
        items: [
          { title: 'Short answer', body: 'One line of text: frame serial, tire model, tech initials.', icon: 'text', status: 'live' },
          { title: 'Long answer', body: 'A paragraph: notes for the rider, what you found on the stand.', icon: 'text', status: 'live' },
          { title: 'Dropdown', body: 'Pick one: brake pad condition good, worn, replace.', icon: 'check', status: 'live' },
          { title: 'Checkbox', body: 'Tick any that apply: cables replaced, bearings serviced, sealant topped up.', icon: 'check', status: 'live' },
          { title: 'Number', body: 'Readings and measurements: chain wear, tire pressure, battery voltage.', icon: 'hex', status: 'live' },
          { title: 'Images', body: 'Photos from the phone camera or a file: the worn cassette, the cracked rim.', icon: 'bike', status: 'live' },
          { title: 'Date', body: 'A calendar date: last fork service, battery purchase date.', icon: 'calendar', status: 'live' },
          { title: 'Signature', body: 'Signed with a finger or a mouse: the mechanic, or the rider at pickup.', icon: 'sign', status: 'live' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Filling one in',
        body: [
          "A mechanic opens the checklist on the phone or the shop computer and works through it. Every answer type has a real control: a number field for chain wear, a camera button for photos, a signature pad for a finger. Each answer saves as it is given, so a mechanic who gets pulled away to the counter does not lose the half-finished check. New: installed as a web app on the phone, it keeps working with no signal. Answers and submissions are queued and sent oldest first when the signal returns, and repeated edits to one answer collapse into one. That offline mode has not yet been widely tested on real phones.",
          "Required answers are enforced. If you mark the torque check and the brake test as required, the checklist cannot be submitted until they are answered. That is the difference between a checklist and a suggestion. A submitted checklist can be read back by anyone with permission, with every photo and signature in place.",
          "Templates are versioned. Every time you save a change to a template, Service keeps the previous version exactly as it was. Answers point at questions by a permanent id, so renaming 'Chain wear' to 'Chain wear (%)' or reordering options never changes what an old submission says.",
        ],
      },
      {
        kind: 'prose',
        heading: 'The report, the CSV and the PDF',
        body: [
          "The checklists report shows every submission of one template, filtered by date and status, on screen and as a CSV. Columns are keyed by question, not by label, so a template that asks 'Condition?' twice, once for the front brake and once for the rear, exports as two columns instead of one broken one. An answer given against an older version of the template still lands in the right column, under the option label the mechanic actually picked.",
          "That makes the CSV useful for real questions. How many tune-ups found a chain past 0.75 this spring? Which mechanic flags worn pads most often? How many e-bike checks logged a battery below a given voltage? Open the CSV in a spreadsheet and count.",
          "Each submission also renders as a PDF with the photos and signatures drawn in. That is the record you hand the rider, keep for a warranty claim, or file when a fleet customer asks for proof that their bikes were safety checked.",
        ],
      },
      {
        kind: 'visual',
        visual: 'suite-grid',
        heading: 'One checklist engine across erp.io',
        caption:
          "The same checklist can be attached to a record in another erp.io module, such as a task in Projects, and filled in there. There is one builder and one copy of the answers.",
      },
      {
        kind: 'prose',
        heading: 'Public checklists and permissions',
        body: [
          "A checklist can be published to a public link for people outside the shop: a pre-ride inspection form for a group ride, a rental return check a customer fills in, or a simple repair request. You choose whether anyone with the link can submit, or only someone who confirms a six-digit code sent to their email. You can set when the form opens and closes, which websites may show it, and whether photo uploads are allowed at all. Uploads on public forms are off by default and capped when turned on.",
          "Public forms are protected against spam with Turnstile, and they fail closed: a published form refuses submissions until spam protection is configured, instead of quietly becoming a spam inbox.",
          "Who can do what comes from the person's erp.io workspace role, which maps to named permissions: build templates, fill them in, view other people's submissions, export, and publish to the public internet. Crew can fill in checklists; publishing stays with admins by default. Viewing is not editing: someone who can read a colleague's checklist still cannot change, submit or discard it.",
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body:
          "Live today: the builder, versioned templates, filling in on a phone (including offline), required answers, the report with CSV, the PDF with photos and signatures, public forms, and a required checklist that blocks a visit from closing. Not there yet: starter templates (you build your own), attaching a checklist by service type rather than to every visit, and a per-bike checklist history, since bike records are on the roadmap. Public forms accept submissions only once spam protection is configured.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
    ],
    faqs: [
      {
        q: 'Can I build a bike tune-up checklist in BIKE.co today?',
        a: "Yes. Service checklists are live. You build a template in sections with eight question types, mark answers as required, and every mechanic fills it in the same way with photos and signatures.",
      },
      {
        q: 'What question types are available?',
        a: "Short answer, long answer, dropdown, checkbox, number, images, date and signature. Dropdowns and checkboxes take your own options, and numbers suit readings such as chain wear or tire pressure.",
      },
      {
        q: 'What happens to old checklists when I change the template?',
        a: "They stay exactly as they were. Every save creates a new version, answers are tied to permanent question ids, and the report puts old answers in the right column under the label that was picked at the time.",
      },
      {
        q: 'Can the rider get a copy?',
        a: "Yes. Every submitted checklist renders as a PDF with its photos and signatures drawn in, which you can give to the rider or keep for a warranty claim.",
      },
      {
        q: 'Can customers fill in a checklist themselves?',
        a: "Yes. You can publish a checklist to a public link, open to anyone with the link or behind a six-digit email code, with spam protection and optional photo uploads. Each public submission also raises a request in your Requests inbox. Publishing is an admin permission by default.",
      },
      {
        q: 'Can I export checklist answers?',
        a: "Yes. The checklists report shows every submission of a template, filtered by date and status, and exports it as a CSV with one column per question.",
      },
    ],
    related: ['/resources/tune-up-checklist', '/resources/safety-inspection-checklist', '/product/work-orders', '/product/team-permissions'],
  },

  // ---------------------------------------------------------------- scheduling
  {
    slug: 'scheduling',
    title: 'A week of bench work, and a queue for what has no day yet.',
    metaTitle: 'Bike Shop Scheduling Software | BIKE.co',
    metaDescription:
      'Live in BIKE.co: a week view of every visit by day, an unscheduled queue you book from, a just-mine filter and a Today page for the crew.',
    eyebrow: 'Shop floor · Live',
    lede:
      "See the week's work day by day, book what is waiting in the unscheduled queue, and give every mechanic a Today page with their bikes on it. Scheduling is live in Service today.",
    status: 'live',
    visual: 'schedule',
    icon: 'calendar',
    summary: 'Week view, unscheduled queue and a Today list, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body:
          "Live today: a week view listing visits by day, a just-mine filter, previous and next week, an unscheduled queue you can book onto a day, controls to reassign a visit to another person or move it to another day, and a Today page. Not there yet: drag and drop, an hour-by-hour grid or time slots, columns per mechanic, bench-capacity limits and repeating visits. Scheduling works at the level of the day, not the hour.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'A promised date is a schedule',
        body: [
          "Every time the counter says 'we'll have it Thursday', they are scheduling bench time whether they know it or not. When nobody can see what is already promised for Thursday, the answer is a guess, and in May the guesses stack up until a Saturday has twelve hours of work for two mechanics.",
          "Scheduling in Service starts with the simplest useful thing: every visit on a day, in one list, where the counter and the bench can both see it. Before the counter promises Thursday, they can look at Thursday and count what is already on it. That is not automatic capacity, but it is a lot better than a whiteboard nobody updated since lunch.",
          "Every visit on the schedule belongs to a job, and every job has its lines and its checklist. So the schedule is not a separate calendar to keep in step with the work. Booking a visit onto Thursday is the same record the mechanic opens on Thursday morning.",
        ],
      },
      {
        kind: 'prose',
        heading: 'The week view and the unscheduled queue',
        body: [
          "The week view lists visits under each day, with the job, the site and the person assigned. Step back or forward a week with previous and next. A mechanic can switch on the just-mine filter and see only their own work, which is what most people want at eight in the morning.",
          "Visits without a day wait in the unscheduled queue. That is where a bike waiting on a fork seal kit belongs, or a frame that needs a warranty decision before anyone touches it. When the part arrives, you book the visit onto a day from the queue. When an approved quote converts into a job, you can give its visits dates at the same time, so routine work goes straight onto the week.",
          "Changing the plan is done with two plain controls on each visit: one to reassign it to another person and one to move it to another day. There is no drag and drop. That was a deliberate choice for a first version, because a select box works the same on a phone at the bench as on the counter computer.",
        ],
      },
      {
        kind: 'steps',
        heading: 'How a shop uses it today',
        steps: [
          { title: 'Quote approved', body: 'Convert it into a job and give the visit a date, or leave it unscheduled.' },
          { title: 'Book from the queue', body: 'Each morning, book waiting visits onto a day as parts arrive and time frees up.' },
          { title: 'Assign a person', body: 'Every visit has an assignee; reassign with one control when someone is out.' },
          { title: 'Open Today', body: 'Each mechanic opens the Today page and sees the visits on their day.' },
          { title: 'Close the visit', body: 'Submit the required checklist, complete the visit, and the job moves toward billing.' },
        ],
      },
      {
        kind: 'visual',
        visual: 'timeclock',
        heading: 'Schedule and time, side by side',
        caption:
          "An illustration of the timesheet next to the schedule. Mechanics can clock in against the visit they were booked on, so the hours land on the right job.",
      },
      {
        kind: 'features',
        heading: 'Scheduling features and their status',
        items: [
          { title: 'Week view by day', body: 'Every visit under its day, with previous and next week.', icon: 'calendar', status: 'live' },
          { title: 'Just-mine filter', body: 'Each mechanic sees only their own visits.', icon: 'search', status: 'live' },
          { title: 'Unscheduled queue', body: 'Visits with no day, ready to book onto one.', icon: 'stack', status: 'live' },
          { title: 'Reassign and move', body: 'Change the person or the day from controls on the visit.', icon: 'team', status: 'live' },
          { title: 'Today page', body: 'The crew\'s day in one list.', icon: 'check', status: 'live' },
          { title: 'Drag and drop, hour grid', body: 'Move work by dragging, with time slots and mechanics as columns.', icon: 'kanban', status: 'roadmap' },
          { title: 'Bench capacity', body: 'Limits per mechanic and day, so a day stops filling when it is full.', icon: 'stopwatch', status: 'roadmap' },
          { title: 'Repeating visits', body: 'Fleet checks and other recurring work on a rule.', icon: 'route', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'What it does not do yet',
        body: [
          "Scheduling today is day-level. Visits have a day, not a start time, and the week view is a list per day rather than a grid of hours. There are no columns per mechanic, so you see the whole shop's day and filter to one person rather than seeing everyone side by side.",
          "There is no capacity limit. Service will let you book ten overhauls onto Saturday if you tell it to. Working out how many hours are left for each mechanic, and stopping a day from filling when it is full, is on the roadmap, and it is the same capacity that online booking will read from once riders can pick their own drop-off slot.",
          "Repeating work is typed in rather than generated. If a fleet customer has a safety check every quarter, you give the visits their dates one per line. Recurrence rules, a printable day sheet per mechanic, a calendar feed and push notifications when someone's day changes are all part of the plan.",
        ],
      },
      {
        kind: 'prose',
        heading: 'Why a simple week view is still worth it',
        body: [
          "Most of the pain of a busy season comes from two things: work nobody gave a day to, and work nobody gave a name to. The unscheduled queue fixes the first, because a bike cannot quietly fall off the plan while it sits in a list waiting to be booked. The assignee on every visit fixes the second.",
          "The rest is judgment you already have. A service manager who can see Thursday's visits in one list can tell whether one more overhaul fits. When capacity arrives, it will do that sum for you. Until then, the week view gives you the numbers to do it yourself.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I schedule mechanics in BIKE.co today?',
        a: "Yes. Service has a week view of visits by day, an unscheduled queue, a just-mine filter, controls to reassign a visit or move it to another day, and a Today page. It schedules by day, not by hour.",
      },
      {
        q: 'Can I drag jobs between days?',
        a: "Not yet. Moving a visit to another day or another person is done with a control on the visit. Drag and drop is on the roadmap.",
      },
      {
        q: 'Does BIKE.co stop me overbooking a day?',
        a: "Not yet. There are no bench-capacity limits today, so you judge the load from the week view. Capacity per mechanic and day is on the roadmap and will also drive online booking.",
      },
      {
        q: 'What happens to bikes waiting on parts?',
        a: "Leave the visit unscheduled and it sits in the unscheduled queue instead of taking up a day. When the part arrives, book it onto a day from the queue.",
      },
      {
        q: 'Can I set up recurring fleet checks?',
        a: "Not as a rule yet. You can give a job several visits by typing their dates one per line. Recurrence rules are on the roadmap.",
      },
    ],
    related: ['/product/work-orders', '/product/time-tracking', '/product/online-booking', '/roadmap'],
  },

  // ---------------------------------------------------------------- time-tracking
  {
    slug: 'time-tracking',
    title: 'Clock labor to the job it belongs to.',
    metaTitle: 'Bike Mechanic Time Tracking Software | BIKE.co',
    metaDescription:
      'Live in BIKE.co: mechanics clock in against a visit, log shop, drive and break time, and managers approve weekly timesheets with overtime worked out.',
    eyebrow: 'Shop floor · Live',
    lede:
      "Mechanics clock in against the visit on the stand, shop time and breaks go in their own categories, and a manager approves the week. Technician time tracking is live in Service today.",
    status: 'live',
    visual: 'timeclock',
    icon: 'stopwatch',
    summary: 'Clock in on the job, approve the week, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body:
          "Live today: clock in and out against a visit (and so its job) or on its own, in the categories work, drive, shop and break; add a forgotten shift by hand; weekly timesheets that a manager approves, with nobody approving their own hours; and overtime worked out to California rules. Not there yet: a payroll export file, and hours flowing onto invoices. Approved hours stay on the timesheet; they do not become labor lines on the bill, and there is no job costing screen.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The number most shops guess',
        body: [
          "Ask a shop owner how long a standard tune-up takes and you will get a confident answer. Ask how long it took on average last month, across every mechanic, and you will usually get a guess. The difference between those two numbers is where labor margin goes missing.",
          "A flat-rate tune-up priced for an hour that actually takes an hour and forty minutes loses money every time. A hydraulic bleed that runs long because the caliper was contaminated is a price you should change. You cannot see either without time recorded against the job.",
          "Time tracking in Service is built to be light enough that mechanics actually use it. The clock sits in the app, a mechanic starts it against the visit they are working on, and stops it when the bike comes off the stand. Only one clock can run per person, so nobody ends the day with two timers quietly adding up.",
        ],
      },
      {
        kind: 'prose',
        heading: 'How it works today',
        body: [
          "A mechanic clocks in against a visit, which ties the time to that visit's job. Time that is not on a job is clocked on its own, in one of four categories: work, drive for a van heading to a stop, shop for the non-billable jobs like building up rental bikes or cleaning the bench, and break. Stopping one clock and starting another is how a mechanic switches from the bike on the stand to the counter.",
          "People forget. A mechanic who never clocked in on Saturday can add the shift by hand afterwards, so the week is complete before it goes for approval. Manual entries sit on the same timesheet as clocked ones.",
          "At the end of the week a manager reviews each person's timesheet and approves it. Nobody can approve their own hours, which matters in a small shop where the owner is also on the bench. Overtime is worked out to California's rules: daily overtime after eight hours and double time after twelve, weekly overtime after forty, and the seventh consecutive day. The timesheet shows straight time, time and a half and double time separately.",
        ],
      },
      {
        kind: 'steps',
        heading: 'A mechanic\'s day, today',
        steps: [
          { title: 'Open Today', body: 'The mechanic sees the visits booked for them on the Today page.' },
          { title: 'Bike on the stand', body: 'Clock in against the visit. The time is tied to its job.' },
          { title: 'Pulled to the counter', body: 'Stop the job clock and clock shop time, or take a break.' },
          { title: 'Bike off the stand', body: 'Run the required checklist, complete the visit, stop the clock.' },
          { title: 'End of the week', body: 'The service manager reviews and approves the timesheet, overtime split out.' },
        ],
      },
      {
        kind: 'features',
        heading: 'Time tracking features and their status',
        items: [
          { title: 'Clock on a visit', body: 'Time tied to the visit and its job.', icon: 'stopwatch', status: 'live' },
          { title: 'Work, drive, shop, break', body: 'Categories for time that is not on a bike.', icon: 'tag', status: 'live' },
          { title: 'Manual entries', body: 'Add a forgotten shift after the fact.', icon: 'text', status: 'live' },
          { title: 'Weekly approval', body: 'A manager approves; nobody approves their own hours.', icon: 'check', status: 'live' },
          { title: 'California overtime', body: 'Daily 8 and 12, weekly 40 and the seventh day, split on the timesheet.', icon: 'scale', status: 'live' },
          { title: 'Payroll export', body: 'Approved hours in a file for your payroll provider.', icon: 'ledger', status: 'roadmap' },
          { title: 'Labor onto the invoice', body: 'Hours on a job posted as labor lines on the bill.', icon: 'invoice', status: 'roadmap' },
          { title: 'Job costing', body: 'Labor cost at each mechanic\'s rate against the price.', icon: 'chart', status: 'roadmap' },
        ],
      },
      {
        kind: 'visual',
        visual: 'job-costing',
        heading: 'Where the hours go next',
        caption:
          "An illustration of planned job costing: approved hours at each mechanic's rate plus parts cost, against the price charged. It is on the roadmap. Hours are logged against jobs today, but Service has no labor rates or parts cost yet to set them against.",
      },
      {
        kind: 'prose',
        heading: 'Payroll preparation, not payroll',
        body: [
          "Service will prepare payroll, not run it. It already works out the hours and the overtime split, and the monthly report shows hours per person with straight, time and a half and double time, using the same overtime rules as the timesheet so the two always agree. What it does not do yet is produce the export file. For now you read the approved hours off the timesheet or the report and enter them in your payroll provider.",
          "It will never pay anyone, withhold tax or file anything. A prepared export for your payroll provider, and a payroll accrual posted to the erp.io Accounting ledger, are on the roadmap.",
          "Hours also stay on the timesheet rather than the bill. If you charge labor by the hour, put the labor line on the quote or the job yourself. Posting clocked time to invoice lines is planned, and so is job costing, which will finally put labor and parts cost next to what you charged for each repair.",
        ],
      },
      {
        kind: 'prose',
        heading: 'No background tracking',
        body: [
          "The field app is an installable web app, not an App Store app, and it does not track phones in the background. It knows where a phone is only when someone is using it. The plan adds a foreground location check-in when a van tech opens a job; that is not built today.",
          "The field app can now queue work with no signal, which is new and not yet widely tested on real phones: checklist answers and completed visits wait on the phone and send in order when the signal returns. The shop computer at the counter and the phone at the stand see the same clock, the same timesheet and the same visits.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can mechanics clock time to repairs in BIKE.co today?',
        a: "Yes. Mechanics clock in against a visit, which ties the time to its job, or clock work, drive, shop or break time on its own. Managers approve weekly timesheets, and overtime is worked out to California rules.",
      },
      {
        q: 'Can I export hours to payroll?',
        a: "Not yet. There is no payroll export file today. Approved hours and the overtime split are on the timesheet and in the monthly report, and a prepared export is on the roadmap. Service will never run payroll itself.",
      },
      {
        q: 'Do clocked hours go onto the invoice?',
        a: "No, not yet. Hours stay on the timesheet. If you bill labor by the hour, add the labor line to the quote or job. Posting clocked time to invoice lines is on the roadmap.",
      },
      {
        q: 'Can a manager approve their own hours?',
        a: "No. Every weekly timesheet is approved by someone other than the person whose hours it holds.",
      },
      {
        q: 'Will it track where my mechanics are?',
        a: "No. The field app is a web app and does not track phones in the background. A foreground check-in when a tech opens a job is on the roadmap.",
      },
    ],
    related: ['/product/scheduling', '/product/reporting', '/product/job-costing', '/resources/labor-rate-guide'],
  },

  // ---------------------------------------------------------------- mobile-repair-routing
  {
    slug: 'mobile-repair-routing',
    title: 'Mobile repair: the van, the stops, the fix at the curb.',
    metaTitle: 'Mobile Bike Repair Routing Software | BIKE.co',
    metaDescription:
      'BIKE.co today: visits at an address by person and day, and an offline field app. On the roadmap: a map, route optimization and pay links at the curb.',
    eyebrow: 'Shop floor · Roadmap',
    lede:
      "Plan the van's day on a map, run it from a phone with patchy signal, and get paid before you drive off. The map, routing and curbside payment are on the Service roadmap; basic dispatch and the offline field app work today.",
    status: 'roadmap',
    visual: 'route-map',
    icon: 'van',
    summary: 'Van stops in a sensible order.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Where this stands',
        body:
          "Live today: visits at an address can be assigned to a person and a day on the week schedule, which gives basic mobile dispatch, and the new installable field app keeps checklists and visit completion working with no signal (not yet widely tested on real phones). Not there yet: a map, route optimization, stop ordering, van stock and payment at the curb; payments are recorded by hand. The field app is web only: no background GPS, no Tap to Pay, no CarPlay.",
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'A van is a shop with a steering wheel',
        body: [
          "Mobile repair has the same work as a shop, plus a road between every job. A van tech doing corporate fleet checks in the morning and home tune-ups in the afternoon loses real time to a badly ordered day: crossing town twice, arriving at an office park after the fleet manager has left, running out of tubes at stop five.",
          "The Service plan treats the van as a first-class part of the shop. Stops will appear on a map, get put in a sensible order, and run from the field app on the tech's phone. Parts on the van will be a stock location of their own. Payment will happen at the curb from a link or a QR code.",
          "Some of that works today. Each stop is a visit at a site's address, assigned to a tech and a day, so the van's week is on the schedule and the tech's Today page lists their stops. Route optimization and the map are planned, not built, and the mapping and routing provider is one of the plan's open decisions.",
        ],
      },
      {
        kind: 'prose',
        heading: 'Planning the day',
        body: [
          "The schedule's map view will show every stop as a pin, with drag to reorder and manual correction for a pin that geocoded to the wrong side of a building. Route optimization will order a tech's or a crew's day, or a whole week, from a start point to an end point using real drive times. Find-a-time suggestions will account for drive time when you add a new stop.",
          "Booking rules for vans include a service area and a maximum drive time, so a rider twenty miles outside your area is not offered a slot on a day the van is working the other side of town. Arrival windows let you promise 'between 1 and 3' instead of a minute you cannot keep.",
          "When a day needs many stops at once, such as a quarterly safety check across a corporate fleet at several sites, the plan supports creating visits for many jobs in one go.",
        ],
      },
      {
        kind: 'visual',
        visual: 'intake-phone',
        heading: 'The field app on the tech\'s phone',
        caption:
          "An illustration of the field app: an installable web app that opens the visit, runs the checklist and takes photos, and keeps working without signal. The offline part is new and live; the booking screen pictured is on the roadmap.",
      },
      {
        kind: 'prose',
        heading: 'Running the day from a phone',
        body: [
          "The field app is an installable web app, added to the phone's home screen, and it is new. It keeps working with no signal: checklist answers, submissions and visit completion are queued on the phone and sent oldest first when the signal comes back, with repeated edits to one answer collapsed into one. It caches only the app itself, not job lists, so with no signal it shows an honest offline page rather than a stale list of stops. It has not yet been widely tested on real phones, so run a day in a dead zone before you rely on it.",
          "The plan adds one-tap directions in the tech's preferred navigation app, and a foreground location check-in when they open a job at the stop, which records where they were when the work started. Neither is built yet. There is no background GPS tracking of phones, now or planned. Live van location in the plan comes from vehicle telematics, a later phase, not from the tech's phone.",
          "An on-my-way text with an ETA is part of the plan and depends on the shop having a registered texting number in the erp.io CRM.",
        ],
      },
      {
        kind: 'features',
        heading: 'What is in the plan',
        items: [
          { title: 'Map view', body: 'Every stop as a pin, drag to reorder, fix a bad pin.', icon: 'pin', status: 'roadmap' },
          { title: 'Route optimization', body: 'Order a day or a week by real drive time, start to end.', icon: 'route', status: 'roadmap' },
          { title: 'Offline field app', body: 'Installable web app; checklist answers and finished visits queue with no signal. New.', icon: 'van', status: 'live' },
          { title: 'Dispatch by person and day', body: 'Visits at an address assigned to a tech and a day on the week schedule.', icon: 'calendar', status: 'live' },
          { title: 'Foreground check-in', body: 'Location recorded when the tech opens the job; no background GPS.', icon: 'shield', status: 'roadmap' },
          { title: 'Payment at the curb', body: 'Stripe payment link or QR code on the tech\'s screen, or card entry.', icon: 'qr', status: 'roadmap' },
          { title: 'Checklists on the phone', body: 'Run tune-up and safety checklists in the phone browser today.', icon: 'clipboard', status: 'live' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Parts on board and payment before you leave',
        body: [
          "Each van will be its own stock location, so the parts on board are counted separately from the shop shelf and used against the job at the stop. Reorder points can flag that the van is low on 700c tubes before it leaves in the morning. Inventory is a later phase of the Service build.",
          "Payment in the field will be a Stripe payment link or a QR code the rider scans from the tech's screen, or a card typed in. There is no Tap to Pay, because that needs a native app and the field app is web only. For most riders a QR code at the curb is as quick as a card reader.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Can BIKE.co optimize routes for my repair van today?',
        a: "Not yet. Route optimization is on the Service roadmap, and the mapping and routing provider is still being decided. Today you can assign visits at an address to a tech and a day, and the tech runs them from the field app.",
      },
      {
        q: 'Does the field app track my techs with GPS?',
        a: "No background tracking. The field app is a web app, so it records a foreground location check-in when the tech opens a job. Live van location in the plan comes from vehicle telematics, not phones.",
      },
      {
        q: 'Will the app work with no signal?',
        a: "Yes, for the work itself. It is new: checklist answers, submissions and visit completion are queued on the phone and sent when the signal returns. It does not show stale job lists offline, and it has not yet been widely tested on real phones.",
      },
      {
        q: 'How will riders pay at the curb?',
        a: "Not through BIKE.co yet. Payments are recorded by hand against the invoice today. The plan is a Stripe payment link or a QR code on the tech's screen, or card entry. There will be no Tap to Pay, because the field app is a web app rather than a native one.",
      },
      {
        q: 'Is there an App Store or Google Play app?',
        a: "No. The field app is an installable web app added to the home screen. There is no App Store or Play Store app, and no CarPlay or Android Auto.",
      },
    ],
    related: ['/solutions/mobile-repair', '/product/scheduling', '/product/payments', '/product/parts-inventory'],
  },
]
