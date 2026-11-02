#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/meme-provenance.mjs
function normalizeMemeProvenance(value = {}) {
  const fail3 = () => {
    throw Error("This meme has invalid attribution data.");
  };
  if (!value || typeof value !== "object" || !Array.isArray(value.creators || []) || !Array.isArray(value.parents || []) || (value.creators || []).length > 20 || (value.parents || []).length > 20) fail3();
  return { creators: (value.creators || []).map((item) => {
    if (!item || typeof item.name !== "string" || item.name.length > 80 || item.postId !== void 0 && (typeof item.postId !== "string" || item.postId.length > 128)) fail3();
    return { name: item.name, ...item.postId ? { postId: item.postId } : {} };
  }), parents: (value.parents || []).map((id) => {
    if (!/^[a-f0-9]{64}$/.test(id)) fail3();
    return id;
  }) };
}
var init_meme_provenance = __esm({
  "shared/meme-provenance.mjs"() {
  }
});

// shared/meme-image.mjs
function memeImageInfo(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length), ascii = (at, n) => String.fromCharCode(...bytes.subarray(at, at + n));
  let width, height, mediaType;
  if (bytes.length >= 33 && bytes[0] === 137 && ascii(1, 3) === "PNG" && ascii(12, 4) === "IHDR") {
    mediaType = "image/png";
    width = view.getUint32(16);
    height = view.getUint32(20);
  } else if (bytes.length >= 20 && ascii(0, 4) === "RIFF" && ascii(8, 4) === "WEBP") {
    mediaType = "image/webp";
    const kind = ascii(12, 4);
    if (kind === "VP8X" && bytes.length >= 30) {
      width = 1 + bytes[24] + (bytes[25] << 8) + (bytes[26] << 16);
      height = 1 + bytes[27] + (bytes[28] << 8) + (bytes[29] << 16);
    } else if (kind === "VP8L" && bytes.length >= 25 && bytes[20] === 47) {
      width = 1 + bytes[21] + ((bytes[22] & 63) << 8);
      height = 1 + (bytes[22] >> 6) + (bytes[23] << 2) + ((bytes[24] & 15) << 10);
    } else if (kind === "VP8 " && bytes.length >= 30 && ascii(23, 3) === "\x9D*") {
      width = view.getUint16(26, true) & 16383;
      height = view.getUint16(28, true) & 16383;
    }
  } else if (bytes.length >= 4 && bytes[0] === 255 && bytes[1] === 216) {
    mediaType = "image/jpeg";
    let at = 2;
    while (at + 4 <= bytes.length) {
      if (bytes[at++] !== 255) break;
      while (bytes[at] === 255) at++;
      const marker = bytes[at++];
      if (marker === 218 || marker === 217) break;
      if (marker === 1 || marker >= 208 && marker <= 215) continue;
      if (at + 2 > bytes.length) break;
      const length = view.getUint16(at);
      if (length < 2 || at + length > bytes.length) break;
      if ([192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207].includes(marker) && length >= 8) {
        height = view.getUint16(at + 3);
        width = view.getUint16(at + 5);
        break;
      }
      at += length;
    }
  }
  if (!width || !height || width * height > 4e7) throw Error("Choose a valid meme image under 40 megapixels.");
  return { width, height, mediaType };
}
var init_meme_image = __esm({
  "shared/meme-image.mjs"() {
  }
});

