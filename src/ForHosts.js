
import img1 from "./img/Arlington-porchfest-2021.jpg";
import img2 from "./img/jp-porchfest.jpg"


const ForHosts = () => {

    return (
      <div>
        <div className="padded-container">
          <div  className="half-flex">
            <div id="host-row-1">
              <div className="white-box">
                <h2>Calling all people with porches!</h2>
                

                <p>
                On <b>August 19th,</b> bands will be scattered across porches throughout the Wedge putting on free concerts for the community.  
                Neighbors can gather, wander, and experience music all around them.  
                </p>
                <div class="divider div-transparent div-dot"></div>
                <p>
                <b>If you like the idea of talented musicians coming (literally) to your front door,</b> this is for you.
                It's also a great way to connect with your neighbors and help build our community. 
                </p>

                <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a href="https://forms.gle/GFGwCTTVkAZwy3Ke7" className="ctaPrimary">Sign up to host</a>
                  </div>

                  <div >
                    <a href="https://forms.gle/3Pea3UjkafwKizbX7" className="ctaPrimary">Request more info</a>
                  </div>
                </div>
                

              </div>
              
              <div className>
                <img src = {img2} alt="pfest" id="img1-hostpage" className="fancy-img" />
              </div>
             
              
            </div>
            <div className="host-col-2">
                <img src = {img1} alt="pfest" id="img1" className="fancy-img" />

                <div className="neon-box" style={{marginTop: 35}}>
                  <div>
                    <h2>All that's required: </h2>
                    <ul className="x">
                      <li>Your permission to host musicians on your porch, yard, stoop, balcony, or driveway</li>
                      <li>Access to an outlet/electricity</li>
                      <li>Willingness to communicate with your assigned band before the event</li>
                    </ul>
                  </div>
                <div>
                  <p>
                    <b>Musicians will provide equipment, we'll provide the volunteers, you provide the space!</b>
                  </p>
                  <p>
                    If you want to be a founding porch in this inaugural community event, click the sign up button and an event organizer will reach out to you! 
                    Make sure to get your application in fast as early applications will receive priority. 
                  </p>
                  
                </div>

                <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a href="https://forms.gle/GFGwCTTVkAZwy3Ke7" className="ctaPrimary">Sign up to host</a>
                  </div>

                  <div >
                    <a href="https://forms.gle/3Pea3UjkafwKizbX7" className="ctaPrimary">Request more info</a>
                  </div>
                </div>
            
                </div>

            </div>
          </div>
        </div>

          
          
         
      </div>
        
    );
  };
  
  export default ForHosts;