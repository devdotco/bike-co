# Service module status: what is built and what is deployed

Audited 2026-09-30 against `~/service-erp-io` at HEAD `ee328e8`, read-only. Use this to set the `status` on the 19 `PRODUCT_GROUPS` links in `data/nav.ts`.

## Deployment evidence

- **Live at https://app.erp.io/service.** `curl -sI` returns 307 to `/service/sign-in`, and `/service/api/health` returns `{"status":"ok","service":"service-erp-io"}`.
- **The deployed commit is `bd6d2e2` (Reports), the last feature commit.** Coolify app `gkkz6ttcg5m9shocllqrq1na` on erp-platform shows these deployments as `finished`: `c7942b0` at 2026-09-29 21:52 UTC and `bd6d2e2` at 22:23 UTC. The live page's build stamp `dpl=1790720625` (2026-09-29 17:23:45 CDT) matches the `bd6d2e2` build. The only commit after that is `ee328e8`, which syncs the rail chrome and changes no features. A deployment of HEAD was queued at 2026-09-30 12:06 UTC.
- **The PWA fix is live.** `manifest.webmanifest`, `sw.js` and `offline.html` answer 200 without a login. Before `c7942b0` these returned 307, so this confirms the field-app commit is running.
- **Sign-in works in principle.** `docs/plan/DEPLOY.md` ("DEPLOYED 2026-09-29", commit `fdb39d2`) said nobody could sign in until the shell knew `aud=service`. That has since been done in `~/app-erp-io`:
  - `4b9c424` registered Service.
  - `8965813` set `live: true` and added the `/sign-up/bike` and `/sign-up/maid` front doors.
  - The shell now answers `module-token?aud=service` with 401 when there is no session. An unknown audience gets 400.
  - I did not complete a signed-in session end to end.
- **`DEPLOY.md`'s "DEPLOYED" section is stale.** It describes the checklists-only build (`a69c6f4`/`fdb39d2`). Everything from `804a2ba` (properties/jobs/visits) through `bd6d2e2` was deployed afterwards by Coolify auto-deploy, and the deploy notes do not record it.
- **Outstanding items from DEPLOY.md that affect marketing claims:**
  - Turnstile was unset, which makes public (unauthenticated) form submissions return 503. I could not confirm whether it has been set since.
  - The CRM receiver `/api/service-erp/form-events` does not exist yet, so the CRM hand-off is queued as `blocked`.
  - R2 photo storage is configured.

## Capability table

"Live" means built with real UI and persistence, and deployed. Anything else is "roadmap".

