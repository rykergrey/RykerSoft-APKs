# One Word Showdown

Select **Match Options → Local Pass & Play → One Word Showdown**, or choose the
One Word Showdown / Word Grid Showdown featured preset. The default is three
rounds and 30 seconds per player; setup supports 1–20 rounds and the existing
turn-duration choices.

## Round flow

1. Each player privately submits one valid word. That submission immediately
   seals their turn. Invalid words can be retried; a timeout or pass records no
   word. Strict deducts five seconds; Super Strict ends only that player's turn.
2. The first round discovers the player roster through the existing handoff
   pattern. Later rounds use that same roster and initials.
3. Once everyone has played, gather around the screen and start the reveal.
   Each word's path lights up on its submitted board arrangement, followed by
   its score. The reveal can be paused, advanced manually, or skipped.
4. The highest word score wins the round. Equal top scores share a win. Players
   who do not win receive a loss; a round with no valid words awards no wins.
5. The match winner is determined solely by rounds won. Equal win counts share
   the match; accumulated word points never break ties. All selected rounds are
   played, even if one player takes an early lead.

Words, score feedback, word lists, and the outgoing board are removed during
handoff. No future word or score is mounted in the reveal intro. Earlier rounds'
words are unavailable to everyone in later rounds; players may independently
choose the same word within a round.

## Persistent shared board

The initial seed and board persist across the match. Everyone receives the same
round-start board. Board changes apply **once after the round's reveal**, including
when the reveal is skipped. They carry forward into every player's next turn.

| Modifier | Showdown behavior |
| --- | --- |
| Standard, Tap Out | The letter layout stays the same across rounds. Tap Out still permits non-adjacent letters. |
| Letter Boost, Letter Values, Color Bonus | Normal word scoring, concealed until the reveal. |
| Unique Finds | Words chosen by multiple players cancel for every finder that round. If no eligible word remains, no round win is awarded. |
| Best Word | Compatible; each turn already contains one word. The match still ranks by round wins. |
| Connected Words | Unavailable because each turn contains only one word. |
| Strict, Super Strict | Normal invalid-word rules apply to the individual turn. |
| Dizzy, Boggled | Normal rotation/readability rules during each private turn. |
| Gravity | All tiles used by any player are removed together, with shared tiles removed once. Spawn counters persist across rounds. |
| Reroll | All tiles used by any player reroll once; tile versions persist. |
| Full Reroll | One deterministic board reroll per round containing a valid word. |
| Hide & Seek | All used letters stay hidden on the next round's board. |
| Word Grid | Players rearrange privately. The winner's arrangement carries forward; tied winners rotate which arrangement supplies the next board, without changing the tie result. |
| Bounty Hunt | Unavailable because it discloses available words. |
| Turf War | Unavailable because its territory objective needs repeated turns. |
| Endless, Combo | Unavailable because a turn has a fixed clock and one word. |
| First Claim, Blind Mode, Sabotage | Live-only modifiers are unavailable. Showdown already conceals opponents' words and scores. |

Existing modifier-to-modifier restrictions still apply. Saved configurations,
imports, randomization, presets, and the engine normalize Showdown compatibility.
Classic local play and online matches retain their existing flow.

## Verification

`npm run verify:showdown` exercises the actual React game hook with a controlled
clock, real dictionary, and DOM rendering. It checks round-based ranking, shared
wins, roster continuity, score secrecy, timeout and double-submission handling,
board persistence, Word Grid swaps and bonuses, modifier changes, reveal
controls, and classic-mode regression.
