import re

with open('app/api/send-email/route.ts', 'r') as f:
    content = f.read()

target = """          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #111; margin: 15px 0; font-family: sans-serif; font-size: 13px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 13px;">Selected Settlement Method: <span style="text-transform: uppercase; color: #d4af37;">${details.paymentMethod || 'N/A'}</span></h4>
            <pre style="margin: 0; font-family: monospace; white-space: pre-wrap; font-size: 11px; background-color: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333;">${details.paymentInstructions || 'None provided'}</pre>
          </div>"""

replacement = """          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #111; margin: 15px 0; font-family: sans-serif; font-size: 13px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; font-family: Georgia, serif; font-size: 13px;">Selected Settlement Method: <span style="text-transform: uppercase; color: #d4af37;">${details.paymentMethod || 'N/A'}</span></h4>
            ${details.paymentMethod === 'crypto' ? `<pre style="margin: 0; font-family: monospace; white-space: pre-wrap; font-size: 11px; background-color: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; color: #333;">${details.paymentInstructions || 'None provided'}</pre>` : '<p style="margin: 4px 0;">An administrator will contact you with payment details shortly.</p>'}
          </div>"""

content = content.replace(target, replacement)

# Do it for both email templates (admin and client, if both are present in the file)
# The file probably has two identical structures or just one. The target replacement will hit all occurrences.

with open('app/api/send-email/route.ts', 'w') as f:
    f.write(content)
