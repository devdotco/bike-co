import type { ContentPage } from '@/lib/types'

/**
 * Product pages, groups "Parts & inventory", "Get paid" and "Run the shop".
 * Status follows docs/SERVICE-STATUS.md: invoicing, reporting and team
 * permissions are live in Service; everything else here is on the Service
 * roadmap or delivered by another live erp.io module.
 */
export const productPagesB: ContentPage[] = [
  // ─── Parts inventory ──────────────────────────────────────────────────────
  {
    slug: 'parts-inventory',
    title: 'Parts inventory for the shop floor and every van',
    metaTitle: 'Bike Shop Parts Inventory Software | BIKE.co',
    metaDescription: 'Planned parts inventory for bike shops: stock in the shop and every van, parts consumed on work orders, cycle counts and reorder points. On the roadmap.',
    eyebrow: 'Parts & inventory · Roadmap',
    lede: 'Tubes, chains, cassettes, pads and sealant, counted where they actually sit and taken off the shelf by the work order that used them. This is on the Service roadmap (phase P8); here is how it will work.',
    status: 'roadmap',
    visual: 'parts-table',
    icon: 'box',
    summary: 'Stock in the shop and in every van, consumed by the work order that used it.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What exists today, and what does not',
        body: 'Today Service runs the repair itself: requests, quotes, jobs with visits and checklists, timesheets and invoices. Parts appear only as free-text lines on a quote, job or invoice; there is no stock count behind them. Parts inventory is not built yet. It is phase P8 on the Service roadmap, alongside purchase orders. Nothing on this page can be used in the app today.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'Why parts are the part most shop software skips',
        body: [
          'General field-service tools were built for trades that bill labor and buy materials per job. Jobber, the tool the Service module is modeled against, has no inventory of its own; shops that need it bolt on a marketplace app. A bike shop cannot live like that. Half of every tune-up ticket is parts: a chain, a cassette, two sets of pads, a length of housing, a new cable end you will never bill for but still have to buy.',
          'So the Service plan treats inventory as one of the places it deliberately goes beyond Jobber. Stock is counted by location, parts come off the shelf when a work order uses them, and the cost of what you used flows to the books without anybody typing it in twice. That is the design. It is scheduled for phase P8 of the Service build, after work orders, scheduling, the field app, time tracking and invoicing.',
          'We are saying this plainly because inventory is the question most shop owners ask first. If you need a working parts system tomorrow, BIKE.co is not it yet. If you want to see where it is heading and run your quotes, jobs and invoices in the meantime, read on.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Stock locations: the back room, the counter and each van',
        body: [
          'The plan models stock by location. A location is either a building, such as the back room or the wall behind the counter, or a vehicle. Every mobile repair van becomes its own stock location with its own on-hand counts, so you know that van two has four 29 x 2.4 tubes left and van one has none before either tech rolls out on a Saturday.',
          'An item has one record and many stock levels. A KMC 12-speed chain is a single catalog item, with a quantity in the shop, a quantity in each van, and a history of every movement between them. Movements are typed: received from a supplier, transferred between locations, consumed on a job, adjusted, or counted. You can always answer the question "where did those six chains go" by reading the movements, not by guessing.',
          'Transfers are how a van gets restocked. At the end of the day the tech, or whoever runs the counter, moves ten tubes, two bottles of sealant and a handful of derailleur hangers from the shop to the van. The shop count drops, the van count rises, and neither number is a surprise the next morning.',
        ],
      },
      {
        kind: 'features',
        heading: 'What the inventory design covers',
        intro: 'Each of these is a planned capability from the Service parity matrix (rows JBR-INV-001 to 005). None is built yet.',
        items: [
          { title: 'Stock by location', body: 'On-hand counts for the shop and for every van, with each van treated as its own location.', icon: 'store', status: 'roadmap' },
          { title: 'Consumed on the work order', body: 'Add a part to the job and it comes off the shelf of the location it was taken from.', icon: 'wrench', status: 'roadmap' },
          { title: 'Transfers and adjustments', body: 'Move stock from the back room to a van, or write off the tube that split on the rim.', icon: 'van', status: 'roadmap' },
          { title: 'Cycle counts', body: 'Count one bin or one category at a time instead of shutting the shop for a full stocktake.', icon: 'check', status: 'roadmap' },
          { title: 'Reorder points', body: 'A minimum per item and location that flags the part and feeds a purchase order.', icon: 'barcode', status: 'roadmap' },
          { title: 'Cost to the ledger', body: 'Perpetual cost handed to erp.io Accounting, which already computes weighted-average cost of goods sold.', icon: 'ledger', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Parts that come off the shelf when the job uses them',
        body: [
          'The core of the design is consumption. When a mechanic fits a new chain and cassette to a customer bike, those two items are added to the work order as parts, and the stock level of the location they came from goes down by one each. There is no separate "remember to update inventory" step, because the line on the ticket is the update.',
          'That matters most for the small stuff. Brake pads, cable and housing, ferrules, end caps, tubeless valves, sealant top-ups, bottom bracket bearings and derailleur hangers are the parts that vanish without a trace in most shops. You sell a lot of them, you stock dozens of variants, and nobody writes down the one they grabbed during a busy Saturday. When the ticket is the record, the count stays honest.',
          'E-bike parts get the same treatment. Motor sensors, speed magnets, display mounts, charge ports and wiring harnesses are expensive, slow to arrive and easy to lose track of. Knowing exactly which Bosch or Shimano part is on the shelf, and which one was fitted to which customer bike, is the difference between quoting a two-day turnaround and a two-week one.',
        ],
      },
      {
        kind: 'visual',
        visual: 'purchase-order',
        heading: 'From a low count to a purchase order',
        caption: 'A planned screen: items that fell below their reorder point grouped by supplier into a draft purchase order. Illustrative, not a screenshot of a live feature.',
      },
      {
        kind: 'prose',
        heading: 'Counting without closing the shop',
        body: [
          'Full stocktakes are why shop inventory drifts. They are so painful that they happen once a year, usually in January, and the numbers are wrong again by March. The plan uses cycle counts instead: count one category, one bin or one van at a time, record the result, and let the system post the difference as an adjustment with a reason.',
          'Count tubes on a quiet Tuesday. Count brake pads the week after. Count each van on the day it is restocked. Over a season every item gets counted several times, and the variance on each count tells you something useful: a van that is always short on hangers, or a pad compound that keeps walking out the door.',
          'Every adjustment keeps its reason, whether that is damaged, returned to supplier, warranty or count variance. That history is what lets you tell shrinkage apart from a data-entry habit that needs fixing.',
        ],
      },
      {
        kind: 'table',
        heading: 'Typical stock by location',
        intro: 'An example of how a two-van shop might set up its locations once inventory ships. Quantities are illustrative.',
        columns: ['Item', 'Shop', 'Van 1', 'Van 2', 'Reorder at'],
        rows: [
          ['700 x 28 tube, presta 60mm', '48', '8', '6', '20'],
          ['29 x 2.4 tube, presta', '22', '4', '0', '10'],
          ['12-speed chain', '14', '2', '2', '6'],
          ['Resin disc pads, common fit', '30', '6', '6', '12'],
          ['Tubeless sealant, 500ml', '9', '1', '1', '4'],
          ['Derailleur hanger, common UDH', '12', '3', '3', '6'],
          ['Shift cable and housing kit', '25', '5', '4', '10'],
        ],
        note: 'Reorder points are set per item and location in the plan, so a van can have a lower minimum than the shop.',
      },
    ],
    faqs: [
      { q: 'Can I track parts inventory in BIKE.co today?', a: 'No. Parts inventory is planned for phase P8 of the Service roadmap and is not built yet. Today parts go on quotes, jobs and invoices as typed lines, with no stock behind them.' },
      { q: 'Will each mobile repair van have its own stock?', a: 'Yes, that is the design. Each vehicle is its own stock location with its own on-hand counts, and restocking a van is a transfer from the shop to that van, so both counts stay correct.' },
      { q: 'How will parts come off the shelf?', a: 'A part added to a work order will be consumed from the location it was taken from. The line on the ticket is the stock movement, so there is no separate inventory step for the mechanic to forget.' },
      { q: 'Does inventory cost more on some plans?', a: 'No. Nothing inside an erp.io module is gated by plan, so when inventory ships it will be part of Service on every plan, from Starter at $20 per user per month up to Scale.' },
      { q: 'How will inventory value reach my books?', a: 'Service will hand perpetual cost to erp.io Accounting, which already calculates weighted-average cost of goods sold. The write connection between Service and Accounting is itself planned, not built.' },
    ],
    related: ['/product/purchase-orders', '/product/job-costing', '/product/work-orders', '/roadmap'],
  },

  // ─── Purchase orders ──────────────────────────────────────────────────────
  {
    slug: 'purchase-orders',
    title: 'Purchase orders that start from your reorder points',
    metaTitle: 'Purchase Orders & Reorder for Bike Shops | BIKE.co',
    metaDescription: 'Planned purchase orders for bike shops: reorder points that draft the PO, receiving into shop or van stock, and supplier invoices matched to the order.',
    eyebrow: 'Parts & inventory · Roadmap',
    lede: 'When the tube count drops below its minimum, the part lands on a draft order for the right supplier. This is on the Service roadmap (phase P8, with parts inventory); here is how it will work.',
    status: 'roadmap',
    visual: 'purchase-order',
    icon: 'barcode',
    summary: 'Reorder points that write the PO, and receiving that puts stock where it belongs.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Planned, not built',
        body: 'Purchase orders, reorder points and receiving are part of phase P8 of the Service roadmap and cannot be used today. What you can use in Service now is the repair chain: requests, quotes, jobs with visits and checklists, timesheets and invoices. A special-order part today is a typed line on the quote and the job, and the order itself goes through your distributor as it does now.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The order you forgot to place',
        body: [
          'Every shop has a version of this story. It is the second week of May, the drop-off queue is out the door, and the mechanic reaches for a 12-speed chain and finds the hook empty. The distributor order went in on Monday but nobody added chains because nobody noticed. The bike waits three days. The customer calls twice.',
          'Reorder software fixes that by making the shelf ask for itself. The Service plan gives every inventory item a reorder point per stock location. When stock at that location falls below the point, the item is flagged, and flagged items become lines on a draft purchase order for the supplier you buy them from.',
          'You still decide what goes out. A draft is a draft; the person who places orders reviews it, adjusts quantities for the season, adds the special-order derailleur a customer is waiting on, and sends it. The software does the noticing, which is the part people are bad at in May.',
        ],
      },
      {
        kind: 'steps',
        heading: 'How a purchase order will flow',
        intro: 'The planned cycle from a low count to stock on the shelf, from Service parity rows JBR-INV-004 and JBR-EXP-003.',
        steps: [
          { title: 'Stock drops below its reorder point', body: 'Parts consumed on work orders reduce the count at the location they came from. When it crosses the minimum, the item is flagged.' },
          { title: 'A draft PO is grouped by supplier', body: 'Flagged items gather onto a draft for their usual supplier, with a suggested quantity to bring stock back up.' },
          { title: 'You review and send it', body: 'Adjust quantities, add special orders for customer bikes, and send the order to the supplier.' },
          { title: 'Receive against the PO', body: 'When the box arrives, receive the lines that came in. Partial deliveries stay open for the back-ordered parts.' },
          { title: 'Stock and cost update', body: 'Received parts land in the chosen location at their cost, which is what job costing and the ledger read later.' },
          { title: 'Match the supplier invoice', body: 'The supplier bill is matched to the PO, and the payable itself lives in erp.io Accounting.' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Receiving puts the part where it belongs',
        body: [
          'Receiving is where most shops lose track. A box arrives, somebody cuts it open on the counter, the parts go wherever there is space, and the order is marked done even though the brake rotors are on back order. The plan makes receiving an explicit step against the purchase order: each line is received into a specific location, in the quantity that actually arrived.',
          'Partial deliveries stay open. If the distributor ships the cassettes and chains but not the bottom brackets, the bottom bracket line stays outstanding on the order, and you can see at a glance what is still coming. When the rest arrives, you receive it against the same order.',
          'You can receive straight into a van, too. If a mobile tech is picking up an order on the way to their first stop, the parts can be received into that van rather than into the shop and then transferred. One movement instead of two, and the count is right the first time.',
        ],
      },
      {
        kind: 'visual',
        visual: 'parts-table',
        heading: 'The list that feeds the order',
        caption: 'A planned view of parts inventory with reorder flags, the source of every draft purchase order. Illustrative only.',
      },
      {
        kind: 'prose',
        heading: 'Special orders for a customer bike',
        body: [
          'Not every order is restock. A customer brings in a bike with a bent hanger that is specific to one frame, a worn freehub body, or an e-bike speed sensor you never keep on the shelf. The plan lets you put a special-order part on the purchase order and tie it to the work order that needs it.',
          'That tie is what keeps the bike moving. When the part is received, the work order it belongs to is the one you look at next. Combined with the planned "your bike is ready" texts and shop statuses on work orders, it closes the loop between the box arriving and the customer getting a call.',
          'It also keeps special orders out of your general stock counts, so a single hanger for one customer does not quietly become an item with a reorder point you never meant to set.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Where the money goes',
        body: [
          'Purchase orders are also a cost record. Every part received carries the price you paid for it, and that cost follows the part onto the work order where it is used. That is what lets the planned job-costing view show you that a tune-up with a chain and cassette made money and one with a special-order hanger and two hours of labor did not.',
          'The supplier bill itself belongs in erp.io Accounting, which is live today and holds your payables. The Service plan matches the supplier invoice to the purchase order so you can see what you ordered, what arrived and what you were billed side by side. The connection that writes those amounts from Service into Accounting is planned under decision D2 and is not built yet.',
          'erp.io Pey, which is also live, matches payments to bank deposits. It does not place orders or move money for you, and we are not claiming it does.',
        ],
      },
    ],
    faqs: [
      { q: 'Can BIKE.co create purchase orders today?', a: 'No. Purchase orders, reorder points and receiving are planned for phase P8 of the Service roadmap. Service today handles quotes, jobs and invoices, with parts typed in as lines.' },
      { q: 'Will reorder points be per location?', a: 'Yes. The plan sets reorder rules per item and stock location, so the shop can keep twenty tubes as a minimum while each van keeps six.' },
      { q: 'Will BIKE.co send orders to my distributor automatically?', a: 'No automatic distributor integration is planned that we can point to. The design is a draft purchase order you review and send yourself; we will not claim supplier connections that are not on the roadmap.' },
      { q: 'What happens when only part of an order arrives?', a: 'You receive the lines that arrived and the rest of the order stays open. The outstanding lines show what is still on back order until they are received.' },
      { q: 'Where will supplier invoices live?', a: 'In erp.io Accounting, which holds payables and is live today. Service will match the supplier invoice to its purchase order; that matching is planned with job costing.' },
    ],
    related: ['/product/parts-inventory', '/product/job-costing', '/product/accounting-sync', '/roadmap'],
  },

  // ─── Job costing ──────────────────────────────────────────────────────────
  {
    slug: 'job-costing',
    title: 'Job costing: what each repair actually made',
    metaTitle: 'Job Costing for Bike Repair Shops | BIKE.co',
    metaDescription: 'Planned job costing for bike shops: technician time times rate, parts at cost and expenses against the price of every repair, with margin alerts.',
    eyebrow: 'Parts & inventory · Roadmap',
    lede: 'Labor from the clock, parts at what you paid, set against what you charged. This is on the Service roadmap (phase P6, with parts cost arriving in P8); here is how it will work.',
    status: 'roadmap',
    visual: 'job-costing',
    icon: 'chart',
    summary: 'Labor and parts against the price, on every work order.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What you can do now',
        body: 'Job costing is not built. The raw material is starting to exist: jobs carry priced lines, and mechanics clock hours against visits on those jobs today. What is missing is a labor cost rate per person, any parts cost, and a screen that sets them against the price. Parts cost depends on parts inventory, which arrives in phase P8.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The flat-rate tune-up that lost money',
        body: [
          'Most shops price service off a menu: a basic tune, a full overhaul, a wheel true, a hydraulic bleed. The menu is right on average and wrong on the bikes that matter. The overhaul on a clean road bike takes ninety minutes. The overhaul on a winter commuter with a seized seatpost and a cracked bottom bracket shell takes four hours, and the menu price was the same.',
          'Job costing is how you find those bikes. Every work order carries three kinds of cost against its price: the mechanic time spent on it, the parts that went into it, and any expenses you paid for it, such as a courier or an outside wheel build. Subtract them from what the customer paid, and you have the margin on that one repair.',
          'Seen across a month, those numbers tell you which menu items to raise, which mechanics are fast on which jobs, and whether e-bike diagnostics are paying their way. That is the purpose of the planned job-costing view.',
        ],
      },
      {
        kind: 'features',
        heading: 'What goes into the cost',
        intro: 'Planned capabilities from Service parity rows JBR-EXP-001 to 006.',
        items: [
          { title: 'Labor at cost', body: 'Time clocked to the work order multiplied by each mechanic\'s cost rate, not their billing rate.', icon: 'stopwatch', status: 'roadmap' },
          { title: 'Parts at what you paid', body: 'Parts consumed from inventory carry the cost they were received at, once inventory ships in P8.', icon: 'box', status: 'roadmap' },
          { title: 'Expenses with receipts', body: 'An outside wheel build or a courier charge, attached to the job with a photo of the receipt.', icon: 'invoice', status: 'roadmap' },
          { title: 'The profit bar', body: 'Price, cost and margin on one line at the top of the work order.', icon: 'chart', status: 'roadmap' },
          { title: 'Margin alerts', body: 'A flag when a job drops below the margin you set as your floor.', icon: 'bolt', status: 'roadmap' },
          { title: 'Job profitability report', body: 'Margin by service type, mechanic and month, planned with the reporting phase.', icon: 'trend', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Labor comes from the clock, not a guess',
        body: [
          'The labor side is built on technician time tracking, which is live. A mechanic clocks in against the visit when the bike goes in the stand and clocks out when it comes out, so the hours already sit on the job. Interruptions, such as answering the phone or helping on the counter, go to shop time or a break so they do not inflate the repair. What job costing adds is a cost rate for each person to turn those hours into dollars.',
          'Each mechanic has a cost rate, meaning what an hour of their time actually costs you, separate from the labor rate you charge. The job cost multiplies one by the other. A senior mechanic may cost more per hour and finish the bleed in half the time, and job costing will show you both sides of that.',
          'The field app that carries the clock is a web app you install to the home screen, not a native app. There is no background GPS tracking; a foreground check-in when a van tech opens a job is planned.',
        ],
      },
      {
        kind: 'visual',
        visual: 'timeclock',
        heading: 'Time on the ticket',
        caption: 'Technician time clocked against jobs, which is live in Service today. Job costing will turn these hours into the labor line of the job cost; that part is on the roadmap.',
      },
      {
        kind: 'prose',
        heading: 'Parts at cost, not at retail',
        body: [
          'The parts side depends on parts inventory. When a chain is received on a purchase order, its cost is recorded. When the same chain is consumed on a work order, that cost moves with it. The job cost shows what the chain cost you, not what you sold it for, which is the only way the margin number means anything.',
          'Until inventory ships, the plan allows expenses to be recorded against a job, with a photo of the receipt. That covers the special-order part bought on a card at the distributor counter or the tubeless tire picked up from another shop on a Saturday morning.',
          'Supplier invoices can also be matched to the purchase order that ordered the parts, so you can compare what you expected to pay with what you were billed. The payable itself sits in erp.io Accounting.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Using the numbers',
        body: [
          'Job costing is only useful if it changes a decision. The ones it tends to change in a bike shop are the price of the menu items that run long, the minimum charge on a walk-in flat fix, whether to keep doing wheel builds in-house, and how much to charge for e-bike diagnostic time that currently goes unbilled.',
          'It also answers staffing questions honestly. If one mechanic consistently closes overhauls with a healthy margin and another does not, the answer might be training, a tool, or a mismatch of jobs to skills. Courses, the erp.io training module, is live and is where you would write your shop standard for that work.',
          'None of these views exist yet. When they do, the Service plan puts them on the work order first and in the reports second, because the moment to notice a job running over is before the invoice, not at the end of the month.',
        ],
      },
    ],
    faqs: [
      { q: 'Does BIKE.co have job costing today?', a: 'No. Hours are clocked against jobs and jobs carry priced lines today, but there is no labor cost rate, no parts cost and no screen comparing cost to price. Job costing is on the Service roadmap, and parts cost depends on inventory, which is phase P8.' },
      { q: 'Will labor cost use the rate I charge or what the mechanic costs me?', a: 'What the mechanic costs you. The plan multiplies time clocked to the work order by a cost rate per person, so margin reflects real cost rather than your posted labor rate.' },
      { q: 'How will parts be costed?', a: 'At the cost they were received at on a purchase order, carried onto the work order when consumed. Accounting already uses weighted-average cost of goods sold, and Service will hand perpetual cost to it.' },
      { q: 'Will I get warned when a job loses money?', a: 'Yes, margin alerts are in the plan: a flag when a job falls below a margin floor you set. They arrive with job costing, not before.' },
      { q: 'Can I estimate job margins before the job starts?', a: 'Not yet. Repair quotes are live, with line items, optional lines, discount and tax, but they carry prices only, not costs. A price book with cost and markup per item is on the roadmap, and that is what will show expected margin at quote time.' },
    ],
    related: ['/product/time-tracking', '/product/parts-inventory', '/product/reporting', '/resources/labor-rate-guide'],
  },

  // ─── Invoicing ────────────────────────────────────────────────────────────
  {
    slug: 'invoicing',
    title: 'Invoicing from the finished job, not from memory',
    metaTitle: 'Invoicing for Bike Repair Shops | BIKE.co',
    metaDescription: 'Live in BIKE.co: bill a finished job in one click. The invoice takes the job\'s lines, discount, tax, terms and a due date, and is frozen once sent.',
    eyebrow: 'Get paid · Live',
    lede: 'The bike is done, the lines are already on the job, and the invoice is one click away. Invoicing is live in Service today.',
    status: 'live',
    visual: 'invoice',
    icon: 'invoice',
    summary: 'From the finished job to an invoice in one click, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body: 'Live today: "Bill this job" creates a numbered invoice from the job\'s lines once every visit is closed, with a discount, tax, due date, payment terms, a message to the customer and your terms text. Sent invoices are frozen and can be voided, and an admin records payments by hand. Not there yet: marking an invoice Sent only changes its status. Nothing is emailed or texted, there is no invoice PDF and no customer-facing invoice page, there are no Stripe pay links or QR codes, and invoices do not post to erp.io Accounting.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The job is already the invoice',
        body: [
          'By the time a bike comes out of the stand, everything the invoice needs is already known. The lines are on the job, copied from the quote the rider approved. The checklist that says the brakes were bled and the bolts were torqued is on the visit. Retyping any of that at the counter is where mistakes and missed charges come from.',
          'In Service the invoice is generated from the job. Open a job whose visits are all closed and press "Bill this job". Service creates a numbered invoice with the job\'s lines, quantities and prices already on it. If a visit is still open, billing is refused, which stops you invoicing a bike that has not had its final check.',
          'The missed charges are the ones that hurt. The extra length of housing, the new hanger, the ten minutes of truing that turned into forty. If those go on the job as lines when they happen, the invoice includes them because the job does.',
        ],
      },
      {
        kind: 'prose',
        heading: 'What goes on an invoice today',
        body: [
          'Before you send it, the invoice can take a discount as a percentage or a fixed amount, a tax rate, a due date and payment terms. There is room for a message to the customer, such as "Chain was at 0.75, replaced as agreed", and for contract or terms text you want on every invoice.',
          'The arithmetic is the same as on the quote: whole cents, tax after discount, rounding half up. So the total the rider was quoted, the total on the job and the total on the invoice agree to the cent unless someone changed a line on purpose.',
          'When you mark the invoice Sent, Service freezes it. The lines and totals can no longer be edited, so the invoice in the system is the one the customer was given. If it went out wrong, it can be voided, and voiding is kept to people with the payments permission.',
        ],
      },
      {
        kind: 'steps',
        heading: 'From the stand to billed, today',
        steps: [
          { title: 'Close every visit', body: 'Each visit on the job is completed, and any required checklist is submitted first.' },
          { title: 'Bill this job', body: 'One click creates a numbered invoice from the job\'s lines.' },
          { title: 'Set the terms', body: 'Add a discount, tax, a due date, payment terms and a message.' },
          { title: 'Mark it Sent', body: 'The invoice is frozen. You give it to the rider yourself; Service does not deliver it yet.' },
          { title: 'Record the payment', body: 'An admin records money received against it. Part payments work, and it shows Paid when settled.' },
        ],
      },
      {
        kind: 'features',
        heading: 'Invoicing features and their status',
        items: [
          { title: 'Bill the job in one click', body: 'A numbered invoice from the job\'s lines, refused while a visit is open.', icon: 'kanban', status: 'live' },
          { title: 'Discount, tax and terms', body: 'Percent or dollar discount, tax after discount, due date, payment terms.', icon: 'tag', status: 'live' },
          { title: 'Frozen once sent, voidable', body: 'The sent invoice cannot be edited; a wrong one is voided.', icon: 'shield', status: 'live' },
          { title: 'Payments recorded by hand', body: 'Partial payments, a running balance, and Paid when settled.', icon: 'check', status: 'live' },
          { title: 'Email, text and PDF', body: 'Delivering the invoice to the rider and a PDF copy.', icon: 'text', status: 'roadmap' },
          { title: 'Pay links and QR codes', body: 'A Stripe link or code the rider pays from their own phone.', icon: 'qr', status: 'roadmap' },
          { title: 'Batch and progress invoicing', body: 'A fleet\'s month in one invoice; a custom build in stages.', icon: 'stack', status: 'roadmap' },
          { title: 'Posting to Accounting', body: 'Invoices and payments posted to the erp.io ledger once.', icon: 'ledger', status: 'roadmap' },
        ],
      },
      {
        kind: 'visual',
        visual: 'job-detail',
        heading: 'Billing starts on the job',
        caption: 'A job with its visits, the assignee on each and the required checklist gate. When every visit is closed, "Bill job" creates the invoice. This is live today.',
      },
      {
        kind: 'prose',
        heading: 'What the rider does not get yet',
        body: [
          'The pictured invoice at the top of this page shows a QR code and a pay link. Those are on the roadmap, not in Service today. So is delivery: marking an invoice Sent does not email or text it, there is no PDF of the invoice, and there is no page the rider can open to see it. For now you show the total at the counter, print your own copy, or write the rider an email yourself.',
          'Taking the money is also outside Service today. Take the card on your existing terminal or payment app, then record the payment against the invoice in Service so the balance is right. Recording a payment is an admin-only permission on purpose: saying money arrived is the one step with no work behind it to check.',
          'For accounts such as a rental fleet or a corporate bike program, the plan adds batch invoicing across many jobs, statements for customers who carry a balance, and progress invoicing for big jobs. Overdue follow-ups will run through the erp.io CRM once Service sends it invoice events.',
        ],
      },
      {
        kind: 'prose',
        heading: 'The books',
        body: [
          'Service invoices do not post to erp.io Accounting yet. If you keep your books in Accounting, or anywhere else, you enter the invoice and the payment there as you do today. The planned connection posts every invoice, payment, refund and write-off to Accounting exactly once, with an idempotency key on each posting so a retry never records the same invoice twice.',
          'What you do get today is a clean operating record. The monthly report in Service shows what was invoiced, what was collected, what is outstanding and what is overdue, which is the list you need to chase money at the end of the month even before the books are connected.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I create invoices in BIKE.co today?', a: 'Yes. Once every visit on a job is closed, "Bill this job" creates a numbered invoice from the job\'s lines, with discount, tax, due date, terms and a message. What is not built yet is sending it to the rider or taking payment through it.' },
      { q: 'Does BIKE.co email or text the invoice?', a: 'Not yet. Marking an invoice Sent only changes its status and freezes it. There is no email, text, invoice PDF or customer-facing invoice page today; delivery is on the roadmap.' },
      { q: 'Can customers pay with a link or QR code?', a: 'Not yet. Stripe pay links and QR codes are on the roadmap. Today you take payment the way you do now and an admin records it against the invoice, including partial payments.' },
      { q: 'Can I bill a job before the work is finished?', a: 'No. Billing is refused while any visit on the job is still open, so an invoice cannot go out on a bike that has not had its final visit closed.' },
      { q: 'Do invoices sync to my accounting?', a: 'Not yet. Service invoices do not post to erp.io Accounting or QuickBooks today. The monthly report shows invoiced, collected, outstanding and overdue totals, and accounting sync is on the roadmap.' },
    ],
    related: ['/product/work-orders', '/product/payments', '/product/reporting', '/product/accounting-sync'],
  },

  // ─── Payments ─────────────────────────────────────────────────────────────
  {
    slug: 'payments',
    title: 'Get paid at pickup with a pay link or a QR code',
    metaTitle: 'Payments for Bike Shops: Pay Links & QR | BIKE.co',
    metaDescription: 'Planned Stripe payments for bike shops: a pay link by text or email, a QR code at the counter or the van, card entry, deposits and tips. No Tap to Pay.',
    eyebrow: 'Get paid · Roadmap',
    lede: 'The customer scans a code on your screen, or taps the link in their text, and pays by card on their own phone. This is on the Service roadmap (phase P7); here is how it will work.',
    status: 'roadmap',
    visual: 'invoice',
    icon: 'card',
    summary: 'Pay links and QR codes at pickup, through your own Stripe account.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body: 'Live today: an admin records money received against a sent invoice. Part payments work, the balance can never go below zero, and the invoice shows Paid once it is settled. Not there yet: taking the payment. There is no Stripe connection, no pay link and no QR code, and Service takes no card payments; you take the money on your existing terminal or app and record it. When payments ship, card-present payment will be a Stripe payment link, a QR code or typed card entry. There will be no Tap to Pay and no card reader, because the Service field app is a web app, not a native app.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'How a customer will pay',
        body: [
          'Payments in Service will run through Stripe (decision D3), with a Stripe Connect account for your shop. That means the money goes to your Stripe account and then to your bank, and Stripe handles the card processing, the payouts and the compliance that comes with them.',
          'At the counter, the invoice will be shown on your screen with a QR code. The customer points their phone camera at it, opens a secure Stripe page and pays with their card or a wallet on their own phone. The same invoice can go out as a text or email with a payment link, so a customer who dropped off on Saturday can pay on Monday before they come in, and just pick up the bike.',
          'If the customer would rather hand you a card, the plan includes typed card entry. That is the full set for card-present payment: link, QR or card entry.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Why there is no Tap to Pay',
        body: [
          'Tap to Pay on a phone and Bluetooth card readers need a native app. The Service field app is deliberately web only (decision D5): an installable app you add to the home screen, which works offline and uses the camera and signature pad through the browser. That choice keeps the app on every phone without an app store, but it rules out tapping a card on the phone.',
          'For a bike shop that is less of a loss than it sounds. Almost every customer carries a phone that can scan a QR code, and paying on their own screen is quicker than passing a card across the counter. For a mobile repair van, the QR code on the tech\'s phone works at the curb with no hardware to charge or pair.',
          'We would rather tell you this now than have you find out when you go looking for the reader settings.',
        ],
      },
      {
        kind: 'features',
        heading: 'What the payments design covers',
        intro: 'Planned capabilities from Service parity section 13.',
        items: [
          { title: 'Record payments by hand', body: 'Money received recorded against a sent invoice, with part payments and a Paid status. Admin only.', icon: 'check', status: 'live' },
          { title: 'Payment link', body: 'A Stripe link on the invoice, sent by email or text, paid on the customer\'s own phone.', icon: 'link', status: 'roadmap' },
          { title: 'QR code at the counter or van', body: 'The invoice as a code on your screen. The customer scans and pays.', icon: 'qr', status: 'roadmap' },
          { title: 'Card entry', body: 'Type the card in when the customer would rather hand it over.', icon: 'card', status: 'roadmap' },
          { title: 'Deposits and partial payments', body: 'A deposit when the quote is approved, and the balance at pickup.', icon: 'quote', status: 'roadmap' },
          { title: 'Cards on file and autopay', body: 'For fleets and accounts on a recurring billing schedule.', icon: 'stack', status: 'roadmap' },
          { title: 'Deposit matching', body: 'erp.io Pey, live today, matches payments to the bank deposits they arrive in.', icon: 'reconcile', status: 'suite' },
        ],
      },
      {
        kind: 'visual',
        visual: 'portal',
        heading: 'Paying from the customer portal',
        caption: 'A planned customer portal view where a rider pays an open invoice. The portal itself is a live erp.io module; Service invoices do not appear in it yet, and paying online is on the roadmap. Illustrative only.',
      },
      {
        kind: 'prose',
        heading: 'Deposits, tips, refunds and fleets',
        body: [
          'Deposits matter for special orders and big jobs. When a customer approves a quote for a new drivetrain, the plan lets you take a deposit at approval and apply it to the final invoice automatically. Nobody has to remember that the customer already paid half.',
          'Tips are in the plan, with preset percentages or a custom amount. Some shops will never use them; mobile repair customers often ask. Refunds, full or partial, and disputes are handled through Stripe with a record in Service.',
          'For accounts such as a rental fleet or a corporate bike program, the plan includes a saved card or bank account on file and automatic payments on a billing schedule. ACH bank payments are in the Stripe design for those larger, regular invoices.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Money into the books',
        body: [
          'Every payment, refund and payout is a ledger event. The plan posts each one from Service to erp.io Accounting through a write connection planned under decision D2, and erp.io Pey matches Stripe payouts against the deposits in your bank feed. Pey is live today for matching; it does not collect or move money.',
          'Card processing is done by Stripe on your own Stripe account, so processing terms are between you and Stripe. We are not publishing processing rates here, because they are Stripe\'s to set.',
          'Instant payouts, lending and business bank accounts are explicitly out of scope for Service. Stripe handles holds, reserves and tax forms such as 1099-K as the processor.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I take card payments in BIKE.co today?', a: 'No. Today an admin records payments by hand against a sent invoice, including part payments. Taking card payments, pay links and QR codes are on the Service roadmap and will run through your own Stripe account.' },
      { q: 'Does BIKE.co support Tap to Pay or a card reader?', a: 'No, and none is planned. The field app is a web app only, and Tap to Pay and card readers need a native app. Card-present payment will be a Stripe payment link, a QR code or typed card entry.' },
      { q: 'Who processes the card payments?', a: 'Stripe, through a Stripe Connect account for your shop. Money goes to your Stripe account and then to your bank, and Stripe handles processing, payouts, holds and tax forms as the processor.' },
      { q: 'Can a customer pay before they come to pick up?', a: 'Not through BIKE.co yet. Invoices are not delivered by email or text today, and there is no pay link. The design sends the invoice with a Stripe payment link so the customer can pay from home and just collect the bike.' },
      { q: 'Will deposits apply to the final invoice automatically?', a: 'Yes. In the plan, a deposit taken when a quote is approved is applied to the invoice raised from that job, so the balance due is right at pickup.' },
    ],
    related: ['/product/invoicing', '/product/customer-portal', '/platform/pey', '/pricing'],
  },

  // ─── Customer updates ─────────────────────────────────────────────────────
  {
    slug: 'customer-updates',
    title: '"Your bike is ready" texts that answer the phone for you',
    metaTitle: 'Your Bike Is Ready Texts & Updates | BIKE.co',
    metaDescription: 'Planned status texts for bike shops: bike-ready messages, repair approval requests and pickup reminders, sent from work-order events through erp.io CRM.',
    eyebrow: 'Get paid · Roadmap',
    lede: 'The work order moves to ready, and the customer gets a text before they think to call. This is on the Service roadmap; here is how it will work, and what it depends on.',
    status: 'roadmap',
    visual: 'ready-text',
    icon: 'text',
    summary: 'Ready, approval and pickup texts sent when the work order changes.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What works now and what does not',
        body: 'Status texts from Service are not built, and Service sends no customer messages of any kind today. Work orders are live, but they do not yet have a ready-for-pickup status, and Service does not yet send its events to erp.io CRM. CRM texting is built but not yet sending because a phone number and carrier registration are still being set up. CRM email templates and the CRM workflow builder are live today.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'The call you take with a bleed kit in your hand',
        body: [
          'In the middle of May, the phone rings every ten minutes and half the calls are the same question: is my bike ready. Every one of them pulls a mechanic off a stand or the counter person away from a customer standing in front of them. The customer is not being unreasonable. They just have no other way to know.',
          'The fix is to tell them first. When a work order moves to ready for pickup, the customer gets a text saying so, with your hours and anything they need to bring. When a mechanic finds a worn cassette that was not on the original ticket, the customer gets an approval request instead of a voicemail. When a finished bike has been sitting on the hook for three days, the customer gets a reminder.',
          'That is the design for customer updates in Service. It is on the roadmap and depends on things that are not in place yet: shop statuses on work orders, Service events reaching CRM, and CRM texting, which the rest of this page explains.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Who sends the message',
        body: [
          'Service does not send texts itself. The Service plan is explicit that the conversations belong to erp.io CRM: Service owns the work, and CRM owns the customer, the message templates and the texting. When something happens to a work order, Service will write an event to an outbox, and CRM\'s workflow engine will decide what to send. The receiving end in CRM is not built yet.',
          'That split is useful. The same CRM workflow builder that runs your follow-ups and review requests can run your bike-ready texts, with a delay, a condition or a different message for e-bike customers. Templates with variables such as the customer\'s name, the bike and the total due live in CRM, which is live today.',
          'The texting itself runs through CRM\'s telephony. It is built but not sending yet: a dedicated number and 10DLC carrier registration have to be in place first, and carrier vetting takes weeks. Email updates through CRM work today. Text updates will not work until that registration is done.',
        ],
      },
      {
        kind: 'features',
        heading: 'The messages in the plan',
        intro: 'Planned from Service parity section 15, with CRM as the owner of every message.',
        items: [
          { title: 'Your bike is ready', body: 'Sent when the work order moves to ready, with the total due and a payment link once payments ship.', icon: 'text', status: 'roadmap' },
          { title: 'Approval requests', body: 'Extra work found on the stand goes to the customer as a quote to approve, not a voicemail.', icon: 'quote', status: 'roadmap' },
          { title: 'Drop-off reminders and confirmations', body: 'A reminder the day before a booked drop-off, with a link to confirm.', icon: 'calendar', status: 'roadmap' },
          { title: 'Pickup reminders', body: 'A nudge when a finished bike has been waiting longer than you like.', icon: 'bike', status: 'roadmap' },
          { title: 'Workflow builder', body: 'Trigger, condition and action rules in erp.io CRM, live today, that Service events will feed.', icon: 'crm', status: 'suite' },
          { title: 'Two-way texting', body: 'Replies land in a shared CRM inbox once CRM telephony is sending.', icon: 'chat', status: 'roadmap' },
        ],
      },
      {
        kind: 'visual',
        visual: 'quote',
        heading: 'Approving extra work from a text',
        caption: 'A planned repair quote with options the customer approves from a link. Quotes are live in Service, but sending them and customer approval from a link are on the roadmap, and so are the tiers pictured. Illustrative only.',
      },
      {
        kind: 'prose',
        heading: 'Approval requests that do not stall the bench',
        body: [
          'The worst delay in a service department is the bike on the stand waiting for a yes. The customer dropped it off for a tune-up, the mechanic found a stretched chain and a cassette with shark-fin teeth, and now the bike sits until somebody gets the owner on the phone.',
          'Half of this works today. The mechanic can write the chain and cassette onto a quote as optional lines, and when the customer says yes, the counter records it and the accepted lines flow into the job. What the plan adds is the delivery: the customer gets a link to approve by text or email. Approval can be recorded with a signature through erp.io Sign, which is live. The approved work flows back onto the work order and the bike goes back in the stand.',
          'Good, better and best options work the same way: a basic chain replacement, a chain and cassette, or a full drivetrain with chainrings. The customer picks one from their phone. Tiers belong to repair quotes; quotes are live today with optional lines, and tiers are on the roadmap.',
        ],
      },
      {
        kind: 'prose',
        heading: 'And the calls you still get',
        body: [
          'Some customers will call anyway. erp.io Phony, the AI receptionist, is live today and answers your shop line around the clock, takes messages and transfers calls to a person when needed. Phony call time is billed at $0.12 per minute on every plan.',
          'Looking up a specific bike\'s status is something Phony will do once Service exposes work orders to it. Work orders are live in Service, but that lookup is part of the planned integration work and is not available yet, so today Phony can take the call but cannot read the ticket.',
          'The goal is that by the time work orders, texting and the Phony lookup are all in place, the "is my bike ready" question mostly stops reaching your mechanics at all.',
        ],
      },
    ],
    faqs: [
      { q: 'Can BIKE.co text customers when their bike is ready today?', a: 'No. Service sends no customer messages today. Bike-ready texts need a ready status on work orders, Service events reaching erp.io CRM, and CRM texting, which is built but not yet sending until a number and carrier registration are in place.' },
      { q: 'Which part of erp.io sends the messages?', a: 'erp.io CRM. Service will emit an event when a work order changes, and the CRM workflow engine decides what to send using templates you control. Service never sends texts on its own.' },
      { q: 'Can customers approve extra work by text?', a: 'Not yet. You can quote extra work today as optional lines and record the customer\'s answer, but sending the quote as a link they approve from their phone is on the roadmap.' },
      { q: 'Will I be able to change the wording?', a: 'Yes. Message templates with variables live in erp.io CRM, which is live today, so the wording, timing and conditions are yours to set.' },
      { q: 'Do texts cost extra?', a: 'We have not published a per-text price, and we will not guess one here. The only usage charge in erp.io pricing today is Phony call time at $0.12 per minute; telephony is billed at carrier cost.' },
    ],
    related: ['/product/work-orders', '/product/repair-quotes', '/platform/crm', '/product/ai-receptionist'],
  },

  // ─── Reporting ────────────────────────────────────────────────────────────
  {
    slug: 'reporting',
    title: 'A monthly read on work, money, hours and checklists',
    metaTitle: 'Bike Shop Service Reporting | BIKE.co',
    metaDescription: 'Live in BIKE.co: monthly reports on visits closed, money invoiced and collected, hours with overtime, and checklists, plus a checklist CSV export.',
    eyebrow: 'Run the shop · Live',
    lede: 'What got done, what got billed, what came in, who worked how long, and whether the checks were done. Monthly reporting is live in Service today.',
    status: 'live',
    visual: 'reports',
    icon: 'trend',
    summary: 'Work, money, hours and checklists by month, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body: 'Live today: a monthly report covering visits closed, still booked and unscheduled, and the closed-on-the-day rate; money invoiced, collected, outstanding and overdue; and hours per person split into straight time, time and a half and double time. For checklists, the Checklists Report filters every submission of a template by date and status and exports CSV. Not there yet: bench throughput and time-in-shop, comeback rates, margin (Service does not capture costs), charts and a custom report builder.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'One page at the end of the month',
        body: [
          'Most shop owners do their month-end review from three places: the POS for money, a timesheet spreadsheet for hours, and a gut feeling for how the bench went. Service puts the operating side of that on one monthly report, built from the same jobs, visits, invoices and time entries your team used all month.',
          'Nothing on it is typed in for the report. The visits are the visits your mechanics closed. The money is the invoices you billed and the payments you recorded. The hours are the clock entries on your timesheets. So when a number looks wrong, the fix is in the underlying record, and fixing it there fixes the report.',
          'Pick a month and the report shows work, money and hours, with the Checklists Report beside it for your inspections. It is a table of numbers, not a dashboard of charts, and it is meant to be read in five minutes on a Monday morning.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Work and money',
        body: [
          'The work block counts visits closed in the month, visits still booked and visits sitting unscheduled. It also shows the closed-on-the-day rate: of the visits booked for a day, how many were actually closed that day. For a bike shop that is the nearest thing to a promised-date score. A rate that drops in May tells you the counter is promising days the bench cannot keep.',
          'The money block shows what was invoiced, what was collected, what is still outstanding, and what is overdue, which Service counts as invoices sent more than thirty days ago and not yet paid. For a shop with fleet or corporate accounts, the overdue line is the one to act on first.',
          'Collected means payments recorded against invoices in Service. Because payments are entered by hand today, the report is only as current as your last entry, so record them as they come in.',
        ],
      },
      {
        kind: 'features',
        heading: 'Reports and their status',
        items: [
          { title: 'Work by month', body: 'Visits closed, booked and unscheduled, and the closed-on-the-day rate.', icon: 'kanban', status: 'live' },
          { title: 'Money by month', body: 'Invoiced, collected, outstanding and overdue.', icon: 'invoice', status: 'live' },
          { title: 'Hours by person', body: 'Straight time, 1.5x and 2x, on the same overtime rules as the timesheet.', icon: 'stopwatch', status: 'live' },
          { title: 'Checklists Report with CSV', body: 'Every submission of a template, by date and status, on screen and as CSV.', icon: 'clipboard', status: 'live' },
          { title: 'Throughput and time in shop', body: 'Bikes in and out, and days from drop-off to ready.', icon: 'trend', status: 'roadmap' },
          { title: 'Comebacks', body: 'Repeat visits for the same problem, by service and mechanic.', icon: 'wrench', status: 'roadmap' },
          { title: 'Job profitability', body: 'Margin by service type, mechanic and month, built on job costing.', icon: 'chart', status: 'roadmap' },
          { title: 'Financial statements', body: 'Profit and loss, receivables and sales tax belong in erp.io Accounting.', icon: 'ledger', status: 'suite' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Hours and checklists',
        body: [
          'The hours block lists each person with their hours for the month, split into straight time, time and a half and double time. It uses the same California overtime rules as the timesheet, daily eight and twelve hours, weekly forty and the seventh day, so the report and the approved timesheets always agree. That is the figure you hand to payroll until the payroll export ships.',
          'For checklists, the tool is the Checklists Report: every submission of one template, filtered by date range and status, on screen or as a CSV. Columns are keyed to the question, not its label, so a template that asks "Condition?" for the front and the rear brake exports as two columns, and answers given on an older version of the template still land in the right place.',
          'That CSV is where you answer the quality questions today. How many tune-ups found a chain past 0.75 this spring? Which checks are failed most often? Open it in a spreadsheet and count.',
        ],
      },
      {
        kind: 'visual',
        visual: 'job-costing',
        heading: 'Margin is the next report',
        caption: 'An illustration of planned job costing, which will feed a job profitability report: labor and parts cost against the price. It is on the roadmap. Service records hours against jobs today but has no labor rates or parts costs yet.',
      },
      {
        kind: 'prose',
        heading: 'What the report does not show yet',
        body: [
          'The pictured dashboard at the top of this page, with bikes out, average days in shop and comebacks, is the direction, not today\'s screen. Throughput and time in shop need shop statuses such as checked in and ready for pickup, which work orders do not have yet. Comebacks need bike records, so a repeat visit can be linked to the same bike; those are on the roadmap too.',
          'Margin needs costs. Service knows what you charged and how long people worked, but it does not hold a labor cost rate or a parts cost, so it cannot tell you what a job made. Job costing and a profitability report are on the roadmap. There are no charts and no custom report builder yet either.',
          'Money reports such as profit and loss, aged receivables and sales tax belong in erp.io Accounting, which is live. Service invoices do not post there yet, so until accounting sync ships, those financial reports will not include your bench revenue unless you enter it.',
        ],
      },
    ],
    faqs: [
      { q: 'What reports can I run in BIKE.co today?', a: 'A monthly report on work (visits closed, booked and unscheduled, closed-on-the-day rate), money (invoiced, collected, outstanding, overdue), and hours per person with overtime split, plus the Checklists Report with CSV export.' },
      { q: 'Can I see bench throughput or comebacks?', a: 'Not yet. Throughput, time in shop and comeback rates are on the roadmap. They depend on shop statuses on work orders and on bike records, which are not built yet.' },
      { q: 'Does reporting show job margin?', a: 'No. Service does not capture labor cost rates or parts costs yet, so it cannot show margin. Job costing and a profitability report are on the roadmap.' },
      { q: 'Do the hours in the report match the timesheets?', a: 'Yes. The report uses the same overtime rules as the timesheet, so straight time, time and a half and double time agree between the two.' },
      { q: 'Can I export reports?', a: 'The Checklists Report exports to CSV today. The monthly report is on screen; exporting it, charts and scheduled report emails are not built yet.' },
    ],
    related: ['/product/time-tracking', '/product/invoicing', '/product/job-costing', '/product/service-checklists'],
  },

  // ─── Customer portal ──────────────────────────────────────────────────────
  {
    slug: 'customer-portal',
    title: 'A customer portal for quotes, history and invoices',
    metaTitle: 'Customer Portal for Bike Shops | BIKE.co',
    metaDescription: 'Planned customer portal for bike shops: riders sign in by email link to approve quotes, see service history and pay invoices, built on erp.io Portal.',
    eyebrow: 'Run the shop · Roadmap',
    lede: 'Riders sign in with a link from their email and see their quotes, their bikes\' service history and anything they owe. The portal module is live; the Service views inside it are on the roadmap.',
    status: 'roadmap',
    visual: 'portal',
    icon: 'portal',
    summary: 'Riders see quotes, service history and invoices in a portal you brand.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'Portal is live; Service in the portal is not',
        body: 'erp.io Portal is a live module with sign-in by email link. The bike-shop views inside it, such as approving a repair quote, seeing a bike\'s service history or paying an invoice, are planned. Service quotes, jobs and invoices are live, but none of them appear in the portal yet, and riders have no login to Service.',
        href: '/platform/client-portal',
        cta: 'See Client Portal',
      },
      {
        kind: 'prose',
        heading: 'Why a portal, for a bike shop',
        body: [
          'Most bike shop customers do not need an account. They drop a bike off, get a text, pay and pick it up. But some customers do: the commuter who brings the same bike in four times a year, the parent with three kids\' bikes, the rental fleet, the corporate bike program, the racer who wants to see exactly what was done to the fork last season.',
          'For those customers, a portal answers questions without a phone call. What did I approve? When was the last bleed? Which chain is on it? What do I owe? It also gives them one place to approve a quote with options and pay a deposit, instead of a chain of texts.',
          'erp.io does not build a separate portal for Service. The Service plan puts customer self-service in erp.io Portal, the suite\'s customer portal module, and Service supplies the views: quotes, visits and history, invoices and booking.',
        ],
      },
      {
        kind: 'features',
        heading: 'What customers will see',
        intro: 'From Service parity section 14. Portal sign-in is live; the Service views are planned.',
        items: [
          { title: 'Sign in by email link', body: 'No password to forget. The customer gets a link and is in.', icon: 'link', status: 'suite' },
          { title: 'Approve quotes', body: 'Tick optional lines, approve extra work and pay a deposit.', icon: 'quote', status: 'roadmap' },
          { title: 'Upcoming drop-offs', body: 'See and confirm a booked drop-off or a mobile visit.', icon: 'calendar', status: 'roadmap' },
          { title: 'Service history by bike', body: 'Every past repair on each bike, with the checklist PDF attached.', icon: 'bike', status: 'roadmap' },
          { title: 'Pay invoices', body: 'Pay an open invoice by card through your Stripe account, and print the receipt.', icon: 'card', status: 'roadmap' },
          { title: 'Request work', body: 'Ask for a repair or book a service slot from the portal.', icon: 'wrench', status: 'roadmap' },
        ],
      },
      {
        kind: 'visual',
        visual: 'quote',
        heading: 'A quote with options, approved in the portal',
        caption: 'A planned repair quote that the customer approves and pays a deposit on in the portal. Tiers as pictured are also on the roadmap; Service quotes today use optional lines. Illustrative only.',
      },
      {
        kind: 'prose',
        heading: 'History that follows the bike',
        body: [
          'The most useful thing a portal can show a rider is the history of their bike. In the plan, each bike is a record with its serial number, size and owner, and every work order on it is attached. Because checklists are already live and every submission renders as a PDF with photos and signatures, the portal can show not just "tune-up, April" but the inspection that went with it.',
          'That history also helps you. When a customer asks whether their fork service is due, or whether the shop replaced the chain last time, the answer is on the record instead of in somebody\'s memory. When a bike is sold, the new owner can see what was done.',
          'For fleets and rental operators, the same view becomes a fleet list: every bike, when it was last serviced, and what is due next.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Your brand, and what you show',
        body: [
          'Portal is brand-scoped: the customer sees your shop, your logo and your colors, not ours. The Scale plan also includes white-label.',
          'You choose which features to show. Some shops will want customers to pay invoices in the portal; others will only want quote approvals and history. Feature visibility settings in Portal are partly built today and are part of the plan for the Service views.',
          'Quote approvals can also be signed through erp.io Sign, which is live, for jobs where you want a signature on record, such as a warranty claim, a custom build or an expensive e-bike motor replacement.',
        ],
      },
      {
        kind: 'prose',
        heading: 'What to expect today',
        body: [
          'If you start a trial now, you can turn on Portal and see how customers sign in and what a branded portal looks like. You will not see quotes, jobs or invoices from Service in it yet: those exist in Service, but the portal views for them are not built, and bike records are still on the roadmap.',
          'The order matters here. The portal views depend on quotes, work orders and invoicing existing first. Those are now live in Service, so the portal views are the next layer, together with sending quotes and invoices to the rider. The roadmap page shows where each piece is.',
          'We would rather you knew that before you tell your fleet customer they will have a portal login next month.',
        ],
      },
    ],
    faqs: [
      { q: 'Does BIKE.co have a customer portal today?', a: 'erp.io Portal is live and customers can sign in by email link. The bike-shop views inside it, such as quotes, service history and invoice payment, are on the roadmap. Service quotes and invoices exist, but they do not show in the portal yet.' },
      { q: 'Will customers need a password?', a: 'No. Portal sign-in works by email link today, so customers click a link rather than remembering a password.' },
      { q: 'Can customers approve repair quotes in the portal?', a: 'That is the plan. Customers will pick from quote options, approve extra work and pay a deposit. Repair quotes are live in Service; the portal quote view, deposits and customer approval are on the roadmap.' },
      { q: 'Will the portal show my shop\'s branding?', a: 'Yes. Portal is brand-scoped, so customers see your shop, and the Scale plan also includes white-label.' },
      { q: 'Can fleet customers see all their bikes?', a: 'That is the design. Each bike will be a record with its service history, so a fleet or rental customer can see every bike and what was done to it once bike records ship.' },
    ],
    related: ['/platform/client-portal', '/product/repair-quotes', '/product/customer-bike-records', '/product/payments'],
  },

  // ─── Team & permissions (LIVE) ────────────────────────────────────────────
  {
    slug: 'team-permissions',
    title: 'Permissions that follow the job, not the job title',
    metaTitle: 'Team Permissions for Bike Shops | BIKE.co',
    metaDescription: 'Live in BIKE.co: 15 named permissions across work, checklists, money and time, set from each person\'s erp.io role and checked on every page and action.',
    eyebrow: 'Run the shop · Live',
    lede: 'Mechanics can close visits, fill in checklists and clock their time. Quoting, billing, publishing and recording payments stay with the people you trust with them. Role-based permissions are live in Service today.',
    status: 'live',
    visual: 'job-detail',
    icon: 'team',
    summary: 'Role-based permissions across the shop, live today.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'What is live, and what is next',
        body: 'Live today: fifteen named permissions across work, checklists, money and time, with defaults set by each person\'s erp.io workspace role, and a check on every page and action in Service. Not there yet: a screen for granting a single permission to a single person. The permission model and the grant rules are built, but no screen writes grants yet, so what someone can do today comes from their erp.io role alone.',
        href: '/roadmap',
        cta: 'See the roadmap',
      },
      {
        kind: 'prose',
        heading: 'Promotion is the wrong tool',
        body: [
          'Most software gives you a ladder: viewer, staff, manager, admin. If you want your lead mechanic to write quotes, you move them up a rung, and with that rung comes everything else on it: billing settings, user management, whatever the software decided a manager should have. So shops either over-grant, or they keep everything with the owner and the owner becomes the bottleneck.',
          'Service is built around named permissions instead of rungs. Each one is named for something a person does in the shop: close a visit, build a checklist template, write a quote, record a payment, approve someone else\'s hours. The question an owner actually asks is "who can bill a job?", and a permission named for that act can answer it.',
          'Today those permissions come as sets, from the role each person holds in your erp.io workspace. The next step, handing one extra permission to one person without changing their role, is designed and not yet on screen.',
        ],
      },
      {
        kind: 'features',
        heading: 'The fifteen permissions',
        intro: 'Grouped the way Service groups them. Every page and every action checks one of these.',
        items: [
          { title: 'Work', body: 'See sites, jobs and the schedule; create and schedule work; mark a visit complete.', icon: 'kanban', status: 'live' },
          { title: 'Checklists', body: 'Fill in; build templates; see other people\'s submissions; export CSV; publish publicly.', icon: 'clipboard', status: 'live' },
          { title: 'Money', body: 'See quotes and invoices; write quotes; raise invoices; record payments and void invoices.', icon: 'invoice', status: 'live' },
          { title: 'Time', body: 'Clock in and out; enter and approve other people\'s time.', icon: 'stopwatch', status: 'live' },
          { title: 'Permission management', body: 'Change what other people in the workspace may do. Admin only.', icon: 'shield', status: 'live' },
          { title: 'Per-person grants screen', body: 'Give one person one extra permission without changing their role.', icon: 'team', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'What each role can do today',
        body: [
          'Your erp.io workspace has four roles: viewer, operator, workspace admin and super admin. Service maps each one to a set of defaults and never raises it. A viewer can look at sites, jobs and the schedule, and nothing else, because every other act is a write. An operator, the usual seat for a mechanic, gets the crew defaults: see the work, close a visit, fill in checklists and clock their own time. A workspace admin or super admin gets all fifteen.',
          'That has a practical consequence you should plan for. A mechanic on an operator seat today cannot schedule work, write a quote, raise an invoice, build a checklist template or approve anyone\'s hours. If your service manager needs to do those things, give them the workspace admin role for now. Service also defines lead and manager defaults, for example a lead who can schedule and approve the team\'s time, and a manager who can also quote, invoice and build checklists. Those are reached by grants, which arrive with the grants screen.',
          'Unknown roles fail closed. If a sign-in ever arrives with a role Service does not recognize, it is treated as a viewer, the least privileged role, not the most convenient one. Someone who is under-granted asks for more; someone who is over-granted rarely notices.',
        ],
      },
      {
        kind: 'visual',
        visual: 'suite-grid',
        heading: 'One set of people across the suite',
        caption: 'Service sits among the other erp.io modules. People, seats and roles come from your erp.io workspace, and Service turns each role into its own set of permissions.',
      },
      {
        kind: 'prose',
        heading: 'The lines Service will not let anyone cross',
        body: [
          'A few rules hold whatever the role, and they are written into the code rather than left to settings. Nobody can approve their own timesheet. A viewer seat can never be given a write, so a part-time bookkeeper on a viewer seat can, once grants arrive, be allowed to read submissions or run an export but never to change anything.',
          'Three acts stay with administrators even when grants exist. Publishing a checklist to the public internet is one, because building a form for the bench and putting an intake form in front of strangers are different risks. Changing what other people may do is another. The third is recording a payment, because saying money arrived is the one act in Service with no work behind it to check against. An operator could be granted quoting and invoicing, but not that.',
          'Reading is not editing. Someone who can see every checklist in the workspace still cannot change, submit or discard anyone else\'s.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Setting it up for a real shop, today',
        body: [
          'A typical small shop sets up like this. The owner and the service manager hold workspace admin seats, so they can schedule, quote, bill, approve hours and record payments. Mechanics hold operator seats: they see the week, open the visits assigned to them, fill in the required checklist, close the visit and clock their time. Anyone who only needs to look, such as a bookkeeper checking what was billed, has a viewer seat.',
          'The owner then does not need to be the bottleneck for checklist changes or quotes, as long as the service manager has an admin seat. When the grants screen ships, you will be able to narrow that: a lead mechanic who can build the tune-up template and approve the bench\'s hours without being a workspace admin.',
          'People, seats and roles themselves are managed in your erp.io workspace, not in Service. Extra users are $20 each on every plan, and nothing inside Service is gated by plan.',
        ],
      },
    ],
    faqs: [
      { q: 'Are team permissions live in BIKE.co?', a: 'Yes. Service checks fifteen named permissions on every page and action, and each person gets a set of them from their erp.io workspace role. A screen for granting individual permissions to one person is not built yet.' },
      { q: 'What can a mechanic do on an operator seat?', a: 'See sites, jobs and the schedule, close visits, fill in checklists and clock their own time. They cannot schedule, quote, invoice, build templates or approve hours unless they hold an admin role today.' },
      { q: 'Can I let my lead mechanic build checklists without making them an admin?', a: 'Not yet. That is exactly what per-person grants are for, and the grant rules are built, but the screen to give someone a grant is not. Today building checklists needs a workspace admin seat.' },
      { q: 'Who can record payments?', a: 'Only admins. Recording a payment stays administrative even when grants arrive, because it is the one act in Service with no work behind it to check.' },
      { q: 'Can someone approve their own timesheet?', a: 'No. Approving your own hours is refused in the code, whatever role or permission you hold.' },
    ],
    related: ['/product/service-checklists', '/product/time-tracking', '/pricing', '/roadmap'],
  },

  // ─── Accounting sync ──────────────────────────────────────────────────────
  {
    slug: 'accounting-sync',
    title: 'Invoices, payments and parts that land in the ledger',
    metaTitle: 'Accounting Sync for Bike Shops | BIKE.co',
    metaDescription: 'erp.io Accounting is live. The planned Service connection posts invoices, payments, refunds and parts cost to your ledger once, with no double entry.',
    eyebrow: 'Run the shop · Roadmap',
    lede: 'The bench and the books on one platform. erp.io Accounting is live today; the connection that posts every invoice, payment and part from Service into it is on the roadmap.',
    status: 'roadmap',
    visual: 'suite-grid',
    icon: 'ledger',
    summary: 'Invoices, payments and parts cost posted to erp.io Accounting.',
    sections: [
      {
        kind: 'callout',
        tone: 'honest',
        heading: 'The ledger is live; the Service connection is planned',
        body: 'erp.io Accounting is a live module you can use today for your books. The write connection that posts Service invoices, payments, refunds and inventory cost into it is planned under decision D2, and it is not built. Service invoicing is live, so invoices and hand-recorded payments exist in Service today, but none of them post to Accounting or QuickBooks yet. Inventory cost waits for parts inventory (phase P8).',
        href: '/platform/accounting',
        cta: 'See Accounting',
      },
      {
        kind: 'prose',
        heading: 'One set of books, not two',
        body: [
          'In most shops the service system and the books are two products joined by a sync that breaks every few months. Invoices get duplicated, payments land on the wrong day, and the month-end reconciliation becomes a Saturday of its own.',
          'erp.io is built the other way. Service owns the work and the invoice; Accounting owns the ledger, the chart of accounts and the financial reports. Service never keeps its own chart of accounts. Instead, every event that moves money is posted from Service to Accounting as it happens.',
          'That is the plan (decision D2). Accounting is live. The piece that is not built is the write connection itself: today Accounting\'s API is read-only, and the endpoint Service will post to has to be built on Accounting\'s side. Until it is, enter Service invoices in your books as you do today; the monthly Service report gives you the invoiced and collected totals to check against.',
        ],
      },
      {
        kind: 'table',
        heading: 'What will post, and where',
        intro: 'The events Service will post to Accounting under the planned write connection.',
        columns: ['Event in the shop', 'What Accounting records', 'Service phase'],
        rows: [
          ['Invoice issued at pickup', 'Receivable, revenue and sales tax', 'P7'],
          ['Payment recorded (pay link or QR once payments ship)', 'Payment received against the receivable', 'P7'],
          ['Refund on a returned part', 'Refund against revenue and cash', 'P7'],
          ['Uncollectable account written off', 'Bad-debt write-off', 'P7'],
          ['Parts consumed on a work order', 'Cost of goods sold at perpetual cost', 'P8'],
          ['Pay period closed', 'Payroll accrual journal', 'P6'],
        ],
        note: 'Every posting carries an idempotency key built from the record and the event, so a retry never records it twice.',
      },
      {
        kind: 'features',
        heading: 'Built today versus planned',
        items: [
          { title: 'erp.io Accounting', body: 'Books, chart of accounts, invoicing and cash flow, live as its own module.', icon: 'ledger', status: 'suite' },
          { title: 'Weighted-average cost', body: 'Accounting already computes weighted-average cost of goods sold for its commerce data.', icon: 'scale', status: 'suite' },
          { title: 'Deposit matching in Pey', body: 'erp.io Pey matches payments to bank deposits today.', icon: 'reconcile', status: 'suite' },
          { title: 'Service to Accounting postings', body: 'Invoices, payments, refunds and write-offs posted from Service, exactly once.', icon: 'link', status: 'roadmap' },
          { title: 'Perpetual parts cost', body: 'Parts cost from inventory handed to Accounting as they are consumed.', icon: 'box', status: 'roadmap' },
          { title: 'Payroll accrual journal', body: 'Approved hours turned into a payroll journal. Service prepares payroll; it does not run it.', icon: 'stopwatch', status: 'roadmap' },
        ],
      },
      {
        kind: 'prose',
        heading: 'Exactly once, every time',
        body: [
          'The failure that ruins accounting syncs is double posting. A network hiccup, a retry, and the same invoice is in the books twice. The Service design puts an idempotency key on every posting, made from the record and the event, such as an invoice and "issued". Accounting records each key once and ignores repeats.',
          'Postings are also authenticated. Service signs each request as a service, short-lived and bound to the exact content being sent, so nothing else can post to your ledger by pretending to be Service.',
          'And posting happens outside the customer\'s request. Service writes the event to an outbox and delivers it separately, so a slow moment in Accounting never makes the counter wait on a payment. Service already uses this outbox pattern for checklist deliveries today.',
        ],
      },
      {
        kind: 'visual',
        visual: 'invoice',
        heading: 'The invoice that becomes a ledger entry',
        caption: 'A Service invoice. Invoicing is live; the Stripe pay link and QR code pictured are on the roadmap, and so is posting each step to erp.io Accounting. Illustrative only.',
      },
      {
        kind: 'prose',
        heading: 'Parts cost, payroll and the bank',
        body: [
          'Parts are where bike-shop books usually go wrong, because nobody records cost when a part leaves the shelf. When inventory ships, Service will hand perpetual cost to Accounting as parts are consumed on work orders, so cost of goods sold reflects what actually went onto bikes that month. Accounting already has the weighted-average costing to receive it.',
          'Payroll is prepared, not run. Service will compute approved hours and overtime from time tracking and export them to your payroll provider, and post a payroll accrual journal to Accounting. It does not pay people or file taxes.',
          'On the bank side, erp.io Pey is live and matches payments to the deposits they arrive in, so a Stripe payout that bundles twenty pickups is matched to those twenty invoices rather than left as one unexplained line.',
        ],
      },
    ],
    faqs: [
      { q: 'Does BIKE.co sync to accounting today?', a: 'erp.io Accounting is live and you can keep your books in it now. Service invoicing is live, but the connection that posts Service invoices, payments and parts cost into Accounting is planned and not built.' },
      { q: 'Does it sync with QuickBooks or Xero?', a: 'We are not claiming a QuickBooks or Xero sync for bike shops. The planned design posts to erp.io Accounting, which is the ledger on the platform.' },
      { q: 'Can the same invoice be posted twice?', a: 'Not by design. Every posting carries an idempotency key made from the record and the event, and Accounting records each key only once.' },
      { q: 'Will parts cost reach cost of goods sold?', a: 'Yes, once inventory ships in phase P8. Service will hand perpetual parts cost to Accounting, which already computes weighted-average cost of goods sold.' },
      { q: 'Does Service run payroll?', a: 'No. Service will prepare approved hours and overtime, export them to your payroll provider and post a payroll accrual journal to Accounting. It does not pay people or file payroll taxes.' },
    ],
    related: ['/platform/accounting', '/product/invoicing', '/product/parts-inventory', '/platform/pey'],
  },
]