| Capability (nav label, href) | Recommended status | Evidence | What a shop can do today | Not there yet |
|---|---|---|---|---|
| Online repair booking, `/product/online-booking` | **roadmap** | `7949f02` (public forms `/f/<slug>`), `686cb93` (form to request), `src/app/f/[slug]`, `src/lib/work/requests.ts` | A shop can publish a checklist as a public web form, optionally behind an emailed 6-digit code. Each submission raises a numbered Request carrying the customer's words, which staff triage to a property, quote and turn into a job. | Riders cannot pick a drop-off slot or see availability, and there is no calendar booking. In production, public submissions are refused until Turnstile keys are set (DEPLOY.md, still to do #3). This is a request intake form, not booking. |
| Repair quotes, `/product/repair-quotes` | **live** (reword the blurb) | `877efb8`, `db/migrations/0006_quotes_invoices.sql`, `src/lib/money/{documents,totals}.ts`, `src/app/(app)/quotes/*`, `LineEditor.tsx`, `DocumentActions.tsx` | Numbered quotes with line items (quantity, unit price, taxable flag). Lines can be marked **optional**, and the customer's choice of optional lines is carried to the job. A quote takes a % or $ discount and a tax rate, with money in integer cents, tax after discount and a frozen copy once sent. Staff mark it Sent, then Customer approved or Declined, and convert an approved quote into a job with visit dates. | **No "approved by text".** "Send to customer" only changes the status; nothing is emailed or texted, and there is no customer-facing quote page, e-approval or PDF. There are no good/better/best tiers, only optional lines. A `price_book_items` table exists but has **no UI**, so lines are typed in by hand. |
| Customer & bike records, `/product/customer-bike-records` | **roadmap** | `804a2ba`, `0005_sites_jobs_visits.sql` (`sites`), `src/app/(app)/sites/page.tsx` | Service keeps **properties/sites**: a name, a free-text company name and an address. Each site lists its jobs, visits, quotes and invoices. The customer record is meant to live in erp.io CRM (`crm_company_id`). | There is no bike or asset record: no serials, sizes or make/model, and no per-bike repair history. Sites are addresses, and the CRM link is only a typed name with no picker. |
| AI receptionist, `/product/ai-receptionist` | keep **suite** | Not in service-erp-io | Nothing in Service. This is an erp.io suite claim (phones/receptionist module), outside this repo. | Answering "is my bike ready?" from Service data. No integration exists. |
| Work orders, `/product/work-orders` | **live** (reword the blurb) | `804a2ba`, `src/lib/work/jobs.ts`, `src/app/(app)/jobs/*`, `src/app/(app)/visits/[visitId]` | Numbered jobs at a site, with instructions and one or more visits. Visits move through unscheduled, scheduled, in progress and completed, and each has an assignee. A visit cannot be closed while a required checklist is unsubmitted. Jobs carry line items (copied from the quote) and bill with one click once every visit is closed. | There is no bench kanban or "bikes by status" board. Statuses belong to visits, not to a bike-shop workflow (checked in, waiting on parts, ready for pickup). There are no intake tags or ticket printing. |
| Service checklists, `/product/service-checklists` | **live** | `79d0dca`, `6219287`, `0b81462`, `7949f02`, `78d1459`, `804a2ba`; `src/lib/checklists/*`, `src/app/(app)/checklists/*` | A builder with short and long text, number, date, dropdown, checkboxes, photos and signature. Templates are versioned, so old submissions keep their questions. A template can auto-attach to every visit and be required before the visit closes. It can be filled on a phone (also offline), exported as a per-submission PDF (with photos and signature) or a CSV report, and published publicly. | No starter templates ship: tune-up, safety and e-bike templates must be built by the shop, so the "templates" wording overclaims. Public forms need Turnstile set. |
| Scheduling, `/product/scheduling` | **live** (reword the blurb) | `5f87cf9`, `src/app/(app)/schedule/page.tsx`, `ScheduleWeek.tsx`, `src/app/(app)/page.tsx` ("Today") | A week view listing visits by day, with a "just mine" filter and prev/next week. An **unscheduled queue** can be booked onto a day. Separate controls reassign the person (select) and move the day (select). A "Today" page shows the crew's day. | **No drag and drop** (a deliberate choice). There are no time-slot or hour grid and no per-mechanic columns, and **no bench-capacity limits**. Visit start and end times exist in the schema but are not set in the UI. There are no recurrence rules; dates are typed one per line. |
| Technician time tracking, `/product/time-tracking` | **live** | `505763b`, `0008_time_entries.sql`, `src/lib/time/{entries,overtime}.ts`, `src/app/(app)/timesheets`, `ClockWidget.tsx` | Clock in and out against a visit (and so its job) or on its own, in the categories work, drive, shop and break. Forgotten shifts can be added by hand. A manager approves the weekly timesheet, and no one can approve their own hours. Overtime is calculated to California rules (daily 8 and 12 hours, weekly 40, seventh day). Only one clock can run per person. | There is no payroll export file yet ("prepare and export" is planned; no CSV route exists). Labor is not posted to invoice lines, so hours do not flow into billing. |
| Mobile repair & routing, `/product/mobile-repair-routing` | **roadmap** | `sites.latitude/longitude` columns only | Visits at an address can be assigned to a person and a day, which gives basic mobile dispatch. | There is no map, no route optimization and no stop ordering. There is no van stock (no inventory at all). |
| Parts inventory, `/product/parts-inventory` | **roadmap** | Nothing in schema or `src` | Nothing. | Everything. There is no parts, stock or location model. |
| Purchase orders & reorder, `/product/purchase-orders` | **roadmap** | Nothing | Nothing. | Everything. |
| Job costing, `/product/job-costing` | **roadmap** | `time_entries.job_id` and job line items exist separately | The raw data exists: hours are logged against jobs, and jobs have priced lines. | No screen compares labor and parts cost against price. There is no parts cost and no labor rate. |
| Invoicing, `/product/invoicing` | **live** (reword the blurb) | `877efb8`, `src/app/(app)/invoices/*`, `BillJobButton` in `jobs/[jobId]` | "Bill this job" creates a numbered invoice from the job's lines, and is refused while any visit is open. Invoices carry a discount, tax, due date, payment terms, a client message and contract text. Once sent they are frozen, and they can be voided. | "Send to customer" only changes the status. There is **no email or SMS delivery, no invoice PDF and no customer-facing invoice page**. |
| Payments, `/product/payments` | **roadmap** | `recordPayment` in `src/lib/money/documents.ts` (admin-only `money.payment`) | An admin can manually record money received against a sent invoice. Partial payments work, and totals are capped so the balance cannot go negative. The status becomes Paid when the invoice is settled. | **No Stripe, no pay links and no QR codes.** The app takes no card payments. The only payment feature is manual recording. |
| "Your bike is ready" texts, `/product/customer-updates` | **roadmap** | `src/lib/email/send.ts` is used only for public-form verification codes | Nothing customer-facing. | No SMS or email notifications to customers of any kind. |
| Reporting, `/product/reporting` | **live** (reword the blurb) | `bd6d2e2`, `src/lib/reports/summary.ts`, `src/app/(app)/reports/page.tsx`, checklist report `0b81462` | Monthly reports: visits closed, still booked and unscheduled, and the "closed on the day" rate. Money shows invoiced, collected, outstanding and overdue (sent more than 30 days ago). Hours are shown per person with the straight, 1.5x and 2x split. Checklist compliance shows numeric-reading results against a limit. The Checklists Report filters by date and status and exports CSV. | There are no bench-throughput or comeback metrics, no margin (no costs are captured), no custom report builder and no charts. |
| Customer portal, `/product/customer-portal` | **roadmap** | Only `/f/<slug>` public forms and `/embed` exist | Nothing for customers beyond filling in a public form. | No customer login and no view of quotes, history or invoices. |
| Team & permissions, `/product/team-permissions` | **live** (with caveat) | `79d0dca` (D12), `src/lib/authz/capabilities.ts`, `capability_grants` table | Service has 15 capabilities (`work.*`, `forms.*`, `money.*`, `time.*`) and role defaults for viewer, crew, lead, manager, admin and owner, derived from the erp.io workspace role. For example, crew can close visits and fill checklists but cannot schedule, and payments are admin-only. Every page and action is guarded. | **Service has no screen for granting individual capabilities.** The `capability_grants` table exists, but no action writes to it. So "grant exactly what each mechanic needs" works only through erp.io roles today. |
| Accounting sync, `/product/accounting-sync` | **roadmap** | Nothing | Nothing. | Invoices do not post to erp.io Accounting or QuickBooks. |

