/* global React, ReactDOM, DovoNav, Hero, DovoMarquee, About, Experience, Projects, Consulting, Book, Footer, TweaksPanel, useTweaks, TweakSection, TweakSlider, TweakRadio, TweakColor */

const DOVO_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroAccent": "pink",
  "confettiDensity": 0.8,
  "tilt": 1
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(DOVO_DEFAULTS);

  // Tilt multiplier — apply via CSS var
  React.useEffect(() => {
    document.documentElement.style.setProperty("--tilt-mult", tweaks.tilt);
  }, [tweaks.tilt]);

  return (
    <div className="app-shell">
      <DovoNav />
      <Hero tweaks={tweaks} />
      <DovoMarquee />
      <About />
      <Experience />
      <Projects />
      <Consulting />
      <Book />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakRadio
            label="Accent color"
            value={tweaks.heroAccent}
            onChange={(v) => setTweak("heroAccent", v)}
            options={[
              { value: "pink", label: "Pink" },
              { value: "cyan", label: "Cyan" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Decoration">
          <TweakSlider
            label="Confetti density"
            value={tweaks.confettiDensity}
            min={0} max={1.5} step={0.1}
            onChange={(v) => setTweak("confettiDensity", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
