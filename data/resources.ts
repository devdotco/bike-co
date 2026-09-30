import type { ContentPage } from '@/lib/types'

/**
 * /resources — free tools and templates for bike shop owners.
 * Checklist pages lead into the live checklist builder in Service.
 * Pricing, work order and labor pages lead into live quotes, work orders and
 * time tracking; job costing, bike records and payments stay roadmap.
 */

export const resourcesOverview: ContentPage = {
  slug: '',
  title: 'Free tools and templates for bike shops',
  metaTitle: 'Free Bike Shop Tools, Checklists & Templates | BIKE.co',
  metaDescription: 'Free bike shop resources: repair pricing calculator, tune-up, safety and e-bike checklists, a work order template and a labor rate guide.',
  eyebrow: 'Resources',
  lede: "Checklists, a pricing calculator and the math behind your labor rate. Written by people who have stood at a busy bench, free to print, copy and use in your shop.",
  status: 'live',
  visual: 'checklist',
  icon: 'clipboard',
  summary: 'Free checklists, templates and pricing tools for bike shops.',
  sections: [
    {
      kind: 'prose',
      heading: 'Why these exist',
      body: [
        "Most shops run on standards that live in one person's head. The senior mechanic knows what a proper tune-up includes, the owner knows roughly what a brake bleed should cost, and the counter staff pick it up by osmosis. That works until May, when you hire two seasonal mechanics, the queue is out the door, and every bike leaves the stand with a slightly different idea of what 'done' means.",
        "These resources are the written-down version. A tune-up checklist split into three tiers you can put on a menu board. A safety inspection that follows the M-check so nobody skips the headset. An e-bike diagnostic sheet that covers battery, charger, wiring, motor and sensors before anyone starts guessing. A work order template with every field a repair ticket needs. And two pieces of arithmetic most shops never do on paper: what your labor rate needs to be, and how to price a job from labor, parts and markup.",
        "Everything here is free. Print it, copy it into your own system, change it to suit your bench. You do not need an account to use any of it.",
      ],
    },
    {
      kind: 'features',
      heading: "What's here",
      intro: 'Six resources, each one a full page you can work from.',
      items: [
        { title: 'Repair pricing calculator', body: 'Enter labor minutes, your hourly rate, parts cost, markup and sales tax. Get a quote, and the reasoning behind markup versus margin.', icon: 'quote' },
        { title: 'Tune-up checklist', body: 'Basic, standard and overhaul tiers, each a full procedure a new mechanic can follow and a senior mechanic will sign off on.', icon: 'clipboard' },
        { title: 'Safety inspection checklist', body: 'The M-check written down, from the front hub to the rear dropout, with torque checks and wear limits.', icon: 'shield' },
        { title: 'E-bike diagnostic checklist', body: 'Battery health, charger, contacts, connectors, motor noise, torque and speed sensors, display codes, lights and brakes.', icon: 'bolt' },
        { title: 'Work order template', body: 'Every field a repair ticket should capture, from the serial number to the promised date and the customer approval.', icon: 'tag' },
        { title: 'Shop labor rate guide', body: 'Costs divided by billable hours, adjusted for utilization and a target margin, with a worked example.', icon: 'stopwatch' },
      ],
    },
    {
      kind: 'prose',
      heading: 'From paper to the bench',
      body: [
        "A checklist on a clipboard is better than none. It still gets coffee on it, it still gets lost in the parts bin, and nobody can find last spring's inspection when the customer comes back asking what you checked. The three checklist resources here can each be rebuilt as a template in BIKE.co Service, which is live today.",
        "In Service you build the template once, with sections and eight question types: short answer, long answer, dropdown, checkbox, number, photos, date and signature. Mark the answers that must be filled before the checklist can be submitted. Your mechanic fills it in on a phone or a shop tablet, takes photos of the worn cassette, and the customer signs at pickup. Every submission produces a PDF you can hand to the rider, and the checklists report lists every submission of a template on screen or as a CSV.",
        "You can also publish a checklist at a public link, optionally behind an email code, so a fleet manager or a customer can fill in a pre-service questionnaire before they drop off.",
        "The checklists do not sit on their own, either. Service also has quotes, numbered jobs with visits, a week schedule, time clocks and invoices. A template can be attached to every visit and made required, so a visit cannot be closed until the safety check is submitted, and the job cannot be billed until every visit is closed.",
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'What is built today',
      body: 'Live in Service today: checklists (builder, photos, signatures, required answers, the PDF, the report and public links), quotes with line items and optional lines, numbered jobs with visits, a week schedule, time tracking with weekly approval, invoicing and monthly reports. Not built yet: bike and serial records, job costing, card payments and pay links, and sending quotes or invoices to the customer; "send" marks the status only. The pricing, work order and labor resources are free tools you can use now, on paper or in a spreadsheet.',
    },
    {
      kind: 'visual',
      visual: 'quote',
      heading: 'Tiers riders understand',
      caption: 'A good, better, best tune-up menu, the way the tune-up checklist tiers are meant to be sold. Quotes in Service are live with optional lines the customer can pick; tiered good, better, best quotes are not built yet.',
    },
    {
      kind: 'prose',
      heading: 'How to use them well',
      body: [
        "Start with the safety inspection. It is the one check every bike that crosses your counter should get, whether it came in for a flat or a full overhaul, and writing it down is the quickest way to cut comebacks. Then set your tune-up tiers and price them with the labor rate guide and the pricing calculator, so the menu on the wall matches what the bench actually does and what it actually costs.",
        "If you service e-bikes, run the diagnostic checklist at intake, not after the bike has been on the stand for an hour. Half of e-bike complaints are a dirty contact, a loose connector or a magnet that has moved on the spoke, and you want to find those before you quote a motor.",
        "Treat every template as a draft. Change the tiers, add your own checks, remove what you never do. The point is that the standard is written down and everyone on the bench is working to the same one.",
      ],
    },
  ],
  faqs: [
    { q: 'Are these resources really free?', a: 'Yes, every resource on this page is free to read, print and copy into your own system, and none of them needs an account. They are written for independent bike shops and you can change them however you like.' },
    { q: 'Can I use the checklists in software instead of on paper?', a: 'Yes, you can rebuild each checklist as a template in BIKE.co Service, which is live today. Templates support eight question types, photos, signatures and required answers, and each submission produces a PDF for the customer.' },
    { q: 'Do the pricing tools connect to quotes in BIKE.co?', a: 'No, the pricing calculator and labor rate guide are standalone tools. Repair quotes are live in Service, but there is no price book screen yet, so you type each line by hand. Use the tools to set your menu prices and hourly rate, then enter those numbers on your Service quotes.' },
    { q: 'Where should a shop start?', a: 'Start with the safety inspection checklist, because it applies to every bike that comes in and reduces comebacks fastest. Then set tune-up tiers and price them using the labor rate guide and the repair pricing calculator.' },
    { q: 'Are the wear limits and torque values universal?', a: 'No, the manufacturer of the part always has the final word. The checklists give common wear limits such as 0.5% and 0.75% chain elongation, and tell you to torque to the value printed on the part or in the maker documentation.' },
  ],
  related: ['/product/service-checklists', '/resources/safety-inspection-checklist', '/resources/repair-pricing-calculator', '/pricing'],
}

const repairPricingCalculator: ContentPage = {
  slug: 'repair-pricing-calculator',
  title: 'Bike repair pricing calculator',
  metaTitle: 'Bike Repair Pricing Calculator for Shops | BIKE.co',
  metaDescription: 'Price a bike repair from labor minutes, your hourly rate, parts cost, markup and sales tax. Free calculator with a worked example and markup vs margin.',
  eyebrow: 'Free tool',
  lede: 'Enter the labor minutes, your shop rate, the parts cost, your markup and sales tax. Get a quote you can defend at the counter.',
  status: 'live',
  visual: 'quote',
  icon: 'quote',
  summary: 'Price a job from labor, parts and margin.',
  sections: [
    {
      kind: 'prose',
      heading: 'How the calculator works',
      body: [
        "Every bike repair price is two things added together: the labor, and the parts. The calculator above takes the minutes the job should take on your bench and multiplies them by your hourly shop rate. It takes what you paid for the parts and adds your markup. It adds those two lines, applies the sales tax rate you enter, and gives you the quote.",
        "Labor is minutes divided by 60, times your hourly rate. A 45-minute job at a 100-dollar rate is 75 dollars of labor. Parts price is cost times one plus your markup. A part that cost you 30 dollars at a 60% markup sells for 48 dollars. Add the two, then add tax.",
        "The minutes should be the time the job takes a competent mechanic on your bench, start to finish: getting the bike in the stand, doing the work, test riding, cleaning up and writing the ticket. Not the time it takes your fastest mechanic on a good day. If you run a flat-rate menu, the minutes are your book time for that job.",
      ],
    },
    {
      kind: 'steps',
      heading: 'A worked example',
      intro: 'An example with round numbers, not a recommendation. A rear derailleur cable and housing replacement with a new chain.',
      steps: [
        { title: 'Labor: 45 minutes at 100 dollars an hour', body: '45 divided by 60 is 0.75 hours. 0.75 times 100 is 75 dollars of labor.' },
        { title: 'Parts: 30 dollars cost at 60% markup', body: 'A chain, a cable and a length of housing that cost you 30 dollars together. 30 times 1.6 is 48 dollars.' },
        { title: 'Subtotal', body: '75 dollars of labor plus 48 dollars of parts is 123 dollars.' },
        { title: 'Sales tax at 8%', body: '123 times 0.08 is 9.84 dollars, if the whole ticket is taxable where you are.' },
        { title: 'Quote', body: '123 plus 9.84 is 132.84 dollars. Many shops round to a clean number on the menu board, such as 129 or 135, and let the tax sit on top.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Markup is not margin',
      body: [
        "This is the mistake that quietly costs shops the most. Markup is what you add on top of cost, as a percentage of cost. Margin is what you keep, as a percentage of the selling price. They are never the same number.",
        "In the example, the parts cost 30 dollars and sold for 48. The markup is 18 divided by 30, which is 60%. The margin is 18 divided by 48, which is 37.5%. If you told yourself you run '60% on parts', you are keeping 37.5 cents of every parts dollar, not 60.",
        "To convert: margin equals markup divided by one plus markup. Markup equals margin divided by one minus margin. If you want a 40% margin on parts, you need a markup of 0.4 divided by 0.6, which is about 66.7%. If you want a 50% margin, you need a 100% markup, which is the old keystone rule: double the cost.",
        "Decide which number you are managing to and use it consistently. Your accountant and your profit and loss statement talk in margin. Your price stickers and supplier catalog talk in cost and markup. Know both.",
      ],
    },
    {
      kind: 'table',
      heading: 'Markup and the margin it produces',
      intro: 'The same arithmetic in both directions. Use it to check the markup you enter above.',
      columns: ['Markup on cost', 'Margin on price', 'A 30-dollar part sells for'],
      rows: [
        ['25%', '20%', '37.50'],
        ['43%', '30%', '42.90'],
        ['60%', '37.5%', '48.00'],
        ['66.7%', '40%', '50.00'],
        ['100%', '50%', '60.00'],
      ],
      note: 'Margin = markup / (1 + markup). Markup = margin / (1 - margin). Figures rounded.',
    },
    {
      kind: 'prose',
      heading: 'Getting the inputs right',
      body: [
        "The quote is only as good as the rate you put in. If you have never worked out your labor rate from your costs, do that first with the labor rate guide; a rate copied from the shop down the road tells you nothing about your rent, your wages or how many hours your mechanics actually bill.",
        "Parts cost should be your landed cost: the price on the invoice plus freight, divided across the order. A tube that cost 5 dollars from the distributor and 1 dollar of shipping cost you 6.",
        "Sales tax rules differ by state and sometimes by city. In some places labor on a repair is taxable and in others only the parts are, and separately stated labor can be treated differently from bundled labor. Check with your accountant or your state revenue department. If only parts are taxable where you are, work out the tax on the parts line and add it yourself.",
        "In BIKE.co Service, each quote line carries its own taxable flag, so a labor line can sit untaxed next to a taxed parts line. Put the labor and each part on separate lines, mark the extras the rider may skip as optional, and once the customer says yes, the approved quote converts into a job with the lines they chose carried across.",
      ],
    },
    {
      kind: 'visual',
      visual: 'job-costing',
      heading: 'Price against cost, per job',
      caption: 'Labor and parts against the price on one ticket. Job costing in Service is on the roadmap; today, the calculator above does the arithmetic by hand.',
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'What exists now',
      body: 'The calculator on this page is a free tool that works today, and repair quotes in BIKE.co Service are live: numbered quotes with line items, quantity, unit price, a taxable flag per line, optional lines, a % or $ discount and tax worked out after the discount. What is not built yet: a price book screen (lines are typed by hand, so you bring the price from this calculator), job costing that compares cost against price, and sending the quote to the customer; marking it Sent only changes its status.',
    },
  ],
  faqs: [
    { q: 'How do I calculate a bike repair price?', a: 'Multiply the labor hours by your hourly shop rate, add the parts cost plus your markup, then add sales tax. For example, 45 minutes at 100 dollars an hour is 75 dollars, plus 30 dollars of parts at 60% markup is 48 dollars, for a 123-dollar subtotal before tax.' },
    { q: 'What is the difference between markup and margin?', a: 'Markup is profit as a percentage of cost, and margin is profit as a percentage of the selling price. A 60% markup produces a 37.5% margin, so a shop that confuses the two keeps less than it thinks.' },
    { q: 'How many minutes should I enter for labor?', a: 'Enter the time the job takes a competent mechanic on your bench from start to finish, including the stand, the test ride and writing up the ticket. If you run a flat-rate menu, use your book time for that job so every quote for the same work matches.' },
    { q: 'Should I charge sales tax on labor?', a: 'It depends on your state and sometimes your city, so check with your accountant or state revenue department. In some places repair labor is taxable and in others only the parts are, and how the labor is shown on the invoice can matter.' },
    { q: 'Does BIKE.co build quotes from this calculator?', a: 'No, the calculator is a standalone free tool and does not feed Service. Repair quotes are live in Service, with line items, optional lines, discounts and tax, so you work the price out here and type the lines into the quote. A price book screen and job costing are not built yet.' },
  ],
  related: ['/resources/labor-rate-guide', '/product/repair-quotes', '/product/job-costing', '/resources/work-order-template'],
}

const tuneUpChecklist: ContentPage = {
  slug: 'tune-up-checklist',
  title: 'Bike tune-up checklist: basic, standard and overhaul',
  metaTitle: 'Bike Tune-Up Checklist: 3 Tiers for Shops | BIKE.co',
  metaDescription: 'A printable bike tune-up checklist in three tiers: basic, standard and overhaul. Full mechanic procedure, and how to build it as a template in BIKE.co.',
  eyebrow: 'Free checklist',
  lede: 'Three tune-up tiers, each a complete procedure. Put them on the menu board, print them for the bench, or build them as a template your mechanics fill in on a phone.',
  status: 'live',
  visual: 'checklist',
  icon: 'clipboard',
  summary: 'A printable standard for every tune-up.',
  sections: [
    {
      kind: 'prose',
      heading: 'Why three tiers',
      body: [
        "Ask five shops what a 'tune-up' includes and you get five answers. Ask five mechanics in the same shop and you might get five more. That is how a rider pays for a tune-up and still leaves with a creaking bottom bracket, and it is how your seasonal hire spends two hours on a job you priced at one.",
        "Three tiers fix most of it. A basic tune-up makes a rideable bike safe and shifting. A standard tune-up adds the cleaning and adjustment that brings a neglected bike back. An overhaul takes the bike apart, services every bearing and replaces every cable. Each tier includes everything in the one below. The rider picks, you know what you are doing, and the price matches the time.",
        "The tiers below are a starting point. Rename them, move items between them, add your own. Parts are always extra and quoted separately; the tier is labor.",
      ],
    },
    {
      kind: 'checklist',
      heading: 'Basic tune-up',
      intro: 'Safe and shifting. For bikes that are ridden regularly and mostly need adjustment.',
      groups: [
        {
          title: 'Intake',
          items: [
            'Record make, model, size, color and serial number',
            'Note the customer complaint in their words',
            'Photograph existing damage: frame scratches, cracked paint, bent parts',
            'Run the safety inspection (M-check) and note anything outside this tier',
          ],
        },
        {
          title: 'Wheels and tires',
          items: [
            'Inflate to the pressure the rider uses, within the range on the sidewall or rim',
            'Inspect tread and sidewalls for cuts, bulges and exposed casing',
            'Check tubeless sealant is still liquid; note if it needs a top-up',
            'Spin each wheel: true laterally where it is out by more than a couple of millimeters in the stand',
            'Check hubs for play and rough bearings',
            'Check quick releases are closed with firm cam tension, or thru-axles torqued to spec',
          ],
        },
        {
          title: 'Brakes',
          items: [
            'Check pad wear; flag pads at or below the maker wear limit',
            'Rim brakes: center, toe and set pad height on the braking surface',
            'Disc brakes: align calipers, check rotor for rub and true minor bends',
            'Mechanical: adjust cable tension and lever reach',
            'Hydraulic: check lever feel; flag a spongy lever for a bleed',
          ],
        },
        {
          title: 'Drivetrain',
          items: [
            'Measure chain elongation with a checker and record the reading',
            'Wipe and lube the chain, wipe off the excess',
            'Check derailleur hanger alignment by eye; flag if bent',
            'Adjust limit screws and indexing through every gear',
            'Electronic groups: check battery charge and run the shift adjustment',
          ],
        },
        {
          title: 'Finish',
          items: [
            'Check headset for play and bind',
            'Check stem, bar, seatpost and saddle bolts to the torque printed on the part',
            'Check pedals and crank arms are tight',
            'Test ride: shifting under load, brakes, noises',
            'Wipe down the frame',
          ],
        },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Standard tune-up',
      intro: 'Everything in the basic tune-up, plus cleaning and deeper adjustment.',
      groups: [
        {
          title: 'Drivetrain clean',
          items: [
            'Remove and degrease the chain, or clean it on the bike with a chain cleaner',
            'Degrease cassette, chainrings and derailleur pulleys',
            'Inspect cassette and chainrings for hooked or shark-finned teeth',
            'Check jockey wheel bearings for play and roughness',
            'Re-lube the chain and check stiff links',
          ],
        },
        {
          title: 'Cables and adjustment',
          items: [
            'Inspect cable ends and housing for fraying, kinks and cracks; replace as quoted',
            'Align the derailleur hanger with an alignment tool',
            'Check bottom bracket for play and rough rotation',
            'Check hub bearing adjustment; adjust cup-and-cone hubs',
            'Adjust headset preload',
          ],
        },
        {
          title: 'Wheels and brakes',
          items: [
            'True both wheels laterally and radially in the truing stand',
            'Check spoke tension by hand for loose or broken spokes',
            'Clean rotors and pads with isopropyl alcohol, or clean rim braking surfaces',
            'Check rim wear indicators on rim-brake wheels',
          ],
        },
        {
          title: 'Frame and fit',
          items: [
            'Clean the frame and inspect for cracks, especially at welds and around the BB and head tube',
            'Check suspension sag and look for oil on the stanchions',
            'Note any service interval due on fork or shock for the rider',
          ],
        },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Overhaul',
      intro: 'Everything in the standard tune-up. The bike comes apart, every bearing is serviced and every cable is replaced.',
      groups: [
        {
          title: 'Strip',
          items: [
            'Remove drivetrain: chain, cassette, cranks, derailleurs',
            'Remove wheels, headset and bottom bracket',
            'Clean all parts in the parts washer; clean the frame bare',
            'Inspect frame and fork for cracks, dents and damaged threads',
          ],
        },
        {
          title: 'Bearings',
          items: [
            'Service or replace headset bearings',
            'Service or replace bottom bracket bearings',
            'Overhaul hubs: clean, re-grease and adjust, or replace cartridge bearings',
            'Service pedal bearings where serviceable',
            'Service freehub body and pawls',
          ],
        },
        {
          title: 'Rebuild',
          items: [
            'Chase and face threads where needed',
            'Fit new cables and housing throughout',
            'Bleed hydraulic brakes with the correct fluid for the system (mineral oil or DOT)',
            'Reassemble with grease or carbon assembly paste as appropriate',
            'Torque every bolt to the value printed on the part or in the maker documentation',
            'Tension-balance and true both wheels',
            'Full indexing, brake setup and test ride',
          ],
        },
      ],
    },
    {
      kind: 'prose',
      heading: 'Build this as a template in BIKE.co Service',
      body: [
        "Service checklists are live today. Each tier above becomes one template, and each group becomes a section. Most items work best as a checkbox question, but a few deserve their own types: chain elongation as a number, so the checklists report can show you how many chains came in past 0.75%; brake pad condition as a dropdown of good, low and replace; tire condition as a dropdown with a photo question beneath it.",
        "Mark the items that matter as required. A mechanic cannot submit the checklist until every required answer is filled, which is the difference between a standard and a suggestion. Add a signature question at the end for the mechanic who did the work, and another for the customer at pickup if you want one.",
        "You can also set a template to attach to every visit on a job and make it required. Then the visit cannot be closed, and the job cannot be billed, until the tune-up checklist is submitted. The field app installs from the browser and keeps working with no signal, which is new: answers are queued on the phone and sent when the connection comes back.",
        "When the tune-up is done, the submission produces a PDF with the answers, photos and signatures drawn in. Hand it to the rider or email it. It is the clearest way to show a customer what 60 or 120 dollars of labor bought them.",
      ],
    },
    {
      kind: 'steps',
      heading: 'Setting it up',
      steps: [
        { title: 'Create a template per tier', body: 'Name them the way your menu board does. Each template is versioned, so editing it later never changes what an old submission says.' },
        { title: 'Add sections and questions', body: 'One section per group. Choose from the eight question types: short answer, long answer, dropdown, checkbox, number, photos, date and signature.' },
        { title: 'Mark required answers', body: 'Chain reading, pad condition and the test ride should be required. Everything else can be optional.' },
        { title: 'Set roles', body: 'Workspace roles set Service permissions: give your lead mechanic a role that can build templates, and the bench a crew role that fills them in.' },
        { title: 'Review the report', body: 'The checklists report lists every submission of a template, filtered by date and status, on screen or as a CSV.' },
      ],
    },
    {
      kind: 'visual',
      visual: 'quote',
      heading: 'Sell the tiers as good, better, best',
      caption: 'Three tiers on a quote. Quotes in Service are live and handle this with optional lines the rider can choose; separate good, better, best tiers are not built yet.',
    },
  ],
  faqs: [
    { q: 'What should a basic bike tune-up include?', a: 'A basic tune-up should include a safety inspection, tire inflation and inspection, brake adjustment, derailleur indexing, a chain check and lube, minor wheel truing, a bolt check and a test ride. Parts are quoted separately.' },
    { q: 'What is the difference between a standard tune-up and an overhaul?', a: 'A standard tune-up cleans and adjusts the bike in place, while an overhaul takes it apart. An overhaul services or replaces every bearing, replaces all cables and housing, and bleeds hydraulic brakes before reassembly.' },
    { q: 'When should a chain be replaced during a tune-up?', a: 'Replace the chain at 0.5% elongation on 11- and 12-speed drivetrains and at 0.75% on 10-speed and below, measured with a chain checker. Waiting longer usually means replacing the cassette and sometimes the chainrings too.' },
    { q: 'Can I use this checklist in BIKE.co today?', a: 'Yes, service checklists are live in BIKE.co Service. Build each tier as a template with eight question types, required answers, photos and signatures, and every submission produces a PDF for the customer.' },
    { q: 'Should parts be included in the tune-up price?', a: 'Most shops price the tune-up as labor only and quote parts separately, because a worn cassette or a new set of tires can double the ticket. Quote the parts before the work starts and get the customer to approve them.' },
  ],
  related: ['/product/service-checklists', '/resources/safety-inspection-checklist', '/resources/repair-pricing-calculator', '/solutions/repair-shops'],
}

const safetyInspectionChecklist: ContentPage = {
  slug: 'safety-inspection-checklist',
  title: 'Bike safety inspection checklist: the M-check',
  metaTitle: 'Bike Safety Inspection Checklist (M-Check) | BIKE.co',
  metaDescription: 'The M-check written down: a bike safety inspection from front hub to rear dropout, with torque checks and wear limits for chains, rotors, pads and tires.',
  eyebrow: 'Free checklist',
  lede: 'The M-check every bike should get at intake, written down in order. Torque checks, wear limits and the items new mechanics skip.',
  status: 'live',
  visual: 'checklist',
  icon: 'shield',
  summary: 'The M-check, written down.',
  sections: [
    {
      kind: 'prose',
      heading: 'Why write down the M-check',
      body: [
        "Every mechanic learns the M-check, and every mechanic does it slightly differently. Start at the front hub, go up the fork to the bars, back along to the saddle, down to the bottom bracket, and out to the rear wheel. Trace it on the frame and you get the letter M. The order matters because it stops you skipping things.",
        "Written down, it becomes the standard intake inspection for every bike that crosses your counter, whether it came in for a flat or a full overhaul. That catches the cracked chainstay before you true the wheel, the worn rotor before you bleed the brake, and the loose thru-axle before the rider leaves. It also tells the customer, in writing, what you checked and what you found.",
        "Wear limits and torque values here are common figures. The part manufacturer always has the final word, and many parts carry their limit or torque printed on them. Use that number when it exists.",
      ],
    },
    {
      kind: 'checklist',
      heading: 'The M-check, in order',
      intro: 'Front hub, up the fork, bars, saddle, down to the bottom bracket and out to the rear.',
      groups: [
        {
          title: '1. Front wheel and hub',
          items: [
            'Quick release closed with firm cam tension, lever tucked, safety tabs intact; or thru-axle fully threaded and torqued to the fork maker spec',
            'Hub: grab the rim and rock sideways for bearing play; spin for roughness',
            'Rim: spin and watch for wobble, hop, dents and cracks at spoke holes',
            'Rim brakes: check the rim wear indicator or measure wall thickness',
            'Spokes: squeeze pairs for loose or broken spokes',
            'Tire: tread wear, cuts, embedded glass, sidewall cuts, bulges and exposed casing threads, bead seated evenly',
            'Tire pressure within the range on the sidewall and rim',
            'Rotor: measure thickness with a caliper against the minimum stamped on the rotor; check for bends, glazing and loose rotor bolts or lockring',
          ],
        },
        {
          title: '2. Fork and headset',
          items: [
            'Fork blades, crown and dropouts: cracks, bends, paint crazing on carbon',
            'Suspension fork: stanchion scratches, oil at the seals, sag and rebound feel',
            'Headset: front brake on, rock the bike to feel for play; turn the bars to feel for bind or notching',
            'Front caliper or brake mount bolts tight',
            'Front brake pads: replace at about 0.5 mm of compound or at the maker wear indicator',
          ],
        },
        {
          title: '3. Bars, stem and controls',
          items: [
            'Stem steerer and faceplate bolts to the torque printed on the stem',
            'Bars: cracks, bends, especially near the stem clamp and on carbon',
            'Stand over the front wheel and twist the bars against it; nothing moves',
            'Brake levers tight and at a sensible angle; lever travel stops well short of the bar',
            'Hydraulic: firm lever, no leaks at the lever, hose or caliper',
            'Shifters tight; cables and housing not frayed, kinked or cracked',
            'Grips secure, bar-end plugs fitted; bar tape intact',
          ],
        },
        {
          title: '4. Saddle and seatpost',
          items: [
            'Seatpost at or above the minimum insertion mark',
            'Seatpost clamp and saddle clamp bolts to the torque printed on the part',
            'Saddle rails: bends or cracks',
            'Dropper post: full travel, returns, no play; remote cable or hose intact',
            'Top tube and seat tube: cracks at the seat clamp and the head tube junction',
          ],
        },
        {
          title: '5. Bottom bracket and cranks',
          items: [
            'Crank arms: rock both arms to feel for bottom bracket play',
            'Spin the cranks with the chain off for roughness',
            'Crank bolts or preload cap tight; chainring bolts tight',
            'Pedals threaded fully in (the left pedal is a left-hand thread); pedal bearings smooth',
            'Chainrings: worn, bent or missing teeth',
            'Frame around the BB, chainstays and down tube: cracks and dents',
          ],
        },
        {
          title: '6. Rear wheel and drivetrain',
          items: [
            'Rear axle secure: quick release or thru-axle as for the front',
            'Hub, rim, spokes, tire and rotor as for the front wheel',
            'Chain elongation: replace at 0.5% on 11- and 12-speed drivetrains, 0.75% on 10-speed and below',
            'Cassette and chainrings: hooked or shark-finned teeth',
            'Derailleur hanger straight; derailleur and pulleys secure',
            'Shift through every gear; no skipping or chain drop',
            'Rear brake: pads, caliper bolts, rotor, lever feel',
            'Chainstays, seatstays and dropouts: cracks',
          ],
        },
        {
          title: '7. Finish',
          items: [
            'Lights and reflectors fitted and working where required',
            'Bell or horn where required',
            'Test ride: brakes, shifting under load, steering, noises',
            'Record every finding and every item outside the job the bike came in for',
          ],
        },
      ],
    },
    {
      kind: 'table',
      heading: 'Wear limits at a glance',
      intro: 'Common limits. Always check the part maker figure first.',
      columns: ['Part', 'How to check', 'Replace when'],
      rows: [
        ['Chain, 11- and 12-speed', 'Chain checker or ruler', '0.5% elongation'],
        ['Chain, 10-speed and below', 'Chain checker or ruler', '0.75% elongation'],
        ['Disc rotor', 'Caliper at several points', 'Below the minimum thickness stamped on the rotor'],
        ['Disc pads', 'Look into the caliper or remove', 'About 0.5 mm of compound left, or at the wear indicator'],
        ['Rim, rim brakes', 'Wear indicator or wall gauge', 'Indicator worn through or wall concave'],
        ['Tire', 'Visual and by hand', 'Casing threads showing, sidewall cuts or bulges, tread gone'],
        ['Cables', 'Visual at ends and exposed runs', 'Any fraying or rust'],
      ],
      note: 'On a ruler, 12 full links of a new chain measure 12 inches; about 1/16 inch over is 0.5%.',
    },
    {
      kind: 'prose',
      heading: 'Build it as a template in BIKE.co Service',
      body: [
        "Service checklists are live today, and the M-check is the ideal first template. Make one section per stage above. Use checkbox questions for the pass items, a number question for chain elongation and one for each rotor thickness, and a dropdown for tire condition with options such as good, worn and replace. Add a photo question to each section so a mechanic can capture the crack or the worn rotor as they find it.",
        "Mark the safety-critical items as required. The checklist cannot be submitted until they are answered, so a busy Saturday cannot quietly turn the M-check into a glance. Add a long-answer question at the end for findings outside the job, and a signature for the mechanic.",
        "Each submission produces a PDF with the answers, photos and signatures. Give it to the customer at pickup. When a rider says 'you never told me about the rotor', you have it in writing, with a photo.",
      ],
    },
    {
      kind: 'features',
      heading: 'What Service gives you for this checklist today',
      items: [
        { title: 'Eight question types', body: 'Short answer, long answer, dropdown, checkbox, number, photos, date and signature.', icon: 'clipboard', status: 'live' },
        { title: 'Required answers', body: 'The checklist will not submit until every required item is answered.', icon: 'check', status: 'live' },
        { title: 'Photos and signatures', body: 'Photos from the phone camera, and a signature drawn with a finger.', icon: 'sign', status: 'live' },
        { title: 'PDF for the customer', body: 'Each submission renders as a PDF with photos and signatures drawn in.', icon: 'invoice', status: 'live' },
        { title: 'Checklists report', body: 'Every submission of a template, filtered by date and status, on screen or as CSV.', icon: 'chart', status: 'live' },
        { title: 'Required before the visit closes', body: 'Attach the M-check to every visit and make it required, and nobody can close the visit until it is submitted.', icon: 'shield', status: 'live' },
      ],
    },
    {
      kind: 'visual',
      visual: 'bike-record',
      heading: 'Every inspection on the bike record',
      caption: 'One bike with its serial and service history. Customer and bike records in Service are on the roadmap; the checklist and its PDF are live today.',
    },
  ],
  faqs: [
    { q: 'What is the M-check on a bike?', a: 'The M-check is a safety inspection that follows the shape of the letter M across the bike: front hub, up the fork to the bars, back to the saddle, down to the bottom bracket and out to the rear wheel. Following the same order every time stops mechanics skipping items.' },
    { q: 'When should a bike chain be replaced?', a: 'Replace a chain at 0.5% elongation on 11- and 12-speed drivetrains and at 0.75% on 10-speed and below. Measure with a chain checker, or with a ruler: 12 full links of new chain measure 12 inches.' },
    { q: 'What is the minimum thickness for a disc brake rotor?', a: 'The minimum thickness is usually stamped on the rotor itself, and that is the number to use. Measure with a caliper at several points around the braking surface and replace the rotor if any reading is below the minimum.' },
    { q: 'How do I check a quick release is closed properly?', a: 'A properly closed quick release needs firm hand pressure to close and leaves an imprint in your palm, with the lever tucked against the frame or fork. Check that the dropout safety tabs are intact, and for thru-axles check the axle is fully threaded and torqued to the fork or frame maker spec.' },
    { q: 'Can my mechanics fill this in on a phone?', a: 'Yes, service checklists in BIKE.co Service are live and fill in on a phone or tablet browser. Mechanics can take photos, answer required items and sign, and each submission produces a PDF for the customer.' },
  ],
  related: ['/product/service-checklists', '/resources/tune-up-checklist', '/resources/ebike-diagnostic-checklist', '/product/team-permissions'],
}

const ebikeDiagnosticChecklist: ContentPage = {
  slug: 'ebike-diagnostic-checklist',
  title: 'E-bike diagnostic checklist for shops',
  metaTitle: 'E-Bike Diagnostic Checklist for Bike Shops | BIKE.co',
  metaDescription: 'An e-bike diagnostic checklist: battery health, charger, contacts, connectors, motor noise, torque and speed sensors, display codes, lights and brakes.',
  eyebrow: 'Free checklist',
  lede: 'Battery, charger, wiring, motor, sensors and the bike around them. Run it at intake, before anyone quotes a motor.',
  status: 'live',
  visual: 'checklist',
  icon: 'bolt',
  summary: 'Battery, motor, display and wiring.',
  sections: [
    {
      kind: 'prose',
      heading: 'Diagnose before you quote',
      body: [
        "An e-bike comes in with 'it cuts out' or 'the motor feels weak'. It is tempting to plug in the diagnostic tool, see a code and quote the part it points at. Often the real cause is simpler and cheaper: a dirty battery contact, a connector half out after a headset service, a speed sensor magnet that slid along the spoke, or a battery that has simply aged.",
        "This checklist works from the outside in. Battery and charger first, then contacts and connectors, then the drive unit and its sensors, then the display and the software. Then the parts of the bike that e-bikes wear out faster: brakes, tires, chains. It is written in general terms that apply across the common mid-drive and hub-drive systems.",
        "It does not list error codes. Codes are specific to each system maker and change between generations, so read them with the maker's own dealer diagnostic tool and look them up in the maker's documentation. Record the code, the context and what you did about it.",
      ],
    },
    {
      kind: 'checklist',
      heading: 'E-bike diagnostic checklist',
      intro: 'Work through it in order. Record readings as numbers where you can.',
      groups: [
        {
          title: 'Intake',
          items: [
            'Record make, model, drive system, battery capacity and frame serial',
            'Record battery serial and drive unit serial where readable',
            'Customer complaint in their words: when it happens, how often, in which assist mode',
            'Odometer reading and total hours from the display or diagnostic tool',
            'Any recent crash, water exposure, wash with a pressure washer, or other shop work',
          ],
        },
        {
          title: 'Battery',
          items: [
            'Inspect the case for cracks, swelling, impact damage and heat marks; quarantine any damaged battery',
            'Read state of health, capacity and charge cycles with the system maker diagnostic tool',
            'Check the battery locks into the mount firmly and the lock and key work',
            'Check charge level indicator matches what the display reports',
            'Note the rider charging and storage habits',
          ],
        },
        {
          title: 'Charger',
          items: [
            'Confirm the charger is the correct model for the battery',
            'Inspect cable, plug and case for damage, cuts and heat marks',
            'Check the charger indicator lights through a charge cycle',
            'Measure output voltage with a multimeter against the rating on the label, where safe and appropriate',
          ],
        },
        {
          title: 'Contacts and connectors',
          items: [
            'Battery contacts on battery and mount: corrosion, pitting, burn marks, bent pins, debris',
            'Clean contacts with a suitable contact cleaner; do not file them',
            'Motor, display, remote, sensor and light connectors: fully seated, pins straight, no water or corrosion',
            'Cable routing: no pinching at the headset, BB area or dropouts, no chafe through the insulation',
            'Charging port cover present and closing',
          ],
        },
        {
          title: 'Drive unit',
          items: [
            'Drive unit mounting bolts tight to the frame maker torque',
            'Listen under load and freewheeling: grinding, knocking, clicking, whine',
            'Check for crank play at the drive unit, separate from the crank arm bolts',
            'Hub motor: axle nuts or thru-axle tight, torque arms fitted, cable exit not strained',
            'Check for water ingress signs around the housing and cable entries',
          ],
        },
        {
          title: 'Sensors',
          items: [
            'Torque sensor: assist responds smoothly to pedal pressure; follow the maker calibration or start-up procedure (some systems need no pressure on the pedals at power-on)',
            'Cadence sensor: assist starts and stops with pedaling',
            'Speed sensor: magnet present, secure and aligned with the sensor, gap within the maker spec',
            'Check the displayed speed against a known reference on a test ride',
            'Check the wheel circumference setting matches the fitted tire',
          ],
        },
        {
          title: 'Display, controls and software',
          items: [
            'Display powers on, backlight and buttons work, remote responds',
            'Read and record every stored error code with the maker diagnostic tool',
            'Look up each code in the maker documentation; do not guess',
            'Check installed firmware against the current release; update with the maker tool if the customer approves',
            'Clear codes only after the fault is fixed and recorded',
          ],
        },
        {
          title: 'Lights, brakes and wear',
          items: [
            'Integrated lights on, beams aimed, rear light working',
            'Brakes rated by their maker for e-bike use; rotors and pads suited to the bike weight and speed',
            'Pad and rotor wear: e-bikes wear both faster; check against the minimums',
            'Tires rated for e-bike use where the maker specifies; check pressure and wear',
            'Chain and cassette wear; e-bike chains stretch faster under motor torque',
            'Test ride in every assist mode: assist cut-in, cut-out at the legal speed limit, walk mode',
          ],
        },
      ],
    },
    {
      kind: 'prose',
      heading: 'Batteries need their own rules',
      body: [
        "A lithium-ion battery with a cracked case, swelling or heat damage is a fire risk. Do not charge it, do not leave it on the bench overnight, and store it somewhere your fire plan covers. Shipping a damaged battery back to a manufacturer or distributor is regulated as dangerous goods, so ask your supplier how they want it handled before you box it.",
        "State of health is the number riders care about, because it tells them whether the range drop is the battery or something else. Read it with the system maker's tool, write it on the checklist, and give it to the rider in writing. A battery that reads well but still cuts out under load points you back at the contacts and connectors.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Build it as a template in BIKE.co Service',
      body: [
        "Service checklists are live today. Build one section per group above. Use number questions for state of health, charge cycles, charger output voltage and odometer, so the checklists report and its CSV let you compare batteries across your service history. Use a short answer for each error code, a dropdown for motor noise with options such as none, freewheeling only and under load, and photo questions for connectors and battery damage.",
        "Make the battery inspection and error-code questions required, so nobody moves on to the motor with those blank. Add a date question for the firmware update and a customer signature for approval of any update or battery replacement. The submission PDF is the diagnostic report you hand to the rider, and if the bike is under warranty, you have the photos and readings the manufacturer will ask for.",
        "If you run a rental or corporate fleet, publish a short pre-service questionnaire at a public link so fleet managers can report the fault before the bike arrives, and the bench knows what to look at first. Each submission lands in the Service Requests inbox, where you can triage it, quote it and turn it into a job.",
      ],
    },
    {
      kind: 'steps',
      heading: 'Setting it up in Service',
      steps: [
        { title: 'Create the template', body: 'Name it by the systems you service. Each save is a new immutable version, so old reports never change.' },
        { title: 'Add sections and question types', body: 'Numbers for readings, short answers for codes, dropdowns for condition, photos for damage, signatures for approval.' },
        { title: 'Mark what must be answered', body: 'Battery state of health, error codes and the test ride should be required.' },
        { title: 'Publish a pre-service form if you want one', body: 'A public checklist at a link, optionally behind an email code, with spam protection.' },
        { title: 'Hand over the PDF', body: 'Every submission renders a PDF with photos and signatures for the rider or the warranty claim.' },
      ],
    },
    {
      kind: 'visual',
      visual: 'bike-record',
      heading: 'Battery and motor serials on the bike record',
      caption: 'A bike record with serials and history. Customer and bike records in Service are on the roadmap; the diagnostic checklist is live today.',
    },
  ],
  faqs: [
    { q: 'How do you check an e-bike battery state of health?', a: 'Read it with the drive system maker dealer diagnostic tool, which reports state of health, capacity and charge cycles. Record the number on the checklist and give it to the rider, and inspect the case for cracks, swelling and heat damage at the same time.' },
    { q: 'Why does an e-bike motor cut out?', a: 'Common causes are dirty or damaged battery contacts, a loose or water-damaged connector, a battery near the end of its life, or a speed sensor fault. Check contacts, connectors and battery health before assuming the drive unit has failed.' },
    { q: 'Does this checklist include error codes?', a: 'No, because error codes are specific to each system maker and change between generations. Read codes with the maker diagnostic tool, look them up in the maker documentation, and record them on the checklist.' },
    { q: 'What should I do with a damaged e-bike battery?', a: 'Stop charging it, isolate it somewhere your fire plan covers, and ask your supplier how to return it. Shipping damaged lithium-ion batteries is regulated as dangerous goods.' },
    { q: 'Can I record battery readings in BIKE.co?', a: 'Yes, service checklists in BIKE.co Service are live and support number questions for readings such as state of health and charger voltage. The checklists report and CSV let you compare those readings across submissions.' },
    { q: 'Do e-bikes need different brakes and tires?', a: 'Often, yes. E-bikes are heavier and faster on average, so use brakes, rotors and tires their makers rate for e-bike use, and check pad, rotor and chain wear more often.' },
  ],
  related: ['/solutions/e-bike-shops', '/product/service-checklists', '/resources/safety-inspection-checklist', '/solutions/rental-fleet'],
}

const workOrderTemplate: ContentPage = {
  slug: 'work-order-template',
  title: 'Bike repair work order template',
  metaTitle: 'Bike Repair Work Order Template: Every Field | BIKE.co',
  metaDescription: 'A free bike repair work order template: every field a repair ticket should capture, from bike serial and reported issue to quote approval, parts and labor.',
  eyebrow: 'Free template',
  lede: 'Every field a repair ticket should capture, and why. Use it on paper, and see which fields work orders in BIKE.co Service hold today and which are still to come.',
  status: 'live',
  visual: 'job-detail',
  icon: 'tag',
  summary: 'What every repair ticket should capture.',
  sections: [
    {
      kind: 'prose',
      heading: 'The ticket is the job',
      body: [
        "A bike sits in your back room for three days. Nobody is sure whether the customer approved the new cassette, the tag says 'blue Trek' and there are two of them, and the phone rings with 'is my bike ready?' while your mechanic has a bleed kit in his hand. Almost every one of those moments starts with a ticket that was missing something at intake.",
        "A good work order does four jobs. It identifies the bike beyond doubt. It records what the customer asked for in their words. It records what they agreed to pay and when you promised it back. And it records what was actually done, by whom, with which parts. Get those four right and the ticket answers the phone for you.",
        "The table below is every field we think a repair ticket should capture. Print it as a tag, build it into your spreadsheet, or use it to check the system you have.",
      ],
    },
    {
      kind: 'table',
      heading: 'Work order fields',
      intro: 'Grouped the way the ticket is filled: intake at the counter, then the bench, then pickup.',
      columns: ['Field', 'What to capture', 'Why it matters'],
      rows: [
        ['Ticket number', 'Unique, printed on the tag on the bike', 'Two blue bikes of the same model are never confused'],
        ['Customer', 'Name, mobile number, email, preferred contact', 'You can reach them for approval without hunting'],
        ['Bike make and model', 'Make, model, model year if known', 'Parts compatibility and service procedure'],
        ['Size and color', 'Frame size, main color', 'Finding it in a crowded back room'],
        ['Serial number', 'From under the bottom bracket', 'Identity beyond doubt; theft and warranty checks'],
        ['Drive system', 'For e-bikes: system, battery and motor serials', 'Warranty and diagnostic history'],
        ['Condition at intake', 'Existing damage, photos', 'No disputes about scratches at pickup'],
        ['Reported issue', "The customer's words, not yours", 'You fix the thing they came in for'],
        ['Items left with the bike', 'Lights, bags, computer, battery, charger, keys', 'Nothing goes missing'],
        ['Promised date', 'A date and a time of day', 'Sets the expectation and orders the bench'],
        ['Quote', 'Labor and parts, itemized, with total', 'No surprise at the counter'],
        ['Approval', 'Who approved, how, when, and the amount', 'Protects you when the job grows'],
        ['Approval limit', 'Amount you may spend without calling', 'Small extras do not stall the bench'],
        ['Parts', 'Part, quantity, price, and whether in stock or on order', 'Know what the job waits on'],
        ['Labor', 'Each task, time or menu price', 'Price the job and measure the bench'],
        ['Technician', 'Who did the work', 'Accountability and training'],
        ['Checklist', 'Tune-up, safety or e-bike checklist attached', 'Proof of what was checked'],
        ['Notes', 'Findings outside the job, advice for next time', 'Next visit starts informed'],
        ['Status', 'Waiting, on the stand, waiting on parts, ready, collected', 'Answers the phone for you'],
        ['Pickup', 'Date collected, payment, customer signature', 'Closes the job cleanly'],
      ],
    },
    {
      kind: 'prose',
      heading: 'The fields shops skip',
      body: [
        "The serial number. It takes ten seconds with the bike upside down in the stand and nobody does it on a Saturday. It is the one field that tells two identical bikes apart, the one a warranty claim needs, and the one that lets you recognize a returning bike when the customer changed their phone number.",
        "The promised date. 'Should be done this week' is not a promise; 'Thursday by 4 pm' is. A real date on every ticket is how you order the bench, and it is the only honest answer to 'is my bike ready?'.",
        "The approval limit. Ask every customer at intake: if we find something small, how much can we spend without calling you? Write the number down. It is the difference between a bike waiting three days for a 12-dollar derailleur hanger and a bike that goes home on time.",
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'What Service work orders hold today',
      body: 'Work orders are live in BIKE.co Service as numbered jobs with instructions, line items and one or more visits, each with an assignee and a status of unscheduled, scheduled, in progress or completed. A required checklist blocks the visit from closing. Not built yet: a bike record with serial, size and make, so the bike fields in this template go in the job instructions or an intake checklist; a bench board of bikes by status; shop statuses such as waiting on parts or ready for pickup; intake tags and ticket printing; and customer status texts.',
    },
    {
      kind: 'features',
      heading: 'How this template maps to Service',
      intro: 'Which fields have a home in Service today, and which are still on the roadmap.',
      items: [
        { title: 'Numbered jobs with visits', body: 'Ticket number, instructions for the reported issue, and one or more visits, each with an assignee and a date.', icon: 'kanban', status: 'live' },
        { title: 'Quote and approval', body: 'An itemized quote with optional lines, marked customer approved by staff, then converted into the job with the chosen lines.', icon: 'quote', status: 'live' },
        { title: 'Checklists on the ticket', body: 'The tune-up or safety checklist attached to each visit, and required before the visit can close.', icon: 'clipboard', status: 'live' },
        { title: 'Technician time', body: 'Mechanics clock in and out against the visit, and a manager approves the week.', icon: 'stopwatch', status: 'live' },
        { title: 'Bike record and serial', body: 'Make, model, size, serial and every past repair on one bike. Not built; sites are addresses today.', icon: 'bike', status: 'roadmap' },
        { title: 'Bench board and shop statuses', body: 'Bikes by status, from checked in to waiting on parts to ready for pickup.', icon: 'kanban', status: 'roadmap' },
      ],
    },
    {
      kind: 'prose',
      heading: 'What you can do in Service today',
      body: [
        "Service runs the chain from request to invoice today. A request comes in from a public web form or is typed in at the counter, and lands in the Requests inbox with the customer's name, email and phone. Staff triage it to a site, write a quote, and once the customer says yes, convert the approved quote into a numbered job with its visits. The mechanic closes the visit, the job is billed with one click, and a payment is recorded by hand when the rider pays.",
        "Service does not hold bikes yet. Jobs belong to a site, which is an address and a free-text customer name, so there is no serial number field, no size or make and model, and no per-bike history. Until customer and bike records are built, put the bike details into an intake checklist attached to the visit: short answers for make, model, size, color and serial; a long answer for the reported issue in the customer's words; a number for the approval limit; photo questions for condition at intake; and a customer signature.",
        "Mark the serial, the reported issue and the photos as required, and the visit cannot be closed without them. The checklist PDF is a signed intake record you can print and hang on the bike or email to the customer yourself. It is a workaround rather than a bike record, but it gets the fields captured every time.",
      ],
    },
    {
      kind: 'visual',
      visual: 'intake-phone',
      heading: 'Intake on a phone at the counter',
      caption: 'Repair intake on a phone. Riders cannot pick a drop-off slot yet; online booking is on the roadmap. A public request form and an intake checklist work today.',
    },
  ],
  faqs: [
    { q: 'What should a bike repair work order include?', a: 'A bike repair work order should include the customer contact details, bike make, model, size, color and serial number, the reported issue, a promised date, the quote and approval, parts, labor, the technician, any checklist and notes. It should also record the bike condition at intake and items left with it.' },
    { q: 'Why record the bike serial number on every ticket?', a: 'The serial number is the only field that tells two identical bikes apart for certain. It also supports warranty claims and theft checks and lets you recognize a returning bike.' },
    { q: 'What is an approval limit on a repair ticket?', a: 'An approval limit is the amount the customer lets you spend without calling them first. Asking at intake and writing it down stops small extras from stalling a bike on the bench.' },
    { q: 'Does BIKE.co have work orders?', a: 'Yes, work orders are live in BIKE.co Service as numbered jobs with visits, line items from the quote and required checklists. There is no bike or serial record and no bench board yet, so capture the bike details with an intake checklist on the visit.' },
    { q: 'Should I use a paper or digital work order?', a: 'Use whatever your team fills in every time, but digital records are searchable and harder to lose. A paper tag on the bike is still useful even with a digital ticket, because the ticket number connects the two.' },
  ],
  related: ['/product/work-orders', '/product/service-checklists', '/resources/repair-pricing-calculator', '/roadmap'],
}

const laborRateGuide: ContentPage = {
  slug: 'labor-rate-guide',
  title: 'How to set your bike shop labor rate',
  metaTitle: 'Bike Shop Labor Rate Guide: Set a Rate That Pays | BIKE.co',
  metaDescription: 'Work out a bike shop labor rate from your costs, billable hours, utilization and target margin. A step-by-step method with a worked example.',
  eyebrow: 'Free guide',
  lede: 'Your labor rate is arithmetic, not a guess. Costs divided by the hours you actually bill, then a margin on top. Here is the method, with a worked example.',
  status: 'live',
  visual: 'timeclock',
  icon: 'stopwatch',
  summary: 'Work out an hourly rate that pays.',
  sections: [
    {
      kind: 'prose',
      heading: 'Why a copied rate does not work',
      body: [
        "Most shops set their rate by looking at the shop across town and charging a bit less. That tells you what they charge, not what your service department costs to run. Your rent, your wages, how many mechanics you have, and how many of their hours actually end up on a ticket are all different.",
        "The method is simple. Work out what the service side of your shop costs in a month. Work out how many hours your mechanics bill in that month, not how many they are paid for. Divide one by the other and you have a break-even rate. Add your target margin and you have a rate that pays.",
        "This guide does not tell you what rate to charge, and it does not quote industry averages. The numbers below are an example with round figures to show the method. Use your own.",
      ],
    },
    {
      kind: 'steps',
      heading: 'The method',
      steps: [
        { title: '1. Add up service costs for a month', body: 'Mechanic wages including payroll taxes and benefits, a share of rent and utilities for the workshop floor, tools and tool replacement, shop consumables, insurance, software, and a fair share of the owner and counter time spent on service.' },
        { title: '2. Count paid mechanic hours', body: 'Hours each mechanic is paid for in the month, excluding holidays and time off.' },
        { title: '3. Apply utilization', body: 'The share of paid hours that end up on a ticket and get billed. Cleaning, waiting on parts, answering the phone, builds for the shop floor and comebacks are paid but not billed.' },
        { title: '4. Divide for break-even', body: 'Monthly service cost divided by billable hours. Below this rate, every hour loses money.' },
        { title: '5. Add a target margin', body: 'Divide the break-even rate by one minus your target margin. Round to a clean number.' },
      ],
    },
    {
      kind: 'table',
      heading: 'A worked example',
      intro: 'Hypothetical round numbers to show the method. Not a benchmark and not a recommendation.',
      columns: ['Line', 'Example figure', 'Working'],
      rows: [
        ['Service costs per month', '$20,000', 'Wages, share of rent, tools, insurance, software, share of owner time'],
        ['Mechanics', '2', ''],
        ['Paid hours per mechanic', '160', '40 hours a week, 4 weeks'],
        ['Total paid hours', '320', '2 x 160'],
        ['Utilization', '70%', 'Share of paid hours that are billed'],
        ['Billable hours', '224', '320 x 0.70'],
        ['Break-even rate', '$89.29', '$20,000 / 224'],
        ['Target margin on labor', '15%', 'Your choice'],
        ['Rate with margin', '$105.04', '$89.29 / (1 - 0.15)'],
        ['Rounded rate', '$105', 'For the menu board'],
      ],
      note: 'Example only. Every figure here is invented to show the arithmetic.',
    },
    {
      kind: 'prose',
      heading: 'Utilization is the lever',
      body: [
        "Look at what utilization does in the example. At 70%, the break-even rate is about 89 dollars. If utilization falls to 60%, billable hours drop to 192 and break-even climbs to about 104 dollars. If you raise it to 80%, billable hours rise to 256 and break-even falls to about 78 dollars. The same shop, the same costs, a 26-dollar swing in what an hour has to earn.",
        "Utilization falls in quiet months, when mechanics are paid but the bench is thin, and it falls on days when bikes sit waiting on parts. It also falls quietly on busy days when mechanics fix small things without writing them on the ticket. A written approval limit and a habit of recording every task help more than you would expect.",
        "Work out your rate on a realistic utilization for the whole year, not your best May. If you set it on peak-season numbers, the winter will find you out.",
      ],
    },
    {
      kind: 'prose',
      heading: 'Flat-rate menus and your hourly rate',
      body: [
        "Most shops sell a menu, not hours: a basic tune-up, a brake bleed, a tubeless setup. Each menu price is book time multiplied by your hourly rate. A brake bleed with 30 minutes of book time at a 105-dollar rate is 52.50 dollars; round it to 55 on the board.",
        "Book time should be how long the job takes a competent mechanic on your bench, including stand time, test ride and paperwork. Time a few real jobs before you set it. When a mechanic beats book time, the shop earns more than its hourly rate; when a job runs long, it earns less. Compare the two regularly and adjust book times that are consistently wrong.",
        "Revisit the whole calculation when your costs change: a new lease, a wage increase, a new mechanic, a new tool purchase. The rate is only as current as the costs you fed it.",
      ],
    },
    {
      kind: 'callout',
      tone: 'honest',
      heading: 'Time tracking is live; job costing is not',
      body: 'Technician time tracking is live in BIKE.co Service: mechanics clock in and out against a visit and its job, a manager approves the weekly timesheet, and the monthly report shows hours per person. Clocked hours do not flow onto invoices yet, there is no payroll export, and job costing that compares labor and parts against the price is on the roadmap. Work out utilization in a spreadsheet from the hours report and your billed labor.',
    },
    {
      kind: 'features',
      heading: 'What Service measures, and what it will',
      intro: 'Time and hours are live today. Costing each job is still on the roadmap.',
      items: [
        { title: 'Time on the job', body: 'Mechanics clock in and out against a visit and its job, or on their own, as work, drive, shop or break time. Forgotten shifts can be added by hand.', icon: 'stopwatch', status: 'live' },
        { title: 'Weekly timesheets', body: 'A manager approves each week, nobody approves their own hours, and overtime follows California rules.', icon: 'ledger', status: 'live' },
        { title: 'Hours report', body: 'Monthly hours per person, split into straight time, 1.5x and 2x.', icon: 'chart', status: 'live' },
        { title: 'Job costing', body: 'Labor at rate times time, plus parts, against the price of each job. Not built; hours do not reach invoices yet.', icon: 'chart', status: 'roadmap' },
        { title: 'Forecasting the season', body: 'Cash flow forecasts for busy and quiet months in the erp.io CFO module.', icon: 'trend', status: 'suite' },
      ],
    },
    {
      kind: 'visual',
      visual: 'job-costing',
      heading: 'Labor and parts against the price',
      caption: 'Per-job costing. Time is clocked against jobs in Service today, but the job costing screen is on the roadmap and not built yet.',
    },
  ],
  faqs: [
    { q: 'How do I calculate my bike shop labor rate?', a: 'Divide your monthly service department costs by the hours your mechanics actually bill in a month to get a break-even rate, then divide that by one minus your target margin. For example, 20,000 dollars of costs over 224 billable hours is about 89 dollars; with a 15% margin it is about 105 dollars.' },
    { q: 'What is utilization in a bike shop?', a: 'Utilization is the share of paid mechanic hours that end up billed on a ticket. Cleaning, waiting on parts, phone calls and comebacks are paid but not billed, so utilization is always below 100%.' },
    { q: 'Should I copy the labor rate of other shops near me?', a: 'No, not as your starting point, because their rate reflects their costs, not yours. Work out your own break-even rate first, then compare it with the local market to decide how to position your prices.' },
    { q: 'How do flat-rate menu prices relate to my hourly rate?', a: 'Each menu price is book time multiplied by your hourly rate. A 30-minute brake bleed at 105 dollars an hour is 52.50 dollars before rounding.' },
    { q: 'Can BIKE.co track technician time today?', a: 'Yes, technician time tracking is live in BIKE.co Service, with clock in and out against a visit, weekly timesheet approval and an hours report per person. Hours do not flow onto invoices yet, there is no payroll export, and job costing is on the roadmap.' },
  ],
  related: ['/resources/repair-pricing-calculator', '/product/time-tracking', '/product/job-costing', '/platform/cfo'],
}

export const resourcePages: ContentPage[] = [
  repairPricingCalculator,
  tuneUpChecklist,
  safetyInspectionChecklist,
  ebikeDiagnosticChecklist,
  workOrderTemplate,
  laborRateGuide,
]