**Net change from the current nav:** Repair quotes, Work orders, Scheduling, Technician time tracking, Invoicing and Reporting move from roadmap to **live**, with rewritten blurbs. Checklists and Team stay **live**. Everything else stays **roadmap**, and AI receptionist stays **suite**.

**Blurbs that overclaim if the page is marked live:**
- "approved by text" (quotes)
- "Every bike on the bench, by status" (work orders)
- "Bench capacity by mechanic and day" (scheduling)
- "Tune-up, safety and e-bike templates" (checklists)
- "Grant exactly what each mechanic needs" (team)

## Other built things worth marketing

- **Offline field app (installable PWA).** `c7942b0`, `src/lib/offline/*`, `public/sw.js`. Checklist answers, submits and visit completion are queued on the phone and sent oldest-first when the signal returns, with repeated edits to one answer collapsed into one. The service worker caches only the app shell and shows an honest offline page instead of stale job lists. Commit note: not yet tested on a real device.
- **Requests inbox.** `686cb93`, `/requests`. Intake from web forms or entered by hand, with contact name, email and phone, then triage to property, quote and close.
- **Quote-to-cash chain.** Request to quote (optional lines) to job with visits to required checklist to invoice to payment recorded. The money arithmetic is carefully tested: cents, tax after discount, rounding half-up.
- **Mandatory checklist gate.** A visit cannot be closed until its required checklist is submitted. This is a useful "safety check before handover" story for e-bikes.
- **Checklist PDF for the customer.** It includes photos and signature. This is the most bike-relevant built artifact, for example a signed pre-ride safety check.
- **Embeddable checklists.** Other erp.io modules (PM) can attach and frame a checklist via a signed service-to-service API (`12fe1df`). The PM side is not built.
- **California overtime** that the timesheet and payroll agree on.
- **A BIKE.co front door already exists** in the shell (`app-erp-io` `8965813`: `/sign-up/bike` lands in Service). Its CRM tenant `bike-co` was not yet created at that commit, so sign-up leads are only logged.

## Caveats

- **The data model is built for a grease-trap and field-service business (North Bay), not a bike shop.**
  - Work happens at **sites/properties**: an address plus a free-text company name, with the customer meant to live in CRM. There is no bike, asset, serial or size.
  - A walk-in shop's "work order for a bike on the bench" has to be modeled as a job at a site with a visit, which is awkward.
  - Placeholder copy reads "Kitchen — 128 Elm St", "North Bay Diner", "Grease trap pumping" (`NewSiteForm.tsx`, `NewJobForm.tsx`, `NewRequestForm.tsx`).
- **The compliance report is county grease-trap reporting** (a numeric reading against a jurisdiction maximum). It is real but irrelevant to bikes. Do not market it as-is.
- **Scheduling is day-level dispatch for crews going out**, not bench-slot capacity for a workshop.
- **"Send" does not send anything** on quotes or invoices; it only changes the status. Any copy implying customers receive something is false today.
- **Payments are manual entry only.** No processor is integrated.
- **No inventory or parts anywhere.** Parts appear only as free-text invoice lines.
- **Public forms depend on Turnstile keys.** DEPLOY.md lists them as unset, and without them production refuses public submissions. Verify this before claiming online intake.
- **Stale docs.** `README.md`, `docs/plan/PARITY.md` and `DEPLOY.md`'s "DEPLOYED" section predate the 2026-09-29 feature commits. Coolify is the source of truth: `bd6d2e2` is deployed.
- **"Live" means live for a signed-in erp.io workspace.** I did not verify a real end-to-end signed-in session. The shell audience is registered, and the module answers correctly when no one is signed in.
