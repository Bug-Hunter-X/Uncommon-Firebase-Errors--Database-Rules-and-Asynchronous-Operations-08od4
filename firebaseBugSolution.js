// Corrected asynchronous operation handling
firebase.database().ref('/path/to/data').once('value', (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Process data safely
    console.log('Data:', data);
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error('Error fetching data:', error);
});

// Example of properly configuring Firebase database rules to allow read access:
{
  "rules": {
    ".read": true,
    ".write": false // or define specific write rules
  }
}
Properly structured database rules and careful handling of asynchronous operations prevent common, hard-to-debug errors.