// shared/template-caption.mjs
function templateCaption(value = {}, depth = 0) {
  const out = {};
  if (depth > 2) return out;
  for (const key of ["top", "bottom", "text"]) if (typeof value[key] === "string") {
    if (value[key].length > 2e3) throw Error("Caption text must be under 2,001 characters.");
    out[key] = value[key];
  }
  for (const key of ["size", "stroke", "topOffset", "bottomOffset", "topX", "bottomX", "x", "y"]) if (Number.isFinite(value[key])) out[key] = Math.max(-2, Math.min(2, value[key]));
  if (["left", "center", "right"].includes(value.align)) out.align = value.align;
  if (typeof value.color === "string" && /^#[a-f0-9]{6}$/i.test(value.color)) out.color = value.color;
  for (const key of ["topStyle", "bottomStyle"]) if (value[key] && typeof value[key] === "object") out[key] = templateCaption(value[key], depth + 1);
  if (Array.isArray(value.deletedCaptions)) {
    out.deletedCaptions = value.deletedCaptions.filter((id) => id === "top" || id === "bottom");
    for (const id of out.deletedCaptions) out[id] = "";
  }
  if (Array.isArray(value.captions)) {
    if (value.captions.length > 20) throw Error("Use up to 20 extra captions.");
    out.captions = value.captions.map((item, index) => ({ ...templateCaption({ ...item, captions: void 0, topStyle: void 0, bottomStyle: void 0 }, depth + 1), id: `shared-caption-${index}` }));
  }
  return out;
}
var init_template_caption = __esm({
  "shared/template-caption.mjs"() {
  }
});

// shared/template-details.mjs
var rows, templateDetails;
var init_template_details = __esm({
  "shared/template-details.mjs"() {
    rows = [
      ["bad-luck", "Earnest and unlucky; dry rather than cruel.", "Everyday attempts at work, school and small personal victories.", "Set up a sensible action, then make the consequence absurdly disproportionate.", "FINALLY GETS A DAY OFF", "JURY DUTY"],
      ["scumbag", "Accusatory, knowing and casually exasperated.", "Freeloading, borrowed belongings, bad guests and everyday hypocrisy.", "Expose a deliberate selfish choice after establishing a reasonable expectation.", "BORROWS YOUR CHARGER", "ASKS WHY YOU ARE AT 2%"],
      ["good-guy", "Warm, understated and pleasantly surprised.", "Small acts of consideration that make ordinary life easier.", "Lead with an expected annoyance, then reverse it with an unexpectedly thoughtful action.", "USES THE LAST OF THE COFFEE", "STARTS ANOTHER POT"],
      ["awkward", "Self-aware, painfully specific and gently embarrassed.", "Greetings, small talk, social timing and misunderstood signals.", "The subject tries to act normally; one tiny social mistake becomes the entire punchline.", "SAYS YOU TOO", "TO THE DENTIST SAYING OPEN WIDE"],
      ["success", "Brief, triumphant and disproportionately pleased.", "Tiny practical wins and lucky breaks.", "Turn a small obstacle into a satisfyingly specific victory.", "WAKES UP BEFORE THE ALARM", "IT IS SATURDAY"],
      ["first-world", "Melodramatic about something transparently trivial.", "Comfort, convenience, gadgets and unnecessary luxuries.", "Let the comfortable situation undermine the apparent seriousness of the complaint.", "BOUGHT THE BIGGEST PHONE", "IT DOES NOT FIT THE CUP HOLDER"],
      ["philosoraptor", "Mock-philosophical, inquisitive and deceptively logical.", "Language, ordinary assumptions and silly contradictions.", "Ask a question whose conclusion follows just far enough to expose an absurd semantic twist.", "IF THE CUSTOMER IS ALWAYS RIGHT", "WHY IS THERE A RETURNS DESK"],
      ["keanu", "Startled, speculative and comically suspicious.", "Mundane glitches and harmless everyday mysteries.", "Escalate a small observation into an implausible WHAT IF explanation.", "WHAT IF THE PRINTER IS NOT BROKEN", "IT IS JUST ON A PAPER STRIKE"],
      ["fry", "Squinting uncertainty and dry self-doubt.", "Ambiguous messages, meetings, technology and personal habits.", "Offer two competing explanations for exactly the same evidence.", "NOT SURE IF THE MEETING ENDED", "OR MY WIFI FINALLY GAVE UP"],
      ["one-does", "Gravely authoritative about a ridiculous everyday difficulty.", "Errands, chores, habits and tasks that sound easy.", "Treat an ordinary task as an impossibly epic undertaking.", "ONE DOES NOT SIMPLY", "LEAVE THE HARDWARE STORE WITH ONE ITEM"],
      ["attached", "Intensely affectionate, then absurdly overcommitted.", "Fictional overattachment, relationships and excessive enthusiasm.", "Start with a plausible affectionate remark; end with an unmistakably fictional escalation.", "YOU LEFT YOUR PHONE HERE", "I HAVE ALREADY MET YOUR ENTIRE FAMILY"],
      ["ancient", "Overconfident, documentary-serious and completely unjustified.", "Small mysteries and suspiciously convenient explanations.", "A complicated observation receives one comically simplistic explanation.", "THE LEFTOVERS VANISHED OVERNIGHT", "ALIENS"],
      ["skeptical", "Plainspoken skepticism that punctures an assumption.", "Contradictions in comfortable everyday routines.", "Restate a normal claim so its hidden contradiction becomes obvious.", "SO YOU ARE TELLING ME", "YOU PAY EXTRA TO CARRY YOUR OWN BAG"],
      ["unpopular", "A mild confession delivered with quiet conviction.", "Harmless preferences and everyday social conventions.", "Present a low-stakes unpopular preference as if it were a brave admission.", "I WILL JUST SAY IT", "THE MEETING COULD HAVE BEEN A NAP"],
      ["confession", "Deadpan, guilty and unusually candid.", "Embarrassing habits, procrastination and tiny private motives.", "Reveal the specific private reason behind an ordinary public behavior.", "I SAY JUST SAW THIS", "I WATCHED THE NOTIFICATION FOR THREE DAYS"],
      ["y-u-no", "Exasperated, exaggerated and pointedly specific.", "Objects, institutions and routines that fail at their obvious job.", "Name the target, then ask the frustrated Y U NO question.", "PRINTER", "Y U NO PRINT BLACK WITHOUT CYAN"],
      ["doge", "Guileless delight with deliberately broken short phrases.", "Grand enthusiasm about very ordinary accomplishments.", "Use such/much/very fragments and a dry mismatch; one restrained wow is enough.", "SUCH EXECUTIVE", "MUCH UNREAD EMAIL. WOW."],
      ["rage", "Escalating irritation followed by a final frustrated reaction.", "Everyday plans undone by one tiny infuriating detail.", "Condense an anecdote into a clear setup and the final aggravating reversal.", "SAVES THE FILE EVERY FIVE MINUTES", "LAPTOP CRASHES AT FOUR FIFTY NINE"]
    ];
    templateDetails = Object.fromEntries(rows.map(([id, tone, theme, humor, top, bottom]) => [id, { tone, theme, humor, avoid: "Do not reuse the example verbatim. Keep the joke grounded in the supplied photo or direction.", additional: "", examples: [{ top, bottom }], thumbnail: `/assets/templates/${id}.webp` }]));
  }
});

// shared/templates.mjs
var kym, templates, byId;
var init_templates = __esm({
  "shared/templates.mjs"() {
    init_template_details();
    kym = (slug) => `https://knowyourmeme.com/memes/${slug}`;
    templates = [
      ["bad-luck", "Bad Luck Brian", "2012", "An innocent attempt ends in wildly disproportionate bad luck. The subject is the victim, not the villain.", "bad-luck-brian", "A normal action / an absurdly unfortunate consequence", "A hapless school-portrait-style character in a plaid sweater vest, awkward optimistic expression"],
      ["scumbag", "Scumbag Steve", "2011", "A familiar social transaction exposes selfishness, freeloading or hypocrisy. The subject chooses to be inconsiderate.", "scumbag-steve", "A reasonable expectation / a selfish betrayal", "A smug character in a sideways cap leaning in a doorway"],
      ["good-guy", "Good Guy Greg", "2011", "An apparently inconvenient guest or situation turns out surprisingly considerate. Reverse the expected annoyance.", "good-guy-greg", "An expected inconvenience / unexpectedly considerate behavior", "A relaxed friendly character with a knowing smile, classic portrait macro composition"],
      ["awkward", "Socially Awkward Penguin", "2009", "An ordinary social encounter ends in a specific relatable social misfire. Target the situation, not someone\u2019s appearance.", "socially-awkward-penguin", "An everyday encounter / the painfully awkward response", "The reference person in a hesitant awkward pose on an original blue radial graphic background"],
      ["success", "Success Kid", "2007\u20132011", "A tiny concrete victory feels disproportionately satisfying. Avoid inspirational speeches.", "success-kid-i-hate-sandcastles", "A small obstacle / an unexpected satisfying win", "The reference person making a triumphant fist on a beach, victorious expression"],
      ["first-world", "First World Problems", "2011", "A privileged trivial inconvenience is treated as a tragedy. Do not mistake actual hardship for triviality.", "first-world-problems", "A comfortable situation / an absurdly petty complaint", "The reference person theatrically distressed at a tiny inconvenience, hand to forehead"],
      ["philosoraptor", "Philosoraptor", "2008", "Ask a superficially logical question with a silly semantic paradox. It must be a question with an actual twist.", "philosoraptor", "If this is true / does this ridiculous implication follow?", "The reference person in an exaggerated thoughtful pose against an original green radial backdrop"],
      ["keanu", "Conspiracy Keanu", "2011", "A mundane observation becomes an absurd speculative explanation. Clearly comedic, not factual allegations.", "conspiracy-keanu", "What if / absurd explanation of mundane evidence", "The reference person looking startled and suspicious, warm red background, cinematic close-up"],
      ["fry", "Not Sure If", "2011", "Two plausible competing explanations of the SAME ambiguous evidence. One mundane, one self-deprecating or absurd.", "futurama-fry-not-sure-if", "Not sure if X / or Y", "The reference person squinting suspiciously in close-up, clean original orange graphic background"],
      ["one-does", "One Does Not Simply", "2000s\u20132010s", "Solemnly warn that an everyday task is deceptively impossible. The difficulty must be the joke.", "one-does-not-simply-walk-into-mordor", "One does not simply / a deceptively impossible mundane task", "The reference person as a solemn fantasy adviser, raised hand gesture, rustic council chamber"],
      ["attached", "Overly Attached Girlfriend", "2012", "Affection escalates into absurd overattachment. Make it fictional comic exaggeration, not an accusation about the photographed person.", "overly-attached-girlfriend", "A normal affectionate remark / absurdly possessive escalation", "The reference person looking intensely eager at the camera, comic exaggerated eye contact"],
      ["ancient", "Ancient Aliens", "2010s", "A complicated mundane mystery receives one comically unjustified explanation.", "ancient-aliens", "A baffling everyday observation / an absurdly overconfident explanation", "The reference person as an eccentric documentary interview guest gesturing with both hands"],
      ["skeptical", "Skeptical Third World Kid", "2012", "A skeptical question exposes the contradiction in a comfortable person\u2019s assumption.", "skeptical-third-world-kid", "So you are telling me / the contradiction in that claim", "The reference person giving a skeptical side-eye, documentary-style original setting"],
      ["unpopular", "Unpopular Opinion Puffin", "2011", "State a mildly unpopular everyday preference as a confession. Avoid offensive claims masquerading as an opinion.", "unpopular-opinion-puffin", "A mild confession / the surprisingly unpopular preference", "The reference person wearing a slightly sheepish expression, original puffin-inspired black and orange color blocking"],
      ["confession", "Confession Bear", "2012", "A small embarrassing secret is delivered with deadpan sincerity and a specific reveal.", "confession-bear", "An ordinary habit / an embarrassing private motivation", "The reference person leaning on a log with a solemn guilty expression, soft natural light"],
      ["y-u-no", "Y U NO", "2010", "A frustrated exaggerated question addresses an object, institution or mundane behavior. Keep the reason specific.", "y-u-no-guy", "Name the thing / Y U NO do the obvious thing?", "The reference person in an exaggerated exasperated pose, open palms, original monochrome comic-like treatment"],
      ["doge", "Doge", "2013", "Deliberately broken short adjective fragments and one dry mismatch between grand enthusiasm and mundane reality. Use sparingly; no modern crypto copy.", "doge", "Such observation / much incongruity / wow", "The reference person giving a comic sideways look with sparse original colorful text-free surroundings"],
      ["rage", "Rage Comic", "2008\u20132012", "A short everyday anecdote escalates to one final frustrated reaction. For a single image condense to setup and reaction, not an unexplained sequence.", "subcultures/rage-comics", "A mundane plan / the final infuriating reversal", "The reference person in an original four-panel hand-drawn comic depicting the requested situation"]
    ].map(([id, name, era, rule, slug, structure, recreation]) => ({ id, name, era, rule, source: kym(slug), structure, recreation, ...templateDetails[id] }));
    byId = Object.fromEntries(templates.map((t) => [t.id, t]));
  }
});

// shared/template-catalog.mjs
function normalizeTemplate(value, { media = true } = {}) {
  if (!value || typeof value !== "object" || Array.isArray(value) || typeof value.id !== "string" || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(value.id) || value.id === "auto") throw new Error("Choose a valid template ID.");
  const item = { id: value.id };
  for (const [field, limit] of Object.entries(fieldLimits)) {
    const text2 = value[field] ?? "";
    if (typeof text2 !== "string" || text2.length > limit) throw new Error(`${field} must be text under ${limit + 1} characters.`);
    item[field] = text2.trim();
  }
  if (!item.name || !item.rule) throw new Error("A template needs a name and joke rules.");
  if (value.examples !== void 0 && !Array.isArray(value.examples) || value.examples?.length > 6) throw new Error("Use up to six caption examples.");
  item.examples = (value.examples || []).map((example) => {
    if (!example || typeof example.top !== "string" || typeof example.bottom !== "string" || example.top.length > 160 || example.bottom.length > 160) throw new Error("Example lines must be text under 161 characters.");
    const description = example.description ?? "";
    if (typeof description !== "string" || description.length > 2e3) throw new Error("Example scenes must be under 2,001 characters.");
    const item2 = { top: example.top.trim(), bottom: example.bottom.trim(), ...description.trim() ? { description: description.trim() } : !media && example.image ? { description: "See accompanying example image." } : {} };
    if (media && example.image) {
      if (typeof example.image !== "string" || example.image.length > 22e4 || !/^data:image\/(jpeg|png|webp);base64,[a-zA-Z0-9+/=]+$/.test(example.image)) throw new Error("Choose a valid example image.");
      item2.image = example.image;
    }
    if (example.layout !== void 0) {
      if (!example.layout || typeof example.layout !== "object" || Array.isArray(example.layout)) throw Error("Choose a valid caption layout.");
      if (media) item2.layout = templateCaption(example.layout);
    }
    return item2;
  }).filter((example) => example.top || example.bottom || example.description || example.image);
  if (media) {
    const thumbnail = value.thumbnail || byId[item.id]?.thumbnail || "/assets/demo-desk.webp";
    if (typeof thumbnail !== "string" || thumbnail.length > 22e4 || !(/^\/assets\/[a-zA-Z0-9/_\-.]+$/.test(thumbnail) || /^data:image\/(jpeg|png|webp);base64,[a-zA-Z0-9+/=]+$/.test(thumbnail))) throw new Error("Choose a valid thumbnail image.");
    const source = value.source || "";
    if (typeof source !== "string" || source.length > 500 || source && !/^https?:\/\//i.test(source)) throw new Error("Reference links must start with https:// or http://.");
    Object.assign(item, { thumbnail, source, custom: !byId[item.id] });
  }
  return item;
}
var fieldLimits;
var init_template_catalog = __esm({
  "shared/template-catalog.mjs"() {
    init_template_caption();
    init_templates();
    fieldLimits = { name: 80, era: 80, description: 3e3, sceneDescription: 2e3, personality: 1200, sensibility: 1200, rule: 2400, structure: 600, tone: 1200, theme: 1200, humor: 1800, avoid: 1200, recreation: 2400, additional: 2400 };
  }
});

// node_modules/fflate/esm/index.mjs
import { createRequire } from "module";
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
var require2, _a, Worker, isMarkedAsUntransferable, u8, u16, i32, fleb, fdeb, clim, freb, _a, fl, revfl, _b, fd, revfd, rev, x, i, hMap, flt, i, i, i, i, fdt, i, flm, flrm, fdm, fdrm, max, bits, bits16, shft, slc, ec, err, inflt, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, deo, et, dflt, crct, crc, dopt, mrg, wbytes, Inflate, fltn, te, td, tds, exfl, wzh, wzf;
var init_esm = __esm({
  "node_modules/fflate/esm/index.mjs"() {
    require2 = createRequire("/");
    try {
      _a = require2("worker_threads"), Worker = _a.Worker, isMarkedAsUntransferable = _a.isMarkedAsUntransferable;
    } catch (e) {
    }
    u8 = Uint8Array;
    u16 = Uint16Array;
    i32 = Int32Array;
    fleb = new u8([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
      /* unused */
      0,
      0,
      /* impossible */
      0
    ]);
    fdeb = new u8([
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      /* unused */
      0,
      0
    ]);
    clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    freb = function(eb, start) {
      var b = new u16(31);
      for (var i = 0; i < 31; ++i) {
        b[i] = start += 1 << eb[i - 1];
      }
      var r = new i32(b[30]);
      for (var i = 1; i < 30; ++i) {
        for (var j = b[i]; j < b[i + 1]; ++j) {
          r[j] = j - b[i] << 5 | i;
        }
      }
      return { b, r };
    };
    _a = freb(fleb, 2);
    fl = _a.b;
    revfl = _a.r;
    fl[28] = 258, revfl[258] = 28;
    _b = freb(fdeb, 0);
    fd = _b.b;
    revfd = _b.r;
    rev = new u16(32768);
    for (i = 0; i < 32768; ++i) {
      x = (i & 43690) >> 1 | (i & 21845) << 1;
      x = (x & 52428) >> 2 | (x & 13107) << 2;
      x = (x & 61680) >> 4 | (x & 3855) << 4;
      rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
    }
    hMap = (function(cd, mb, r) {
      var s = cd.length;
      var i = 0;
      var l = new u16(mb);
      for (; i < s; ++i) {
        if (cd[i])
          ++l[cd[i] - 1];
      }
      var le = new u16(mb);
      for (i = 1; i < mb; ++i) {
        le[i] = le[i - 1] + l[i - 1] << 1;
      }
      var co;
      if (r) {
        co = new u16(1 << mb);
        var rvb = 15 - mb;
        for (i = 0; i < s; ++i) {
          if (cd[i]) {
            var sv = i << 4 | cd[i];
            var r_1 = mb - cd[i];
            var v = le[cd[i] - 1]++ << r_1;
            for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
              co[rev[v] >> rvb] = sv;
            }
          }
        }
      } else {
        co = new u16(s);
        for (i = 0; i < s; ++i) {
          if (cd[i]) {
            co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
          }
        }
      }
      return co;
    });
    flt = new u8(288);
    for (i = 0; i < 144; ++i)
      flt[i] = 8;
    for (i = 144; i < 256; ++i)
      flt[i] = 9;
    for (i = 256; i < 280; ++i)
      flt[i] = 7;
    for (i = 280; i < 288; ++i)
      flt[i] = 8;
    fdt = new u8(32);
    for (i = 0; i < 32; ++i)
      fdt[i] = 5;
    flm = /* @__PURE__ */ hMap(flt, 9, 0);
    flrm = /* @__PURE__ */ hMap(flt, 9, 1);
    fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
    fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
    max = function(a) {
      var m = a[0];
      for (var i = 1; i < a.length; ++i) {
        if (a[i] > m)
          m = a[i];
      }
      return m;
    };
    bits = function(d, p, m) {
      var o = p / 8 | 0;
      return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
    };
    bits16 = function(d, p) {
      var o = p / 8 | 0;
      return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
    };
    shft = function(p) {
      return (p + 7) / 8 | 0;
    };
    slc = function(v, s, e) {
      if (s == null || s < 0)
        s = 0;
      if (e == null || e > v.length)
        e = v.length;
      return new u8(v.subarray(s, e));
    };
    ec = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      // determined by compression function
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data"
      // determined by unknown compression method
    ];
    err = function(ind, msg, nt) {
      var e = new Error(msg || ec[ind]);
      e.code = ind;
      if (Error.captureStackTrace)
        Error.captureStackTrace(e, err);
      if (!nt)
        throw e;
      return e;
    };
    inflt = function(dat, st, buf, dict) {
      var sl = dat.length, dl = dict ? dict.length : 0;
      if (!sl || st.f && !st.l)
        return buf || new u8(0);
      var noBuf = !buf;
      var resize = noBuf || st.i != 2;
      var noSt = st.i;
      if (noBuf)
        buf = new u8(sl * 3);
      var cbuf = function(l2) {
        var bl = buf.length;
        if (l2 > bl) {
          var nbuf = new u8(Math.max(bl * 2, l2));
          nbuf.set(buf);
          buf = nbuf;
        }
      };
      var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
      var tbts = sl * 8;
      do {
        if (!lm) {
          final = bits(dat, pos, 1);
          var type = bits(dat, pos + 1, 3);
          pos += 3;
          if (!type) {
            var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
            if (t > sl) {
              if (noSt)
                err(0);
              break;
            }
            if (resize)
              cbuf(bt + l);
            buf.set(dat.subarray(s, t), bt);
            st.b = bt += l, st.p = pos = t * 8, st.f = final;
            continue;
          } else if (type == 1)
            lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
          else if (type == 2) {
            var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
            var tl = hLit + bits(dat, pos + 5, 31) + 1;
            pos += 14;
            var ldt = new u8(tl);
            var clt = new u8(19);
            for (var i = 0; i < hcLen; ++i) {
              clt[clim[i]] = bits(dat, pos + i * 3, 7);
            }
            pos += hcLen * 3;
            var clb = max(clt), clbmsk = (1 << clb) - 1;
            var clm = hMap(clt, clb, 1);
            for (var i = 0; i < tl; ) {
              var r = clm[bits(dat, pos, clbmsk)];
              pos += r & 15;
              var s = r >> 4;
              if (s < 16) {
                ldt[i++] = s;
              } else {
                var c = 0, n = 0;
                if (s == 16)
                  n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                else if (s == 17)
                  n = 3 + bits(dat, pos, 7), pos += 3;
                else if (s == 18)
                  n = 11 + bits(dat, pos, 127), pos += 7;
                while (n--)
                  ldt[i++] = c;
              }
            }
            var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
            lbt = max(lt);
            dbt = max(dt);
            lm = hMap(lt, lbt, 1);
            dm = hMap(dt, dbt, 1);
          } else
            err(1);
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
        }
        if (resize)
          cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var lpos = pos;
        for (; ; lpos = pos) {
          var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
          pos += c & 15;
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (!c)
            err(2);
          if (sym < 256)
            buf[bt++] = sym;
          else if (sym == 256) {
            lpos = pos, lm = null;
            break;
          } else {
            var add = sym - 254;
            if (sym > 264) {
              var i = sym - 257, b = fleb[i];
              add = bits(dat, pos, (1 << b) - 1) + fl[i];
              pos += b;
            }
            var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
            if (!d)
              err(3);
            pos += d & 15;
            var dt = fd[dsym];
            if (dsym > 3) {
              var b = fdeb[dsym];
              dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
            }
            if (pos > tbts) {
              if (noSt)
                err(0);
              break;
            }
            if (resize)
              cbuf(bt + 131072);
            var end = bt + add;
            if (bt < dt) {
              var shift = dl - dt, dend = Math.min(dt, end);
              if (shift + bt < 0)
                err(3);
              for (; bt < dend; ++bt)
                buf[bt] = dict[shift + bt];
            }
            for (; bt < end; ++bt)
              buf[bt] = buf[bt - dt];
          }
        }
        st.l = lm, st.p = lpos, st.b = bt, st.f = final;
        if (lm)
          final = 1, st.m = lbt, st.d = dm, st.n = dbt;
      } while (!final);
      return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
    };
    wbits = function(d, p, v) {
      v <<= p & 7;
      var o = p / 8 | 0;
      d[o] |= v;
      d[o + 1] |= v >> 8;
    };
    wbits16 = function(d, p, v) {
      v <<= p & 7;
      var o = p / 8 | 0;
      d[o] |= v;
      d[o + 1] |= v >> 8;
      d[o + 2] |= v >> 16;
    };
    hTree = function(d, mb) {
      var t = [];
      for (var i = 0; i < d.length; ++i) {
        if (d[i])
          t.push({ s: i, f: d[i] });
      }
      var s = t.length;
      var t2 = t.slice();
      if (!s)
        return { t: et, l: 0 };
      if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return { t: v, l: 1 };
      }
      t.sort(function(a, b) {
        return a.f - b.f;
      });
      t.push({ s: -1, f: 25001 });
      var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
      t[0] = { s: -1, f: l.f + r.f, l, r };
      while (i1 != s - 1) {
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = { s: -1, f: l.f + r.f, l, r };
      }
      var maxSym = t2[0].s;
      for (var i = 1; i < s; ++i) {
        if (t2[i].s > maxSym)
          maxSym = t2[i].s;
      }
      var tr = new u16(maxSym + 1);
      var mbt = ln(t[i1 - 1], tr, 0);
      if (mbt > mb) {
        var i = 0, dt = 0;
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
          return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for (; i < s; ++i) {
          var i2_1 = t2[i].s;
          if (tr[i2_1] > mb) {
            dt += cst - (1 << mbt - tr[i2_1]);
            tr[i2_1] = mb;
          } else
            break;
        }
        dt >>= lft;
        while (dt > 0) {
          var i2_2 = t2[i].s;
          if (tr[i2_2] < mb)
            dt -= 1 << mb - tr[i2_2]++ - 1;
          else
            ++i;
        }
        for (; i >= 0 && dt; --i) {
          var i2_3 = t2[i].s;
          if (tr[i2_3] == mb) {
            --tr[i2_3];
            ++dt;
          }
        }
        mbt = mb;
      }
      return { t: new u8(tr), l: mbt };
    };
    ln = function(n, l, d) {
      return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
    };
    lc = function(c) {
      var s = c.length;
      while (s && !c[--s])
        ;
      var cl = new u16(++s);
      var cli = 0, cln = c[0], cls = 1;
      var w = function(v) {
        cl[cli++] = v;
      };
      for (var i = 1; i <= s; ++i) {
        if (c[i] == cln && i != s)
          ++cls;
        else {
          if (!cln && cls > 2) {
            for (; cls > 138; cls -= 138)
              w(32754);
            if (cls > 2) {
              w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
              cls = 0;
            }
          } else if (cls > 3) {
            w(cln), --cls;
            for (; cls > 6; cls -= 6)
              w(8304);
            if (cls > 2)
              w(cls - 3 << 5 | 8208), cls = 0;
          }
          while (cls--)
            w(cln);
          cls = 1;
          cln = c[i];
        }
      }
      return { c: cl.subarray(0, cli), n: s };
    };
    clen = function(cf, cl) {
      var l = 0;
      for (var i = 0; i < cl.length; ++i)
        l += cf[i] * cl[i];
      return l;
    };
    wfblk = function(out, pos, dat) {
      var s = dat.length;
      var o = shft(pos + 2);
      out[o] = s & 255;
      out[o + 1] = s >> 8;
      out[o + 2] = out[o] ^ 255;
      out[o + 3] = out[o + 1] ^ 255;
      for (var i = 0; i < s; ++i)
        out[o + i + 4] = dat[i];
      return (o + 4 + s) * 8;
    };
    wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
      wbits(out, p++, final);
      ++lf[256];
      var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
      var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
      var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
      var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
      var lcfreq = new u16(19);
      for (var i = 0; i < lclt.length; ++i)
        ++lcfreq[lclt[i] & 31];
      for (var i = 0; i < lcdt.length; ++i)
        ++lcfreq[lcdt[i] & 31];
      var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
      var nlcc = 19;
      for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
      var flen = bl + 5 << 3;
      var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
      var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
      if (bs >= 0 && flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
      var lm, ll, dm, dl;
      wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
      if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i = 0; i < nlcc; ++i)
          wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
          var clct = lcts[it];
          for (var i = 0; i < clct.length; ++i) {
            var len = clct[i] & 31;
            wbits(out, p, llm[len]), p += lct[len];
            if (len > 15)
              wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
          }
        }
      } else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
      }
      for (var i = 0; i < li; ++i) {
        var sym = syms[i];
        if (sym > 255) {
          var len = sym >> 18 & 31;
          wbits16(out, p, lm[len + 257]), p += ll[len + 257];
          if (len > 7)
            wbits(out, p, sym >> 23 & 31), p += fleb[len];
          var dst = sym & 31;
          wbits16(out, p, dm[dst]), p += dl[dst];
          if (dst > 3)
            wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
        } else {
          wbits16(out, p, lm[sym]), p += ll[sym];
        }
      }
      wbits16(out, p, lm[256]);
      return p + ll[256];
    };
    deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
    et = /* @__PURE__ */ new u8(0);
    dflt = function(dat, lvl, plvl, pre, post, st) {
      var s = st.z || dat.length;
      var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
      var w = o.subarray(pre, o.length - post);
      var lst = st.l;
      var pos = (st.r || 0) & 7;
      if (lvl) {
        if (pos)
          w[0] = st.r >> 3;
        var opt = deo[lvl - 1];
        var n = opt >> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i2) {
          return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
        };
        var syms = new i32(25e3);
        var lf = new u16(288), df = new u16(32);
        var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
        for (; i + 2 < s; ++i) {
          var hv = hsh(i);
          var imod = i & 32767, pimod = head[hv];
          prev[imod] = pimod;
          head[hv] = imod;
          if (wi <= i) {
            var rem = s - i;
            if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
              pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
              li = lc_1 = eb = 0, bs = i;
              for (var j = 0; j < 286; ++j)
                lf[j] = 0;
              for (var j = 0; j < 30; ++j)
                df[j] = 0;
            }
            var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
            if (rem > 2 && hv == hsh(i - dif)) {
              var maxn = Math.min(n, rem) - 1;
              var maxd = Math.min(32767, i);
              var ml = Math.min(258, rem);
              while (dif <= maxd && --ch_1 && imod != pimod) {
                if (dat[i + l] == dat[i + l - dif]) {
                  var nl = 0;
                  for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                    ;
                  if (nl > l) {
                    l = nl, d = dif;
                    if (nl > maxn)
                      break;
                    var mmd = Math.min(dif, nl - 2);
                    var md = 0;
                    for (var j = 0; j < mmd; ++j) {
                      var ti = i - dif + j & 32767;
                      var pti = prev[ti];
                      var cd = ti - pti & 32767;
                      if (cd > md)
                        md = cd, pimod = ti;
                    }
                  }
                }
                imod = pimod, pimod = prev[imod];
                dif += imod - pimod & 32767;
              }
            }
            if (d) {
              syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
              var lin = revfl[l] & 31, din = revfd[d] & 31;
              eb += fleb[lin] + fdeb[din];
              ++lf[257 + lin];
              ++df[din];
              wi = i + l;
              ++lc_1;
            } else {
              syms[li++] = dat[i];
              ++lf[dat[i]];
            }
          }
        }
        for (i = Math.max(i, wi); i < s; ++i) {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        if (!lst) {
          st.r = pos & 7 | w[pos / 8 | 0] << 3;
          pos -= 7;
          st.h = head, st.p = prev, st.i = i, st.w = wi;
        }
      } else {
        for (var i = st.w || 0; i < s + lst; i += 65535) {
          var e = i + 65535;
          if (e >= s) {
            w[pos / 8 | 0] = lst;
            e = s;
          }
          pos = wfblk(w, pos + 1, dat.subarray(i, e));
        }
        st.i = s;
      }
      return slc(o, 0, pre + shft(pos) + post);
    };
    crct = /* @__PURE__ */ (function() {
      var t = new Int32Array(256);
      for (var i = 0; i < 256; ++i) {
        var c = i, k = 9;
        while (--k)
          c = (c & 1 && -306674912) ^ c >>> 1;
        t[i] = c;
      }
      return t;
    })();
    crc = function() {
      var c = -1;
      return {
        p: function(d) {
          var cr = c;
          for (var i = 0; i < d.length; ++i)
            cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
          c = cr;
        },
        d: function() {
          return ~c;
        }
      };
    };
    dopt = function(dat, opt, pre, post, st) {
      if (!st) {
        st = { l: 1 };
        if (opt.dictionary) {
          var dict = opt.dictionary.subarray(-32768);
          var newDat = new u8(dict.length + dat.length);
          newDat.set(dict);
          newDat.set(dat, dict.length);
          dat = newDat;
          st.w = dict.length;
        }
      }
      return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
    };
    mrg = function(a, b) {
      var o = {};
      for (var k in a)
        o[k] = a[k];
      for (var k in b)
        o[k] = b[k];
      return o;
    };
    wbytes = function(d, b, v) {
      for (; v; ++b)
        d[b] = v, v >>>= 8;
    };
    Inflate = /* @__PURE__ */ (function() {
      function Inflate2(opts, cb) {
        if (typeof opts == "function")
          cb = opts, opts = {};
        this.ondata = cb;
        var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
        this.s = { i: 0, b: dict ? dict.length : 0 };
        this.o = new u8(32768);
        this.p = new u8(0);
        if (dict)
          this.o.set(dict);
      }
      Inflate2.prototype.e = function(c) {
        if (!this.ondata)
          err(5);
        if (this.d)
          err(4);
        if (!this.p.length)
          this.p = c;
        else if (c.length) {
          var n = new u8(this.p.length + c.length);
          n.set(this.p), n.set(c, this.p.length), this.p = n;
        }
      };
      Inflate2.prototype.c = function(final) {
        this.s.i = +(this.d = final || false);
        var bts = this.s.b;
        var dt = inflt(this.p, this.s, this.o);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
      };
      Inflate2.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
      };
      return Inflate2;
    })();
    fltn = function(d, p, t, o) {
      for (var k in d) {
        var val = d[k], n = p + k, op = o;
        if (Array.isArray(val))
          op = mrg(o, val[1]), val = val[0];
        if (ArrayBuffer.isView(val))
          t[n] = [val, op];
        else {
          t[n += "/"] = [new u8(0), op];
          fltn(val, n, t, o);
        }
      }
    };
    te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
    td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
    tds = 0;
    try {
      td.decode(et, { stream: true });
      tds = 1;
    } catch (e) {
    }
    exfl = function(ex) {
      var le = 0;
      if (ex) {
        for (var k in ex) {
          var l = ex[k].length;
          if (l > 65535)
            err(9);
          le += l + 4;
        }
      }
      return le;
    };
    wzh = function(d, b, f, fn, u, c, ce, co) {
      var fl2 = fn.length, ex = f.extra, col = co && co.length;
      var exl = exfl(ex);
      wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
      if (ce != null)
        d[b++] = 20, d[b++] = f.os;
      d[b] = 20, b += 2;
      d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
      d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
      var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
      if (y < 0 || y > 119)
        err(10);
      wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
      if (c != -1) {
        wbytes(d, b, f.crc);
        wbytes(d, b + 4, c < 0 ? -c - 2 : c);
        wbytes(d, b + 8, f.size);
      }
      wbytes(d, b + 12, fl2);
      wbytes(d, b + 14, exl), b += 16;
      if (ce != null) {
        wbytes(d, b, col);
        wbytes(d, b + 6, f.attrs);
        wbytes(d, b + 10, ce), b += 14;
      }
      d.set(fn, b);
      b += fl2;
      if (exl) {
        for (var k in ex) {
          var exf = ex[k], l = exf.length;
          wbytes(d, b, +k);
          wbytes(d, b + 2, l);
          d.set(exf, b + 4), b += 4 + l;
        }
      }
      if (col)
        d.set(co, b), b += col;
      return b;
    };
    wzf = function(o, b, c, d, e) {
      wbytes(o, b, 101010256);
      wbytes(o, b + 8, c);
      wbytes(o, b + 10, c);
      wbytes(o, b + 12, d);
      wbytes(o, b + 16, e);
    };
  }
});

