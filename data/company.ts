import type { ContentPage } from '@/lib/types'

/**
 * Company pages: about, roadmap, contact, privacy, terms.
 * Status claims follow docs/SERVICE-STATUS.md (code and deployment audit of
 * ~/service-erp-io, September 30, 2026) and the statuses in data/nav.ts.
 */

const about: ContentPage = {
  slug: 'about',
  title: 'Shop software that starts at the bench',
  metaTitle: 'About BIKE.co | Service-first bike shop software',
  metaDescription:
    'Why BIKE.co exists: bike shops run on a retail POS, paper tags and a phone that never stops. BIKE.co is service-first shop software built on erp.io.',
  eyebrow: 'About',
  lede:
    "Most bike shops run the workshop on a retail POS, a stack of paper tags and a phone that never stops ringing. BIKE.co is shop software built the other way round: service first, on the erp.io suite.",
  visual: 'suite-grid',
  icon: 'bike',
  summary: 'Why BIKE.co exists and what it is built on.',
  sections: [
    {
      kind: 'prose',
      heading: 'The problem we kept seeing',
      body: [
        "Walk into almost any independent shop on a Saturday in May and you see the same thing. The register software was bought to sell bikes, helmets and tubes. The workshop runs beside it on repair tags zip-tied to the stem, a whiteboard behind the counter, and whatever the service manager can hold in their head. The retail system knows what sold. It rarely knows which bikes are on the stands, which ones are waiting on a derailleur hanger, and which customer was promised Tuesday.",
        "Then the phone rings. It is someone asking if their bike is ready, and the person who knows is in the back with a bleed kit in one hand. So the counter walks back, finds the tag, reads the note, walks back, and answers. Multiply that by forty calls a day in season and you have lost a mechanic's worth of hours to a question software should answer.",
        "None of this is anybody's fault. Shop software grew up around retail, because that is where the money was counted. Service got a work-order screen bolted on, and the bench learned to live with it.",
      ],
    },
    {
      kind: 'prose',
      heading: 'What BIKE.co is',
      body: [
        "BIKE.co is shop-management software for bike repair businesses: service-first shops, e-bike specialists, mobile vans, retail stores with a workshop, rental and fleet operators, and groups with more than one location. It is the Service module of erp.io, presented for bike shops, with the rest of the erp.io suite one login away.",
        "Service is where the work lives: the request, the quote, the job, the checklist, the mechanic's time and the invoice. erp.io modules that already exist handle the rest. Phony answers the phone. CRM holds your customers. Accounting keeps the books. Chat connects the counter to the bench. Service does not keep a second copy of any of it; it links to the module that owns it.",
        "That split matters when you are small. You do not buy a retail POS, a booking tool, a texting tool and an accounting add-on from four vendors and then spend your winters reconciling them. You turn on the modules you need in one workspace.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Honest about what is built',
      body: [
        "Service is being built in the open, and we would rather tell you exactly where it stands than sell you a screenshot. The whole request to quote to job to invoice chain is built and running in app.erp.io today. A request lands in the requests inbox. It becomes a numbered quote with line items, optional lines, discount and tax. An approved quote becomes a job with one or more visits, each assigned to a mechanic on the week schedule. A required checklist must be submitted before a visit can close. Then one click bills the job as an invoice, and you record the payment against it.",
        "Around that chain you get checklists with photos and signatures and a PDF for the customer, a clock for technician time with weekly approval, monthly reports on work, money and hours, role-based permissions, and an installable field app that keeps checklist answers and visit completion queued on the phone when the signal drops.",
        "Some of it is still thin, and we say so. Sending a quote or invoice only changes its status: nothing is emailed or texted, and there is no PDF of either yet. Payments are recorded by hand; there is no Stripe, pay link or QR code yet. There is no bike record with serials and history, no parts inventory, and no bench board by repair status. Every page on this site carries a status, Live, Roadmap or delivered by another erp.io module, so you never have to guess.",
      ],
    },
    {
      kind: 'visual',
      visual: 'checklist',
      heading: 'What you can run today',
      caption: 'A tune-up checklist being filled in Service: required answers, photos of the drivetrain and a customer signature, ready to become a PDF. A visit cannot close until its required checklist is in.',
    },
    {
      kind: 'features',
      heading: 'What we believe about shop software',
      intro: 'A few principles shape every decision in Service.',
      items: [
        { title: 'The bench is the business', body: 'Labor is where an independent shop earns its margin. Software should be built around the repair, with retail as one of its outputs, not the other way round.', icon: 'wrench' },
        { title: 'One chain, no retyping', body: 'A request becomes a quote, the quote becomes a job, and the job bills as an invoice with the same lines. The optional lines a customer chose carry through.', icon: 'link', status: 'live' },
        { title: 'Standards written down', body: 'Checklists turn your best mechanic\'s tune-up into the shop\'s tune-up. Versions are immutable, so old answers stay attached to the questions they answered.', icon: 'clipboard', status: 'live' },
        { title: 'One record per bike', body: 'A serial number, an owner and every past repair in one place, so the mechanic sees last spring\'s bottom bracket before quoting a new one. This is on the Service roadmap.', icon: 'bike', status: 'roadmap' },
        { title: 'Pricing without gates', body: 'Plans are priced on users and modules only. Nothing inside a module is held back for a higher tier.', icon: 'tag' },
        { title: 'Web, installable, offline', body: 'The field app is a web app you install to the home screen, not an App Store download. Checklist answers and visit completion queue on the phone with no signal and send when it returns.', icon: 'van', status: 'live' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Why on erp.io',
      body: [
        "erp.io is a suite of business modules that share one sign-in, one workspace and one bill. Building Service there means a bike shop gets things that a standalone workshop tool would have to either skip or bolt on: an AI receptionist through Phony, a proper CRM, a ledger, e-signature for waivers and fleet agreements, hiring, training courses for new mechanics, and team chat.",
        "It also keeps the price honest. The same plan ladder covers every erp.io module: a 30-day free trial with every module included and no card, then Starter at $20 per user per month for two modules, Growth at $99 per month with 10 users and five modules, Scale at $399 per month with 50 users, ten modules and white-label, and Enterprise by quote. Extra users are $20 each.",
        "When Service ships a new piece, such as bike records or pay links, it appears in the workspace you already have. You do not migrate to a new product to get it.",
      ],
    },
  ],
  faqs: [
    {
      q: 'Who makes BIKE.co?',
      a: 'BIKE.co is part of erp.io. The software is the erp.io Service module, presented for bike repair businesses, and it runs in the same app.erp.io workspace as the other erp.io modules.',
    },
    {
      q: 'Is BIKE.co a retail POS?',
      a: 'No, BIKE.co is service-first shop software, not a retail point of sale. It is built around the repair: requests, quotes, jobs, checklists, time and invoices today, with parts inventory and card payments on the Service roadmap. If you sell a lot of product over the counter you may keep a retail system alongside it.',
    },
    {
      q: 'What can I actually use today?',
      a: 'Today Service runs the full chain from request to quote to job to invoice, with the week schedule, required checklists with photos, signatures and a customer PDF, technician time with weekly approval, monthly reports, role-based permissions and the installable offline field app. Payments are recorded by hand, and quotes and invoices are not yet sent to customers by email or text.',
    },
    {
      q: 'Does BIKE.co sell bikes or parts?',
      a: 'No. BIKE.co is software for shops. We do not sell bikes, parts, accessories or merchandise, and we do not repair bikes.',
    },
    {
      q: 'How is it priced?',
      a: 'BIKE.co uses the erp.io plan ladder: a 30-day free trial with no card, then Starter at $20 per user per month, Growth at $99 per month including 10 users, Scale at $399 per month including 50 users, or Enterprise by quote. Nothing inside a module is gated by plan.',
    },
  ],
  related: ['/roadmap', '/product/work-orders', '/platform', '/pricing'],
}

const roadmap: ContentPage = {
  slug: 'roadmap',
  title: 'What is live, and what is next',
  metaTitle: 'BIKE.co Roadmap | What is live and what is planned',
  metaDescription:
    'The honest status of every BIKE.co capability: what is live in Service today and its gaps, what is on the roadmap, and what other erp.io modules do.',
  eyebrow: 'Roadmap',
  lede:
    'Every capability on this site, with its real status. Live means you can use it today, and we list what it cannot do yet. Roadmap means it is planned in Service but not built. Via erp.io module means another live erp.io module does the job.',
  visual: 'suite-grid',
  icon: 'route',
  summary: 'What is live today, what it cannot do yet, and what is planned.',
  sections: [
    {
      kind: 'prose',
      heading: 'How to read this page',
      body: [
        "BIKE.co is the erp.io Service module. Service has a written plan: a list of capabilities matched row by row against established field-service software, and a sequence of build phases numbered from P0. This page translates where that plan stands into bike-shop terms, based on what is built and deployed in app.erp.io, not on what is drawn in a design file.",
        "Three statuses appear here and on every product page. Live means built, with real screens and saved data, and deployed in app.erp.io now. Roadmap means planned in Service and not built, so you cannot use it yet. Via erp.io module means a different erp.io module, which is live today, does the job.",
        "Live does not mean finished. For every live capability the table below also says what is not there yet, because a quote you cannot send to a customer is a different thing from a quote the customer approves by text. We do not publish ship dates for anything on the roadmap.",
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'Where Service stands today',
      body: 'Live today: the requests inbox, repair quotes, work orders with visits, the week schedule, service checklists, technician time tracking, invoicing, monthly reporting, role-based permissions and the installable offline field app, joined as one chain from request to quote to job to invoice. Not yet: sending quotes or invoices to customers (Send only changes the status; there is no email, text or PDF), drag-and-drop or bench-capacity scheduling, hours flowing onto invoices, and card payments (payments are recorded by hand, with no Stripe, pay link or QR code). Bike records, parts, purchase orders, job costing, ready texts, the customer portal and accounting sync are on the roadmap.',
    },
    {
      kind: 'table',
      heading: 'Every product capability',
      intro: 'Each row is a page in the Product menu. For live rows, the last column is the honest list of gaps.',
      columns: ['Capability', 'Status', 'What works today', 'Not there yet'],
      rows: [
        ['Repair quotes', 'Live', 'Numbered quotes with line items, optional lines, a % or $ discount and tax. Marked Sent, then Approved or Declined. An approved quote converts into a job, carrying the lines the customer chose.', 'Send only changes the status: nothing is emailed or texted, and there is no customer quote page, e-approval or PDF. No good/better/best tiers. No price book screen, so lines are typed in.'],
        ['Work orders', 'Live', 'Numbered jobs with instructions and one or more visits, each with an assignee and a status from unscheduled to completed. A visit cannot close while a required checklist is unsubmitted. Jobs carry the quote lines and bill in one click.', 'No bench board by bike status (checked in, waiting on parts, ready for pickup). No intake tags or ticket printing. Jobs hang off a customer location, not a bike.'],
        ['Scheduling', 'Live', 'A week view of visits by day, a just-mine filter, an unscheduled queue you book onto a day, reassigning the mechanic and moving the day, and a Today page for the crew.', 'No drag and drop. No time slots, hour grid or per-mechanic columns, and no bench-capacity limits. No recurring visits.'],
        ['Service checklists', 'Live', 'Builder with 8 question types, immutable versions, auto-attach to every visit and required before it closes, fill on a phone including offline, per-submission PDF with photos and signature, CSV report, public link.', 'No starter templates ship: you build your own tune-up, safety and e-bike checks.'],
        ['Technician time tracking', 'Live', 'Clock in and out against a visit or on its own, as work, drive, shop or break. Add forgotten shifts. A manager approves the week, and nobody approves their own hours. Overtime is calculated.', 'Hours do not flow onto invoices. No payroll export file yet.'],
        ['Invoicing', 'Live', 'Bill this job creates a numbered invoice from the job lines once every visit is closed, with discount, tax, due date, terms and a message. Sent invoices are frozen and can be voided.', 'Send only changes the status: no email or text delivery, no invoice PDF and no customer invoice page.'],
        ['Reporting', 'Live', 'Monthly visits closed, booked and unscheduled; invoiced, collected, outstanding and overdue; hours per person with the overtime split; the checklists report with CSV export.', 'No bench-throughput or comeback metrics, no margin (costs are not captured), no custom report builder and no charts.'],
        ['Team & permissions', 'Live', 'Named capabilities with defaults taken from the erp.io workspace role, which maps to viewer, crew, admin or owner. Lead and manager levels exist but need a per-person grant. For example, crew can close visits and fill checklists but not schedule, and payments are admin-only.', 'No screen yet for granting an individual capability to one person; access follows erp.io roles.'],
        ['AI receptionist', 'Via erp.io module', 'Phony answers the shop phone today as a separate erp.io module.', 'Phony cannot yet read Service jobs to answer is my bike ready, or book into Service.'],
        ['Online repair booking', 'Roadmap', 'Requests can be entered into the requests inbox, and a checklist can be published as a public form. Public forms refuse submissions until spam protection is configured for the workspace.', 'Riders cannot pick a drop-off slot or see availability. There is no calendar booking.'],
        ['Customer & bike records', 'Roadmap', 'Jobs, quotes and invoices are grouped under a customer location with a name and address. Customers belong in erp.io CRM.', 'No bike record: no serials, sizes, make and model, or per-bike repair history.'],
        ['Mobile repair & routing', 'Roadmap', 'Visits at an address can be assigned to a person and a day.', 'No map, no route optimization, no stop ordering and no van stock.'],
        ['Payments', 'Roadmap', 'An admin records money received against a sent invoice by hand, including partial payments; the invoice turns Paid when settled.', 'No Stripe, no pay links and no QR codes. The app takes no card payments.'],
        ['Job costing', 'Roadmap', 'Hours are logged against jobs, and jobs have priced lines.', 'No screen compares labor and parts cost against price; no labor rates or parts costs.'],
        ['"Your bike is ready" texts', 'Roadmap', 'Nothing customer-facing yet.', 'No text or email updates to customers of any kind.'],
        ['Customer portal', 'Roadmap', 'Customers can fill in a public form.', 'No customer login, and no view of quotes, history or invoices.'],
        ['Parts inventory', 'Roadmap', 'Parts appear only as typed lines on quotes and invoices.', 'No parts, stock or location model.'],
        ['Purchase orders & reorder', 'Roadmap', 'Nothing yet.', 'Reorder points, purchase orders and receiving.'],
        ['Accounting sync', 'Roadmap', 'Nothing yet.', 'Invoices do not post to erp.io Accounting or QuickBooks.'],
      ],
      note: 'Status as of September 30, 2026, from an audit of the deployed Service code. Live means available in a signed-in app.erp.io workspace.',
    },
    {
      kind: 'table',
      heading: 'Done by other erp.io modules',
      intro: 'These are separate erp.io modules that are live today. Turn them on in the same workspace.',
      columns: ['Module', 'Status', 'What it does for a shop'],
      rows: [
        ['Phony', 'Via erp.io module', 'AI receptionist and AI sales developer'],
        ['CRM', 'Via erp.io module', 'Riders, fleet accounts and sponsors'],
        ['Marketing', 'Via erp.io module', 'Campaigns, reviews, SEO and social'],
        ['Client Portal', 'Via erp.io module', 'A branded space for each customer'],
        ['Accounting', 'Via erp.io module', 'Books, invoicing and cash flow'],
        ['CFO', 'Via erp.io module', 'Forecasts for the busy and quiet seasons'],
        ['Pey', 'Via erp.io module', 'Payout reconciliation and supplier discounts'],
        ['Sign', 'Via erp.io module', 'Waivers, rental and fleet agreements'],
        ['Chat', 'Via erp.io module', 'Front counter to back bench, in threads'],
        ['Projects', 'Via erp.io module', 'Custom builds, events and shop projects'],
        ['ATS', 'Via erp.io module', 'Hiring mechanics before spring'],
        ['Courses', 'Via erp.io module', 'Training new mechanics on your standards'],
        ['PLM', 'Via erp.io module', 'Custom builds and parts bills of materials'],
        ['Legal', 'Via erp.io module', 'Waivers, leases and warranty questions'],
        ['Canvas', 'Via erp.io module', 'Planning the shop floor and the season'],
      ],
    },
    {
      kind: 'steps',
      heading: 'The phases in plain words',
      intro: 'Service is built in this order. Several phases are now partly built; here is where each one stands.',
      steps: [
        { title: 'P0 and P1 - Decisions and foundation', body: 'Design decisions, sign-in through the erp.io shell, workspaces, roles, file storage and the test harness. Built.' },
        { title: 'P2 - Core records', body: 'Built: the requests inbox, customer locations, quotes with optional lines, and jobs with visits. Still to come: bike records with history, a price book screen, custom fields and an importer.' },
        { title: 'P3 - Checklists, permissions and embedding', body: 'The checklist builder, filling, PDF and CSV report, role-based permissions, public checklists and embedding. Built. A screen for per-person capability grants is still to come.' },
        { title: 'P4 - Scheduling and dispatch', body: 'Built: the week view, unscheduled queue and Today page. Still to come: drag and drop, time slots, bench capacity, arrival windows and route optimization.' },
        { title: 'P5 - Field app, web only', body: 'Built: the installable app with an offline queue for checklist answers, submissions and visit completion. Still to come: photo markup, web push and foreground check-in.' },
        { title: 'P6 - Time and job costing', body: 'Built: clock in and out, manual entries, weekly approval and overtime. Still to come: payroll export, expenses and job costing.' },
        { title: 'P7 - Invoicing and payments', body: 'Built: invoices from finished jobs and manual payment recording. Still to come: sending by email and text, PDFs, Stripe card payments, pay links and QR codes, refunds and posting to Accounting.' },
        { title: 'P8 - Inventory and fleet', body: 'Stock locations including vans, parts used on jobs, reorder points, purchase orders and receiving. Not started.' },
        { title: 'P9 - Messages, automation, reporting and API', body: 'Built: monthly reports. Still to come: ready texts and reminders, automation, deeper reports, a public API and the Phony booking tool.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'The field app is web only, and what that rules out',
      body: [
        "The field app your mechanics and van techs carry is a web app only, and it is built. You install it from the browser to the home screen. When the signal drops, checklist answers, submissions and visit completions are queued on the phone and sent oldest first when it comes back, with repeated edits to one answer collapsed into one. It caches only the app shell, so offline you see an honest offline page rather than a stale list of jobs. It is new and has not yet been tested widely on real phones, so tell us how it behaves on the ones your shop uses.",
        "Being web only rules some things out, and we would rather you hear it here. There will be no App Store or Google Play app. There is no Tap to Pay on the phone and no card-reader hardware, because both need a native app. Taking a card at the curb is planned as a Stripe payment link or QR code on the tech's screen, or typing the card in; today payments are recorded by hand. There is no Apple CarPlay or Android Auto, and no background GPS tracking of your staff.",
        "Web push notifications and a foreground location check-in when a tech opens a job are still on the roadmap. On iPhones, web push will need the app added to the home screen, and uploads resume when the app is next opened.",
      ],
    },
    {
      kind: 'visual',
      visual: 'timeclock',
      heading: 'Built and running',
      caption: 'A technician clocked in against a visit on a job. Hours are approved weekly; they do not flow onto the invoice yet.',
    },
    {
      kind: 'prose',
      heading: 'Why checklists came first',
      body: [
        "Checklists were the first piece of Service to ship, before the rest of the chain. The reason is that the checklist is the hardest record to get right and the most painful one to lose. It carries photos, signatures and answers against a specific version of a template. If you change the tune-up template in March, the answers from last October must still read correctly. Service keeps template versions immutable for exactly that reason.",
        "Now that jobs and visits exist, checklists attach to them. A template can be set to attach to every visit and be required, and the visit cannot be closed until it is submitted. For an e-bike, that makes the safety check before handover a gate rather than a good intention, and the signed PDF is something you can hand the rider.",
        "If you want to see where things stand in person, start the free trial. Everything marked Live on this page is in the workspace you get.",
      ],
    },
  ],
  faqs: [
    {
      q: 'Can I send a quote or invoice to my customer from BIKE.co?',
      a: 'Not yet. Marking a quote or invoice as sent changes its status, but nothing is emailed or texted and there is no PDF of either. Customer delivery is on the roadmap; for now you share the details yourself.',
    },
    {
      q: 'Will there be an iPhone or Android app?',
      a: 'No, the field app is a web app only, and it is built. You install it from the browser to your home screen, and it queues checklist answers and visit completion offline. There will be no App Store or Play Store app.',
    },
    {
      q: 'Can I take card payments in BIKE.co?',
      a: 'No, not today. Payments are recorded by hand against an invoice, including partial payments. Stripe payment links and QR codes are on the roadmap, and Tap to Pay is ruled out because it needs a native app.',
    },
    {
      q: 'What does Via erp.io module mean?',
      a: 'It means another erp.io module that is live today does the job, and you turn it on in the same workspace. The AI receptionist is Phony, customer records sit in CRM, and the books sit in Accounting.',
    },
    {
      q: 'Do technician hours go onto the invoice?',
      a: 'No, not yet. Hours are clocked against visits and approved weekly, and reports show them per person, but labor is not posted to invoice lines. You add labor to the quote or job lines yourself.',
    },
    {
      q: 'Can I use the roadmap features during the free trial?',
      a: 'No, roadmap features are not built, so they are not in the trial either. The trial includes everything that is live, the whole request to invoice chain in Service and every other erp.io module, for 30 days with no card.',
    },
  ],
  related: ['/product/work-orders', '/product/repair-quotes', '/product/invoicing', '/platform'],
}

const contact: ContentPage = {
  slug: 'contact',
  title: 'Talk to us',
  metaTitle: 'Contact BIKE.co | Trials, sales and switching questions',
  metaDescription:
    'The fastest way to see BIKE.co is the free 30-day trial, no card. For Enterprise pricing, data or switching questions, send us a message.',
  eyebrow: 'Contact',
  lede:
    'The fastest way to find out if BIKE.co fits your shop is to start the free 30-day trial. For anything else, including Enterprise pricing and switching questions, send a message with the form on this page.',
  visual: 'checklist',
  icon: 'chat',
  summary: 'How to reach us about trials, pricing and switching.',
  sections: [
    {
      kind: 'prose',
      heading: 'The fastest route: try it',
      body: [
        "Most questions about fit are answered in the first hour of using the software. Start the free trial at app.erp.io/sign-up/bike and you get a workspace with every erp.io module switched on for 30 days. There is no card to enter and nothing to cancel if you decide it is not for you.",
        "In that hour, take one real repair through the chain. Log the request in the requests inbox. Turn it into a quote with the parts and labor lines, and an optional line for the tires they should replace. Approve it and convert it into a job, book the visit onto a day in the week view and assign a mechanic. Build the tune-up checklist your best mechanic actually follows, set it as required, fill it in on the stand from your phone, then close the visit and bill the job.",
        "That is the live part of Service today. Along the way you will also see what is not there yet: sending the quote or invoice only marks it sent, payments are recorded by hand, and there is no bike record or parts stock. The roadmap page lists every gap, so you can judge what you would be using now and what is still to come.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Sales and Enterprise questions',
      body: [
        "Most shops never need to talk to sales. Starter, Growth and Scale are self-serve: $20 per user per month on Starter with two modules, $99 per month on Growth with 10 users and five modules, and $399 per month on Scale with 50 users, ten modules and white-label. Extra users are $20 each on every plan.",
        "Enterprise is quote only. It is for groups that need every module, more users than Scale covers, or terms that a self-serve plan does not offer. If that is you, use the form on this page and tell us how many locations and people you have, which modules you expect to use, and what you run today. We will come back with a quote.",
        "If you are a multi-location group or a fleet operator, it helps to say so up front. The honest answer about fit for you depends on which roadmap items you need, such as bike records, parts inventory or routing, and we would rather have that conversation before you commit.",
      ],
    },
    {
      kind: 'steps',
      heading: 'Writing a message that gets a useful answer',
      intro: 'Use the contact form on this page. A few details let us answer in one reply instead of three.',
      steps: [
        { title: 'Say what kind of shop you run', body: 'Service-first repair, e-bike specialist, mobile van, retail with a workshop, rental or fleet, or several locations. Roughly how many mechanics.' },
        { title: 'Say what you use today', body: 'Your current POS or workshop software, and whether the bench runs on paper tags, a whiteboard or a spreadsheet.' },
        { title: 'Say what you need first', body: 'Quotes, work orders, scheduling, checklists, invoicing, card payments, parts or the phones. We will tell you straight which of those are live and which are on the roadmap.' },
        { title: 'Say what the data looks like', body: 'If you are thinking about moving records over, tell us roughly how many customers and past repairs you have and whether you can export them to CSV.' },
      ],
    },
    {
      kind: 'visual',
      visual: 'suite-grid',
      heading: 'One workspace, every module',
      caption: 'Service sits in erp.io beside Phony, CRM, Accounting, Chat and the rest. The trial switches all of them on for 30 days.',
    },
    {
      kind: 'prose',
      heading: 'Switching from other shop software',
      body: [
        "We want to be precise here, because a migration promise is easy to make and hard to keep. There is no importer for bike-shop POS or workshop systems today. An importer is in Service's plan, and bike-shop formats are not built.",
        "Customer records belong to erp.io CRM, which lists client import and export by CSV among its capabilities. If you can export your customer list from your current system as CSV, that is the piece you can bring across today. Open repairs can be entered as requests, quotes and jobs by hand. Past repair history has no home yet, because bike records with per-bike history are still on the roadmap.",
        "Because of that, most shops that try BIKE.co today do not switch everything at once. They start running new repairs through quotes, jobs and checklists alongside whatever they run now, keep their POS for the counter and for taking cards, and decide about the rest as the roadmap lands. That is a perfectly good way to use it, and nothing about the trial locks you in.",
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'What we will not tell you',
      body: 'We will not promise a ship date for a roadmap feature, a migration we have not built, or an integration that does not exist. If the answer to your question is that it is not built yet, that is the answer you will get.',
    },
  ],
  faqs: [
    {
      q: 'How do I start the free trial?',
      a: 'Go to app.erp.io/sign-up/bike and create a workspace. The trial lasts 30 days, needs no card, and includes every erp.io module, so you can run requests, quotes, jobs, checklists and invoices in Service alongside Phony, CRM and the rest.',
    },
    {
      q: 'What happens when the trial ends?',
      a: 'You choose a plan or stop. Starter is $20 per user per month for two modules, Growth is $99 per month including 10 users and five modules, Scale is $399 per month including 50 users and ten modules, and Enterprise is by quote.',
    },
    {
      q: 'Can you import my data from my current shop software?',
      a: 'Not yet for repair history. There is no importer for bike-shop POS or workshop systems today, and bike records with history are on the roadmap. Customer contacts can go into erp.io CRM, which supports CSV import, and open repairs can be entered by hand.',
    },
    {
      q: 'Do I have to replace my POS to use BIKE.co?',
      a: 'No. Many shops run repairs through BIKE.co quotes, jobs and checklists while keeping their existing POS at the counter. BIKE.co does not take card payments yet, so your current system can keep doing that while you try it.',
    },
    {
      q: 'How do I get an Enterprise quote?',
      a: 'Send a message through the contact form on this page with your number of locations and people, the modules you want and what you use today. Enterprise is quote only; there is no self-serve checkout for it.',
    },
    {
      q: 'Is there a phone number I can call?',
      a: 'The contact form on this page is the way to reach us. Send your question there and include enough detail about your shop for us to give a complete answer in one reply.',
    },
  ],
  related: ['/pricing', '/roadmap', '/product/repair-quotes', '/about'],
}

const privacy: ContentPage = {
  slug: 'privacy',
  title: 'Privacy policy',
  metaTitle: 'Privacy Policy | BIKE.co',
  metaDescription:
    'How BIKE.co, part of erp.io, collects, uses and protects information on this site, your GDPR and US state privacy rights, cookies, and opting out of sharing.',
  eyebrow: 'Last updated: September 30, 2026',
  lede:
    'This policy explains what personal information the BIKE.co website collects, why we collect it, who we share it with, and the rights and choices you have. BIKE.co is part of erp.io. We do not sell your personal information.',
  visual: 'compare-grid',
  icon: 'shield',
  summary: 'How the BIKE.co website collects, uses and protects your information, and your rights.',
  sections: [
    {
      kind: 'prose',
      heading: 'Who we are and what this policy covers',
      body: [
        "Last updated: September 30, 2026. In this policy, BIKE.co, we, us and our mean BIKE.co, part of erp.io. BIKE.co is shop-management software for bike shops, delivered as the Service module of the erp.io suite. We are responsible, as the controller, for the personal information collected through this marketing website.",
        "This policy covers the BIKE.co marketing website: the pages that describe the software, the free resources and checklists, the repair pricing calculator, the contact form, and any emails we send you in reply to a message. It also covers the information we hold about people who contact us about the software, such as prospective customers asking for an Enterprise quote.",
        "It does not cover the software itself. The software runs at app.erp.io. When you start a free trial, create a workspace or sign in, you leave this site, and your account and everything you put into the software are handled under the terms and privacy information presented to you by app.erp.io at sign-up. Where this policy mentions the software, it does so only to explain where the line sits.",
        "If you use the software as a shop, the information you enter about your own customers, their bikes and their repairs is your data. For that information your shop is the controller and erp.io processes it on your behalf, as described in the section on calls and text messages below and in the agreement you accept at sign-up.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Information we collect',
      body: [
        "Information you provide. When you send a message through the contact form, we receive what you enter: typically your name, email address, your shop's name, your role, and the content of your message, which may include details about your locations, team size and the software you use today. If you correspond with us by email afterwards, we receive the contents of that correspondence. If you use the repair pricing calculator, the numbers you enter are used in your browser to show a result; the calculator does not ask for your name or contact details.",
        "Trial sign-up. The Start free trial buttons on this site link to app.erp.io/sign-up/bike. The sign-up form, the account it creates and the details you enter there, such as your name, email address, password and workspace name, are collected and handled by app.erp.io, not by this site. We do not collect payment details on this site; plans are chosen and billed inside app.erp.io.",
        "Information collected automatically. When your browser requests a page, our servers and hosting providers receive technical information: your IP address, browser type and version, operating system, device type, language setting, the page requested, the referring page, and the date and time of the request. We may derive an approximate location, such as country or region, from your IP address. We do not collect precise location.",
        "Cookies and similar technologies. The site uses cookies and similar browser storage as described in the cookies section below. We do not use them to build advertising profiles of you.",
        "Information from others. If someone at your shop or another business refers you to us, or if you are copied on a message someone sends through the contact form, we may receive your name and contact details from them.",
      ],
    },
    {
      kind: 'features',
      heading: 'How we use your information',
      intro: 'We use personal information for the following purposes, and not for purposes that are incompatible with them.',
      items: [
        { title: 'Answering you', body: 'Replying to messages sent through the contact form, including Enterprise quote requests, switching questions and questions about what is live and what is on the roadmap.', icon: 'chat' },
        { title: 'Running the site', body: 'Delivering pages, remembering basic settings, and finding and fixing errors and performance problems.', icon: 'cog' },
        { title: 'Keeping it secure', body: 'Detecting and preventing spam, fraud, abuse and attacks against the site and the contact form.', icon: 'shield' },
        { title: 'Improving the content', body: 'Understanding, in aggregate, which pages, resources and checklists shop owners find useful, so we can improve them.', icon: 'chart' },
        { title: 'Follow-up about the software', body: 'Where you have asked us to, or where the law allows, sending you information about BIKE.co relevant to your enquiry. You can ask us to stop at any time.', icon: 'megaphone' },
        { title: 'Legal obligations', body: 'Keeping records, responding to lawful requests, and establishing, exercising or defending legal claims.', icon: 'scale' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Legal bases for processing',
      body: [
        "If you are in the European Economic Area, the United Kingdom or Switzerland, data protection law requires us to have a legal basis for each use of your personal information. We rely on the following.",
        "Contract and pre-contract steps: when you ask us about the software, a quote or a plan, we process your information to respond to that request before you enter into an agreement. Legitimate interests: we process technical and usage information to run, secure and improve the site, and contact details to answer business enquiries and keep a reasonable record of them. We have weighed these interests against your rights and consider them balanced, because the information is limited and used in ways you would reasonably expect.",
        "Consent: where the law requires consent, for example for non-essential cookies or certain marketing emails, we rely on it, and you can withdraw it at any time without affecting processing that took place before. Legal obligation: we process information where we need to comply with the law, such as tax, accounting or a lawful request from an authority.",
      ],
    },
    {
      kind: 'prose',
      heading: 'How we share information',
      body: [
        "We do not sell your personal information, and we do not share it for cross-context behavioral advertising. We do not rent or trade contact lists. We share personal information only in the following situations.",
        "Service providers and processors. We use companies that help us run this site and respond to you, such as website hosting and content delivery, email delivery, form handling and spam protection, and, where used, privacy-respecting analytics. They process personal information on our behalf, under contract, only to provide their services to us, and they are not permitted to use it for their own purposes.",
        "The erp.io group. BIKE.co is part of erp.io. A message you send us may be handled by the erp.io team responsible for the product you are asking about, and shared information stays within erp.io and is used for the purposes in this policy.",
        "Legal and safety reasons. We may disclose information where we believe in good faith that the law, a court order or a lawful request by a public authority requires it, or where it is necessary to protect the rights, property or safety of our users, the public or us, including to prevent fraud and abuse.",
        "Business transfers. If erp.io or BIKE.co is involved in a merger, acquisition, financing, reorganization or sale of all or part of its business or assets, personal information may be transferred as part of that transaction. The recipient will be bound to handle it consistently with this policy, and we will tell you if a transfer changes how your information is used.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Cookies and similar technologies',
      body: [
        "Cookies are small files a website stores in your browser; similar technologies include local storage and pixels. We group what the site uses into categories. Strictly necessary: storage the site needs to deliver pages, stay secure, protect the contact form from spam and remember your privacy choices. These cannot be switched off through our site because the site does not work properly without them.",
        "Analytics: where we use analytics, it is to count visits and see which pages and resources are read, in aggregate. We configure it to avoid building profiles of individuals. Where the law requires your consent for analytics, we ask for it first. Advertising: we do not use advertising or cross-site tracking cookies on this site.",
        "How to control them. You can block or delete cookies through your browser settings, and most browsers let you refuse third-party cookies or clear storage when you close the browser. The pages on this site still load and read normally if you block non-essential cookies. We also honor Global Privacy Control signals, as described in the section on opting out of data sharing.",
        "When you follow a link to app.erp.io to start a trial or sign in, that application sets the cookies it needs, for example to keep you signed in. Those cookies are part of the software and are covered by the information presented there.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Data retention',
      body: [
        "We keep personal information only for as long as we need it for the purpose we collected it for, and then delete or anonymize it. Contact form messages and related correspondence are kept for as long as needed to answer you and maintain a reasonable record of the conversation, which may include the period during which you are evaluating or using the software.",
        "Server and security logs are kept for a limited period to operate and protect the site and to investigate incidents, and then deleted or aggregated. Records of privacy requests, including opt-outs, are kept for as long as needed to show the request was honored and to keep honoring it.",
        "We may keep information longer where the law requires it, or where it is needed to establish, exercise or defend legal claims. Information that has been anonymized so it no longer identifies you may be kept and used without limit.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Security',
      body: [
        "We protect personal information with technical and organizational measures appropriate to the risk, including encrypted connections to the site, access limited to the people who need it, and service providers held to contractual security obligations. We also collect as little as we need, because information we do not hold cannot be exposed.",
        "No website or transmission over the internet is completely secure, and we cannot guarantee the security of information you send us. Please do not send sensitive information, such as payment card numbers, passwords or health information, through the contact form. If we become aware of a breach that affects your personal information, we will notify you and the authorities where the law requires.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Your privacy rights',
      body: [
        "Depending on where you live, you have rights over your personal information. If you are in the European Economic Area, the United Kingdom or Switzerland, you have the right to access the personal information we hold about you, to have inaccurate information corrected, to have information erased, to restrict or object to our processing, including processing based on legitimate interests, to data portability, and to withdraw consent at any time where we rely on consent.",
        "You can object to direct marketing at any time, and we will stop. You also have the right to lodge a complaint with your local data protection authority, or in the United Kingdom with the Information Commissioner's Office. We would appreciate the chance to address your concern first, so please contact us.",
        "We respond to requests within one month, which the law allows us to extend by up to two further months for complex or numerous requests; if we extend, we will tell you why.",
      ],
    },
    {
      kind: 'prose',
      heading: 'US state privacy rights, including California',
      body: [
        "If you are a resident of California or of another US state with a comprehensive privacy law, such as Colorado, Connecticut, Virginia, Utah, Texas, Oregon and others, you have rights over your personal information, subject to exceptions in those laws. This section also serves as our notice at collection under the California Consumer Privacy Act, as amended by the California Privacy Rights Act.",
        "Right to know and access: to request the categories and specific pieces of personal information we have collected about you, the categories of sources, the purposes, and the categories of third parties we disclose it to. Right to delete: to request deletion of personal information we collected from you. Right to correct: to request that we correct inaccurate personal information.",
        "Right to opt out of sale or sharing: to direct us not to sell your personal information or share it for cross-context behavioral advertising. We do not sell or share personal information in that sense, and we have not done so in the past 12 months, but you may still submit an opt-out and we will record it. Right to limit use of sensitive personal information: we do not collect sensitive personal information through this site or use it to infer characteristics about you, so there is nothing to limit. Where state law gives you the right to opt out of targeted advertising or profiling with legal or similarly significant effects, we do not engage in either.",
        "Right to non-discrimination: we will not deny you service, charge you a different price, or provide a different quality of service because you exercised a privacy right. Some states also give you the right to appeal our decision on your request; if we decline a request, we will explain how to appeal, and if the appeal is denied you may contact your state attorney general.",
      ],
    },
    {
      kind: 'table',
      heading: 'Categories of personal information we collect',
      intro: 'The categories below use the terms of the California Consumer Privacy Act. They describe what this website has collected in the past 12 months.',
      columns: ['Category', 'Examples', 'Source', 'Purpose', 'Disclosed for a business purpose to'],
      rows: [
        ['Identifiers', 'Name, email address, IP address', 'You; your device', 'Answering you, running and securing the site', 'Service providers; the erp.io group'],
        ['Customer records (Cal. Civ. Code 1798.80(e))', 'Name, email address, and any phone number you choose to include in a message', 'You', 'Answering you and keeping a record of the conversation', 'Service providers; the erp.io group'],
        ['Professional or employment information', "Your shop's name, your role, locations and team size", 'You', 'Answering business enquiries and preparing quotes', 'Service providers; the erp.io group'],
        ['Internet or network activity', 'Pages viewed, referring page, browser and device information, request times', 'Your device', 'Running, securing and improving the site', 'Service providers'],
        ['Geolocation data', 'Approximate location derived from IP address, such as country or region', 'Your device', 'Security and aggregate site statistics', 'Service providers'],
        ['Sensitive personal information', 'Not collected', 'Not applicable', 'Not applicable', 'Not disclosed'],
        ['Commercial information, biometrics, inferences', 'Not collected on this site', 'Not applicable', 'Not applicable', 'Not disclosed'],
      ],
      note: 'We have not sold personal information or shared it for cross-context behavioral advertising in the past 12 months, and we have no actual knowledge of selling or sharing the personal information of consumers under 16.',
    },
    {
      kind: 'steps',
      heading: 'How to submit a privacy request',
      intro: 'You can exercise any of the rights above, under GDPR, UK law or US state law, through the contact page on this site.',
      steps: [
        { title: 'Send the request', body: "Use the form on the contact page. Say which right you are exercising, for example access, deletion, correction or opting out of data sharing, and include the email address you used with us so we can find your records." },
        { title: 'We verify it is you', body: 'To protect your information, we match the details you give against the information we hold, and may ask you to confirm from the email address on record. We ask only for what we need to verify you, and use it only for that purpose. Opt-out requests do not require verification.' },
        { title: 'Authorized agents', body: 'You may use an authorized agent to make a request for you. We will ask the agent for proof of your signed permission, and may ask you to verify your identity directly, unless the agent holds a valid power of attorney.' },
        { title: 'We respond', body: 'We confirm receipt within 10 business days and respond within 45 days under US state laws, extendable once by 45 days where reasonably necessary, or within one month under GDPR and UK law. If we cannot fulfill a request, we will tell you why.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Opting out of data sharing',
      body: [
        "You can ask us not to sell or share your personal information, and not to disclose it to anyone other than the service providers who run this site for us. Send the request through the contact page and say that you are opting out of data sharing. Include the email address you used with us so we can apply it to your records. We do not require you to create an account or verify your identity to opt out, and we will confirm once the request is applied.",
        "Since we do not sell personal information or share it for cross-context behavioral advertising, there is no sale to stop. This section exists so the request is simple to make and easy to find. It replaces the older data-sharing opt-out page that used to live at a separate address on this domain.",
        "Global Privacy Control. If your browser or a browser extension sends a Global Privacy Control signal, we treat it as a valid request to opt out of the sale and sharing of personal information associated with that browser. Because a GPC signal is tied to a browser, it may not apply to information we hold about you from other sources, such as a contact form message, unless you also tell us who you are through the contact page.",
        "You can also unsubscribe from any marketing email we send using the link in that email, or by asking through the contact page. We will still send messages that are needed to answer a request you made.",
      ],
    },
    {
      kind: 'prose',
      heading: 'International transfers',
      body: [
        "We and our service providers may process personal information in the United States and in other countries where they operate, which may have data protection laws different from those in your country.",
        "When we transfer personal information from the European Economic Area, the United Kingdom or Switzerland to a country that has not been found to provide adequate protection, we use appropriate safeguards, such as the European Commission's Standard Contractual Clauses and the UK International Data Transfer Addendum, or rely on another lawful transfer mechanism. You can ask for more information about these safeguards through the contact page.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Calls and text messages sent through the software',
      body: [
        "BIKE.co can be used by bike shops to communicate with their own customers, for example a text saying a bike is ready, or calls answered by Phony, erp.io's AI receptionist. When a shop uses the software to send texts or handle calls, the shop is the controller of its customers' information, including phone numbers, message contents and call recordings or transcripts, and erp.io acts as its processor, handling that information on the shop's instructions and under the agreement the shop accepted at sign-up.",
        "If you are a customer of a bike shop and received a text or call through the software, questions about how your information is used, and requests to access or delete it, should go to that shop. If you contact us instead, we will pass your request to the shop where we can identify it. You can stop text messages from a shop by replying STOP, or by asking the shop directly.",
        "Shops are responsible for having the consent the law requires before sending texts or making calls to their customers, including under the Telephone Consumer Protection Act in the United States. We do not use the phone numbers or message contents of shops' customers for our own marketing, and we do not sell them or share mobile opt-in data with third parties for their marketing.",
      ],
    },
    {
      kind: 'visual',
      visual: 'suite-grid',
      heading: 'Where your information goes',
      caption: 'This marketing site is separate from the software. Sign-up, sign-in and your shop data live in app.erp.io alongside the other erp.io modules, under the terms presented at sign-up.',
    },
    {
      kind: 'prose',
      heading: 'Children',
      body: [
        "This site is for owners and staff of bike shops evaluating business software. It is not directed at children, and we do not knowingly collect personal information from anyone under 16. If you believe a child has given us personal information, tell us through the contact page and we will delete it.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Links to other websites',
      body: [
        "The site links to other websites, including app.erp.io and, on comparison pages, the websites of other software companies. We do not control other websites, and this policy does not apply to them. Read the privacy policy of any site before you give it personal information.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Changes to this policy',
      body: [
        "We may update this policy as the site, the law or our practices change. When we do, we will change the date at the top of the page. If a change materially affects how we use personal information we already hold, we will say so prominently on this page and, where the law requires, ask for your consent or notify you directly.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Contact us',
      body: [
        "Questions about this policy, and privacy requests of any kind, can be sent through the contact page on this site. Say that your message is about privacy so it reaches the right people quickly. BIKE.co is part of erp.io, and your message will be handled by the team responsible for this site.",
      ],
    },
  ],
  faqs: [
    {
      q: 'Do you sell my personal information?',
      a: 'No. BIKE.co does not sell personal information, share it for cross-context behavioral advertising, or rent or trade contact lists. We disclose it only to service providers who run this site for us, within the erp.io group, or where the law requires.',
    },
    {
      q: 'How do I opt out of data sharing?',
      a: 'Send a request through the contact page saying you are opting out of data sharing, with the email address you used with us. We do not require verification for opt-outs, and we also honor Global Privacy Control signals sent by your browser.',
    },
    {
      q: 'Does this policy cover the data in my BIKE.co workspace?',
      a: 'No, this policy covers the marketing website only. Your account and the shop data you enter into the software are handled by app.erp.io under the terms and privacy information presented at sign-up. For your own customers\' data, your shop is the controller and erp.io is the processor.',
    },
    {
      q: 'I got a text from a bike shop. Who do I ask about my data?',
      a: 'Ask the shop that texted you. When a shop sends messages through the software, the shop controls its customers\' information and erp.io processes it on the shop\'s behalf. You can reply STOP to end texts from that shop.',
    },
    {
      q: 'How long do you take to answer a privacy request?',
      a: 'We confirm receipt within 10 business days and respond within 45 days under US state laws, or within one month under GDPR and UK law. Both periods can be extended where the law allows, and we will tell you if that happens.',
    },
    {
      q: 'What cookies does the site use?',
      a: 'The site uses strictly necessary cookies to work and stay secure, and, where used, analytics that counts visits in aggregate. It does not use advertising or cross-site tracking cookies. You can block non-essential cookies in your browser and the site will still read normally.',
    },
  ],
  related: ['/contact', '/terms', '/about'],
}

const terms: ContentPage = {
  slug: 'terms',
  title: 'Terms of service',
  metaTitle: 'Terms of Service | BIKE.co',
  metaDescription:
    'The terms for the BIKE.co website and service, part of erp.io: trial, subscriptions, acceptable use, your data, AI features, roadmap statements and liability.',
  eyebrow: 'Last updated: September 30, 2026',
  lede:
    'These terms govern your use of the BIKE.co website and set out the policies that apply to the BIKE.co service. The software runs at app.erp.io, and the agreement you accept there when you create a workspace controls where the two differ.',
  visual: 'compare-grid',
  icon: 'scale',
  summary: 'The terms for using the BIKE.co website and service.',
  sections: [
    {
      kind: 'prose',
      heading: 'Acceptance of these terms',
      body: [
        "Last updated: September 30, 2026. These terms of service are an agreement between you and BIKE.co, part of erp.io. In these terms, BIKE.co, we, us and our mean BIKE.co, part of erp.io, and you means the person using the site or the service and, where you act for a business, that business.",
        "By using this website, or by creating a workspace or using the service, you agree to these terms and acknowledge our privacy policy. If you accept these terms for a business, you confirm that you have authority to bind it. If you do not agree, do not use the site or the service.",
      ],
    },
    {
      kind: 'prose',
      heading: 'The site and the service',
      body: [
        "The site is this marketing website: its pages, the free checklists and templates, the repair pricing calculator and the contact form. The service is the BIKE.co shop-management software, delivered as the Service module of the erp.io suite at app.erp.io, together with any other erp.io modules included in your workspace.",
        "When you create a workspace at app.erp.io, you are presented with an agreement for the service. That agreement governs your workspace, your data in it, billing and the service itself. The statements in these terms about the trial, subscriptions and the service are our published policies. If they conflict with the agreement presented at sign-up, the agreement presented at sign-up controls.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Eligibility',
      body: [
        "The service is for businesses, such as bike shops, mobile repair services, rental and fleet operators and their staff. It is not intended for personal, family or household use. You must be at least 18 years old and able to form a binding contract to create a workspace. You may not use the site or the service if you are barred from doing so under applicable law, including export control and sanctions laws.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Accounts',
      body: [
        "To use the service you create an account and a workspace at app.erp.io. You agree to give accurate information and keep it current. You are responsible for keeping your sign-in credentials secure, for the activity that happens under your account, and for the people you invite to your workspace and the permissions you grant them.",
        "Each user needs their own login; accounts may not be shared. Tell us promptly through the contact page if you believe your account has been used without your permission. We are not liable for losses caused by someone else using your credentials where you failed to keep them secure.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Free trial and subscriptions',
      body: [
        "Free trial. New workspaces get a free 30-day trial with every erp.io module included. No payment card is needed to start. At the end of the trial you can choose a plan or stop; if you do not choose a plan, access ends and we will not charge you.",
        "Plans and billing. Plans and prices are listed on the pricing page and are billed monthly in advance. At the date above, Starter is $20 per user per month with two modules, Growth is $99 per month including 10 users and five modules, Scale is $399 per month including 50 users and ten modules with white-label, and Enterprise is by quote. Extra users beyond those included are $20 per user per month on every plan. Nothing inside a module is gated by plan.",
        "Usage charges. Phony, erp.io's AI receptionist, is charged at $0.12 per minute of call time on every plan, and warm transfers to a person are $0.04 per minute on Phony telephony; telephony is billed at carrier cost. Usage charges are billed in arrears for the period in which they are incurred. Payments are processed by Stripe.",
        "Taxes. Prices do not include sales, use, value added or similar taxes. You are responsible for applicable taxes, other than taxes on our income, and we will add them to your invoice where we are required to collect them.",
        "Price changes, cancellation and refunds. We may change prices with at least 30 days' notice before the change applies to your next billing period; if you do not agree, you may cancel before it takes effect. You can cancel at any time in app.erp.io, and cancellation takes effect at the end of the current billing month. Fees already paid are not refundable, including for partial months or unused users, except where the law requires a refund. These are policy statements for the site; the agreement presented at sign-up controls where it differs.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Acceptable use',
      body: [
        "You may use the site and the service only for lawful business purposes. You may not use them to send spam or unsolicited messages, or to call or text people without the consent the law requires; to upload content that is unlawful, infringing, defamatory, or that contains malware; to harass, deceive or impersonate anyone; or to collect or process personal information in violation of privacy law.",
        "You may not attempt to access accounts, workspaces or systems you are not authorized to use; probe, scan or test the vulnerability of the site or the service, or circumvent any security or rate limit; interfere with or overload the site or the service, including scraping at a rate that burdens it; copy, resell or rent the service, or reverse engineer it except where the law expressly permits; or use the service to build a competing product.",
        "We may investigate suspected violations and remove content or suspend access where we reasonably believe it is necessary to protect the service, other customers or the public.",
      ],
    },
    {
      kind: 'features',
      heading: 'Using the site: the short version',
      intro: 'In plain terms, here is what you can and cannot do with this website.',
      items: [
        { title: 'Read and share freely', body: 'Read any page, link to it, and share it with your team or other shop owners.', icon: 'link' },
        { title: 'Print the resources', body: 'Print the free checklists and templates and use them in your own shop, including with changes for how your bench works.', icon: 'clipboard' },
        { title: 'Use the calculator', body: 'Use the repair pricing calculator as a planning aid. It is arithmetic on your inputs, not financial or tax advice.', icon: 'quote' },
        { title: 'Do not republish wholesale', body: 'Do not copy the site or its resources to sell them or pass them off as your own publication.', icon: 'shield' },
        { title: 'Do not abuse the site', body: 'No scraping at a rate that burdens the site, no attempts to break its security, and no spam through the contact form.', icon: 'cog' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Your data',
      body: [
        "You own the data you and your users put into the service, including your customers, their bikes, your checklists, submissions, photos and records. You grant us a limited right to host, copy, process, transmit and display that data only as needed to provide, secure and support the service, and as described in the agreement presented at sign-up.",
        "Where your data includes personal information about your customers or staff, you are the controller and erp.io processes it on your behalf and on your instructions. You are responsible for having a lawful basis and any consent needed to collect it and to have it processed by the service, including consent to receive text messages and calls. We do not sell your data and do not use it to market to your customers.",
        "You can export your data while your workspace is active, using the export features available in each module, such as the CSV export of checklist submissions. After your subscription ends, we may delete your data after a reasonable period, as described in the agreement presented at sign-up, so export anything you need before you cancel.",
      ],
    },
    {
      kind: 'prose',
      heading: 'AI features',
      body: [
        "Some parts of the service use artificial intelligence, for example Phony, which answers calls for your shop, and assistants in other erp.io modules that draft, summarize or suggest. AI output is generated automatically and may be inaccurate, incomplete or out of date. A Phony answer about a repair price, a turnaround time or whether a bike is ready may be wrong.",
        "You are responsible for configuring AI features with accurate information about your shop, for reviewing their output before relying on it, and for the decisions you make and the commitments you give your customers. Do not rely on AI output as professional, legal, tax or safety advice, or as a substitute for a mechanic's judgment on a customer's bike.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Third-party services',
      body: [
        "The service works with services we do not control. Payments are processed by Stripe, including payment links and QR codes you send your customers, and your use of Stripe is subject to Stripe's own terms. Calls and text messages are carried by telecommunications carriers and their providers, and delivery can be delayed or blocked by them. Other integrations are governed by the terms of their providers.",
        "We are not responsible for the availability, accuracy, changes or conduct of third-party services, and a change to a third-party service may require us to change or stop a related feature.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Roadmap and forward-looking statements',
      body: [
        "We describe the service accurately, and every product page carries a status. Live means built and usable in app.erp.io now. Roadmap means planned in the Service module and not built. Via erp.io module means another erp.io module that is live today does the job. The roadmap page lists the phase each planned capability belongs to.",
        "Features labeled Roadmap are not commitments. Their descriptions explain how a feature is designed to work under current plans, and plans change: a feature may ship differently, later, or not at all. Your subscription covers the service as it exists when you use it, not future functionality. Please make purchasing decisions based on what is Live, which you can try during the free trial.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Free resources and the calculator',
      body: [
        "The tune-up, safety inspection and e-bike diagnostic checklists, the work order template and the labor rate guide are general guidance for bike shops. They are not a substitute for a manufacturer's service manual, torque specifications or recall notices, and they are not legal, tax or financial advice. Your mechanics remain responsible for the work they do on a customer's bike.",
        "The repair pricing calculator and labor rate guide help you think about numbers. The results depend entirely on what you enter, and the right labor rate for your shop depends on things we cannot see, such as your rent, wages and local market. We may update, correct or remove resources at any time.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Intellectual property',
      body: [
        "The site and the service, including their software, text, design, illustrations, checklists, templates and screens, and the BIKE.co and erp.io names and logos, are owned by BIKE.co, part of erp.io, or its licensors, and are protected by intellectual property laws. Subject to these terms, we give you a limited, non-exclusive, non-transferable right to use the site, and, during your subscription, the service, for your internal business purposes.",
        "You may print and adapt the free checklists and templates for use in your own shop. You may not republish, sell or distribute them, or the site's content, as your own publication. Names of other companies and products mentioned on the site, including on comparison pages, belong to their owners, and mentioning them does not mean they endorse us. Comparison pages describe other products from their own public information as of the date stated on the page. No rights are granted except those stated in these terms.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Feedback',
      body: [
        "If you send us ideas, suggestions or feedback about the site or the service, you grant us a worldwide, royalty-free, perpetual and irrevocable right to use them for any purpose without obligation to you. Feedback is not confidential, so do not include information you want to keep confidential.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Confidentiality',
      body: [
        "Each of us may receive non-public information from the other that is marked confidential or would reasonably be understood to be confidential, such as your data, Enterprise pricing and non-public details of the service. The receiving party will use it only to perform under these terms or the agreement presented at sign-up, will protect it with at least reasonable care, and will disclose it only to its personnel and providers who need it and are bound by similar obligations, or where the law requires, with notice where lawful.",
        "These obligations do not apply to information that is or becomes public through no fault of the receiving party, that the receiving party already knew or independently developed, or that it received lawfully from someone else without a duty of confidentiality. Messages sent through the site's contact form are handled under our privacy policy.",
      ],
    },
    {
      kind: 'visual',
      visual: 'suite-grid',
      heading: 'The site and the software are separate',
      caption: 'This website describes BIKE.co. The software runs in app.erp.io with the other erp.io modules, under the agreement you accept when you create a workspace.',
    },
    {
      kind: 'prose',
      heading: 'Disclaimers',
      body: [
        "The site and the service are provided as is and as available. To the fullest extent the law allows, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, title and non-infringement, and any warranty that the site or the service will be uninterrupted, error-free or secure, that AI output will be accurate, or that messages will be delivered.",
        "The free resources, calculator, comparison pages and roadmap descriptions are provided for information only. Some jurisdictions do not allow certain warranties to be excluded, so some of these exclusions may not apply to you.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Limitation of liability',
      body: [
        "To the fullest extent the law allows, neither party will be liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, goodwill or data, arising out of or relating to these terms, the site or the service, even if advised of the possibility.",
        "To the fullest extent the law allows, our total liability arising out of or relating to the service is limited to the fees you paid for the service in the 12 months before the event giving rise to the claim, and our total liability arising out of the site alone is limited to one hundred US dollars. These limits do not apply to your payment obligations, your indemnity obligations, or liability that cannot be limited by law, such as for fraud or for death or personal injury caused by negligence. Nothing in these terms limits rights you have that the law does not allow to be limited.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Indemnity',
      body: [
        "You will defend and indemnify BIKE.co, part of erp.io, and its personnel against third-party claims, and the resulting losses, damages and reasonable costs, arising from your data, your use of the site or the service in breach of these terms or the law, or messages and calls you send through the service, including claims that you lacked the consent needed to contact someone. We will notify you promptly of any such claim, let you control its defense, and cooperate reasonably at your expense.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Suspension and termination',
      body: [
        "You may stop using the site at any time, and you may cancel your subscription at any time in app.erp.io as described above. We may suspend or end your access to the site or the service if you materially breach these terms and do not cure the breach within a reasonable time after notice, if payment is overdue, or immediately where needed to prevent harm to the service, other customers or the public, or where the law requires.",
        "When your access ends, your right to use the service stops. Sections that by their nature should survive, including those on your data, fees owed, intellectual property, feedback, confidentiality, disclaimers, limitation of liability, indemnity and governing law, survive termination.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Governing law and disputes',
      body: [
        "These terms are governed by the laws of [governing law to be confirmed], without regard to its conflict-of-laws rules. Any dispute arising out of or relating to these terms, the site or the service will be brought in the courts of that jurisdiction, and each party consents to their jurisdiction. Either party may seek injunctive relief in any competent court to protect its intellectual property or confidential information.",
        "Before starting formal proceedings, please contact us through the contact page so we can try to resolve the issue informally. Nothing in this section removes rights you have under mandatory consumer protection laws where you live.",
      ],
    },
    {
      kind: 'prose',
      heading: 'General terms',
      body: [
        "These terms, the privacy policy and, for the service, the agreement presented at sign-up are the entire agreement between us about their subject. If any provision is found unenforceable, the rest remains in effect. Failing to enforce a provision is not a waiver. You may not assign these terms without our consent; we may assign them in connection with a merger, acquisition or sale of assets. Neither party is liable for delays caused by events beyond its reasonable control.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Changes to these terms',
      body: [
        "We may change these terms from time to time. When we do, we will update the date at the top of this page. If a change is material and affects your subscription, we will give you reasonable notice, for example by email or in app.erp.io, before it takes effect. Continuing to use the site or the service after a change takes effect means you accept the updated terms.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Contact',
      body: [
        "Questions about these terms can be sent through the contact page on this site. BIKE.co is part of erp.io, and your message will reach the team responsible for this site and the service.",
      ],
    },
  ],
  faqs: [
    {
      q: 'Do these terms apply to the BIKE.co software?',
      a: 'Yes, as published policy, but the agreement you accept at app.erp.io when you create a workspace controls wherever the two differ. These terms fully govern your use of this website.',
    },
    {
      q: 'Do I need a card for the free trial?',
      a: 'No. The free trial lasts 30 days, includes every erp.io module and needs no payment card. If you do not choose a plan when it ends, access stops and you are not charged.',
    },
    {
      q: 'Can I get a refund if I cancel mid-month?',
      a: 'No, fees for a billing month already paid are not refunded for partial months, except where the law requires it. Cancellation takes effect at the end of the current billing month, and the agreement presented at sign-up controls if it says otherwise.',
    },
    {
      q: 'Who owns the data I put into BIKE.co?',
      a: 'You do. We process it only to provide, secure and support the service. For personal information about your customers, you are the controller and erp.io is your processor.',
    },
    {
      q: 'Can I rely on what Phony tells my customers?',
      a: 'Not without review. Phony is an AI receptionist and its answers may be inaccurate, so configure it with accurate shop information and check what it tells customers before relying on it.',
    },
    {
      q: 'Is the roadmap a promise?',
      a: 'No. Features labeled Roadmap are current plans, not commitments, and may ship differently, later or not at all. Base purchasing decisions on what is marked Live, which you can try during the free trial.',
    },
  ],
  related: ['/privacy', '/contact', '/pricing', '/roadmap'],
}

export const companyPages: ContentPage[] = [about, roadmap, contact, privacy, terms]
