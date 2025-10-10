# User Guide

## Private Topic Feature

### What is it?
The Private Topic feature allows users to create posts that are visible only to themselves and staff members.  
This functionality introduces a new `private` field to the topic data model, stored in Redis, and integrates it throughout NodeBB’s topic creation and privilege system.  
Posts marked as private are hidden from other students and guests but remain accessible to their authors and administrators.

This feature also connects the backend and frontend. When a user selects the "Make Private" option in the composer, the system passes the flag to the topic creation API.  
The private state persists throughout the topic’s lifecycle, ensuring accurate visibility and privilege enforcement.

### How to Use and Test
1. Launch NodeBB and log in as a standard user.  
2. Create a new topic and select the **"Make Private"** checkbox.  
3. Submit the post. Then log in with a different (non-staff) account. The private post should not appear in the category list or search results.  
4. Log in as an admin or staff user, navigate to the same category, and confirm that the private topic is visible.  
5. Create another topic without selecting the checkbox to verify that a public post displays normally.  
6. Use a Redis client to confirm the data layer values:  
   - Private topic: `HGET topic:<tid> private` returns `1`.  
   - Public topic: `HGET topic:<tid> private` returns `0` or `nil`.

### Automated Tests
Backend and privilege tests were added to ensure privacy reliability:
- In `test/database/hash.js`, several cases confirm that the `private` field is stored and retrieved correctly, legacy topics default to public, and boolean values convert properly.  
- In `test/topics.js`, privilege checks ensure that only authors and admins can view private posts, while other users and guests are restricted.  
- Integration tests confirm that the `private` flag flows correctly from frontend to API and through to the database layer.  
- Running `npm test` or `npm run test test/topics.js` validates that all privacy-related cases pass successfully.

---

## Private Label and Composer UI Feature

### What is it?
This feature improves user interaction by visually distinguishing private topics and giving users an easy way to make their posts private.  
It introduces a "Private" label beneath topic titles when a topic is marked private and adds a "Make Private" checkbox in the composer interface.  

To support template customization, the `nodebb-plugin-composer-default` plugin was vendored into the repository.  
This allows the development team to directly modify composer templates and safely integrate new UI elements.  
The checkbox appears only when creating new topics, preventing accidental privacy changes during edits.

### How to Use and Test
1. Start NodeBB and log in.  
2. Click **New Topic** to open the composer. The **"Make Private"** checkbox will appear below the post field.  
3. Check the box and publish your topic. The topic page should now display a **"Private"** label beneath the title.  
4. Create another topic without selecting the checkbox. The label should not appear.  
5. Try editing an existing topic. The "Make Private" checkbox should not be visible while editing, ensuring that the privacy setting cannot be changed after creation.  
6. If testing the vendored plugin setup, delete `node_modules`, reinstall with `./nodebb install`, and confirm that NodeBB recognizes and runs the vendored plugin correctly.

### Automated Tests
Since this feature is primarily front-end focused, manual and integration tests were used:
- UI tests confirm that the "Private" label only appears when the backend `private` field is true.  
- Visual tests show that the label disappears when the field is false.  
- Manual verification ensures that the checkbox only appears during topic creation.  
- The functionality was confirmed through local test runs with the vendored composer plugin.  

---

## Admin Privacy Toggle Feature

### What is it?
The Admin Privacy Toggle feature allows administrators and moderators to mark existing public posts as private directly from the topic view.  
It adds a **"Make Private"** button to the topic sidebar in the Harmony theme.  
The button appears only for users with admin or moderator privileges and follows NodeBB’s design and localization standards.

This tool allows staff to manage privacy settings more efficiently without needing direct database or API interaction.

### How to Use and Test
1. Log in as an admin or moderator and open a public topic.  
2. In the sidebar, find the topic tools section and locate the **"Make Private"** button.  
3. Click the button to mark the topic as private. The visibility will update for non-admin users immediately.  
4. Log in as a regular user to confirm that the topic no longer appears in lists or search results.  
5. Log back in as an admin to verify that the topic is still visible and that the button text updates properly.  
6. Confirm that regular users and guests do not see the "Make Private" button at all.

### Automated Tests
The feature uses existing backend logic for privacy management, so additional automated tests were not required.  
Validation was performed through:
- Manual testing of the admin-only visibility for the button.  
- Layout checks to ensure the button renders correctly across devices.  
- Confirming that the button updates the topic’s status without errors or privilege leaks.

---

## Summary
These features together form a complete and maintainable Private Topics system for NodeBB.  
The updates span backend logic, UI design, admin tools, and internal code quality improvements.  

Users can now create private posts, identify them visually, and rely on consistent access controls.  
Administrators can manage privacy settings easily, and developers benefit from a cleaner, more understandable codebase supported by comprehensive testing.