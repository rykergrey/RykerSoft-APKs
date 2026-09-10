# Connected Words, Unique Finds, and Best Word

Enable these in Match Options. They are independent modifiers and can be saved
and shared in custom modes. All three work together in classic pass-and-play
and room-code online matches.

| Modifier | Solo | Pass & play | Room code |
| --- | --- | --- | --- |
| Connected Words | Yes | Classic; shared chain in Turf War | Yes |
| Unique Finds | No | Classic and One Word Showdown | Yes |
| Best Word | Yes | Classic and One Word Showdown | Yes |

## Connected Words

The first valid word can start anywhere. After submission, its physical tiles
and path stay outlined in dashed purple. The next word must start on **any tile
from that most recent valid word**, then follows the usual adjacency rules.
Submitting it replaces the purple path. This does not accumulate every past
word, nor permit starting on another tile bearing the same letter.

Longer words provide more possible starting tiles. Invalid attempts and duplicate
words preserve the last accepted path. Attempting to start elsewhere is blocked
with a hint and no Strict penalty. A new game or classic pass-and-play turn
starts a fresh chain; Turf War players continue the shared chain across turns.
Pointer, touch, and keyboard input use the same rule.

Connected Words is unavailable with Tap Out, Gravity, Reroll, Full Reroll,
Word Grid, or Bounty Hunt: these consume/change the previous tiles, rearrange
words, or require a fixed target list that may become unreachable. It is also
unavailable in One Word Showdown, where each player submits only one word.
Hide & Seek, letter scoring, rotations, clocks, and strictness remain composable.

## Unique Finds

At the end of the round, count the distinct players who found each spelling.
If at least two found it, **all finders receive zero for that word**, regardless
of its path or individual point value. Finding the same spelling in multiple
Word Grid placements yourself does not create a multiplayer duplicate.

Scores during play are explicitly provisional. Pass-and-play settles when the
last player finishes; online results settle on the server. Final results retain
every found word and show which ones cancelled. Blind Mode still conceals online
words until the round ends. Unique Finds conflicts with First Claim, Sabotage,
and Turf War because their ownership rules conflict with cancelling every finder.

In One Word Showdown, cancellation applies within the current round. If all
submitted words cancel, nobody wins that round. Previously revealed words
remain unavailable in later rounds, as in the existing Showdown rules.

## Best Word

A player's score is the highest eligible word value, or zero if there are no
eligible words. All found words remain available for comparison. Existing
letter values, boosts, color bonuses, and combo multipliers determine each
word's value. Finding a lower-value word never increases the total.

With **Unique Finds**, cancel shared words first, then choose the highest
remaining word. For example, if both players find QUARTZ for 30 points and
their next-best unique words score 12 and 9, the final scores are **12–9**.
This makes backup words useful without turning the scoring back into a sum.
Equal final scores tie; word count does not decide a winner.

In local Word Grid, breaking the best locked word falls back to the best
remaining lock. Trusted Word Grid challenges apply the maximum to the existing
server scan of the final arrangement. Best Word is unavailable with Turf War,
whose score is territory. In One Word Showdown each turn already contains one
word, and the overall match still uses round wins.

## Implementation and verification

Pure shared rules live in `functions/src/modifierRules.ts`, with local result
adaptation in `services/modifierRules.ts`. Online claims are queued in order for
Connected Words; the server privately tracks the last accepted path per player
and revalidates the chain during finalization. Solo competitive validation uses
the same rule, and sealed results retain maximum scoring on retries/publication.

- `npm run verify:linked-modifiers`: actual engine and board interaction,
  keyboard starts, retained paths, resets, scoring combinations, ties,
  Showdown cancellation/privacy, and Word Grid fallback.
- `npm run verify:showdown`: existing Showdown and classic regression checks.
- `npm run typecheck` and `npm run build`: client checks.
- In `functions`, `npm run lint` and `npm test`: trusted scoring checks.
- Firestore demo emulator: `scripts/verify-live-match-emulator.cjs` exercises
  all three together, ordering, invalid starts, retries, Blind Mode privacy,
  cancellation, and final scores. `scripts/verify-competitive-emulator.cjs`
  checks Best Word sealing, retries, publication, and challenge play.

These changes require deploying the updated Firebase Functions along with the
client before the new options work against the production online service.