// shared/meme-container.mjs
var meme_container_exports = {};
__export(meme_container_exports, {
  MAX_ASSET_BYTES: () => MAX_ASSET_BYTES,
  MAX_MANIFEST_BYTES: () => MAX_MANIFEST_BYTES,
  MAX_MEME_BYTES: () => MAX_MEME_BYTES,
  concat: () => concat,
  crc32: () => crc32,
  embedMeme: () => embedMeme,
  extractMeme: () => extractMeme,
  isPng: () => isPng,
  packMeme: () => packMeme,
  text: () => text,
  unpackMeme: () => unpackMeme,
  utf8: () => utf8
});
function concat(parts) {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let at = 0;
  for (const part of parts) {
    out.set(part, at);
    at += part.length;
  }
  return out;
}
function crc32(bytes) {
  let n = 4294967295;
  for (const byte of bytes) n = table[(n ^ byte) & 255] ^ n >>> 8;
  return (n ^ 4294967295) >>> 0;
}
function packMeme(files) {
  const entries = Object.entries(files);
  if (entries.length > 16) fail();
  for (const [name, bytes] of entries) if (!validName(name) || bytes.length > (name === "manifest.json" ? MAX_MANIFEST_BYTES : MAX_ASSET_BYTES)) fail();
  const result = zipSync(Object.fromEntries(entries.map(([name, bytes]) => [name, [bytes, { level: name === "manifest.json" ? 6 : 0 }]])));
  if (result.length > MAX_MEME_BYTES) throw Error("This meme is too large. Use smaller images.");
  return result;
}
function inflate(bytes, limit) {
  const parts = [];
  let length = 0, done = false;
  const stream = new Inflate((chunk, final) => {
    length += chunk.length;
    if (length > limit) fail();
    parts.push(chunk);
    done = final;
  });
  for (let at = 0; at < bytes.length; at += 512) stream.push(bytes.subarray(at, Math.min(at + 512, bytes.length)), at + 512 >= bytes.length);
  if (!done) fail();
  return concat(parts);
}
function unpackMeme(bytes) {
  if (!(bytes instanceof Uint8Array) || bytes.length > MAX_MEME_BYTES || bytes.length < 22) fail();
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length), u162 = (at2) => view.getUint16(at2, true), u32 = (at2) => view.getUint32(at2, true);
  const end = bytes.length - 22;
  if (u32(end) !== 101010256 || u162(end + 4) || u162(end + 6) || u162(end + 20)) fail();
  const count = u162(end + 10), start = u32(end + 16);
  if (!count || count > 16 || u162(end + 8) !== count || start + u32(end + 12) !== end) fail();
  let at = start, total = 0;
  const files = /* @__PURE__ */ Object.create(null), ranges = [];
  for (let i = 0; i < count; i++) {
    if (at + 46 > end || u32(at) !== 33639248) fail();
    const flags = u162(at + 8), method = u162(at + 10), crc2 = u32(at + 16), size = u32(at + 20), length = u32(at + 24), nl = u162(at + 28), el = u162(at + 30), cl = u162(at + 32), local = u32(at + 42);
    if (flags & ~2048 || ![0, 8].includes(method) || u162(at + 34) || at + 46 + nl + el + cl > end) fail();
    const name = text(bytes.subarray(at + 46, at + 46 + nl)), limit = name === "manifest.json" ? MAX_MANIFEST_BYTES : MAX_ASSET_BYTES;
    if (!validName(name) || Object.hasOwn(files, name) || length > limit || size > MAX_ASSET_BYTES || local + 30 > start || u32(local) !== 67324752) fail();
    if (u162(local + 6) !== flags || u162(local + 8) !== method || u32(local + 14) !== crc2 || u32(local + 18) !== size || u32(local + 22) !== length) fail();
    const lnl = u162(local + 26), lel = u162(local + 28), data = local + 30 + lnl + lel, last = data + size;
    if (last > start || text(bytes.subarray(local + 30, local + 30 + lnl)) !== name || ranges.some(([a, b]) => local < b && last > a)) fail();
    ranges.push([local, last]);
    const content = method === 0 ? bytes.slice(data, last) : inflate(bytes.subarray(data, last), limit);
    if (content.length !== length || crc32(content) !== crc2) fail();
    total += length;
    if (total > MAX_MEME_BYTES) fail();
    files[name] = content;
    at += 46 + nl + el + cl;
  }
  if (at !== end || !files["manifest.json"]) fail();
  return files;
}
function pngChunks(bytes) {
  if (!isPng(bytes) || bytes.length > MAX_MEME_BYTES) fail();
  const chunks = [];
  let at = 8;
  while (at < bytes.length) {
    if (at + 12 > bytes.length) fail();
    const view = new DataView(bytes.buffer, bytes.byteOffset + at), length = view.getUint32(0), end = at + 12 + length;
    if (end > bytes.length) fail();
    const kind = text(bytes.subarray(at + 4, at + 8));
    if (crc32(bytes.subarray(at + 4, end - 4)) !== view.getUint32(length + 8)) fail();
    chunks.push({ kind, bytes: bytes.subarray(at, end), data: bytes.subarray(at + 8, end - 4) });
    at = end;
    if (kind === "IEND") {
      if (at !== bytes.length) fail();
      return chunks;
    }
  }
  fail();
}
function pngChunk(kind, data) {
  const out = new Uint8Array(data.length + 12), view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  out.set(utf8(kind), 4);
  out.set(data, 8);
  view.setUint32(data.length + 8, crc32(out.subarray(4, data.length + 8)));
  return out;
}
function embedMeme(png, archive) {
  const chunks = pngChunks(png);
  const payload = pngChunk("meME", concat([magic, archive]));
  const out = concat([pngSignature, ...chunks.filter((chunk) => chunk.kind !== "meME" && chunk.kind !== "IEND").map((chunk) => chunk.bytes), payload, chunks.at(-1).bytes]);
  if (out.length > MAX_MEME_BYTES) throw Error("This editable image is too large. Save a .meme file instead.");
  return out;
}
function extractMeme(png) {
  if (!isPng(png)) return null;
  const chunks = pngChunks(png), payloads = chunks.filter((chunk) => chunk.kind === "meME");
  if (!payloads.length) return null;
  if (payloads.length !== 1 || !magic.every((byte, i) => payloads[0].data[i] === byte)) fail();
  return { archive: payloads[0].data.subarray(magic.length), preview: concat([pngSignature, ...chunks.filter((chunk) => chunk.kind !== "meME").map((chunk) => chunk.bytes)]) };
}
var MAX_MEME_BYTES, MAX_ASSET_BYTES, MAX_MANIFEST_BYTES, enc, dec, fail, utf8, text, table, validName, pngSignature, magic, isPng;
var init_meme_container = __esm({
  "shared/meme-container.mjs"() {
    init_esm();
    MAX_MEME_BYTES = 32 * 1024 * 1024;
    MAX_ASSET_BYTES = 12 * 1024 * 1024;
    MAX_MANIFEST_BYTES = 256 * 1024;
    enc = new TextEncoder();
    dec = new TextDecoder("utf-8", { fatal: true });
    fail = () => {
      throw Error("This editable meme is damaged or unsupported. Try exporting it again.");
    };
    utf8 = (value) => enc.encode(value);
    text = (bytes) => dec.decode(bytes);
    table = Uint32Array.from({ length: 256 }, (_, n) => {
      for (let i = 0; i < 8; i++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      return n >>> 0;
    });
    validName = (name) => name === "manifest.json" || /^assets\/[a-f0-9]{64}\.(png|webp|jpg|ttf|txt)$/.test(name);
    pngSignature = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
    magic = utf8("MechaMeme\0v1\0");
    isPng = (bytes) => pngSignature.every((byte, i) => bytes[i] === byte);
  }
});

// shared/meme-document.mjs
var meme_document_exports = {};
__export(meme_document_exports, {
  MEME_FORMAT: () => MEME_FORMAT,
  MEME_VERSION: () => MEME_VERSION,
  createMemeDocument: () => createMemeDocument,
  decodeMemeDocument: () => decodeMemeDocument,
  encodeMemeDocument: () => encodeMemeDocument,
  normalizeMemeManifest: () => normalizeMemeManifest,
  sha256: () => sha256
});
async function sha256(bytes) {
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes)), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
function normalizeMemeManifest(value) {
  if (!value || value.format !== MEME_FORMAT) fail2("This file is not a supported meme document.");
  if (value.version !== MEME_VERSION) fail2("This meme uses a newer document format. Update MechaMeme to open it.");
  if (value.renderer !== "mechameme/oswald-v1") fail2("This meme uses an unsupported caption renderer.");
  if (!Array.isArray(value.assets) || !value.assets.length || value.assets.length > 10) fail2();
  const assets = value.assets.map((asset) => {
    if (!asset || !/^[a-f0-9]{64}$/.test(asset.sha256) || !["image/png", "image/webp", "image/jpeg", "font/ttf", "text/plain"].includes(asset.mediaType) || asset.path !== `assets/${asset.sha256}.${{ "image/png": "png", "image/webp": "webp", "image/jpeg": "jpg", "font/ttf": "ttf", "text/plain": "txt" }[asset.mediaType]}`) fail2();
    if (asset.mediaType.startsWith("image/") && (!Number.isInteger(asset.width) || !Number.isInteger(asset.height) || asset.width < 1 || asset.height < 1 || asset.width * asset.height > 4e7)) fail2();
    return { path: asset.path, sha256: asset.sha256, mediaType: asset.mediaType, ...asset.mediaType.startsWith("image/") ? { width: asset.width, height: asset.height } : {} };
  });
  if (new Set(assets.map((asset) => asset.path)).size !== assets.length) fail2();
  const imageReference = (path) => {
    if (!assets.some((asset) => asset.path === path && asset.mediaType.startsWith("image/"))) fail2();
    return path;
  };
  const reference = (path) => {
    if (!assets.some((asset) => asset.path === path)) fail2();
    return path;
  };
  const base = reference(value.base), preview = reference(value.preview), font = reference(value.font), fontLicense = reference(value.fontLicense);
  if (![base, preview].every((path) => assets.find((asset) => asset.path === path).mediaType.startsWith("image/")) || assets.find((asset) => asset.path === font).mediaType !== "font/ttf" || assets.find((asset) => asset.path === fontLicense).mediaType !== "text/plain") fail2();
  let template = null;
  if (value.template) {
    const raw = value.template;
    if (!Array.isArray(raw.examples)) fail2();
    if (raw.examples.some((example) => example && Object.hasOwn(example, "image"))) fail2();
    const normalized = normalizeTemplate({ ...raw, thumbnail: placeholder, source: "", examples: raw.examples.map((example) => ({ ...example, image: example.imageAsset ? placeholder : void 0 })) });
    const { thumbnail, source, custom, ...fields } = normalized;
    template = { ...fields, examples: fields.examples.map((example, index) => {
      const { image, ...fields2 } = example;
      return { ...fields2, ...raw.examples[index]?.imageAsset ? { imageAsset: imageReference(raw.examples[index].imageAsset) } : {} };
    }) };
  }
  const provenance = normalizeMemeProvenance(value.provenance || {});
  return { format: MEME_FORMAT, version: MEME_VERSION, renderer: "mechameme/oswald-v1", base, preview, font, fontLicense, assets, caption: templateCaption(value.caption || {}), imageDescription: short(value.imageDescription || "", 2e3), template, provenance };
}
async function createMemeDocument({ base, preview, caption, template, imageDescription = "", provenance, font, fontLicense }) {
  const files = /* @__PURE__ */ Object.create(null), assets = [];
  async function add(asset) {
    if (!asset || asset.bytes.length > MAX_ASSET_BYTES) fail2("This meme image is too large. Use a smaller image.");
    const hash = await sha256(asset.bytes), ext = { "image/png": "png", "image/webp": "webp", "image/jpeg": "jpg", "font/ttf": "ttf", "text/plain": "txt" }[asset.mediaType];
    if (!ext) fail2();
    const path = `assets/${hash}.${ext}`;
    if (!files[path]) {
      files[path] = asset.bytes;
      assets.push({ path, sha256: hash, mediaType: asset.mediaType, width: asset.width, height: asset.height });
    }
    return path;
  }
  const basePath = await add(base), previewPath = await add(preview), fontPath = await add(font), fontLicensePath = await add(fontLicense);
  let recipe = null;
  if (template) {
    const { thumbnail, source, custom, ...fields } = template;
    recipe = { ...fields, examples: await Promise.all((template.examples || []).map(async (example) => {
      const { image, ...fields2 } = example;
      return { ...fields2, ...image ? { imageAsset: await add(image) } : {} };
    })) };
  }
  const manifest = normalizeMemeManifest({ format: MEME_FORMAT, version: MEME_VERSION, renderer: "mechameme/oswald-v1", assets: assets.sort((a, b) => a.path.localeCompare(b.path)), base: basePath, preview: previewPath, font: fontPath, fontLicense: fontLicensePath, caption, template: recipe, imageDescription, provenance });
  files["manifest.json"] = utf8(JSON.stringify(manifest));
  if (files["manifest.json"].length > MAX_MANIFEST_BYTES) fail2();
  return { manifest, files, id: await sha256(files["manifest.json"]) };
}
function encodeMemeDocument(document, { embedded = false } = {}) {
  const files = { ...document.files };
  if (embedded) delete files[document.manifest.preview];
  return packMeme(files);
}
async function decodeMemeDocument(archive, { preview } = {}) {
  const files = unpackMeme(archive);
  let raw;
  try {
    raw = JSON.parse(text(files["manifest.json"]));
  } catch {
    fail2();
  }
  const manifest = normalizeMemeManifest(raw);
  if (preview) {
    if (files[manifest.preview]) fail2();
    files[manifest.preview] = preview;
  }
  for (const asset of manifest.assets) {
    const bytes = files[asset.path];
    if (!bytes || await sha256(bytes) !== asset.sha256) fail2("This meme contains a missing or changed image. Export a fresh copy.");
    if (asset.mediaType.startsWith("image/")) {
      const info = memeImageInfo(bytes);
      if (info.width !== asset.width || info.height !== asset.height || info.mediaType !== asset.mediaType) fail2();
    }
  }
  if (Object.keys(files).some((path) => path !== "manifest.json" && !manifest.assets.some((asset) => asset.path === path))) fail2();
  return { manifest, files, id: await sha256(files["manifest.json"]) };
}
var MEME_FORMAT, MEME_VERSION, placeholder, fail2, short;
var init_meme_document = __esm({
  "shared/meme-document.mjs"() {
    init_meme_provenance();
    init_meme_image();
    init_template_catalog();
    init_template_caption();
    init_meme_container();
    MEME_FORMAT = "org.rykersoft.meme";
    MEME_VERSION = 1;
    placeholder = "data:image/png;base64,YQ==";
    fail2 = (message) => {
      throw Error(message || "This editable meme is damaged. Try exporting it again.");
    };
    short = (value, limit) => {
      if (typeof value !== "string" || value.length > limit) fail2();
      return value;
    };
  }
});

