PIXILNOISE PERSONAL SITE v32
=============================

Based on the user's uploaded v31 files.

Applied:
1. CONTACT mail destination changed to pixilnoise2000@gmail.com.
2. Direct in-site form submission remains on hold; SEND still opens the mail app.
3. Added a bilingual LICENSE scope notice:
   - Primarily applies to commissioned works.
   - Public works explicitly marked free/use-permitted follow their individual terms instead.
4. RELEASE placeholders and STORE are otherwise preserved.
5. OGP remains on hold until the public URL is finalized.
6. Added alt text to major site images.
7. Added a real experimental RELEASE entry for:
   - 欠色レコード
   - BPM 224
   - 2026/08/21
   - pixilnoise feat. 初音ミク
   - MELODIC / VOCAL / POP
   - Artwork: kesshoku_record.jpg
   - Link: https://youtu.be/y5rzn70TR84
   The HOME latest card, HOME release card, and RELEASE archive card open YouTube.
8. Added a dedicated mobile MENU overlay for screens <= 900px.
   - Full navigation
   - Social links
   - ESC / CLOSE support
   - Responsive one/two-column navigation layout


PIXILNOISE PERSONAL SITE v33 UI FRAME FIX
========================================
- Based directly on the latest user-uploaded v32 source files.
- The jacket JPEG itself is unchanged.
- Added a dedicated web UI frame around the real jacket image on HOME and RELEASE.
- Frame includes a thin double line, corner brackets, ARTWORK // 01 HUD label, and restrained dark backing.
- HOME LATEST RELEASE uses a simplified version of the same frame.
- Existing YouTube links, mobile menu, LICENSE notice, CONTACT address, RELEASE filters and STORE are preserved.


PIXILNOISE PERSONAL SITE v35 GENRE FIX
======================================
- Multi-page version preserved.
- Updated 欠色レコード genre display beside the release date:
  VOCAL MELODIC POP
- Applied on HOME and RELEASE pages.


PIXILNOISE PERSONAL SITE v36 OFFICIAL URL
=========================================
- Updated LICENSE credit template official site URL to:
  https://pixilnoise.github.io/pixilnoiseweb/index.html
- Updated the note below the credit template to match the current public URL.


PIXILNOISE PERSONAL SITE v37 RELEASE SORT
=========================================
Added RELEASE sorting controls:
- BPM ascending / descending
- Release date newest / oldest
- Track length longest / shortest

Notes:
- Genre filtering remains available and works together with sorting.
- COMING SOON placeholders always stay after actual releases.
- Sort metadata is stored on each release card:
  data-bpm="224"
  data-date="2026-08-21"
  data-duration="seconds"
- 欠色レコード has BPM/date set. Track duration is intentionally left blank
  until an exact duration value is supplied, so no incorrect time is published.


PIXILNOISE PERSONAL SITE v38 RELEASE DATA
========================================
Added:
- DUBSTOP
  BPM 229
  2026/08/27
  SPEED DUBSTEP / RHYTHM GAME / HARDCORE
  LENGTH 2:00
  YouTube: https://youtu.be/JBkb0LcE-eU
  Artwork: dubstop.jpg
- 欠色レコード length set to 2:52.

UI changes:
- Release date and genre are now shown on separate lines.
- Track length is shown as its own metadata row.
- Genre filter buttons, sort controls, and release metadata text are larger for readability.
- HOME latest release is synced to DUBSTOP.
- HOME latest works now shows DUBSTOP and 欠色レコード.


PIXILNOISE PERSONAL SITE v39 RELEASE FIX
========================================
Fixes:
- BPM ↑ now sorts from high BPM to low BPM.
- BPM ↓ now sorts from low BPM to high BPM.
- Unreleased/COMING SOON cards now use the same metadata row structure and card height as released works.
- Added subtle intermittent noise/glitch effects to unreleased cards only.
- Reduced-motion users do not receive the noise animation.


PIXILNOISE PERSONAL SITE v40 NOISE BOOST
========================================
- Increased COMING SOON glitch/noise frequency.
- Increased scanline/noise intensity.
- Added more frequent horizontal glitch flashes.
- Added stronger text flicker and occasional artwork jitter.
- Reduced-motion preference still disables these animations.


PIXILNOISE PERSONAL SITE v41 SMOOTH SORT
========================================
- RELEASE cards now use FLIP-style movement when sorting.
- Cards slide smoothly from the old grid position to the new one instead of jumping instantly.
- Motion uses a soft cubic-bezier easing and ~560ms duration.
- Initial page load does not animate the default order.
- prefers-reduced-motion disables the movement animation.


PIXILNOISE PERSONAL SITE v42 RELEASE BATCH
==========================================
Added to RELEASE:
- Parasite World D
- Dyxviaphobia [half tempo remix]
- Fragments of Salvation -2026 remix
- Undertale - Battle Against A True Hero
- 星骸創世アルカディア

All entries include BPM, date, genre, length, artwork, destination link,
and sorting metadata.

Release-type icon badges:
- ALBUM
- REMIX
- COLLAB

Applied badges:
- Dyxviaphobia [half tempo remix] -> REMIX
- Fragments of Salvation -2026 remix -> REMIX
- Undertale - Battle Against A True Hero -> COLLAB + REMIX
- 星骸創世アルカディア -> ALBUM

HOME latest works now shows the four newest released works.


PIXILNOISE PERSONAL SITE v43 FILTER FIX
=======================================
- Added ALBUM and COLLAB to RELEASE category filters.
- 星骸創世アルカディア -> ALBUM filter.
- Undertale - Battle Against A True Hero -> COLLAB filter.
- Category filtering now performs a quick grid fade-out, updates the card layout
  while hidden, then quickly fades the settled grid back in.
- Existing smooth FLIP animation for sort controls is preserved.


PIXILNOISE PERSONAL SITE v44 AUTHOR FIX
========================================
- Updated Undertale - Battle Against A True Hero artist credit to:
  pixilnoise x NekoZe / KyphoXis
