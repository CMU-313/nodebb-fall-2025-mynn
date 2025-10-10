# User Guide

## Private Topic Feature

### What is it?
The Private Topic feature allows users to create topic that are visible only to themselves and staff members.  
This functionality introduces a new `private` field to the topic data model, stored in Redis, and integrates it throughout NodeBB’s topic creation and privilege system.  
Topics marked as private are hidden from other students and guests but remain accessible to their authors and administrators.

This feature also connects the backend and frontend. When a user selects the "Make Private" option in the composer, the system passes the flag to the topic creation API.  
The private state persists throughout the topic’s lifecycle, ensuring accurate visibility and privilege enforcement.

### How to Use
1. Launch NodeBB and log in as a standard user.  
2. Create a new topic and select the **"Make Private"** checkbox.  
3. Submit the topic. Then log in with a different (non-staff) account. The private topic should not appear in the category list or search results.  
4. Log in as an admin or staff user, navigate to the same category, and confirm that the private topic is visible.  
5. Create another topic without selecting the checkbox to verify that a public topic displays normally.  

### How to test
1. Use a Redis client to confirm the data layer values:  
   - Private topic: `HGET topic:<tid> private` returns `1`.  
   - Public topic: `HGET topic:<tid> private` returns `0` or `nil`.
2. Check that existing (legacy) topics without a `private` field default to public.  
3. Verify that authors and staff can view private topics, while other users and guests cannot.  

### Automated Tests
Backend and privilege tests were added to ensure privacy reliability:
- In `test/database/hash.js`, several cases confirm that the `private` field is stored and retrieved correctly, legacy topics default to public, and boolean values convert properly.  
- Integration tests were added in `test/topics.js` to verify end-to-end privilege behavior for private topics. These tests confirm that:
   1. only the topic author and admin accounts can view private topics
   2. other users and guests are denied access
   3. topic lists correctly exclude private topics from unauthorized views
   4. the `private` field is consistently parsed as a boolean across different input types. 
- Running `npm test` or `npm run test test/topics.js` validates that all privacy-related cases pass successfully.

---

## Private Label and Composer UI Feature

### What is it?
This feature improves user interaction by visually distinguishing private topics and giving users an easy way to make their posted topics private.  
It introduces a "Private" label beneath topic titles when a topic is marked private and adds a "Make Private" checkbox in the composer interface.  

To support template customization, the `nodebb-plugin-composer-default` plugin was vendored into the repository.  
This allows the development team to directly modify composer templates and safely integrate new UI elements.  
The checkbox appears only when creating new topics, preventing accidental privacy changes during edits. In our implementation private topics cannot be made public later, so after they are made private they stay private. 

### How to Use
1. Start NodeBB and log in.  
2. Click **New Topic** to open the composer. The **"Make Private"** checkbox will appear above the post conent textbox field.  
3. Check the box and publish your topic. The topic page should now display a **"Private"** label beneath the title.  
4. Create another topic without selecting the checkbox. The label should not appear.  
5. Try editing an existing topic. The "Make Private" checkbox should not be visible while editing, ensuring that the privacy setting cannot be changed after creation.  

### How to Test
1. Verify that the **"Private"** label appears only when the topic’s `private` field is true.  
2. Confirm that the label disappears when the topic is public.  
3. Check that the **"Make Private"** checkbox appears only during topic creation and not during editing.  
4. If testing the vendored plugin setup, delete `node_modules`, reinstall with `./nodebb install`, and confirm that NodeBB recognizes and runs the vendored plugin correctly.  


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

### How to Use
1. Log in as an admin or moderator and open a public topic.  
2. In the sidebar, find the topic tools section and locate the **"Make Private"** button.  
3. Click the button to mark the topic as private. The visibility will update for non-admin users immediately.  
4. Log in as a regular user to confirm that the topic no longer appears in lists or search results.  
5. Log back in as an admin to verify that the topic is still visible and that the button text updates properly.  
6. Confirm that regular users and guests do not see the "Make Private" button at all.

### How to Test
1. Verify that the button appears only for admins and moderators.  
2. Confirm that clicking the button updates the topic’s privacy status correctly.  
3. Ensure that private topics remain hidden from unauthorized users.  
4. Check translation keys (`make_private`, `make_public`) render properly in the sidebar.  
5. Verify that the button layout follows Harmony’s theme and responsive design standards.  


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