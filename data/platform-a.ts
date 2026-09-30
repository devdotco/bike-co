import type { ContentPage } from '@/lib/types'

/**
 * /platform and the first eight platform module pages.
 *
 * Every claim here was checked against the module's own repo on 2026-09-30:
 * registry  ~/app-erp-io/lib/shell/modules.ts (+ module-slots.ts, billing/plans.ts, billing/usage-rates.ts)
 * Service   ~/service-erp-io (README, docs/plan/PLAN.md section 2 "build here vs. call out")
 * Phony     ~/sdr-vb-co       CRM ~/crm-erp-io      Marketing ~/marketing-erp
 * Portal    ~/app-dev-co      Accounting ~/vibe-finance
 * CFO       ~/cfo-erp-io      Pey ~/pey-app         Sign ~/sign-erp
 */

export const platformOverview: ContentPage = {
  slug: '',
  title: 'One login for the whole shop',
  metaTitle: 'The erp.io platform behind bike.co',
  metaDescription:
    'bike.co runs on erp.io: one login, one workspace, 16 modules. Service sits at the center; turn on phones, books and signatures as your shop needs them.',
  eyebrow: 'Platform',
  lede:
    'bike.co is the Service module of erp.io, set up for bike shops. Around it sit fifteen more modules that answer your phone, keep your books and get agreements signed, all under the same login.',
  status: 'suite',
  visual: 'suite-grid',
  icon: 'stack',
  summary: 'Service at the center, fifteen modules around it, one login.',
  sections: [
    {
      kind: 'prose',
      heading: 'bike.co runs on erp.io',
      body: [
        'When you sign up for bike.co you get an erp.io workspace. That is one account for your shop, one list of people who work there, and one login that opens every module you have switched on. Your front counter, your head mechanic and your bookkeeper all sign in at app.erp.io and move between modules from the same rail on the left. Nobody keeps a second password for the books or a third one for the phones.',
        'There are sixteen modules in the suite today. Service is the one bike.co is built around: the quotes, work orders, week schedule, time clocks, invoices and checklists that make up a repair shop, with parts and card payments still to come. The other fifteen already run as their own products for other businesses, and they plug into the same workspace. A shop that only wants the bench side can run Service alone. A shop with three benches, a van and a fleet contract can add the phones, the CRM and the books without starting over somewhere else.',
        'Each module keeps its own data and does its own job. Service owns the work. The CRM owns the people and companies you do business with. Accounting owns the ledger. Sign owns the signatures. That split is deliberate, and it is written into the Service plan: Service calls the other modules rather than keeping a second copy of their data, so a customer is one record, not three that slowly drift apart.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Why Service sits in the middle',
      body: [
        'In a bike shop, almost everything starts and ends with a repair. A rider calls to ask about a bleed. They drop the bike off on Saturday morning. A mechanic runs the safety check, finds a worn chain and a cracked hanger, and the counter calls for approval. The bike goes back on the stand, comes off, gets paid for and goes home. Every one of those moments touches another part of the business: the phone, the customer record, the signature on a quote, the invoice, the deposit in the bank.',
        'So Service is the hub, and the other modules are spokes. What exists in Service today runs from request to invoice: a Requests inbox, numbered quotes with optional lines, jobs with one or more visits, a week schedule, technician time tracking with weekly approval, invoices billed from the finished job, monthly reports, and checklists with photos, signatures and a PDF that can be required before a visit closes. The field app installs from the browser and keeps working with no signal, which is new. Parts, card payments, bike records and the links from Service into the other modules are on the roadmap, and the plan already names which module each one hands off to.',
        'That means the connections are designed before they are built. Quotes will be approved through the Client Portal and signed through Sign. Invoices will post to Accounting. Payments will be matched to bank deposits by Pey. Phony will book repairs against Service availability. Each module page on this site says plainly which half is live and which half is waiting on that connection.',
      ],
    },
    {
      kind: 'visual',
      visual: 'checklist',
      heading: 'The part of Service that is live today',
      caption:
        'A tune-up checklist being filled in on the stand. Checklists are live in Service and attach to the visits on a job, which are live too.',
    },
    {
      kind: 'features',
      heading: 'The fifteen modules around Service',
      intro:
        'Every one of these is live in erp.io today and opens from the same login. Each has its own page with what it does for a bike shop and how it will connect to Service.',
      items: [
        { title: 'Phony', body: 'An AI agent that answers your phone and website chat from what you teach it, routes calls to the counter, books callbacks and logs every conversation. Billed at $0.12 per minute of call time.', icon: 'phone', status: 'suite' },
        { title: 'CRM', body: 'Contacts, companies, a sales pipeline, email sequences, booking links and automations. Where riders, fleet managers and sponsors live.', icon: 'crm', status: 'suite' },
        { title: 'Marketing', body: 'AI agents for your blog, social posts, local SEO and Google Business Profile, review requests and replies, and a weekly report. Replies and posts wait for your approval.', icon: 'megaphone', status: 'suite' },
        { title: 'Client Portal', body: 'A signed-in space for a customer to see their orders, pay invoices, share files and open support tickets.', icon: 'portal', status: 'suite' },
        { title: 'Accounting', body: 'A double-entry ledger with invoices, bills, bank feeds, reconciliation, a nightly close check and a full set of standard reports.', icon: 'ledger', status: 'suite' },
        { title: 'CFO', body: 'Cash-flow forecasts with base, upside, downside and stress scenarios, budgets against actuals, and KPIs.', icon: 'trend', status: 'suite' },
        { title: 'Pey', body: 'Matches bank transactions to the invoices and bills behind them, and ranks early-payment discounts worth taking.', icon: 'reconcile', status: 'suite' },
        { title: 'Sign', body: 'Send a PDF for signature, in order, with a consent step, an identity check and a certificate of completion.', icon: 'sign', status: 'suite' },
        { title: 'Chat', body: 'Team messaging in threads, so the counter and the bench stop shouting across the shop.', icon: 'chat', status: 'suite' },
        { title: 'Projects', body: 'Tasks, sprints and kanban boards for the work that is not a repair: a shop refit, an event, a season plan.', icon: 'kanban', status: 'suite' },
        { title: 'ATS', body: 'Job postings, candidate pipelines and tracking for hiring mechanics before spring.', icon: 'hire', status: 'suite' },
        { title: 'Courses', body: 'Build a training course from a sentence and write the lessons block by block, for onboarding new mechanics.', icon: 'course', status: 'suite' },
        { title: 'PLM', body: 'Product lifecycle management for shops that design and build their own bikes or frames.', icon: 'bom', status: 'suite' },
        { title: 'Legal', body: 'Case-law research, drafting and legal agents, for the lease, dispute and contract questions a shop runs into.', icon: 'scale', status: 'suite' },
        { title: 'Canvas', body: 'Whiteboards for planning the shop floor, the season or a new location with the team.', icon: 'canvas', status: 'suite' },
      ],
    },
    {
      kind: 'prose',
      heading: 'What most shops turn on first',
      body: [
        'Start with Service, because that is your bench. Quote the work, turn approved quotes into jobs, book the visits onto the week, have mechanics clock their time and bill the job when every visit is closed. Build your tune-up, safety and e-bike checklists, give each person the role they need, and hand customers a PDF of what was checked and what was found.',
        'Then look at the phone. If the counter loses an hour a day to "is my bike ready?" and "do you have time for a wheel true this week?", Phony is the second module most shops will want. It answers from a knowledge base you control, puts the caller through to the counter when a person is needed, and books a callback rather than letting the call ring out. The third is usually Accounting, so the books live in the same workspace as the work.',
        'After that it depends on the shop. A rental or corporate fleet operator will want Sign for agreements and the CRM for account contacts. A shop chasing Google reviews will add Marketing. A group with two locations and a lender asking about cash will add CFO. None of that has to be decided on day one, because every module is included in the 30-day trial.',
      ],
    },
    {
      kind: 'table',
      heading: 'How plans count modules',
      intro:
        'Plans are priced on two things only: how many people sign in, and how many modules they can use. Nothing inside a module is locked by plan.',
      columns: ['Plan', 'Price', 'People included', 'Modules'],
      rows: [
        ['Free trial', '$0 for 30 days, no card', 'Your team', 'Every module'],
        ['Starter', '$20 per user per month', 'Each user is billed', '2'],
        ['Growth', '$99 per month', '10, then $20 each', '5'],
        ['Scale', '$399 per month, white-label', '50, then $20 each', '10'],
        ['Enterprise', 'Quote only', 'By agreement', 'By agreement'],
      ],
      note:
        'CRM and Marketing count as one module between them. Phony adds $0.12 per minute of call time on every plan; warm transfers to a person are $0.04 a minute on Phony telephony, and telephony is billed at carrier cost.',
    },
    {
      kind: 'prose',
      heading: 'Picking a plan by counting modules',
      body: [
        'A solo mechanic who wants checklists and an AI receptionist is on two modules, Service and Phony, which fits Starter. A small shop running Service, Phony and Accounting is on three, which needs Growth; Growth then leaves room for two more, and because CRM and Marketing share one slot, adding both of them uses only one.',
        'A growing shop with Service, Phony, Accounting, CRM and Marketing, Sign, Chat, CFO and Pey is on eight modules, which is Scale territory, and Scale also covers fifty people and white-label. You can change which modules are switched on at any time. Turning one off does not delete what is in it.',
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'What connects today, and what does not yet',
      body:
        'Every module listed here is live and usable in erp.io now, under one login. What is mostly not built yet is the link from Service into them: work orders flowing into the portal, invoices posting to Accounting, Service customers syncing to the CRM, Phony booking bench time. Those links are designed in the Service plan and are on the roadmap. Today you can run quotes, jobs, scheduling, time tracking, invoicing and checklists in Service and use the other modules alongside it.',
      href: '/roadmap',
      cta: 'See the roadmap',
    },
  ],
  faqs: [
    {
      q: 'Is bike.co a separate product from erp.io?',
      a: 'No. bike.co is the erp.io Service module set up and explained for bike shops. You sign up and log in at app.erp.io, and your workspace can use any of the sixteen erp.io modules, with Service at the center.',
    },
    {
      q: 'Do I have to use all sixteen modules?',
      a: 'No. You switch on only the modules you want, and your plan sets how many can be on at once: two on Starter, five on Growth and ten on Scale. During the 30-day trial every module is available so you can try them before you choose.',
    },
    {
      q: 'Do CRM and Marketing count as two modules?',
      a: 'No, they count as one. The two are paired in erp.io, so switching both on uses a single module slot on any plan with a module limit.',
    },
    {
      q: 'Which parts of Service can I use today?',
      a: 'Quotes, work orders, scheduling, time tracking, invoicing, reporting, checklists and team permissions are live. Parts inventory, card payments, customer and bike records, customer texts and accounting sync are on the Service roadmap, and payments are recorded by hand today.',
    },
    {
      q: 'Is there a phone app?',
      a: 'The Service field app is web only: an installable app that runs in the browser and keeps working with no signal, which is new, with the camera and signature capture in the browser. There is no App Store or Play Store app, and none is planned.',
    },
  ],
  related: ['/pricing', '/roadmap', '/product/service-checklists', '/platform/phony'],
}

export const platformPagesA: ContentPage[] = [
  // ─────────────────────────────────────────────────────────── Phony
  {
    slug: 'phony',
    title: 'Phony: an AI that picks up the shop phone',
    metaTitle: 'Phony: AI receptionist for bike shops | bike.co',
    metaDescription:
      'Phony answers your shop phone and website chat, routes calls to the counter, books callbacks and follows up with fleet and corporate buyers. $0.12 a minute.',
    eyebrow: 'Platform / Phony',
    lede:
      'Phony answers the calls you cannot get to with a bleed kit in your hand, and works the website visitors who could turn into fleet and corporate accounts. It runs in the same erp.io workspace as Service.',
    status: 'suite',
    visual: 'phony-call',
    icon: 'phone',
    summary: 'AI receptionist and AI sales developer on your phone line and website.',
    sections: [
      {
        kind: 'prose',
        heading: 'Two jobs, one agent',
        body: [
          'Phony is the erp.io module for conversations: website visitor intelligence, AI chat, AI voice on the web and on the phone, and warm handoff to a person. For a bike shop it does two jobs. The first is the receptionist: the phone rings on a Saturday in May, nobody at the counter is free, and Phony answers. The second is the sales developer: somebody from a local employer is reading your fleet service page for the third time this week, and Phony notices, starts the conversation and gets the lead to you.',
          'It is one agent, not six. Chat on your site, voice in the browser, inbound calls, outbound follow-up calls and texting all run from the same knowledge and the same rules, so the agent does not describe your shop one way on the phone and another way in chat. You write down your hours, your labor rates, what a standard tune-up includes, how long wheel builds take and what you do not work on, and that is what it answers from.',
          'Every conversation ends with a recorded outcome: qualified, booked, callback, escalated, not a fit, opted out, and so on. That outcome is what the reports run on, and it is written to describe what actually happened, not what the agent hoped for.',
        ],
      },
      {
        kind: 'prose',
        heading: 'The receptionist: "is my bike ready?"',
        body: [
          'You set who answers first. During opening hours you can have the AI answer first, ring the counter first, or leave it to the AI alone. After hours you choose AI only, voicemail or a text back. You must also choose a fallback, and there is no option for "nothing": Phony will not let you save a set-up in which a caller ends up listening to silence. You set how long the counter phone rings before Phony steps in, and up to five numbers to try in order.',
          'When a rider calls, Phony answers from your knowledge base. It can tell them your hours, what a safety check covers, whether you service a given motor system if you have written that down, and roughly what a job costs if you publish prices. When the caller needs a person, it hands over with a summary, so the mechanic who picks up does not start from "sorry, who is this?". When nobody is free it books a real callback for a window the caller chose, and Phony places that call when the time comes. If it cannot answer twice, or the caller is upset, or money is being discussed concretely, it escalates.',
          'Here is the honest part. Phony cannot yet look up a repair and say "your bike is ready". Service work orders are live, but there is no link from Phony into them yet, and Service has no bike record to match a caller to. Today it takes the caller name and number, notes the bike, and either transfers them to the counter or books the callback. The Service plan has Phony calling Service availability and booking, and Service publishing an API and agent tools. Once that link is built, it is what lets Phony answer "is my bike ready?" from the repair itself, and book a drop-off slot once online booking exists.',
        ],
      },
      {
        kind: 'features',
        heading: 'What Phony does today',
        intro: 'These are live in the Phony module now. The last two depend on Service connections that are on the roadmap.',
        items: [
          { title: 'Answers calls and chat', body: 'Inbound calls on your number, a chat widget on your website and voice in the browser, all from one knowledge base you write and correct.', icon: 'phone', status: 'suite' },
          { title: 'Call routing with a fallback', body: 'AI first, counter first or AI only, separate after-hours rules, and a mandatory fallback of voicemail, callback or text back.', icon: 'route', status: 'suite' },
          { title: 'Warm handoff', body: 'Transfers to a person with a summary of who is calling and what they asked. Transfers run $0.04 a minute on Phony telephony.', icon: 'team', status: 'suite' },
          { title: 'Real callbacks', body: 'Books a callback in the window the caller asked for and places the call then, instead of promising one nobody makes.', icon: 'calendar', status: 'suite' },
          { title: 'Lead alerts and CRM logging', body: 'Emails the people you name about a new lead and pushes the contact and the call into the erp.io CRM.', icon: 'crm', status: 'suite' },
          { title: 'Visitor intelligence', body: 'Works out which companies are on your site, scores intent from what they read, and can start a chat or a call when the score justifies it.', icon: 'search', status: 'suite' },
          { title: 'Repair status lookups', body: 'Answering "is my bike ready?" from the work order. Service jobs are live; the Phony link is not built.', icon: 'kanban', status: 'roadmap' },
          { title: 'Booking drop-off slots', body: 'Booking a repair against bench capacity. Needs Service availability and booking.', icon: 'wrench', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'The sales developer: fleet and corporate accounts',
        body: [
          'Most shop revenue walks in the door. The accounts that change a year usually do not: a delivery company with forty e-bikes, a campus bike share, a corporate wellness program, a hotel with a rental fleet. Those buyers research quietly, and they rarely call first.',
          'Phony identifies the companies visiting your site where it can, enriches the visit into a person or company, and scores intent from what they look at. When someone from a real business keeps coming back to your fleet page, the chat can open with a line written for that visit, and Auto connect can offer a call while they are still on the page when the score is high enough. Whatever they leave, a name, an email or a phone number, goes to the people you chose and into the CRM.',
          'Outbound calling is held to consent. Phony follow-up calls run only where consent allows them, and the strongest case is the callback someone asked for. If someone asks not to be contacted, on any channel, Phony records the opt-out and stops. For list-based outreach to fleet buyers by email and LinkedIn, the Marketing module has an Outbound Engine that feeds the same CRM.',
        ],
      },
      {
        kind: 'visual',
        visual: 'fleet',
        heading: 'Why fleet leads are worth chasing',
        caption:
          'A fleet customer is dozens of bikes due for service on a schedule. Phony finds and qualifies these accounts today; the fleet service list shown here is on the Service roadmap.',
      },
      {
        kind: 'table',
        heading: 'What it costs',
        columns: ['Item', 'Rate'],
        rows: [
          ['Phony module', 'Counts as one module on your plan'],
          ['Call time with the AI agent', '$0.12 per minute, speech, model and voice included'],
          ['Warm transfer to a person', '$0.04 per minute on Phony telephony, nothing on your own carrier'],
          ['Telephony', 'Billed at carrier cost, never marked up'],
        ],
        note: 'The per-minute rate is the same on every plan. A bigger plan buys more people and modules, not a cheaper minute.',
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What Phony can and cannot do for a bike shop today',
        body:
          'Today Phony answers, routes, transfers, books callbacks and logs calls to the CRM. It cannot yet read a repair status or book a slot on your bench: the link from Phony to Service work orders is not built, and online booking is on the Service roadmap. You can keep your existing number and forward it to Phony, buy one through it, or port one.',
        href: '/roadmap',
        cta: 'See the Service roadmap',
      },
    ],
    faqs: [
      {
        q: 'Can Phony tell a customer their bike is ready?',
        a: 'Not yet. Service work orders are live, but Phony cannot read them; that link is on the roadmap. Today Phony takes the details and transfers the caller to the counter or books a callback.',
      },
      {
        q: 'Do I have to change my shop phone number?',
        a: 'No. You can keep your number with your current provider and forward it to Phony, which is instant and reversible. You can also buy a new number through Phony or port your existing one, which takes days.',
      },
      {
        q: 'How much does Phony cost per call?',
        a: 'Phony bills $0.12 per minute of call time on every plan, with speech, model and voice included. Warm transfers to a person are $0.04 a minute on Phony telephony and free on your own carrier, and telephony is billed at carrier cost.',
      },
      {
        q: 'What happens if the AI cannot answer a question?',
        a: 'It escalates to a person. Phony hands over the first time a caller asks for a human, after it has failed to answer twice, when the caller is upset, or when money is being discussed concretely. If nobody is free it books a callback.',
      },
      {
        q: 'Will Phony cold-call people for me?',
        a: 'No. Outbound calls run only where consent allows them, such as a callback the person asked for or a visitor who is on your site and accepts a call. Anyone who asks not to be contacted is suppressed on every channel.',
      },
    ],
    related: ['/product/ai-receptionist', '/platform/crm', '/solutions/rental-fleet', '/pricing'],
  },

  // ─────────────────────────────────────────────────────────── CRM
  {
    slug: 'crm',
    title: 'CRM for riders, fleets and sponsors',
    metaTitle: 'CRM for bike shops: riders, fleets, sponsors | bike.co',
    metaDescription:
      'The erp.io CRM holds every rider, fleet manager and sponsor: contacts, companies, pipeline, sequences, booking links and automations.',
    eyebrow: 'Platform / CRM',
    lede:
      'The CRM is where the people and companies you work with live. Service is designed to link to them rather than keep its own copy, so a rider is one record whether they called, booked or signed.',
    status: 'suite',
    visual: 'suite-grid',
    icon: 'crm',
    summary: 'Contacts, companies, pipeline, sequences and automations.',
    sections: [
      {
        kind: 'prose',
        heading: 'Who the CRM is for in a bike shop',
        body: [
          'A bike shop has more relationships than a till suggests. There is the rider who brings the same gravel bike in every spring. There is the triathlon club that sends fifteen members before race season. There is the operations manager at the delivery company whose cargo bikes are due every six weeks, the brand rep, the event sponsor and the local employer running a bike-to-work scheme. A POS customer list holds names and phone numbers. It does not hold a deal, a follow-up date or who said what on the last call.',
          'The erp.io CRM does. It keeps contacts and companies, custom fields, tags, segments and smart lists, a sales pipeline with stages, tasks, and an inbox per person that gathers their conversation history. For a shop, that means the fleet contract you are chasing sits in a pipeline stage with a next step and an owner, not on a sticky note by the phone.',
          'The Service plan is explicit about this split: customers, contacts, companies, tags, lead source and the sales pipeline belong to the CRM. Service will store a link to the CRM person or company and read from there. It will not keep a second customer table that has to be kept in step by hand.',
        ],
      },
      {
        kind: 'features',
        heading: 'What the CRM does today',
        items: [
          { title: 'Contacts and companies', body: 'People and the businesses they belong to, with custom fields, tags, segments and smart lists.', icon: 'crm', status: 'suite' },
          { title: 'Pipeline and tasks', body: 'Deals in stages with owners and next steps, for fleet contracts, sponsorships and corporate programs.', icon: 'kanban', status: 'suite' },
          { title: 'Sequences', body: 'Multi-step follow-ups where each step is an email, a text or a call. Texts need a registered sending number.', icon: 'text', status: 'suite' },
          { title: 'Booking links', body: 'A public page where someone picks a meeting time from the availability you set.', icon: 'calendar', status: 'suite' },
          { title: 'Automations', body: 'Workflows triggered by a new contact, a tag, a form, a reply, a booked appointment or a pipeline stage change.', icon: 'bolt', status: 'suite' },
          { title: 'Leads from Phony', body: 'Callers and chat visitors Phony captures arrive as contacts, with the call logged as activity against them.', icon: 'phone', status: 'suite' },
          { title: 'Repairs on the customer record', body: 'Service jobs and bike history linked to the CRM person. Service jobs are live but store the customer as typed text; the link and bike records are on the roadmap.', icon: 'bike', status: 'roadmap' },
          { title: 'Service events as triggers', body: 'A finished job or an approved quote firing a CRM automation. Quotes and jobs are live in Service; the events to the CRM are on the roadmap.', icon: 'link', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'How it connects to Service',
        body: [
          'Service is designed to read and link CRM records through the same cross-module link the other erp.io modules use. Today a Service job belongs to a site, which stores an address and the customer company as typed text. The plan is for a work order to point at a CRM person and a fleet job at a CRM company. Service will own what the CRM has no concept of: the bikes themselves, the service locations for a mobile van, and the repair history.',
          'Automations are planned the same way. Service will emit events such as a job completed or a quote approved to an outbox, and the CRM workflow engine will act on them: a thank-you email two days after pickup, a reminder when a fleet bike comes due, a task for the service manager when a quote sits unapproved. The CRM workflow engine is live today. The Service events that will feed it are on the roadmap.',
          'One piece is partly built. Service already queues a record when a checklist is submitted, so the CRM can hear about it, and holds those records safely until the CRM endpoint that receives them exists. That endpoint is not built yet, so checklist submissions do not show up in the CRM today.',
        ],
      },
      {
        kind: 'visual',
        visual: 'bike-record',
        heading: 'The person in the CRM, the bike in Service',
        caption:
          'The design: the rider and their contact history live in the CRM, the bike, serial and repairs live in Service. The bike record shown here is on the Service roadmap.',
      },
      {
        kind: 'prose',
        heading: 'Using it well in a shop',
        body: [
          'Keep the pipeline for the work that is actually a sale: fleet service contracts, corporate programs, team and club deals, event support. Walk-in repairs do not need a deal record, and forcing them into one is how CRMs end up abandoned by June.',
          'Use tags and smart lists to find the groups you actually market to: e-bike owners, riders who have not been in since last spring, club members. Use a sequence for a fleet lead that went quiet, with an email, a reminder task and a call a week later. Use a booking link for the fleet manager who wants twenty minutes to talk about a service schedule, so it does not take four emails to find a time.',
          'The CRM and Marketing count as one module on your plan, so running both costs you a single slot.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Live today, linked later',
        body:
          'The CRM is live and you can run your contacts, pipeline, sequences and automations in it now, and Phony already logs leads and calls into it. Linking Service repairs, bikes and events to CRM records is on the Service roadmap, and checklist submissions do not reach the CRM yet.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
    ],
    faqs: [
      {
        q: 'Will my repair customers show up in the CRM?',
        a: 'Not automatically yet. Service jobs store the customer as typed text, and linking them and bikes to CRM contacts is on the Service roadmap. Today you add or import contacts in the CRM directly, and Phony adds the callers and chat visitors it captures.',
      },
      {
        q: 'Does the CRM send text messages?',
        a: 'Sequence steps can be an email, a text or a call. Texting needs a sending number registered for business messaging, and email is the default channel for every step.',
      },
      {
        q: 'Do CRM and Marketing use up two modules on my plan?',
        a: 'No. They are paired and count as one module slot on every plan with a module limit.',
      },
      {
        q: 'Can customers book time with me from the CRM?',
        a: 'Yes, for meetings. The CRM has public booking links where someone picks a time from the availability you set. Booking a repair against bench capacity is a separate Service feature on the roadmap.',
      },
      {
        q: 'Where will bike serial numbers and service history live?',
        a: 'In Service, linked to the CRM person. The CRM keeps the rider and their contact history; Service is planned to hold the bikes, serials and repairs. The bike record is on the Service roadmap.',
      },
    ],
    related: ['/product/customer-bike-records', '/platform/marketing', '/platform/phony', '/solutions/rental-fleet'],
  },

  // ─────────────────────────────────────────────────────────── Marketing
  {
    slug: 'marketing',
    title: 'Marketing that runs while you wrench',
    metaTitle: 'Marketing for bike shops: reviews, SEO, social | bike.co',
    metaDescription:
      'erp.io Marketing runs AI agents for local SEO, Google Business Profile, review requests and replies, social posts, email and a weekly report. You approve.',
    eyebrow: 'Platform / Marketing',
    lede:
      'Marketing is a team of AI agents for the jobs a shop owner never gets to: the Google profile, review replies, the blog, social posts and a report on what worked. You approve what goes out.',
    status: 'suite',
    visual: 'reports',
    icon: 'megaphone',
    summary: 'AI agents for reviews, local SEO, social, email and reporting.',
    sections: [
      {
        kind: 'prose',
        heading: 'The marketing a busy shop skips',
        body: [
          'Most independent shops live on word of mouth and a Google listing. The listing has photos from four years ago, a question from March nobody answered, and eleven reviews that never got a reply. The Instagram account went quiet the week the spring rush started. None of that is for lack of caring; it is because the person who would do it is also the person on the stand.',
          'erp.io Marketing splits that work into agents, each with one job and a schedule. There are agents across content and publishing, social, audio and video, SEO, link building, paid media, lifecycle email and reviews, analytics and reporting, and an outbound engine. You switch on the ones you want, connect the accounts they need, and review what they draft.',
          'The rule that matters for a shop: the agents that speak for you do not send on their own. Review replies require approval. The inbox responder never sends autonomously. What reaches the public is something you read first.',
        ],
      },
      {
        kind: 'features',
        heading: 'Agents a bike shop will use',
        items: [
          { title: 'Local SEO and Google Business Profile', body: 'Weekly profile posts, drafted review replies, Q&A management and a report on where your name, address and phone disagree across directories.', icon: 'pin', status: 'suite' },
          { title: 'Review Engine', body: 'Asks for reviews at the right moment, watches review sites and drafts replies to every review, including the bad ones. Every reply needs approval.', icon: 'star', status: 'suite' },
          { title: 'Blog and on-site publishing', body: 'Topic planning, blog drafts and refreshes of old posts, published to your site when you approve.', icon: 'text', status: 'suite' },
          { title: 'Social posting', body: 'Drafts for LinkedIn, X, Facebook and Instagram. Nothing posts until you approve it.', icon: 'megaphone', status: 'suite' },
          { title: 'Email marketing', body: 'Broadcasts and drip emails, built in your email provider or sent through the erp.io CRM, only after you approve them.', icon: 'chat', status: 'suite' },
          { title: 'Weekly report and anomaly watch', body: 'A written weekly report from Google Analytics, Search Console and Google Ads, and an alert when a number moves outside its normal range.', icon: 'trend', status: 'suite' },
          { title: 'Review request at pickup', body: 'Asking for a review the moment a repair is paid and collected. Needs Service job-completed events.', icon: 'check', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Reviews, where a shop wins or loses',
        body: [
          'For a repair shop, reviews are the storefront. Riders searching "bike repair near me" choose between three map pins, and they read the most recent reviews and how the owner replied. A calm, specific reply to a one-star review about a slow turnaround does more than ten five-star ones.',
          'The Review Engine drafts that reply for you: it acknowledges what happened, keeps it short and avoids arguing with the customer in public. You edit and approve it. The Local SEO agent handles the rest of the Google profile, posting weekly and answering the questions people leave on the listing, again as drafts.',
          'The best moment to ask for a review is at pickup, when the bike shifts cleanly for the first time in a year. Today the Review Engine asks at moments you define from what Marketing and the CRM know. Tying the request to the moment Service marks a repair collected is designed in the Service plan, which has Service emitting job-completed events for Marketing to act on, and that is on the roadmap.',
        ],
      },
      {
        kind: 'visual',
        visual: 'suite-grid',
        heading: 'Marketing next to Service and the CRM',
        caption:
          'Marketing reads your lists from the CRM and will act on Service events such as a completed job. The CRM link is live; the Service events are on the roadmap.',
      },
      {
        kind: 'prose',
        heading: 'Beyond the listing',
        body: [
          'If you want to grow the fleet and corporate side of the shop, the Outbound Engine finds and scores prospects, then runs email and LinkedIn outreach and pushes replies into the CRM. It pairs well with Phony, which works the same buyers when they land on your site.',
          'If you run ads, there are agents for Google Ads and Meta Ads copy and creative, and for conversion experiments on your landing pages. If you want to be found in AI search answers as well as Google, the AI-Search Visibility agent tracks whether your shop comes up and why.',
          'Marketing and the CRM count as one module between them on your plan. Most shops start with local SEO, reviews and the weekly report, and add the rest once those are running without them.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is connected today',
        body:
          'Marketing is live and its agents run now against the accounts you connect. It shares contacts with the CRM. It does not yet hear from Service, so it cannot yet trigger on a repair being finished or collected; those Service events are on the roadmap.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
    ],
    faqs: [
      {
        q: 'Will the AI reply to reviews without asking me?',
        a: 'No. The Review Engine drafts replies to every review, and every reply requires your approval before it is posted. The inbox responder also keeps everything in drafts.',
      },
      {
        q: 'Can Marketing ask for a review when a customer picks up their bike?',
        a: 'Not yet from the repair itself. That needs Service to emit a job-completed event, which is designed and on the roadmap. Today you set when review requests go out from what Marketing and the CRM know.',
      },
      {
        q: 'Does it manage my Google Business Profile?',
        a: 'Yes. The Local SEO agent drafts weekly profile posts and review replies, manages questions and answers, and reports where your shop name, address and phone number disagree across directories.',
      },
      {
        q: 'Which social networks can it post to?',
        a: 'There are posting agents for LinkedIn, X and Meta, plus agents for YouTube and short-form video scripts. Nothing posts until you approve it.',
      },
      {
        q: 'Is Marketing a separate module from the CRM on my plan?',
        a: 'They count as one. Marketing and the CRM are paired and share a single module slot on every plan with a module limit.',
      },
    ],
    related: ['/platform/crm', '/platform/phony', '/solutions/small-shops', '/pricing'],
  },

  // ─────────────────────────────────────────────────────────── Client Portal
  {
    slug: 'client-portal',
    title: 'Client Portal: a signed-in space for each customer',
    metaTitle: 'Client Portal for bike shops and fleets | bike.co',
    metaDescription:
      'The erp.io Client Portal gives each customer a signed-in space for orders, invoices they can pay online, shared files and support tickets.',
    eyebrow: 'Platform / Client Portal',
    lede:
      'The Client Portal gives a customer company its own signed-in space: their orders, their invoices with a pay button, shared files and a place to ask for help. For a bike shop, it earns its keep first with fleet and corporate accounts.',
    status: 'suite',
    visual: 'portal',
    icon: 'portal',
    summary: 'Orders, invoices, files and support for each customer.',
    sections: [
      {
        kind: 'prose',
        heading: 'What the portal is',
        body: [
          'The erp.io Client Portal is a customer-facing workspace. Your customers sign in to it, not to app.erp.io, and they see only their own company: orders with a message thread on each, invoices they can view, download and pay, files you have shared with them, subscriptions, and support tickets that are kept separate from order threads. Several people at one customer company can have access, managed from the company profile.',
          'It is run from a staff side where you manage clients and their contacts, services, orders and invoices, with named permissions and an audit log. Pay links are issued from the invoice, and an invoice still in draft can never be paid, so a customer does not land on a dead link.',
          'The portal was built for service businesses whose clients want a single place to see what they have ordered, what they owe and what is happening. That is exactly the shape of a fleet account.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Where it fits a bike shop today',
        body: [
          'Think about the delivery company with thirty cargo e-bikes, or the university with a bike-share fleet. Their operations manager does not want a text per bike. They want to see which orders are open, download the invoices from last month for their accounts team, pay online, and raise a problem without phoning the shop. The portal does that today: you set up the company, invite their people, and put orders, invoices and files in front of them.',
          'For walk-in riders, the portal is less useful on its own today, because what a rider wants to see is their repair: the quote, the checklist, the photos of the worn cassette, the invoice. Quotes, visits, checklists and invoices already exist in Service, but none of them has a customer-facing view yet. The Service plan has Service exposing quote, visit and invoice views, and booking, to the portal, and that flow is on the roadmap.',
          'So the honest split is: fleet and corporate accounts can use the portal now, with orders and invoices you set up in it. Riders seeing their own repairs, approving quotes and paying for a job will come when the Service views and card payments are built.',
        ],
      },
      {
        kind: 'features',
        heading: 'Portal features',
        items: [
          { title: 'Customer sign-in', body: 'Each customer company signs in to its own space and sees only its own records.', icon: 'shield', status: 'suite' },
          { title: 'Orders with threads', body: 'Every order has its status and a message thread between you and the customer.', icon: 'tag', status: 'suite' },
          { title: 'Invoices and online payment', body: 'Customers view, download and pay invoices, and get a receipt once a payment clears.', icon: 'invoice', status: 'suite' },
          { title: 'Files', body: 'Share documents with a customer, such as a fleet service schedule or an inspection summary.', icon: 'box', status: 'suite' },
          { title: 'Support tickets', body: 'A place for a customer to ask a question, separate from their order threads.', icon: 'chat', status: 'suite' },
          { title: 'Several users per customer', body: 'Invite more than one person at a customer company, such as the fleet manager and their accounts team.', icon: 'team', status: 'suite' },
          { title: 'Repair quotes and approval', body: 'Riders approving a Service quote in the portal. On the Service roadmap.', icon: 'quote', status: 'roadmap' },
          { title: 'Repair history and checklists', body: 'Riders seeing their bike, past work and checklist PDFs from Service. On the Service roadmap.', icon: 'clipboard', status: 'roadmap' },
        ],
      },
      {
        kind: 'visual',
        visual: 'invoice',
        heading: 'An invoice a fleet manager can pay',
        caption:
          'Portal invoices carry a pay button today. Service invoices are live and are billed straight from the finished job, but they carry no pay link or QR code and do not appear in the portal yet; both are on the roadmap.',
      },
      {
        kind: 'prose',
        heading: 'How it will connect to Service',
        body: [
          'The Service plan names the portal as the customer self-service hub. Service already owns the work, the quotes and the invoices. The plan is for it to expose views of them to the portal: a rider signs in and sees the quote for their headset replacement, approves it, and later sees the invoice and pays it. Quote signatures will go through Sign, and payments through Stripe inside Service.',
          'Booking is planned the same way. Service will own requests, bookable services and availability rules, and the portal will be one of the places a customer books from, next to a request form on your website and Phony on the phone.',
          'Until then, the portal and Service run side by side in the same workspace. The checklists you complete in Service produce a PDF you can share with a customer, including as a file in the portal.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Portal now, repairs in the portal later',
        body:
          'The Client Portal is live: customers can sign in, see orders, pay invoices, download files and open tickets. Service work orders, quotes and invoices are live, but showing them to customers in the portal is on the Service roadmap.',
        href: '/product/customer-portal',
        cta: 'See the customer portal plan',
      },
    ],
    faqs: [
      {
        q: 'Can my customers see their repair status in the portal?',
        a: 'Not yet. Service work orders and quotes are live, but the portal cannot show them; that link is on the roadmap. Today the portal shows orders, invoices, files and tickets that you set up in the portal itself.',
      },
      {
        q: 'Who is the portal best for right now?',
        a: 'Fleet, rental and corporate accounts. A company with many bikes and an accounts team gets real value from one place to see orders, download invoices, pay online and raise issues.',
      },
      {
        q: 'Can customers pay invoices in the portal?',
        a: 'Yes. Customers can view, download and pay issued invoices, and get a receipt once a payment clears. Draft invoices cannot be paid.',
      },
      {
        q: 'Do customers need an erp.io account?',
        a: 'No. Customers sign in to the portal itself, not to app.erp.io, and they only ever see their own company records.',
      },
      {
        q: 'Can several people at one customer use it?',
        a: 'Yes. You can give access to more than one person at a customer company, such as a fleet manager and their finance contact.',
      },
    ],
    related: ['/product/customer-portal', '/solutions/rental-fleet', '/platform/sign', '/platform/accounting'],
  },

  // ─────────────────────────────────────────────────────────── Accounting
  {
    slug: 'accounting',
    title: 'Accounting in the same workspace as the bench',
    metaTitle: 'Accounting for bike shops: ledger, bank feeds | bike.co',
    metaDescription:
      'erp.io Accounting is a double-entry ledger with invoices, bills, bank feeds, reconciliation, a nightly close check and standard reports, next to Service.',
    eyebrow: 'Platform / Accounting',
    lede:
      'Accounting is a full double-entry ledger that lives in the same workspace as Service. Invoices, bills, bank feeds, reconciliation, the close and the reports, under the login your mechanics already use.',
    status: 'suite',
    visual: 'reports',
    icon: 'ledger',
    summary: 'Ledger, AR and AP, bank feeds, reconciliation and reports.',
    sections: [
      {
        kind: 'prose',
        heading: 'Books, not a bolt-on',
        body: [
          'A lot of shops run their books in a separate accounting package and move numbers across by hand at the end of the month. erp.io Accounting is the ledger inside the suite: a chart of accounts, journal entries that post and void properly, customers and invoices, vendors and bills, payments against both, and aging for what you are owed and what you owe.',
          'Money is stored as whole cents, never as a floating-point number, and every change is written to a hash-chained audit trail that records what changed and who changed it. That is the part of accounting that is easy to get subtly wrong, and it is the part the module is built around.',
          'It is designed to be the ledger Service posts into. Service invoicing is live, but it does not post here yet. When the accounting sync is built, an invoice issued on a repair, a payment received, a refund and the cost of parts used will each post to Accounting through a write API, once, with no double counting.',
        ],
      },
      {
        kind: 'features',
        heading: 'What Accounting does today',
        items: [
          { title: 'Ledger and journal', body: 'Chart of accounts, journal entries, posting and voiding, and a trial balance.', icon: 'ledger', status: 'suite' },
          { title: 'Receivables and payables', body: 'Customers, invoices, vendors and bills, with payments that post automatically and aging on both sides.', icon: 'invoice', status: 'suite' },
          { title: 'Bank feeds and CSV', body: 'Live transactions from connected banks through Plaid, with CSV import as the fallback.', icon: 'card', status: 'suite' },
          { title: 'Posting rules and reconciliation', body: 'Rules that turn bank activity into entries, and reconciliation treated as a running position rather than a monthly chore.', icon: 'reconcile', status: 'suite' },
          { title: 'Nightly close checks', body: 'The month-end close as a list of checks that run every night; a period can close when every one passes.', icon: 'check', status: 'suite' },
          { title: 'Standard reports', body: 'Profit and loss, balance sheet, cash flows, aging, sales by customer, expenses by vendor, sales tax liability and more, exported to CSV, XLSX or PDF.', icon: 'chart', status: 'suite' },
          { title: 'Fixed assets and schedules', body: 'Depreciation for the van and the shop equipment, and schedules for prepaids and deferred revenue.', icon: 'stack', status: 'suite' },
          { title: 'Repair invoices posting from Service', body: 'Service invoices, payments and parts cost posting to the ledger. On the Service roadmap.', icon: 'wrench', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'What it means for a bike shop',
        body: [
          'Your two biggest suppliers send bills every week, and some offer a discount for paying early. Those bills go into Accounting as bills against a vendor, and the payables aging tells you what is due this week. Your bank account feeds in overnight, posting rules handle the recurring lines like the card processor deposit and the rent, and the rest waits for you to categorize.',
          'The fixed-asset register holds the things that wear out slowly: the service van, the wheel-truing and frame-facing tools, the shop refit. Depreciation schedules run on their own. Deferred revenue schedules suit prepaid service plans, where a rider pays in March for a year of tune-ups and the income belongs to the months the work happens.',
          'At the end of the month, the close is not a pile of tasks. It is a list of checks, such as the bank being reconciled to zero difference, that have been running every night already. When they all pass, the month can close.',
        ],
      },
      {
        kind: 'visual',
        visual: 'invoice',
        heading: 'From repair to ledger',
        caption:
          'The planned flow: Service bills the finished job and the posting lands in Accounting once. Service invoicing is live; pay links, the sync and the Accounting write API are on the roadmap.',
      },
      {
        kind: 'prose',
        heading: 'How Service will connect',
        body: [
          'The Service plan settles who owns what. Service owns repair invoices, and will own deposits and statements, because they come from the work. Accounting will own the ledger, and gets a write endpoint so Service can post invoice issued, payment received, refund, write-off and parts cost as they happen. Each posting carries a key so it lands exactly once.',
          'That write endpoint does not exist yet; the public Accounting API is read-only today, and building the write side is a prerequisite for Service invoices posting to the ledger. Pey then sits across both: it matches the payments Service records to the deposits that show up in your bank feed.',
          'Two limits worth knowing. Invoices raised in Accounting itself are records in the ledger: Accounting does not email them, produce a PDF for the customer or attach a pay link. And sales tax is entered as a figure on the invoice rather than calculated from a rate table. Service invoices do not send anything yet either: marking one sent changes its status, with no email or PDF for the customer. Customer delivery and card payment are planned inside Service.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'The ledger is live, and so are repair invoices; the link is not',
        body:
          'You can run your books in Accounting today: ledger, bills, bank feeds, reconciliation, the close and reports. Service invoices are live too, but they do not post to the ledger; that needs the accounting sync and an Accounting write API, both on the roadmap.',
        href: '/product/accounting-sync',
        cta: 'See accounting sync',
      },
    ],
    faqs: [
      {
        q: 'Can I move my books over from QuickBooks?',
        a: 'Yes. Accounting imports history from exports out of QuickBooks, Xero, FreshBooks and NetSuite: the journal, the account list and a trial balance to check the result against.',
      },
      {
        q: 'Will my repair invoices post to the books automatically?',
        a: 'Not yet. Service invoices are live, but the sync to Accounting and the write API it will post through are on the roadmap. Today you record repair income in Accounting yourself, for example from the Service monthly report.',
      },
      {
        q: 'Does Accounting connect to my bank?',
        a: 'Yes. Bank feeds come in through Plaid, and CSV import covers banks Plaid cannot reach. Each bank account is mapped to a ledger account before it syncs.',
      },
      {
        q: 'Can Accounting send invoices to customers?',
        a: 'No. Accounting invoices are ledger records and are not emailed, turned into a customer PDF or given a pay link. Sending and collecting on repair invoices is planned in Service.',
      },
      {
        q: 'Does it calculate sales tax?',
        a: 'No. Sales tax is entered as an amount on each invoice, and a sales tax liability report totals it. There is no tax rate engine.',
      },
    ],
    related: ['/product/accounting-sync', '/platform/pey', '/platform/cfo', '/product/invoicing'],
  },

  // ─────────────────────────────────────────────────────────── CFO
  {
    slug: 'cfo',
    title: 'CFO: plan for May and for January',
    metaTitle: 'CFO for bike shops: cash forecasts and budgets | bike.co',
    metaDescription:
      'erp.io CFO gives a bike shop cash-flow forecasts with base, upside, downside and stress scenarios, budgets against actuals, and KPIs.',
    eyebrow: 'Platform / CFO',
    lede:
      'A bike shop makes most of its money in a few months and pays rent in all twelve. CFO is where you forecast cash through the quiet season, set a budget and see how the year is tracking against it.',
    status: 'suite',
    visual: 'reports',
    icon: 'trend',
    summary: 'Cash forecasts, scenarios, budgets and KPIs.',
    sections: [
      {
        kind: 'prose',
        heading: 'The seasonal cash problem',
        body: [
          'Every shop owner knows the shape of the year. April to August the bench is booked out a week, the pre-season orders are arriving, and cash looks fine. Then November comes, service drops by half, the distributor bills for the spring pre-order land, and payroll does not care what month it is.',
          'The CFO module is built for that conversation. It gives you a cash-flow forecast by week or by month, built from what you expect to collect, what you have to pay, debt service and the assumptions you set for payroll, taxes, equipment and owner draws. It highlights the week cash dips below the minimum you set, before you get there.',
          'It is designed with an outside professional in mind as well. CFO is built so a fractional CFO, bookkeeper or accountant can work in the same space as the owner, and AI suggestions are drafts until a person accepts them.',
        ],
      },
      {
        kind: 'features',
        heading: 'What CFO does today',
        items: [
          { title: 'Cash-flow forecasting', body: 'Weekly or monthly projections built from receivables, payables, debt service and your own assumptions, with the minimum-cash breach highlighted.', icon: 'trend', status: 'suite' },
          { title: 'Scenarios', body: 'Base, upside, downside and stress versions of the same forecast, compared side by side.', icon: 'stack', status: 'suite' },
          { title: 'Budgets and forecasts', body: 'Annual and monthly budgets, reforecasts and rolling forecasts, versioned and approved, with budget against actual and material variances flagged.', icon: 'chart', status: 'suite' },
          { title: 'KPIs', body: 'A KPI dashboard driven by formulas you can read and adjust.', icon: 'bolt', status: 'suite' },
          { title: 'Month-end close and statements', body: 'A close engine and financial statements built from the books it holds.', icon: 'check', status: 'suite' },
          { title: 'QuickBooks Online connection', body: 'A QuickBooks Online adapter for shops whose books live there today.', icon: 'link', status: 'suite' },
          { title: 'Bench numbers in the forecast', body: 'Service labor and booked work feeding forecasts. Both exist in Service today; the feed into CFO is on the roadmap.', icon: 'wrench', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Scenarios a shop actually runs',
        body: [
          'The useful questions are specific. What happens to cash in February if spring pre-orders are twenty percent bigger than last year? What if the wet April people remember happens again and service volume slips a month? What if you hire a second mechanic in March instead of May?',
          'CFO keeps each of those as a scenario next to the base case: the upside, the downside and a stress case that asks what breaks first. You can compare them in one view and see which week cash goes below your floor in each. Budgets work the same way: build the year, lock an approved baseline, reforecast in June, and see actuals against both.',
          'One limit to know: the forecast does not yet learn seasonality from your history. You set the assumptions, and for a bike shop that means putting the seasonal curve in yourself, month by month. For most owners that is a twenty-minute job with the numbers from last year open beside it.',
        ],
      },
      {
        kind: 'visual',
        visual: 'compare-grid',
        heading: 'Base against stress',
        caption:
          'Two scenarios of the same cash forecast side by side, the way CFO compares them. The figures in any forecast are the assumptions you enter.',
      },
      {
        kind: 'prose',
        heading: 'How it relates to Service and Accounting',
        body: [
          'The Service plan leaves consolidated reporting and planning to CFO, and bench-level reports such as throughput, comebacks and technician time to Service itself. Service already tracks technician time and booked visits, and its monthly report shows what was invoiced, collected and outstanding. Those are the numbers that make a forecast sharper: a full bench in the second half of April is cash on the way. A feed from Service into CFO is not built yet, and parts are not tracked in Service at all.',
          'Today, CFO works from the books it holds and connects to QuickBooks Online through its accounting adapter. A direct feed from erp.io Accounting is not something we will promise here; check with us before you rely on it.',
          'If you have a lender, a partner or an accountant asking how the year looks, CFO is where you answer with a forecast rather than a feeling.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What CFO can see today',
        body:
          'CFO forecasts, budgets and reports from the financial data it holds, and connects to QuickBooks Online. It does not see Service repair data yet: jobs, hours and invoices live in Service, but the feed into CFO is on the roadmap. It also does not model seasonality from history on its own.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
    ],
    faqs: [
      {
        q: 'Can CFO forecast the slow winter months?',
        a: 'Yes. You build a weekly or monthly cash forecast from receivables, payables and your own assumptions, and CFO flags the weeks cash drops below the minimum you set. It does not learn seasonality from history yet, so you enter the seasonal assumptions yourself.',
      },
      {
        q: 'What scenarios can I compare?',
        a: 'Base, upside, downside and stress versions of the same forecast, side by side. Budgets can also be compared against actuals, prior periods and other scenarios.',
      },
      {
        q: 'Does CFO read my repair and bench numbers?',
        a: 'Not yet. Service has jobs, clocked hours and invoices today, but there is no feed from Service into CFO; that is on the roadmap. Enter the figures from the Service monthly report as assumptions for now.',
      },
      {
        q: 'Can my accountant use it with me?',
        a: 'Yes. CFO is designed for an outside professional such as a fractional CFO or bookkeeper to work alongside the business, with named permissions and a full audit trail.',
      },
      {
        q: 'Does the AI change my forecast?',
        a: 'No. AI can explain a forecast, suggest drivers and compare scenarios, but it cannot change an approved forecast, and its output is marked as AI-generated until a person accepts it.',
      },
    ],
    related: ['/platform/accounting', '/platform/pey', '/solutions/multi-location', '/product/reporting'],
  },

  // ─────────────────────────────────────────────────────────── Pey
  {
    slug: 'pey',
    title: 'Pey: know what every deposit was for',
    metaTitle: 'Pey for bike shops: match payments, take discounts | bike.co',
    metaDescription:
      'Pey matches bank transactions to the invoices and bills behind them, explains every mismatch, and ranks early-payment discounts from your suppliers.',
    eyebrow: 'Platform / Pey',
    lede:
      'Pey works out what each line in your bank account was for, matches it to the invoice or bill behind it, and tells you which supplier discounts are worth paying early for.',
    status: 'suite',
    visual: 'compare-grid',
    icon: 'reconcile',
    summary: 'Match bank lines to invoices and bills; rank early-pay discounts.',
    sections: [
      {
        kind: 'prose',
        heading: 'The question behind reconciliation',
        body: [
          'A deposit lands for an odd amount. Is that the fleet customer paying two invoices at once, short a bank fee? Is it the card takings from last week? A payment went out to a distributor for less than the bill. Was that the early-pay discount, or did someone short-pay by mistake? Answering those questions line by line is what eats a Friday afternoon.',
          'Pey does that work. It reads your obligations, the invoices you have issued and the bills you owe, and your bank transactions from the connected ledger. Then it matches each transaction to what it paid, classifies any difference, such as a payment short by a wire fee or one transfer settling two invoices, and explains every suggestion it makes.',
          'You confirm, reject or reopen a match. If Pey had nothing, you can match by hand or mark the line as having no invoice behind it. Where exactly one suggestion clears the confidence threshold, you can confirm a batch in one go.',
        ],
      },
      {
        kind: 'features',
        heading: 'What Pey does today',
        items: [
          { title: 'Match', body: 'Bank transaction to invoice or bill, with the discrepancy classified and the reasoning shown. Confirm, reject, reopen or match by hand.', icon: 'reconcile', status: 'suite' },
          { title: 'Bulk confirm', body: 'Confirm in one step where exactly one suggestion clears the confidence threshold.', icon: 'check', status: 'suite' },
          { title: 'Early-payment discounts', body: 'Discounts on your bills ranked against your own cost of capital. It recommends; it does not schedule payments.', icon: 'tag', status: 'suite' },
          { title: 'Connections', body: 'Connects to erp.io Accounting, syncs, and emails you once if a connection stops working.', icon: 'link', status: 'suite' },
          { title: 'Matching repair payments', body: 'Matching Service card and ACH payments to bank deposits. Needs Service payments, on the roadmap.', icon: 'card', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Supplier discounts for a parts-heavy shop',
        body: [
          'Shops buy a lot of parts and accessories, and some suppliers offer terms like a small discount for paying within ten days instead of thirty. On one bill that is a few dollars. Across a year of weekly bills it can be real money, but only if the cash to pay early costs you less than the discount is worth.',
          'Pey ranks those discounts against your own cost of capital and shows you which ones are worth taking and by when. It does not move any money and does not schedule a payment; it gives you the list, and you pay from wherever you pay today.',
          'That restraint is on purpose. Pey is built to recommend and to match, not to hold or send funds. Collecting and paying through Pey appear in its sidebar as coming soon, and they are not built.',
        ],
      },
      {
        kind: 'visual',
        visual: 'invoice',
        heading: 'One deposit, two invoices',
        caption:
          'A fleet customer pays two invoices in one transfer, short by a bank fee. Pey suggests the match and names the difference. The invoice shown, with a pay link, is the planned Service invoice; Service invoices today have no pay link.',
      },
      {
        kind: 'prose',
        heading: 'How it connects to Accounting and Service',
        body: [
          'Pey never writes journal entries. It reads from the connected ledger and queues what it concludes as events for the ledger to act on. Today its connector is erp.io Accounting, read through an organization-scoped API key; QuickBooks and Xero are planned later against the same model. Because the Accounting API is read-only today, those events show as undelivered in Pey until Accounting accepts them.',
          'The Service plan puts Pey in the payment chain: customers pay repair invoices through Stripe inside Service, the payments post to Accounting, and Pey matches them to the bank deposits. Service invoices are live, but payments against them are recorded by hand and nothing posts to Accounting yet, so today Pey matches what is already in Accounting.',
          'Pey keeps its own database, separate from the ledger it reads, and it refuses to sync a partial set of invoices rather than match against half the picture. That matters more than it sounds: matching against a truncated list does not fail loudly, it reports real payments as unexplained and sends someone hunting for problems that do not exist.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Where Pey fits in a shop week',
        body: [
          'Monday morning is when most owners look at the bank. With Pey, the list waiting for you is short: the matches it is confident about, ready to confirm in bulk, and the handful it could not explain, each with a reason. A bank charge nothing accounts for sits at the top instead of hiding in a spreadsheet.',
          'The discounts list is the other half. Before you pay the week of supplier bills, check which ones carry an early-payment discount that is worth more than the cash costs you, and which deadlines are this week. If a connection to the ledger breaks, Pey emails you once for that outage, not once an hour.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Pey matches; it does not move money',
        body:
          'Pey is live for matching and early-payment discount recommendations, against erp.io Accounting. It does not collect or pay anything. Matching Service repair payments needs card payments in Service and the accounting sync, both on the roadmap; Service invoices themselves are live.',
        href: '/product/payments',
        cta: 'See payments plan',
      },
    ],
    faqs: [
      {
        q: 'Does Pey pay my suppliers?',
        a: 'No. Pey recommends which early-payment discounts are worth taking and by when, but it does not schedule or send payments. Collect and Pay features are shown as coming soon and are not built.',
      },
      {
        q: 'Which accounting systems does Pey connect to?',
        a: 'erp.io Accounting today. QuickBooks and Xero are planned later, against the same model.',
      },
      {
        q: 'What happens when a payment does not match exactly?',
        a: 'Pey classifies the difference, for example a payment short by a bank fee or one transfer covering two invoices, and explains its suggestion. You confirm, reject or match it by hand.',
      },
      {
        q: 'Will Pey match my repair payments?',
        a: 'Not yet. Service invoices are live, but payments are recorded by hand and do not post to Accounting. When the accounting sync is built they will, and Pey will match them to your bank deposits.',
      },
      {
        q: 'Does Pey change my books?',
        a: 'No. Pey never writes journal entries. It queues what it concludes as events for the ledger, and the ledger stays the record.',
      },
    ],
    related: ['/platform/accounting', '/product/payments', '/platform/cfo', '/product/purchase-orders'],
  },

  // ─────────────────────────────────────────────────────────── Sign
  {
    slug: 'sign',
    title: 'Sign: agreements signed before the bike leaves',
    metaTitle: 'Sign for bike shops: waivers and fleet agreements | bike.co',
    metaDescription:
      'erp.io Sign sends rental agreements, waivers and fleet contracts for signature with consent, an identity check and a certificate of completion.',
    eyebrow: 'Platform / Sign',
    lede:
      'Sign gets documents signed: rental agreements, demo-ride waivers, fleet service contracts. It records consent, checks the signer, and produces a certificate of completion.',
    status: 'suite',
    visual: 'quote',
    icon: 'sign',
    summary: 'Waivers, rental and fleet agreements, signed and certified.',
    sections: [
      {
        kind: 'prose',
        heading: 'Paper a shop still chases',
        body: [
          'Even a service-first shop has paper. The rental agreement for the weekend e-bike hire. The demo-ride waiver. The fleet service contract with the delivery company, with their operations manager and their finance director both needing to sign. The storage agreement for the bike left over winter. Printing, scanning and emailing PDFs back and forth is slow, and a clipboard at the counter is easy to lose.',
          'erp.io Sign is document signing inside the suite. You upload a document, place the fields, and send it. Signers can be grouped so they sign in order: the fleet manager first, the finance director after. When one group finishes, the next is emailed automatically.',
          'You can also start a document without email. Sign gives you the signing links to hand over yourself, which suits a customer standing at the counter. Either way, the audit trail records how the link was delivered.',
        ],
      },
      {
        kind: 'features',
        heading: 'What Sign does today',
        items: [
          { title: 'Send for signature', body: 'Upload a PDF, place fields, and send by email or hand over the signing link yourself.', icon: 'sign', status: 'suite' },
          { title: 'Signing order', body: 'Group signers so each group signs in turn, and the next is emailed when the last one finishes.', icon: 'team', status: 'suite' },
          { title: 'Templates', body: 'Save the documents you send again and again, such as a rental agreement or waiver.', icon: 'clipboard', status: 'suite' },
          { title: 'Consent and identity check', body: 'Signers give electronic-signature consent, then confirm their name and the email the link was sent to before they see the document.', icon: 'shield', status: 'suite' },
          { title: 'Certificate of completion', body: 'A stamped final PDF and a certificate recording the signing events.', icon: 'check', status: 'suite' },
          { title: 'Inbox, sent and completed', body: 'See what is waiting on you, what is out with customers and what is done.', icon: 'box', status: 'suite' },
          { title: 'Quote signatures from Service', body: 'A Service repair quote sent for signature and returned to the work order when signed. On the Service roadmap.', icon: 'quote', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Rental and fleet shops',
        body: [
          'For a rental operator, Sign is a daily tool. Keep a rental agreement as a template, fill in the rider and the bike, and send it before pickup so the paperwork is done before they reach the counter. Every signed agreement is stored with its certificate, so when a scratched rental comes back you can find exactly what the rider agreed to.',
          'For fleet and corporate service contracts, the signing order matters. Put the person who agreed the scope first and the person who signs off the spend second, so neither signs a version the other has not seen.',
          'Sign does not write your agreements. If you need a waiver or a rental agreement drafted or checked, that is a job for a lawyer or for the erp.io Legal module, and Sign then gets it signed.',
        ],
      },
      {
        kind: 'visual',
        visual: 'fleet',
        heading: 'A rental fleet, every bike with a signed agreement',
        caption:
          'The goal for rental and fleet shops: every bike out on hire tied to a signed agreement. Sign handles the signing today; the fleet list shown is on the Service roadmap.',
      },
      {
        kind: 'prose',
        heading: 'How it will connect to Service',
        body: [
          'The Service plan uses Sign for two things: approving repair quotes and signing service agreements. When a mechanic finds more than the rider expected, say a worn cassette and chainrings as well as the chain, the quote goes out, the rider signs it, and Sign reports back to Service on completion so the work order moves on. Service quotes are live, but staff mark a quote approved or declined by hand today; sending it through Sign is on the roadmap.',
          'Today, Service checklists already capture a signature in the browser, which covers a lot of counter moments, such as a rider signing off a pre-ride safety check. Sign is for documents that need consent, an identity check and a certificate.',
        ],
      },
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Sign is live; quote signing from Service is not',
        body:
          'You can send agreements and waivers through Sign today, and Service quotes are live. Sending a Service quote for signature and returning it to the work order is on the Service roadmap. Signatures inside a Service checklist work now.',
        href: '/product/repair-quotes',
        cta: 'See repair quotes',
      },
    ],
    faqs: [
      {
        q: 'Can customers sign at the counter?',
        a: 'Yes. You can start a document without sending email and hand the signer their link directly, and the audit trail records that it was delivered by hand. They still go through the consent step and the identity check.',
      },
      {
        q: 'Can more than one person sign a fleet contract?',
        a: 'Yes. Signers are grouped and sign in order; when one group finishes, the next group is emailed their links automatically.',
      },
      {
        q: 'Does Sign write waivers or rental agreements for me?',
        a: 'No. Sign gets documents signed; it does not draft them. Have a lawyer or the erp.io Legal module help with the wording, then save it in Sign as a template.',
      },
      {
        q: 'Can a customer sign a repair quote from Service?',
        a: 'Not yet. Service quotes are live, but staff record the approval by hand; the plan is for quotes to go out through Sign and report back to the work order when signed. Signatures inside Service checklists work today.',
      },
      {
        q: 'What proof of signing do I get?',
        a: 'A completed, stamped PDF and a certificate of completion that records the signing events, including consent and the identity check for each signer.',
      },
    ],
    related: ['/solutions/rental-fleet', '/product/repair-quotes', '/platform/client-portal', '/product/service-checklists'],
  },
]
