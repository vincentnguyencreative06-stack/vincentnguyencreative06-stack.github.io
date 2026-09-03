import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Headphones, LibraryBig, PenLine, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Marginalia", description: "The creative life, books, audio and small obsessions around Vincent Nguyen's professional work.", robots: { index: false, follow: false } };

const episodes = [
  { number: "#01", title: "Love, Through a Psychological Lens", note: "The episode that most clearly represents where Vincent Radio began: curiosity, tenderness and an attempt to make psychology feel close to ordinary life.", spotify: "https://open.spotify.com/episode/22XQ4IMykyrJmVpYZvO9Ux?si=7ac3f2db2c184924", apple: "https://podcasts.apple.com/vn/podcast/vincent-radio/id1662305012?i=1000591865775" },
  { number: "#17", title: "The Court of Public Opinion", note: "A psychological and socio-cultural reflection on judgement, reputation and the pressure of other people's voices.", spotify: "https://open.spotify.com/episode/3fyARFrwj1esiPO0gkH8D4?si=23597c459cf84200", apple: "https://podcasts.apple.com/vn/podcast/vincent-radio/id1662305012?i=1000613658623" },
  { number: "#23", title: "Let's Talk About Death", note: "A gentle conversation about mortality, grief and the difficult thoughts that sometimes accompany them.", spotify: "https://open.spotify.com/episode/67BFl44gj1MB3gMbCN7o5l?si=6b6ca01201764035", apple: "https://podcasts.apple.com/vn/podcast/vincent-radio/id1662305012?i=1000620149335", content: true },
];