// scripts/meme-file.mjs
init_meme_document();
init_meme_container();
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
async function boundedRead(path) {
  if ((await stat(path)).size > MAX_MEME_BYTES) throw Error("File exceeds 32 MB.");
  return new Uint8Array(await readFile(path));
}
async function readDocument(path) {
  const bytes = await boundedRead(path), embedded = extractMeme(bytes);
  return decodeMemeDocument(embedded?.archive || bytes, embedded ? { preview: embedded.preview } : {});
}
try {
  const [action, input, output] = process.argv.slice(2);
  if (!input || !["inspect", "unpack", "pack", "to-meme", "to-png"].includes(action) || action !== "inspect" && !output) throw Error("Usage: node scripts/meme-file.mjs inspect FILE | unpack FILE NEW_DIRECTORY | pack DIRECTORY NEW_FILE.meme | to-meme FILE NEW_FILE.meme | to-png FILE NEW_FILE.png");
  let document;
  if (action === "pack") {
    const directory = resolve(input), manifestBytes = await boundedRead(join(directory, "manifest.json"));
    const { normalizeMemeManifest: normalizeMemeManifest2 } = await Promise.resolve().then(() => (init_meme_document(), meme_document_exports));
    const manifest = normalizeMemeManifest2(JSON.parse(new TextDecoder().decode(manifestBytes)));
    const files = { "manifest.json": manifestBytes };
    for (const asset of manifest.assets) files[asset.path] = await boundedRead(join(directory, asset.path));
    const { packMeme: packMeme2 } = await Promise.resolve().then(() => (init_meme_container(), meme_container_exports));
    document = await decodeMemeDocument(packMeme2(files));
  } else document = await readDocument(input);
  if (action === "inspect") process.stdout.write(JSON.stringify({ documentId: document.id, ...document.manifest }, null, 2) + "\n");
  else if (action === "unpack") {
    await mkdir(output);
    await mkdir(join(output, "assets"));
    for (const [name, bytes] of Object.entries(document.files)) await writeFile(join(output, name), bytes, { flag: "wx" });
  } else {
    const bytes = action === "to-png" ? embedMeme(document.files[document.manifest.preview], encodeMemeDocument(document, { embedded: true })) : encodeMemeDocument(document);
    await writeFile(output, bytes, { flag: "wx" });
  }
} catch (error) {
  process.stderr.write(error.message + "\n");
  process.exitCode = 1;
}
