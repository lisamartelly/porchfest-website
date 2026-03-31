import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div className="padded-container faq-container">
        <div class="half-flex odd-row">
          <div className="white-box">
            <h2>Cost to attend?</h2>
            <ul className="x">
              <li>Admission is completely free!!</li>
              <li>
                Something to note: this event is entirely powered by volunteer
                efforts, including the music. If you're able, we encourage
                tipping our artists to thank them for sharing their talents with
                us{" "}
              </li>
            </ul>
          </div>

          <div className="neon-box">
            <h2>Do you need volunteers?</h2>
            <ul className="x">
              <li>
                Yes! We are all grassroots and can't do it without help. Reach
                out via{" "}
                <a href="https://forms.gle/DrZ4CP1EbRN4mjJb9">this form</a> and
                let us know what you'd like to help with.
              </li>
            </ul>
          </div>
        </div>

        <div class="half-flex even-row">
          <div className="neon-box">
            <h2>What if it rains?</h2>
            <ul className="x">
              <li>
                This event will go on given light/passing-rain or drizzle! If
                it's terrible, dangerous, torrential rain, we may pivot to a
                rain date of Sunday, Aug 17. Check back for info in that case.
              </li>
            </ul>
          </div>

          <div className="white-box">
            <h2>What's the format of this event?</h2>
            <ul className="x">
              <li>
                Porchfest will feature multiple, spread-out, overlapping
                concerts during a single afternoon that attendees can enjoy
                while wandering the neighborhood.
              </li>
            </ul>
          </div>
        </div>

        <div class="half-flex odd-row">
          <div className="white-box">
            <h2>How can I get involved?</h2>
            <ul className="x">
              <li>
                This event can't happen without musicians and porches! Please
                sign up to <Link to="/for-hosts">host</Link> or{" "}
                <Link to="/for-bands">play</Link> if you have either of those
                things going for you.
              </li>
              <li>
                Day-of volunteers are also appreciated! Please get in touch{" "}
                <a href="https://forms.gle/DrZ4CP1EbRN4mjJb9">here</a> if you're
                interested in helping.
              </li>
            </ul>
          </div>

          <div className="neon-box">
            <h2>Where are bathrooms?</h2>
            <ul className="x">
              <li>
                Mueller park has 4 dedicated indoor bathroom stalls. There will
                also be portapotties stationed at the park, at Twin Town
                fitness, and on Dupont and 27th for extra access. See exact
                locations on our map!
              </li>
            </ul>
          </div>
        </div>

        <div class="half-flex even-row">
          <div className="neon-box">
            <h2>What's there to eat and drink?</h2>
            <ul className="x">
              <li>
                There will be food/beverage trucks at Mueller Park and Twin Town
                Fitness. The Wedge is also surrounded by tons of amazing local
                businesses! Pop in anywhere that looks appetizing. Attendees are
                also encouraged to pack snacks and drinks for themselves and
                maybe even to share with neighbors as they'd like.
              </li>
            </ul>
          </div>

          <div className="white-box">
            <h2>Where can I park?</h2>
            <ul className="x">
              <li>
                The Wedge is a very dense neighborhood and street parking is
                notoriously sparse. Attendees are <b>highly</b> encouraged to
                take public transit (the 21, 17, 6, 4, and 2 bus lines all touch
                the Wedge) bike (the greenway cuts right through us!), walk,
                rideshare, carpool, etc!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
