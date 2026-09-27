# Inbox alarms, timers, and reminders

Every schedule belongs to an ordinary Inbox capture. Adding, editing, pausing, snoozing, completing, or removing a schedule preserves the capture's text and other content. One capture can have multiple independent alerts, each with its own time, recurrence, and controls. Recording and transcript versions of a capture expose the same combined alert list.

## Create and edit

Typed Chat and Index 01 use the same offline parser:

- “Set a timer for 10 minutes.”
- “Start a timer for 1 hour 30 minutes named laundry.”
- “Set an alarm at 7 am.” Bare alarm clock times mean the next occurrence; explicitly past dates require clarification.
- “Set an alarm tomorrow at 7 am called wake up.”
- “Remind me in one hour to call Mum.”
- “Set a reminder for one hour.” A task is optional; the item is titled Reminder when none is supplied.
- “Remind me every day at 9 am to take vitamins.” Hourly, daily, weekly, and monthly repeats are supported.
- “Pause my timer”, “Resume my timer”, “Restart my timer”, “Cancel my timer named laundry”, and “Snooze my alarm for ten minutes”. If several items match, Chat asks which one instead of changing all of them.

Relative creation requests use the capture's recorded time. A timer whose interval elapsed before delayed/offline processing asks for a new interval instead of silently starting late. In a timer clarification, the duration reply starts the timer. Unsupported schedules, including arbitrary weekday combinations, require clarification rather than guessing. Repeats use the saved timezone and local calendar time; imported legacy reminders keep UTC recurrence.

In Inbox, open an item and select **Alerts**, or use its menu → **Alarm, timer or reminder**. The tab shows **Alerts (N)** and a list of saved alerts. Select **Add alert** to create another alert; new alerts default to not repeating. Choose **Now**, **In 3h**, or another date/time, select an optional repeat interval, and press **Add alert** in the dialog. The new alert appears in the list and the app confirms **Alert added**. For example, add an alert for now and then another in three hours to receive two independent one-time alerts.

Select **Edit alert** on a saved alert to change only that alert, then **Update alert**. Removing an alert leaves the others and the item’s text intact. The Reminder tag remains while the capture still has alerts. Pause/resume and restart apply to timers; dismiss/snooze apply to a delivered occurrence; **Stop repeating** cancels future occurrences of that particular recurring alert. The list makes active, completed, and stopped schedules visible separately.

Alerts attached to a recording or any of its transcripts appear together on the recording’s Inbox card and in its Alerts tab. A notification opens that same visible recording and clears filters that would hide it; editing or removing a listed alert still targets its original owner and exact alert ID. Older schedules are retained during upgrade.

## Inbox groups and retention

Items with an enabled recurring alert remain in **Upcoming alerts** before, during, and after occurrence delivery and dismissal. Stopped recurring schedules do not stay in Upcoming alerts. Their cards show **Repeats hourly/daily/weekly/monthly**, the **Next alert**, and the **Last alert** together; the repeat icon and live countdown refer to the next occurrence. Dismissing an alert acknowledges only that occurrence. **Skip next alert** advances one occurrence, while **Stop repeating** disables the series and preserves its last-alert information. One-shot alerts still offer **Complete**. Quick schedule dialogs use live Inbox state, including when an alert fires while the dialog is open.

On opening the app or restoring schedules, version 2.10.2 repairs recurring schedules that the previous **Complete** action left disabled. Schedules explicitly cancelled using **Cancel schedule** or **Stop repeating** remain stopped. Repairs persist the next occurrence and reschedule it with Android; they do not create a second Inbox item.

Upcoming active alerts appear first in an amber-tinted **Upcoming alerts** group, sorted soonest first. The group uses the same expand/collapse behavior as date headings. Items whose alerts are all paused, completed, cancelled, or elapsed one-shot alerts stay in the ordinary timeline. A pinned item with a future alert appears once, in Upcoming alerts; other pinned items appear in **Pinned** above the date groups. Use **Pin** or **Unpin** in a text or recording card’s menu. Open the **Inbox view options** menu (beside the view tabs) or the sort menu to toggle **Show Upcoming alerts group** and **Show Pinned group** independently. These toggles save automatically to the active custom view and are restored when you return to it or reopen the app. They also appear in the saved-view editor and are captured when creating a new view. Turning a group off puts its cards back into the normal timeline (or the other enabled priority group); it does not hide the cards, remove pins, or disable alerts. Existing saved views retain both groups by default, except where Pinned was already disabled.

The upper-right card header contains retention beside the alert countdown. A green circle check indicates permanent retention; a number indicates remaining days until the next text or audio cleanup, rounded up (0 when due). A clock indicates a history-limit rule without a date. Tap any of these indicators for the full text/audio policy and retention controls.

## Views

The bell filter shows captures that actually have schedules. Saved views can combine ordinary tags and content filters with:

- Schedule type: reminder, timer, alarm, or all.
- Schedule status: active, upcoming, recurring, past, overdue, snoozed, paused, completed, cancelled, or all. **Upcoming** includes snoozed future alerts and enabled recurring alerts waiting for delivery. Filters match any individual alert on the item; type and status must match the same alert. **Recurring** includes all repeating schedules, including stopped ones. **Past** shows items with a previous alert, including recurring items that also have an upcoming occurrence. The card shows the latest occurrence's time, not a full occurrence log.
- **Due time** sorting, ascending by default.

For example, create **Timers** with type `timer` and status `active`, or **Upcoming work** with the Work tag, status `upcoming`, and Due time sorting. A Reminder tag alone does not imply an actual schedule. Text and recording cards show a bell icon beside the countdown when an enabled alert is scheduled in the future (including snoozed and recurring alerts). Paused, completed, cancelled, and elapsed schedules do not show the upcoming-alert bell. Both card types show a live countdown in the upper-right header, opposite the added time. The header fills over a timer’s duration; alarms and reminders fill during their final 24 hours. The fill uses the theme’s primary color, turns amber in the final ten minutes, and red in the final minute or when due. Paused timers show their remaining duration without urgency color; completed and cancelled schedules show their state. Due time sorts active deadlines soonest first by default, with inactive or unscheduled items last in either direction. The Upcoming alerts and Pinned sections take precedence over the timeline sort when present. A completed one-shot alert means it was delivered, or explicitly completed; it does not prove the user saw it or performed the task.

## Android delivery

The app uses AlarmManager for delivery and WorkManager for recovery. Alarms and timers use `setAlarmClock`; reminders use `setExactAndAllowWhileIdle` when permitted. Grant **Alarms & reminders** access for exact timing and enable notifications. The editor and Chat confirmations report missing access; without exact access the schedule remains saved but delivery is approximate. Android notification channel settings and Do Not Disturb still control audible alerts.

Alarm/timer notifications use the alarm sound channel and a repeating alert with **Snooze 5 min** and **Dismiss** actions. Alerts expire after ten minutes. They do not force a full-screen activity. Notification actions include an occurrence token so an old notification cannot change a replaced or already-snoozed schedule. Optional speech runs outside the alarm receiver. The app restores schedules after process recreation, reboot, app updates, exact-access grants, and clock changes. Device-local monotonic anchors preserve running countdowns across wall-clock corrections; reboot recovery uses the saved deadline and counts powered-off time. Force-stopping the app blocks Android delivery until it is opened again.

Database version 14 removes the one-alert-per-item constraint while preserving existing reminder rows and their schedule metadata. Full backups and portable content exports retain schedule mode, recurrence, duration, and state. Device-local countdown anchors are not exported.

Implementation follows Android's [alarm scheduling guidance](https://developer.android.com/develop/background-work/services/alarms).
