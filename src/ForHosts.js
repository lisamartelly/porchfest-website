import img1 from "./img/Arlington-porchfest-2021.jpg";
import img2 from "./img/jp-porchfest.jpg";

const ForHosts = () => {
  return (
    <div>
      <div className="padded-container">
        <div className="half-flex">
          <div id="host-row-1">
            <div className="white-box">
              <h2>Calling all people with porches!</h2>

              <p>
                On <b>August 16th,</b> bands will be scattered across porches
                throughout the Wedge neighborhood in Uptown putting on free
                concerts for the community. Neighbors can gather, wander, and
                experience music all around them.
              </p>
              <div class="divider div-dot"></div>
              <p>
                <b>
                  If you like the idea of talented musicians coming (literally)
                  to your front door,
                </b>{" "}
                this is for you. It's also a great way to connect with your
                neighbors and help build our community.
              </p>

              <div className="centered">
                <div className="" style={{ marginRight: 20 }}>
                  <a
                    href="https://porchfestpal.com/porchapplication/uptown-porchfest"
                    rel="noreferrer"
                    target="_blank"
                    className="ctaPrimary"
                  >
                    Sign Up To Host!
                  </a>
                </div>

                {/* <div >
                    <a href="https://forms.gle/yvXUSaUVUsw2gYUGA" rel="noreferrer" target="_blank" className="ctaPrimary">Request more info</a>
                  </div> */}
              </div>
            </div>

            <div className>
              <img
                src={img2}
                alt="pfest"
                id="img1-hostpage"
                className="fancy-img"
              />
            </div>
          </div>
          <div className="host-col-2">
            <img src={img1} alt="pfest" id="img1" className="fancy-img" />

            <div className="neon-box" style={{ marginTop: 35 }}>
              <div>
                <h2>All that's required: </h2>
                <ul className="x">
                  <li>
                    Your permission to host musicians on your porch, yard,
                    stoop, balcony, or driveway
                  </li>
                  <li>Access to an outlet/electricity</li>
                  <li>
                    Willingness to communicate with your assigned band before
                    the event
                  </li>
                  <li>
                    Seeking spaces in Uptown neighborhoods: the Wedge, South
                    Uptown, and Whittier
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <b>
                    Musicians will bring the talent and equipment, you provide
                    the space!
                  </b>
                </p>
                <p>
                  If you want to play a key role in making this community event
                  successful, click the sign up button and an event organizer
                  will reach out to you! Make sure to get your application in
                  fast as early applications will receive priority.
                </p>
              </div>

              <div className="centered">
                <div className="" style={{ marginRight: 20 }}>
                  <a
                    href="https://porchfestpal.com/porchapplication/uptown-porchfest"
                    rel="noreferrer"
                    target="_blank"
                    className="ctaPrimary"
                  >
                    Sign Up To Host!
                  </a>
                </div>

                {/* <div >
                    <a href="https://forms.gle/yvXUSaUVUsw2gYUGA" rel="noreferrer" target="_blank" className="ctaPrimary">Request more info</a>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className>
            <div className="white-box" style={{ marginTop: 35 }}>
              <div style={{ margin: "auto" }}>
                <h2>FAQ:</h2>
                <h3>
                  Do I pick my band? What if I'm in a band or know a band?
                </h3>
                <ul className="x">
                  <li>
                    If you are in your own band, hell yeah, of course you can
                    play at your own home during Porchfest! Same with if you
                    know a band or have friends in a band
                  </li>
                  <li>
                    We DO need you to still submit the Band/Host applications so
                    that we can keep your info with everyone else's and get you
                    listed on the map and our website. You can add a note in the
                    app that you have your own band.
                  </li>
                  <li>
                    Sound overlap is our major hurdle in organizing, and we want
                    to spread the Porchfest love as much as possible. Please be
                    willing to be flexible with us as we try to organize
                    everyone who wants to play!
                  </li>
                  <li>
                    If you aren't in a band and need us to pair you with one,
                    it's generally not feasible to let hosts hand-select their
                    band from our hundreds of applicants. Believe it or not, the
                    element of chance is part of the magic of Porchfest. That
                    being said, we will try our best to pair you with bands that
                    are to your preferences! And if you have special
                    circumstances around this, please just let us know.
                  </li>
                </ul>
                <h3>What does a host have to do?</h3>
                <ul className="x">
                  <li>
                    Have a porch, yard, stoop, patio, or driveway where a
                    musician or band can play!
                  </li>
                  <li>
                    Have electrical power available. Depending on the band size,
                    it may be smart to use separate outlets from separate
                    circuits. Extension cords are OK, but they should be robust
                    enough for the equipment that will be plugged into them. You
                    can connect with your band about this!
                  </li>
                  <li>
                    Make your band feel welcome and appreciated! They are
                    playing for free, after all. This could include helping
                    choose a space where your band can set up a merch table,
                    offering chairs/stools, providing a bathroom for the
                    performers to use, or having some beverages or snacks
                    available. None of this is required but it all goes a long
                    way in fostering community and giving everyone a positive
                    experience
                  </li>
                  <li>
                    In the event of severe weather Porchfest will pivot to the
                    following day, Sunday, August 17th. Ideally, hosts should
                    commit to being available both days
                  </li>
                </ul>
                <h3>In the weeks before the show:</h3>
                <ul className="x">
                  <li>
                    Contact your band once the Porchfest organizers connect you
                    (usually about a month before the event) and discuss where
                    the band will set up, how much time they will need to set
                    up, parking options, their power/outlet requirements, and
                    any other questions
                  </li>
                  <li>
                    Look at your porch/yard/driveway from the street to imagine
                    what someone watching the band will see. Feel free to spruce
                    things up and have fun with it!
                  </li>
                  <li>
                    Consider letting your neighbors know that the street might
                    be crowded during Porchfest, and probably a little noisier
                    than usual 🙂 But don't worry, the organizers will take care
                    of noise permits for you!
                  </li>
                </ul>
                <h3>What needs to be done the day of the show? </h3>
                <ul className="x">
                  <li>
                    We recommend coming up with a creative way to save the
                    parking areas in front of your porch for attendees. This
                    could be using your car and then moving it when your band
                    starts, putting out chairs and hoping folks don't move them,
                    or anything else you want to try 😎
                  </li>
                  <li>
                    Be available to meet the band before the show to get set up,
                    offer your bathroom if you're comfortable with that, etc.
                  </li>
                  <li>
                    Our neighborhood houses are pretty old! It's best to have
                    someone on-site during the show in case of blown circuit
                    breakers or any other incidental issues
                  </li>
                  <li>
                    HAVE FUN AND ENJOY THE SHOW BROUGHT RIGHT TO YOUR DOOR STEP
                  </li>
                </ul>
              </div>
              <div></div>

              <div className="centered">
                <div className="" style={{ marginRight: 20 }}>
                  <a
                    className="ctaPrimary"
                    rel="noreferrer"
                    target="_blank"
                    href="https://porchfestpal.com/porchapplication/uptown-porchfest"
                  >
                    Sign Up To Host!
                  </a>
                </div>

                {/* <div>
                  <a
                    href="mailto:uptownporchfest@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="ctaPrimary"
                  >
                    Download Band Guide TO DO
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForHosts;
