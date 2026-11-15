import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, Globe2, MessageCircle, Package, Plane, ShieldCheck, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RequestCard, TripCard, metadata } from '@/components/marketplace';
import { useDemo } from '@/services/marketplace';
import travelPhoto from '@/assets/bringme-travel.jpg';

const homeSteps = [
  { number: '01', title: 'Share a request', detail: 'Tell people what you’re looking for and when you need it.' },
  { number: '02', title: 'Find a traveller', detail: 'A traveller going that way can send you an offer.' },
  { number: '03', title: 'Agree together', detail: 'Choose one offer and discuss the purchase and handover.' },
  { number: '04', title: 'Meet and confirm', detail: 'After the exchange, both of you confirm it happened.' },
];

export const Route = createFileRoute('/')({
  head: () => metadata(
    'Find a traveller already heading your way',
    'Looking for something from another country? Share what you need, review an offer from a traveller on that route, and agree on the handover together.',
  ),
  component: Home,
});

function Home() {
  const data = useDemo();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const today = new Date().toISOString().slice(0, 10);
  const requests = data.requests.filter((request) => request.status === 'Published' && request.requiredBy >= today).slice(0, 3);
  const trips = data.trips.filter((trip) => trip.status === 'Published' && trip.departure >= today).slice(0, 3);

  return (
    <main>
      <section className="hero">
        <img className="hero-photo" src={travelPhoto} alt="A green suitcase packed with headphones, sneakers and everyday discoveries" width={1920} height={1024} />
        <div className="wrap hero-inner">
          <div className="eyebrow"><Globe2 size={15} />Good things travel with people.</div>
          <h1>Find a traveller<br />already heading your way.</h1>
          <p className="hero-description">Looking for something from another country? Share what you need, review an offer from a traveller on that route, and agree on the handover together.</p>
          <div className="hero-ctas">
            <Button asChild><Link to="/create-request"><Package />Post a request<ArrowRight /></Link></Button>
            <Button variant="outline" asChild><Link to="/create-trip"><Plane />I’m travelling</Link></Button>
          </div>
          <div className="hero-bottom"><UsersRound />You choose the offer. You and the traveller agree on the details.</div>
        </div>
      </section>

      <div className="trust-band">
        <div className="wrap trust-inner">
          <span><Globe2 />Requests from anywhere</span>
          <span><UsersRound />Planned trips, shared</span>
          <span><MessageCircle />Details agreed together</span>
          <span><ShieldCheck />Both confirm the exchange</span>
        </div>
      </div>

      <section className="starter-section">
        <div className="wrap starter-inner">
          <div className="starter-copy">
            <h2>What are you hoping to find?</h2>
            <p>Start in your own words. You’ll review the details before publishing.</p>
          </div>
          <form className="starter-form" onSubmit={(event) => { event.preventDefault(); navigate({ to: '/create-request', search: { text } }); }}>
            <textarea aria-label="What are you hoping to find?" placeholder="A ceramic coffee dripper from a small shop in Tokyo…" value={text} onChange={(event) => setText(event.target.value)} required />
            <div className="starter-tools">
              <span className="starter-hint">Your item, where it’s from and when you need it</span>
              <Button type="submit">Start a request<ArrowRight /></Button>
            </div>
          </form>
        </div>
      </section>

      <section className="market-section">
        <div className="wrap">
          <div className="section-heading">
            <div><span className="section-kicker">The wish list</span><h2>People are looking for</h2><p>Little finds from places you might be going.</p></div>
            <Link to="/explore/requests" className="see-all">All requests<ArrowRight /></Link>
          </div>
          <div className="request-grid">{requests.map((request) => <RequestCard request={request} key={request.id} />)}</div>
        </div>
      </section>

      <section className="market-section trips-section">
        <div className="wrap">
          <div className="section-heading">
            <div><span className="section-kicker">Upcoming routes</span><h2>Travellers going your way</h2><p>See where members are already planning to go.</p></div>
            <Link to="/explore/trips" className="see-all">All trips<ArrowRight /></Link>
          </div>
          <div className="trip-grid">{trips.map((trip) => <TripCard trip={trip} key={trip.id} />)}</div>
        </div>
      </section>

      <section className="how-section">
        <div className="wrap home-how">
          <div className="home-how-intro">
            <span className="section-kicker">How BringMe works</span>
            <h2>A simple way to make far feel near.</h2>
            <p>From sharing a request to confirming the exchange, it’s straightforward.</p>
            <Link to="/how-it-works" className="see-all">How BringMe works<ArrowRight /></Link>
          </div>
          <div className="home-steps">
            {homeSteps.map((step) => (
              <div className="home-step" key={step.number}>
                <span className="home-step-number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="safety-band">
        <div className="wrap safety-inner">
          <ShieldCheck />
          <div><h3>Good sense travels well.</h3><p>Check travel rules and agree on the purchase and meet-up together. BringMe doesn’t deliver items or process payments.</p></div>
          <Link to="/safety" className="see-all">Travel with care<ArrowRight /></Link>
        </div>
      </section>
    </main>
  );
}