export default function MarginaliaPage() {
  return (
    <div className="marginalia">
      <section className="marginalia-hero shell section-pad">
        <Link className="back-link" href="/"><ArrowLeft size={15} /> Return to the serious pages</Link>
        <div className="marginalia-hero-grid">
          <div><p className="eyebrow">A footnote with its own door</p><h1>Marginalia</h1><p className="lede">Behind the résumé is a room I rarely leave unlocked: the radio hums, the ink stays wet, and everything here is a part of me.
</p><p className="hand-note">Filed under: things I care about a little too much.</p></div>
          <figure><img src="/assets/images/marginalia-hero.webp" alt="Vincent wearing a playful denim crown and holding a card" /><figcaption>Exhibit A: seriousness, reconsidered.</figcaption></figure>
        </div>
      </section>

      <section className="marginalia-chapter shell section-pad">
        <div className="chapter-heading"><span>01</span><div><p className="eyebrow">Books, ink and other necessary things</p><h2>A quiet life can still be a crowded one.</h2></div></div>
        <div className="objects-grid">
          <figure className="tall"><img src="/assets/images/stationery.webp" alt="Fountain pens, inks and stationery arranged on a desk" /><figcaption>Fountain pens, paper and the small ritual of beginning.</figcaption></figure>
          <div className="reading-note"><LibraryBig /><p>An ideal day is simple: leaving the house, finding a favourite café, ordering a familiar drink and reading alone.</p><div className="book-list"><span>Three lasting books</span><p><em>Anxious People</em> — Fredrik Backman</p><p><em>Babel</em> — R. F. Kuang</p><p><em>All About Love</em> — bell hooks</p></div></div>
          <figure><img src="/assets/images/book.webp" alt="An open book photographed during a reading session" /><figcaption>A page worth pausing over.</figcaption></figure>
        </div>
      </section>

      <section className="radio-band section-pad">
        <div className="shell">
          <div className="radio-header"><img src="/assets/images/vincent-radio-logo.webp" alt="Vincent Radio television logo" /><div><p className="eyebrow">02 / Vincent Radio</p><h2>A place for young people learning how to grow up.</h2><p>I started Vincent Radio to give my voice a place in my generation—and, beyond that, to create a space of companionship, reassurance and care for young people growing up alongside me.</p><div className="button-row"><a className="button button-solid" href="https://open.spotify.com/show/5Xpj6NUuOKiCPB6y5TXNnu?si=c1b27877285546e2" target="_blank" rel="noreferrer">Listen on Spotify <ArrowUpRight size={16} /></a><a className="button button-quiet" href="https://podcasts.apple.com/vn/podcast/vincent-radio/id1662305012" target="_blank" rel="noreferrer">Apple Podcasts <ArrowUpRight size={16} /></a></div></div></div>
          <div className="episode-list">
            {episodes.map((episode) => <article key={episode.number}><span>{episode.number}</span><div><h3>{episode.title}</h3><p>{episode.note}</p>{episode.content && <small>Content note: mortality, grief and suicidal thoughts.</small>}<div><a href={episode.spotify} target="_blank" rel="noreferrer">Spotify ↗</a><a href={episode.apple} target="_blank" rel="noreferrer">Apple ↗</a></div></div></article>)}
          </div>
          <div className="video-grid">
            <figure><video controls muted playsInline preload="metadata" poster="/assets/images/podcast-bts-poster.webp"><source src="/assets/media/podcast-behind-the-scenes.mp4" type="video/mp4" /></video><figcaption>Behind the scenes: recording and editing the show.</figcaption></figure>
            <figure><img src="/assets/images/radio-studio.webp" alt="Vincent working with headphones and recording equipment" /><figcaption>Me, the little prince of my own imaginative land.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="marginalia-chapter shell section-pad">
        <div className="chapter-heading"><span>03</span><div><p className="eyebrow">Notes written in verse</p><h2>Poetry arrived before I knew how to invite it.</h2></div></div>
        <div className="poetry-grid">
          <div className="poetry-intro"><p>I came to poetry like a wanderer looking for shelter: a way to soothe the loneliness within me. It found me during my first romantic heartbreak, as naturally as a sigh after love had been refused.</p><p>I wrote poem after poem to preserve emotions that arrived too quickly to contain. I experiment with several forms, although I remain most drawn to classical Chinese Tang-style verse. In time, I hope to give every poem the English translation it deserves.</p></div>
          <figure><img src="/assets/images/poetry-page.webp" alt="A handwritten poem on a page" /><figcaption>Drafts written slowly, feelings arriving quickly.</figcaption></figure>
        </div>
        <div className="poem-cards">
          <article><span>Translated from Vietnamese</span><h3>Yearning</h3><p className="poem">Tired feet, a restless heart that longs;<br />Again I mistook kindness for a sign.<br />At dusk the empty lake was full of light—<br />You missed another shadow, never mine.</p><small>A Vietnamese seven-syllable quatrain in the Tang poetic tradition.</small></article>
          <article><span>English original · excerpt</span><h3>Blind</h3><p className="poem">Love is a mischievous drug,<br />and fated Cupid has always been blind.</p><small>A poem about desire, fate and what love refuses to let us see.</small></article>
          <article><span>Translation in progress</span><h3>Holding the Little Pup</h3><p className="poem">A small creature held close;<br />a moment of gentleness made ordinary.</p><small>Written in the Vietnamese alternating six-eight verse tradition.</small></article>
        </div>
      </section>

      <section className="essay-band section-pad">
        <div className="shell essay-grid"><div><p className="eyebrow">04 / Essays and detours</p><h2>I occasionally follow a question further than necessary.</h2><p>Articles begin when a film, a cultural object or an online behaviour refuses to stay simple.</p></div><article><span>Essay in translation</span><h3>Ratatouille and the Craft of Cultural Fidelity</h3><p>A note on what <em>Ratatouille</em> reveals about research, craft and the responsibility of representing a culture through entertainment.</p><small>The original Vietnamese draft is being fact-checked and rewritten for publication.</small></article></div>
      </section>

      <section className="marginalia-chapter shell section-pad">
        <div className="chapter-heading"><span>05</span><div><p className="eyebrow">Symbols and self-understanding</p><h2>Some languages are analytical. Others are symbolic.</h2></div></div>
        <div className="symbols-grid"><div><p>During an isolating period in high school, I taught myself Tarot through English-language materials while looking for a way to understand myself, and, eventually, other people. Astrology followed as another symbolic language through which I could explore identity, relationships and the stories people construct around their lives.</p><blockquote>I keep them as languages of reflection, never as substitutes for evidence.</blockquote></div><figure><video controls muted playsInline preload="metadata" poster="/assets/images/cards-bts-poster.webp"><source src="/assets/media/cards-behind-the-scenes.mp4" type="video/mp4" /></video><figcaption>Cards, symbols and a carefully considered frame.</figcaption></figure></div>
      </section>

      <section className="shelf-band section-pad">
        <div className="shell"><div className="chapter-heading"><span>06</span><div><p className="eyebrow">The cultural shelf</p><h2>Things that stay in the room after they end.</h2></div></div><div className="shelf-grid"><article><Headphones /><span>Listening</span><p>Pop, folk, indie and alternative, with Taylor Swift as the clearest creative influence.</p></article><article><Sparkles /><span>Watching</span><p><em>Jojo Rabbit</em>, <em>Ocean&apos;s 8</em> and <em>Heartstopper</em>.</p></article><article><PenLine /><span>Talking for hours</span><p>Mysticism, patriarchy, feminism, linguistics, language acquisition and literature.</p></article><article><LibraryBig /><span>A small obsession</span><p>How people perceive themselves and the world around them, especially within LGBTQIA+ communities.</p></article></div></div>
      </section>

      <section className="shell unnecessary section-pad"><p className="eyebrow">07 / A few unnecessary facts</p><div className="unnecessary-grid"><p>I once weighed <strong>94 kilograms</strong> and worked my way down to <strong>67</strong>. The current number remains classified.</p><p>I would like to learn <strong>French</strong>, partly for the language and partly for the pleasure of becoming a beginner again.</p><p>My only declared life principle: <strong>when you do something, do it wholeheartedly.</strong></p></div></section>
      <section className="wholehearted shell section-pad"><span>✦</span><blockquote>When you do something,<br />do it wholeheartedly.</blockquote><Link className="button button-solid" href="/">Return to the serious pages <ArrowUpRight size={16} /></Link></section>
    </div>
  );
}
