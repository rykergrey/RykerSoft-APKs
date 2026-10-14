# Health analysis

From Home, use the upper-right **Log / Stats** control. **Log** shows the selected day’s dashboard and daily entries with a daily date navigator. **Stats** opens Week on first entry and retains the chosen range when you return. Its single range control offers Day, Monday-based Week, calendar Month, calendar Year, All time and inclusive Custom dates; this control applies to both Stats tabs.

**Stats → Trends & History** contains all calculated statistics, charts, relationships, exports, the food explorer, and the selected period’s log history. It starts with nutrition and recorded weight progress, while retaining food, supplements, exercise, measurements, lifestyle, and notes. All ranges share one calculation engine.

**Stats → Analysis** contains AI coach reviews for that same selected period. Generate or refresh a review explicitly; it streams in place and saves here for later reading. Both tabs retain the same dates when switching between them. Opening a date from statistics returns to that day in Log.

## Explore

- **Overview:** interactive metric trends, current references, previous-period comparisons, calculated observations, and day/domain logging coverage. Select a date to return to the journal.
- **Nutrition:** macro composition, all 16 nutrients, current aim/minimum/maximum/range rules, food and supplement contributors, hydration, and local food-log timing.
- **Training & body:** exercise time, distance, repetitions, sets, session counts, estimated burn, weight, other measurements, and exercise-specific numeric fields. Compatible quantities are converted; rest intervals are excluded.
- **Habits & journal:** supplement/lifestyle frequency, numeric ratings and habits, select/multiselect/boolean/short-text distributions, and dated notes.
- **Relationships:** a user-selected pair of numeric metrics, same-day or later-day alignment, scatter plot, sample size, and descriptive Pearson correlation. A small cross-domain scan suggests pairs to inspect.
- **Food explorer:** the existing nutrition report controls, per-serving/per-calorie/per-mass comparisons, nutrient filters, favorites, staging, and report-specific CSV.

## Analysis: AI coach reviews

Nutrition and weight goals are the default focus, with training/recovery, patterns, and a whole-period plan also available. Generate or Refresh explicitly uses the configured reasoning model; opening the tab does not call AI. Reports show their saved timestamp, can be copied or downloaded as Markdown, and can be discussed in Chat. Existing daily, weekly, and monthly reviews retain their saved document IDs. Year, all-history, and custom reviews also persist by period.

The coach uses read-only tools in this workflow. Cancel stops a pending review, changing periods prevents stale results from appearing, and a failed save keeps the generated report available with Retry save. Source links are retained when data tools consult item evidence. An expandable external handoff copies the same focused period brief for another provider.

## Meaning of the numbers

`services/reporting/healthAnalytics.ts` is the shared source for charts, exports, and assistant tools. It uses saved log nutrient amounts rather than recomputing recipes from today's library. Domain snapshots take precedence over library metadata. Duplicate log IDs are deduplicated; invalid timestamps, skipped entries, and future records are excluded. Historical records with no recoverable domain mark affected daily totals incomplete.

Unlogged days are **unknown**, never zero. Numeric zero is a valid observation. A daily nutrient value is complete only when all relevant recorded entries have known values. A logged day does not prove that every meal or activity was recorded. Averages use complete recorded days, with denominators shown; unknown contributions keep totals incomplete. Body measurements use the latest compatible reading per day. Ratings and booleans use their documented aggregation, and unrelated item scales are kept separate.

Current goal settings are reference values, not a reconstruction of historical goals. Aim comparisons use an explicitly displayed ±10% band. Minimums, maximums, and ranges use literal rule boundaries. Adaptive references are available only with confirmed goals and a recent recorded weight; explicit manual targets and rules remain available independently. Intake minus logged exercise is never labeled an energy deficit.

Previous week/month/year ranges use the preceding calendar period; ongoing periods compare equal elapsed portions, bounded by the previous period's length. Custom/all-history comparisons shift by the inclusive range length. Sparse coverage can make those averages hard to compare even with matching dates.

Correlation requires at least eight complete date pairs and variation in both metrics. Missing values are excluded; positive lag compares the first metric with the second metric on a later local date. Correlations describe this diary, not causation, significance, or validated prediction. Repeated comparisons, shared logging patterns, timing, and other factors can produce apparent relationships.

## Coaching and data size

The existing assistant gains read-only `healthReport` and `metricCorrelation` tools. `healthReport` returns bounded summaries with paginated metrics and optional details for at most six metrics over 31 days. Tool requests cover up to 3,660 local days; older history can be examined in subranges. Correlation uses the full requested sample while limiting returned scatter points. Coach briefs summarize computed values, coverage, saved constraints, selected notes, and cautious interpretations without sending the whole journal on each request.

Statistics, filters, and exports invoke no AI. An explicit Generate or Refresh action creates an inline saved AI review; Discuss in chat opens the existing assistant workflow with that review. Live model quality and credentials are separate from deterministic validation. External handoffs are initiated by the user and retain clipboard/manual-copy fallback.

CSV exports contain every daily metric with units and aggregation labels. Blank cells mean missing values; numeric zero and negative numeric observations retain their values. Text cells are guarded against spreadsheet formula interpretation. Markdown exports provide an understandable summary and coverage notes.

All calculations use locally synchronized records. Reports support up to 3,660 days per range to bound memory use on phones; longer history can be explored by year or narrower custom ranges, with an explicit message rather than silent truncation. Completeness across devices cannot be verified. Historical profile, reminder, and custom-schema versions are unavailable; current schemas interpret custom fields, while deleted numeric fields without schema retain values with unknown units. Clinical interpretations and exact timing of food consumption cannot be inferred from log timestamps.

## Development verification

Run `npm run dev`, then open `/dev/analysis-preview.html` for an explicitly synthetic, six-domain fixture with no Firebase or model calls. It is a separate development entry and is not included in the production build. Unit tests cover calendar/DST boundaries, missing values, snapshots/deleted items, compatible units, target modes, exercise sessions, categories, and correlations. UI tests cover Log/Stats navigation, tab placement, inclusive shared-period log filtering, invalid custom ranges, journal drilldown, explicit coach generation, saved reviews, cancellation, stale results, retry-save recovery, and exports. Browser captures exercise desktop and phone layouts.
