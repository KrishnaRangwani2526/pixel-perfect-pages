# BringMe frontend

A frontend-only peer-to-peer marketplace demonstration. React 19, TypeScript, TanStack Start/Router, Tailwind v4 and typed mock services. No real authentication, payments, delivery or email sending is connected.

## Run

```sh
bun install
bun run dev
bun run test
```

## Structure

```text
src/
  routes/                TanStack file routes and per-page metadata
  components/            Shared marketplace shell, cards and form controls
  features/              Explore, forms, details, account, offers, messages,
                         agreements, profiles and moderation screens
  services/marketplace.ts Typed asynchronous mock domain API and demo store
  types/marketplace.ts    Users, listings, offers, agreements and status types
  data/seed.ts           Six users, eight requests, six trips and sample activity
  lib/matching.ts        Directional route/date matching
  lib/transitions.ts     Allowed listing actions
  lib/policies.ts        Product defaults and public-field allowlists
  lib/validation.ts      Shared Zod validation schemas
  test/                  Routing and marketplace rule tests
```

## Demo accounts

Development sign-in screen and profile settings have a demo account switcher. Priya is a requester, Alex is a traveller, Rohan has a disputed exchange, and the BringMe team can access moderation. Email/password login for existing confirmed seed accounts uses `bringme123`. These are invented sample accounts, products, prices and routes, not real customers or availability.

The mock state persists in browser localStorage and synchronizes between tabs. Service writes re-check state after artificial 350 ms latency. Profile settings include a reset action and a connection-error toggle. This is a frontend demonstration, not a security boundary for real data.

## Swap the services for an API

Replace the implementations of `api.auth`, `api.requests`, `api.trips`, `api.offers`, `api.conversations`, `api.completions`, `api.notifications`, `api.users`, `api.reports`, and `api.moderation` with HTTP adapters. Keep their typed return values and errors. Replace the demo store subscription with query-backed adapters. The real API must enforce authorization, field allowlists and transactional single-offer acceptance. Browser guards alone are not security.

## Default decisions

- Same-direction cities must match; trip departure is today or later and arrival is on/before the required-by date. Weight is a soft check.
- Pending offers are cancelled with a cancelled listing. Accepted cancellation requires a reason, notifies the other person and closes the agreement without automatic penalties.
- Participants cannot cancel disputed exchanges. Only moderation may close them.
- Silence never means completion. One person declares; the other confirms or disputes.
- Blocks stop new offers/messages; active agreements remain on record rather than auto-cancelling.
- Phone confirmation and reviews are disabled.
- No carrying fee, fee negotiation, payments, escrow, AI matching, delivery guarantees or identity verification.

## Sources and limitations

The uploaded frontend brief and reduced Grabr screenshots were available. The referenced BringMe.html and full PRD v0.2 were not uploaded; their missing copy and open decisions require product-owner review. The typography is sized for normal viewing rather than reproduced at screenshot zoom.

Implemented core journeys: public browse/filter/detail; mock login and account switching; create/review/publish requests; create trips and view matches; revise/accept/reject/withdraw offers; read-only agreement; participant messages; notifications; declare/confirm/dispute completion and reminders; profile editing, report/block, and moderation review/audit.

Remaining PRD depth before a full release: accepted-term proposal/reconfirmation workflow (editing is safely blocked), true password reset/email delivery, profile photo and granular visibility/notification preferences, account deactivation, date-range requests, rich material-change comparison, unread conversation counters/polling, admin disputed-exchange closure and account-level restriction states. Reports support text; their attachment control is not uploaded. Home photo selection does not carry an image through login; request photo upload works within the mock form. Seed product images are illustrative, not guaranteed depictions of the named products. Legal content is draft copy and must be approved.

## Verification

19 initial tests passed for routing, matching direction/dates/weight, accept-one-offer, duplicate acceptance, participant authorization, completion and disputes, public field allowlist, prohibited items, and cancellation/edit policies. Browser journeys verified traveller offer revision, requester acceptance, two-party mutual completion, disputed completion, post-dispute messaging, persisted new requests, new trip matching, logout, and a 390 px layout with no horizontal overflow. No real backend or real user communication was tested or implied.
