# Health analysis

Analysis now starts with a health dashboard spanning food, supplements, exercise, measurements, lifestyle, and notes. Day, Monday-based week, calendar month, calendar year, all available history, and inclusive custom ranges share one calculation engine. Journal week/month previews use the same engine.

## Explore

- **Overview:** interactive metric trends, current references, previous-period comparisons, calculated observations, and day/domain logging coverage. Select a date to return to the journal.
- **Nutrition:** macro composition, all 16 nutrients, current aim/minimum/maximum/range rules, food and supplement contributors, hydration, and local food-log timing.
- **Training & body:** exercise time, distance, repetitions, sets, session counts, estimated burn, weight, other measurements, and exercise-specific numeric fields. Compatible quantities are converted; rest intervals are excluded.
- **Habits & journal:** supplement/lifestyle frequency, numeric ratings and habits, select/multiselect/boolean/short-text distributions, and dated notes.
- **Relationships:** a user-selected pair of numeric metrics, same-day or later-day alignment, scatter plot, sample size, and descriptive Pearson correlation. A small cross-domain scan suggests pairs to inspect.
- **Food explorer:** the existing nutrition report controls, per-serving/per-calorie/per-mass comparisons, nutrient filters, favorites, staging, and report-specific CSV.
- **Health coach:** explicit in-app analysis with the configured AI model, focused nutrition/training/pattern reviews, a portable coach brief, and a readable Markdown report.

## Meaning of the numbers

`services/reporting/healthAnalytics.ts` is the shared source for charts, exports, and assistant tools. It uses saved log nutrient amounts rather than recomputing recipes from today's library. Domain snapshots take precedence over library metadata. Duplicate log IDs are deduplicated; invalid timestamps, skipped entries, and future records are excluded. Historical records with no recoverable domain mark affected daily totals incomplete.

Unlogged days are **unknown**, never zero. Numeric zero is a valid observation. A daily nutrient value is complete only when all relevant recorded entries have known values. A logged day does not prove that every meal or activity was recorded. Averages use complete recorded days, with denominators shown; unknown contributions keep totals incomplete. Body measurements use the latest compatible reading per day. Ratings and booleans use their documented aggregation, and unrelated item scales are kept separate.

Current goal settings are reference values, not a reconstruction of historical goals. Aim comparisons use an explicitly displayed ±10% band. Minimums, maximums, and ranges use literal rule boundaries. Adaptive references are available only with confirmed goals and a recent recorded weight; explicit manual targets and rules remain available independently. Intake minus logged exercise is never labeled an energy deficit.

Previous week/month/year ranges use the preceding calendar period; ongoing periods compare equal elapsed portions, bounded by the previous period's length. Custom/all-history comparisons shift by the inclusive range length. Sparse coverage can make those averages hard to compare even with matching dates.

Correlation requires at least eight complete date pairs and variation in both metrics. Missing values are excluded; positive lag compares the first metric with the second metric on a later local date. Correlations describe this diary, not causation, significance, or validated prediction. Repeated comparisons, shared logging patterns, timing, and other factors can produce apparent relationships.

## Coaching and data size

The existing assistant gains read-only `healthReport` and `metricCorrelation` tools. `healthReport` returns bounded summaries with paginated metrics and optional details for at most six metrics over 31 days. Tool requests cover up to 3,660 local days; older history can be examined in subranges. Correlation uses the full requested sample while limiting returned scatter points. Coach briefs summarize computed values, coverage, saved constraints, selected notes, and cautious interpretations without sending the whole journal on each request.

Statistics, filters, and exports invoke no AI. An explicit coach action opens the existing assistant workflow; live model quality and credentials are separate from deterministic validation. External handoffs are initiated by the user and retain clipboard/manual-copy fallback.

CSV exports contain every daily metric with units and aggregation labels. Blank cells mean missing values; numeric zero and negative numeric observations retain their values. Text cells are guarded against spreadsheet formula interpretation. Markdown exports provide an understandable summary and coverage notes.

All calculations use locally synchronized records. Reports support up to 3,660 days per range to bound memory use on phones; longer history can be explored by year or narrower custom ranges, with an explicit message rather than silent truncation. Completeness across devices cannot be verified. Historical profile, reminder, and custom-schema versions are unavailable; current schemas interpret custom fields, while deleted numeric fields without schema retain values with unknown units. Clinical interpretations and exact timing of food consumption cannot be inferred from log timestamps.

## Development verification

Run `npm run dev`, then open `/dev/analysis-preview.html` for an explicitly synthetic, six-domain fixture with no Firebase or model calls. It is a separate development entry and is not included in the production build. Unit tests cover calendar/DST boundaries, missing values, snapshots/deleted items, compatible units, target modes, exercise sessions, categories, and correlations. UI tests cover navigation, invalid custom ranges, journal drilldown, explicit coach handoffs, and exports. Browser captures exercise desktop and phone layouts.
