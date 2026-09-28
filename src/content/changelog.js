// Release notes shown to faculty after the app updates.
//
// Add a new entry at the top whenever the version in package.json is bumped.
// Keep this list cumulative: someone jumping several releases sees every entry
// between their old version and the new one, so never delete old entries.
//
// Notes are bundled with the app rather than fetched, which guarantees a user
// can never see notes that disagree with the code they are running.
export const CHANGELOG = [
  {
    version: '1.0.4',
    date: '2026-09-28',
    notes: [
      'Settings now has a "Check for updates" button that tells you when a new version is ready to install.',
      'The update reminder no longer disappears for the rest of the session after you dismiss it.',
      'You now see release notes like these each time the app updates.',
      'If an update ever gets stuck, Settings has a "Clear cache & reload" option.',
    ],
  },
  {
    version: '1.0.3',
    date: '2026-09-10',
    notes: [
      'Added a step-by-step guide for installing the app on iPhone and iPad.',
      'You are now told when the app icon on your home screen needs refreshing to match the current release.',
    ],
  },
  {
    version: '1.0.2',
    date: '2026-09-10',
    notes: [
      'The app is now branded as DRIMS throughout the interface.',
      'Home screen icons now update reliably instead of staying stuck on an older image.',
      'Removed the offline-ready notification that appeared before the app had actually finished loading.',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-09-10',
    notes: [
      'Fixed several pages that could appear blank when a faculty record had missing details.',
    ],
  },
];
