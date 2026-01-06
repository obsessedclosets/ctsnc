# Google Sheets Integration Setup

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CTS North Carolina Leads" (or any name you prefer)
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Service`
   - F1: `Timeline`
   - G1: `Message`
   - H1: `Status`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

\`\`\`javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the form data
    sheet.appendRow([
      new Date(), // Timestamp
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.timeline || '',
      data.message || '',
      'New' // Status
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

4. Click the **Save** icon (💾) and name it "CTS Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "CTS Contact Form"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Review the permissions and click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [project name] (unsafe)**
9. Click **Allow**
10. **Copy the Web app URL** - it will look like:
    `https://script.google.com/macros/s/AKfycby.../exec`

## Step 4: Add URL to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
   - **Value**: [Paste the Web app URL you copied]
   - **Environment**: Production (and Preview if you want)
4. Click **Save**
5. **Redeploy** your site for the changes to take effect

## Step 5: Test Your Form

1. Go to your website
2. Fill out the contact form
3. Submit it
4. Check your Google Sheet - a new row should appear with the form data!

## Troubleshooting

**Form submits but no data appears in Google Sheet:**
- Make sure the Web app is deployed with "Who has access" set to "Anyone"
- Check that the environment variable is set correctly in Vercel
- Redeploy your site after adding the environment variable

**Permission errors:**
- Re-authorize the Google Apps Script by going to Deploy → Manage deployments → Edit → Deploy

**Need to update the script:**
- Make changes in Apps Script
- Click Deploy → Manage deployments
- Click the pencil icon ✏️ to edit
- Click **New version** dropdown → **New Version**
- Click **Deploy**

## Email Notifications (Optional)

To receive email notifications when a form is submitted, add this to your Apps Script:

\`\`\`javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.timeline || '',
      data.message || '',
      'New'
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'info@ctsnorthcarolina.com',
      subject: 'New Lead from CTS Website',
      body: 'New contact form submission:\n\n' +
            'Name: ' + data.name + '\n' +
            'Email: ' + data.email + '\n' +
            'Phone: ' + data.phone + '\n' +
            'Service: ' + data.service + '\n' +
            'Timeline: ' + data.timeline + '\n' +
            'Message: ' + data.message + '\n\n' +
            'Submitted: ' + new Date()
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

Replace `info@ctsnorthcarolina.com` with your actual email address.
