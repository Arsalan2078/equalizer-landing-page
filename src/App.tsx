const App = () => {
  return (
    <div className="app text-preset--body">
      <main>
        <h1 className="text-preset--heading">
          We make your music sound extraordinary.
        </h1>

        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>

        <h2 className="text-preset--sub-title">Premium EQ</h2>

        <p>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>

        <div>
          <span className="text-preset--sub-price">$4</span> / month
        </div>

        <a href="#" className="text-preset--button">
          iOS Download
        </a>

        <a href="#" className="text-preset--button">
          Android Download
        </a>
      </main>

      <footer className="text-preset--footer">
        <div>All rights reserved © Equalizer 2021</div>
        <div>
          Have any problems? Contact us via social media or email us at{" "}
          <a
            href="mailto:equalizer@example.com"
            className="text-preset--footer-bold"
          >
            equalizer@example.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
