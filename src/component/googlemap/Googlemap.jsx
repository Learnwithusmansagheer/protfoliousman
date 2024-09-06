import React from 'react';

export default function Googlemap() {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="820"
            height="553"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=faisalabad+pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{ width: '100%', height: '100%', border: 'none' }}
          ></iframe>
          <a href="https://timenowin.net/">online clock</a>
          <br />
          <a href="https://www.analarmclock.com/"></a>
          <br />
        </div>
      </div>

      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 553px;
          width: 820px;
          max-width: 100%;
        }

        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 553px;
          width: 820px;
          max-width: 100%;
        }

        @media screen and (max-width: 850px) {
          .mapouter, .gmap_canvas {
            width: 100%;
            height: auto;
          }

          iframe {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
