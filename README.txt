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


PIXILNOISE PERSONAL SITE v45 OGP / FAVICON
==========================================
- Added OGP image: ogp.jpg (1200 x 630)
- Added favicon: favicon.png (300 x 300)
- Added Open Graph metadata to all main pages.
- Added X/Twitter large-card metadata to all main pages.
- Added favicon + Apple touch icon metadata.
- Public base URL:
  https://pixilnoise.github.io/pixilnoiseweb/
- OGP image URL:
  https://pixilnoise.github.io/pixilnoiseweb/ogp.jpg


PIXILNOISE PERSONAL SITE v46 FORMSPREE CONTACT
==============================================
- CONTACT now submits directly from the website through Formspree.
- Form endpoint: https://formspree.io/f/mbgjrbre
- Mail application is no longer opened for normal submissions.
- Added in-page SENDING, success, and error states.
- Added MESSAGE SENT confirmation panel and NEW MESSAGE reset button.
- Existing REQUEST -> CONTACT subject-template links remain supported.
- Added a hidden honeypot field for basic bot filtering.
- OGP / favicon and all existing site features are preserved.


PIXILNOISE PERSONAL SITE v47 CONTACT VALIDATION
================================================
- Added custom required-field validation for name, email, subject, and message.
- Added email-format validation.
- Validation and send errors are shown in Japanese + English.
- Added a persistent 30-second resend cooldown after successful submission.
- Submit button displays a countdown and remains disabled during cooldown.
- After the first successful message, the success panel recommends sending a
  second or later message directly from the user's own email account.
- Added direct mail link to pixilnoise2000@gmail.com in the success panel.
- Existing Formspree endpoint, OGP, favicon, REQUEST subject preset, and site UI are preserved.


PIXILNOISE PERSONAL SITE v48 MOBILE RELEASE FIX
===============================================
- Fixed RELEASE archive remaining blurred while scrolling on smartphone layouts.
- RELEASE archive blur effects are disabled at <=700px.
- RELEASE archive controls/cards are immediately revealed on mobile as a browser safety measure.
- Added a fail-safe that clears the temporary filter fade state after 420ms.
- Desktop animations are unchanged.
- Existing CONTACT/Formspree, cooldown, OGP, favicon and release features are preserved.


PIXILNOISE PERSONAL SITE v49 COLLAB LINKS
=========================================
- Added NekoZe / KyphoXis collaborator links to the Undertale remix card.
- YouTube: https://www.youtube.com/@KyphoX1s
- X: https://x.com/_4vvay
- Added clearly labeled YT and X icon buttons.
- Added the same collaborator-link UI on HOME and RELEASE.
- Main card click still opens the original Undertale remix video.
- Existing v48 mobile RELEASE blur fix, Formspree CONTACT, OGP and favicon are preserved.


PIXILNOISE PERSONAL SITE v50 RELEASE BATCH
==========================================
Added 5 releases:
- 朝の光の中で (音ゲー Ver.) 【pixilnoise's remix】 MONTAGEM HIKARI
- 果ての始発物語
- Evolve World C
- BITFLOWER
- 平凡なクリスマス

Release categories:
- MONTAGEM HIKARI: hard / vocal / pop / remix (melodic intentionally excluded)
- 果ての始発物語: hard only (melodic intentionally excluded)
- Evolve World C: hard / melodic
- BITFLOWER: hard / melodic
- 平凡なクリスマス: pop / melodic

Other changes:
- Added REMIX badge to MONTAGEM HIKARI.
- Added new COMMISSION badge type and applied it to 平凡なクリスマス.
- BITFLOWER uses a dedicated ARTWORK PENDING card until its jacket is supplied.
- Supplied artwork files were mapped in order to releases 1, 2, 3, and 5.
- Existing v49 collaborator links, v48 mobile blur fix, CONTACT/Formspree, OGP and favicon are preserved.


PIXILNOISE PERSONAL SITE v51 ACHIEVEMENT FIX
============================================
- v50 remains the content baseline.
- Added "平凡なクリスマス" to HOME > ACHIEVEMENT LOG > 楽曲制作.
- Achievement text: selected as the theme song for a university Christmas event.
- Added a direct YouTube link from the achievement detail.
- University name is intentionally not specified.
- All v50 release cards and existing site features are preserved.
