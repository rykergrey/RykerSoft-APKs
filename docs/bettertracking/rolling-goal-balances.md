# Rolling goal balances

The daily journal separates a practical daily goal, estimated maintenance, and persistent historical balances. **All locally available prior usable food days** remain in history. History does not reset on Monday or expire when an entry leaves a recent average.

For calories:

```
carried balance = sum(prior intake − each prior day’s base goal)
rolling allowance = selected day’s base goal − carried balance
rolling remaining = rolling allowance − selected day’s intake so far
```

For example, yesterday’s intake was 200 kcal above its base goal. Today’s full accounting allowance is 200 kcal below today’s base goal. Later logged days below their base goals reduce the balance; days at goal hold it steady. The optional forward plan is calculated separately.

With a constant 1,938 kcal base goal and exactly 40,000 kcal yesterday, the carried balance is 38,062 kcal. Today’s full allowance is **−36,124 kcal** before any new intake. Negative allowances are accounting values, not intake recommendations. They remain visible even with fixed goals and automatic pacing turned off.

## Goal versus maintenance

Daily and recent-average views compare the same intake with both the base goal and estimated maintenance. If intake is 2,200 kcal, the base goal is 2,000 and estimated maintenance is 2,500, the app shows **200 kcal above goal and 300 kcal below estimated maintenance**. Above goal does not automatically mean above maintenance.

The daily comparison describes a hypothetical finish at the current goal or the amount already logged, whichever is higher. A planner comparison describes the entered or suggested total. Unknown calorie or activity data makes the daily comparison explicitly incomplete. Recent averages compare the same usable dates; partial coverage stays visible. These estimates do not predict a specific scale-weight change.

## Protected daily nutrient goals

Each nutrient retains its historical intake-versus-base-goal balance, displayed as **Prior logs vs goals**. Nutrient history is descriptive and never becomes a daily allowance to spend or repay.

For example, yesterday’s 80 g fat against a 70 g goal remains visible as +10 g in history. Today’s 70 g daily goal remains 70 g. Yesterday’s extra protein does not reduce today’s protein minimum, and yesterday’s low sodium does not raise today’s sodium limit. Vitamins, minerals and fiber retain their daily goals as well.

Aim, minimum, maximum and range rules keep their existing daily meaning. A range retains both original boundaries. The bars and nutrient Remaining mode use today’s actual targets and known intake. Ordinary daily nutrient intake still includes meals excluded from the bank, and unknown exercise data does not erase known protein or other nutrient intake.

Optional calorie pacing retains the protein target and all explicitly configured nutrient goals. Derived fat and carbohydrate aims can follow a paced calorie target; their historical balances still compare intake against unadjusted base goals.

## Data coverage

- Only dates before the selected local calendar day contribute to carryover. Today’s unfinished log reduces remaining allowance, but does not create a below-goal offset before that day has passed.
- Missing dates, skipped entries, and dates with only supplements or exercise do not create unused food allowance. Supplements on a food-logged day do contribute their recorded nutrients.
- An unknown, negative or unavailable nutrient excludes that day from that nutrient’s accounting. Unknown exercise calories or an unresolved item type make the day’s target comparison incomplete. The original saved nutrition is not replaced by zero.
- Excluding any relevant meal or exercise entry from the bank excludes that entire day from carryover. The entry still counts as consumed or burned in ordinary daily totals.
- Logging one meal does not confirm that the full day was logged. Partial logs can understate intake. Coverage is shown alongside the balance.
- Saved item snapshots preserve deleted-library entries. Backdated additions, edits, skipped status changes and deletions recalculate subsequent allowances from the saved records; there is no separate stored debt that can become stale.

Historical base goals are reconstructed with **current profile settings** and weight records available on each day. Historical profile versions are unavailable. Changing a goal can therefore change historical balances. Exercise is counted once in each day’s adaptive goal. An adjusted allowance or paced goal is never used as a historical base goal.

## Recent averages and planning

The 3–14 day controls choose the recent completed-day window for averages and optional guidance. They do not limit the lifetime of history. The selected day remains separate, including when viewing historical dates.

Calorie plans can spread a **recent** difference across 1–365 days, independently of the recent window. Plans are previews and do not change saved goals. Suggestions apply the configured 200/350/500 kcal adjustment cap to both today and each following day. The lower planning bound also respects the app’s existing calorie floor, protein, explicit fat/carbohydrate minima or lower range boundaries, and calorie minimum/range rules. Today’s preview includes at least the intake already logged.

Daily calorie maximums and upper range boundaries also cap suggestions. If daily nutrient minima require more energy than the calorie goal or limit permits, the app flags the conflict and withholds adjustment suggestions until the goals are reviewed. These constraints preserve recorded goals; they do not establish that a particular meal plan is nutritionally complete.

The preview shows both the recent balance and the full historical balance after the planned days. A limited plan may leave a balance. Keeping the current goal remains a valid option; clearing the historical balance is not required. Old overages therefore stay visible without forcing indefinite reductions after recent days are back at goal.

An incomplete recent window that appears below goal does not justify suggesting extra intake. Explicit entered scenarios can be compared, but amounts below the planning floor or outside the pacing cap are identified as entered scenarios rather than suggestions. Blank and invalid inputs do not fabricate a plan.

Optional automatic calorie pacing remains off by default. When enabled, it uses recent usable food days, the chosen timeframe, the daily adjustment cap and nutrient-aware planning floor. Fixed calorie goals stay fixed. The mathematical calorie allowance shown beside the goal always retains the **full** history.

Profile → Rolling Goal Balances controls visibility, the recent average window and optional calorie pacing. Disabling visibility does not delete any logs.

The development fixture at `/dev/rolling-balance-preview.html` provides synthetic examples for a 20,000 g chicken entry, fat/protein history with protected daily goals, above-goal intake below maintenance, a 30-day-old overage, conflicting minima, missing history and unknown current nutrition. It does not access personal records.

The product distinctions follow the emphasis on sustainable eating and monitoring in [CDC guidance](https://www.cdc.gov/healthy-weight-growth/losing-weight/keeping-it-off.html), daily nutritional adequacy in [NIH exercise nutrition guidance](https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/), and changing energy needs in [NIDDK’s weight-planner research](https://www.niddk.nih.gov/research-funding/at-niddk/labs-branches/laboratory-biological-modeling/integrative-physiology-section/research/body-weight-planner). The feature’s effect on actual weight loss has not been established by the app’s software tests.
