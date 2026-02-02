/**
 * Button Component Examples
 * Demonstrates all button variants with Iconify Solar icons
 */

import { Button } from "./button"

export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Primary/Accent Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Primary/Accent Buttons (Default)</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon="solar:arrow-right-broken">Learn More</Button>
          <Button icon="solar:phone-linear">Call Us</Button>
          <Button icon="solar:calendar-linear">Schedule</Button>
          <Button icon="solar:document-linear">Get Started</Button>
          <Button icon="solar:heart-linear" iconPosition="left">Support</Button>
        </div>
      </section>

      {/* Primary Green Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Primary Green Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" icon="solar:arrow-right-broken">Learn More</Button>
          <Button variant="primary" icon="solar:phone-linear">Contact Us</Button>
          <Button variant="primary" icon="solar:user-linear">Sign Up</Button>
        </div>
      </section>

      {/* Secondary Orange Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Secondary Orange Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" icon="solar:arrow-right-broken">Learn More</Button>
          <Button variant="secondary" icon="solar:download-linear">Download</Button>
          <Button variant="secondary" icon="solar:info-circle-linear">More Info</Button>
        </div>
      </section>

      {/* Outline Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Outline Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" icon="solar:arrow-right-broken">Learn More</Button>
          <Button variant="outline" icon="solar:eye-linear">View Details</Button>
          <Button variant="outline" icon="solar:play-linear">Watch Video</Button>
        </div>
      </section>

      {/* Ghost Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Ghost Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" icon="solar:arrow-right-broken">Learn More</Button>
          <Button variant="ghost" icon="solar:close-circle-linear">Cancel</Button>
        </div>
      </section>

      {/* Button Sizes */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" icon="solar:arrow-right-broken">Small</Button>
          <Button size="default" icon="solar:arrow-right-broken">Default</Button>
          <Button size="lg" icon="solar:arrow-right-broken">Large</Button>
        </div>
      </section>

      {/* Icon Positions */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Icon Positions</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon="solar:arrow-left-linear" iconPosition="left">Go Back</Button>
          <Button icon="solar:arrow-right-broken" iconPosition="right">Continue</Button>
        </div>
      </section>

      {/* Popular Solar Icons for Buttons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Popular Solar Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button icon="solar:arrow-right-broken">Arrow Right</Button>
          <Button icon="solar:arrow-left-linear">Arrow Left</Button>
          <Button icon="solar:arrow-up-linear">Arrow Up</Button>
          <Button icon="solar:arrow-down-linear">Arrow Down</Button>
          <Button icon="solar:check-circle-linear">Check</Button>
          <Button icon="solar:close-circle-linear">Close</Button>
          <Button icon="solar:add-circle-linear">Add</Button>
          <Button icon="solar:minus-circle-linear">Remove</Button>
          <Button icon="solar:phone-linear">Phone</Button>
          <Button icon="solar:calendar-linear">Calendar</Button>
          <Button icon="solar:document-linear">Document</Button>
          <Button icon="solar:download-linear">Download</Button>
          <Button icon="solar:upload-linear">Upload</Button>
          <Button icon="solar:heart-linear">Heart</Button>
          <Button icon="solar:star-linear">Star</Button>
          <Button icon="solar:user-linear">User</Button>
          <Button icon="solar:users-group-rounded-linear">Users</Button>
          <Button icon="solar:home-linear">Home</Button>
          <Button icon="solar:settings-linear">Settings</Button>
          <Button icon="solar:info-circle-linear">Info</Button>
          <Button icon="solar:question-circle-linear">Help</Button>
          <Button icon="solar:eye-linear">View</Button>
          <Button icon="solar:eye-closed-linear">Hide</Button>
          <Button icon="solar:play-linear">Play</Button>
          <Button icon="solar:pause-linear">Pause</Button>
          <Button icon="solar:share-linear">Share</Button>
          <Button icon="solar:link-linear">Link</Button>
          <Button icon="solar:mail-linear">Email</Button>
          <Button icon="solar:chat-linear">Chat</Button>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <div className="flex flex-wrap gap-4">
          <Button disabled icon="solar:arrow-right-broken">Disabled</Button>
          <Button variant="primary" disabled icon="solar:arrow-right-broken">Disabled</Button>
          <Button variant="outline" disabled icon="solar:arrow-right-broken">Disabled</Button>
        </div>
      </section>

      {/* Without Icons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Buttons Without Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Learn More</Button>
          <Button variant="primary">Contact Us</Button>
          <Button variant="secondary">Get Started</Button>
          <Button variant="outline">View Details</Button>
        </div>
      </section>
    </div>
  )
}

/**
 * Usage Examples:
 * 
 * 1. Basic button with icon:
 *    <Button icon="solar:arrow-right-broken">Learn More</Button>
 * 
 * 2. Button with icon on left:
 *    <Button icon="solar:arrow-left-linear" iconPosition="left">Go Back</Button>
 * 
 * 3. Different variants:
 *    <Button variant="primary" icon="solar:phone-linear">Call Us</Button>
 *    <Button variant="secondary" icon="solar:calendar-linear">Schedule</Button>
 *    <Button variant="outline" icon="solar:document-linear">View</Button>
 *    <Button variant="ghost" icon="solar:close-circle-linear">Cancel</Button>
 * 
 * 4. Different sizes:
 *    <Button size="sm" icon="solar:arrow-right-broken">Small</Button>
 *    <Button size="lg" icon="solar:arrow-right-broken">Large</Button>
 * 
 * 5. Without icon:
 *    <Button>Simple Button</Button>
 * 
 * 6. As a link:
 *    <Button asChild>
 *      <a href="/contact">Contact Us</a>
 *    </Button>
 * 
 * Popular Solar Icon Categories:
 * - Arrows: solar:arrow-right-linear, solar:arrow-left-linear, solar:arrow-up-linear, solar:arrow-down-linear
 * - Actions: solar:add-circle-linear, solar:check-circle-linear, solar:close-circle-linear
 * - Communication: solar:phone-linear, solar:mail-linear, solar:chat-linear
 * - Documents: solar:document-linear, solar:download-linear, solar:upload-linear
 * - Interface: solar:home-linear, solar:settings-linear, solar:menu-linear
 * - Media: solar:play-linear, solar:pause-linear, solar:eye-linear
 * - Social: solar:heart-linear, solar:star-linear, solar:share-linear
 * - Users: solar:user-linear, solar:users-group-rounded-linear
 * 
 * Find more icons at: https://icon-sets.iconify.design/solar/
 */
