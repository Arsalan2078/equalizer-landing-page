import Logo from "../Logo";

const Header = () => {
  return (
    <header>
      <div className={`container`}>
        <nav>
          <Logo />
        </nav>

        <div>
          <h1 className="text-preset--heading">
            We make your music sound extraordinary.
          </h1>

          <p>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
