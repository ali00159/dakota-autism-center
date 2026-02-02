/**
 * Button Demo Page
 * Showcases all button variants and usage examples
 */

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export default function ButtonDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-max">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Dakota Autism Center - Button System
          </h1>
          <p className="text-lg text-secondary">
            Complete button component showcase with Iconify Solar icons
          </p>
        </div>

        <div className="space-y-12">
          {/* React Button Component Examples */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              React Button Component
            </h2>

            {/* Default/Accent Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Default/Accent Buttons (Pink #EA3D6A)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button icon="solar:arrow-right-broken">Learn More</Button>
                <Button icon="solar:phone-linear">Call Us</Button>
                <Button icon="solar:calendar-linear">Schedule</Button>
                <Button icon="solar:heart-linear" iconPosition="left">
                  Support
                </Button>
                <Button icon="solar:document-linear">Get Started</Button>
              </div>
            </div>

            {/* Primary Green Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Primary Buttons (Green #115C47)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon="solar:arrow-right-broken">
                  Learn More
                </Button>
                <Button variant="primary" icon="solar:phone-linear">
                  Contact Us
                </Button>
                <Button variant="primary" icon="solar:user-linear">
                  Sign Up
                </Button>
                <Button
                  variant="primary"
                  icon="solar:users-group-rounded-linear"
                >
                  Join Us
                </Button>
              </div>
            </div>

            {/* Secondary Orange Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Secondary Buttons (Orange #FB9A31)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" icon="solar:arrow-right-broken">
                  Learn More
                </Button>
                <Button variant="secondary" icon="solar:download-linear">
                  Download
                </Button>
                <Button variant="secondary" icon="solar:info-circle-linear">
                  More Info
                </Button>
                <Button variant="secondary" icon="solar:star-linear">
                  Featured
                </Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Outline Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" icon="solar:arrow-right-broken">
                  Learn More
                </Button>
                <Button variant="outline" icon="solar:eye-linear">
                  View Details
                </Button>
                <Button variant="outline" icon="solar:play-linear">
                  Watch Video
                </Button>
                <Button variant="outline" icon="solar:share-linear">
                  Share
                </Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Ghost Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" icon="solar:arrow-right-broken">
                  Learn More
                </Button>
                <Button variant="ghost" icon="solar:close-circle-linear">
                  Cancel
                </Button>
                <Button variant="ghost" icon="solar:settings-linear">
                  Settings
                </Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Button Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" icon="solar:arrow-right-broken">
                  Small (36px)
                </Button>
                <Button size="default" icon="solar:arrow-right-broken">
                  Default (48px)
                </Button>
                <Button size="lg" icon="solar:arrow-right-broken">
                  Large (56px)
                </Button>
              </div>
            </div>

            {/* Icon Positions */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Icon Positions
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  icon="solar:arrow-left-linear"
                  iconPosition="left"
                >
                  Go Back
                </Button>
                <Button
                  icon="solar:arrow-right-broken"
                  iconPosition="right"
                >
                  Continue
                </Button>
                <Button icon="solar:home-linear" iconPosition="left">
                  Home
                </Button>
              </div>
            </div>

            {/* Disabled State */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Disabled State
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled icon="solar:arrow-right-broken">
                  Disabled
                </Button>
                <Button
                  variant="primary"
                  disabled
                  icon="solar:arrow-right-broken"
                >
                  Disabled
                </Button>
                <Button
                  variant="outline"
                  disabled
                  icon="solar:arrow-right-broken"
                >
                  Disabled
                </Button>
              </div>
            </div>

            {/* Without Icons */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Buttons Without Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button>Learn More</Button>
                <Button variant="primary">Contact Us</Button>
                <Button variant="secondary">Get Started</Button>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          </section>

          {/* CSS Class Examples */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              CSS Classes (Alternative Usage)
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Using CSS Classes Directly
              </h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary btn-icon">
                  Primary Button
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
                <button className="btn btn-secondary btn-icon">
                  Secondary Button
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
                <button className="btn btn-tertiary btn-icon">
                  Outline Button
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
                <button className="btn btn-accent btn-icon">
                  Accent Button
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
                <button className="btn btn-ghost btn-icon">
                  Ghost Button
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                CSS Class Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="btn btn-accent btn-small btn-icon">
                  Small
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
                <button className="btn btn-accent btn-icon">
                  Default
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
                <button className="btn btn-accent btn-large btn-icon">
                  Large
                  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Popular Solar Icons */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Popular Solar Icons for Buttons
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Navigation & Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" icon="solar:arrow-right-broken">Arrow Right</Button>
                <Button size="sm" icon="solar:arrow-left-linear">Arrow Left</Button>
                <Button size="sm" icon="solar:arrow-up-linear">Arrow Up</Button>
                <Button size="sm" icon="solar:arrow-down-linear">Arrow Down</Button>
                <Button size="sm" icon="solar:check-circle-linear">Check</Button>
                <Button size="sm" icon="solar:close-circle-linear">Close</Button>
                <Button size="sm" icon="solar:add-circle-linear">Add</Button>
                <Button size="sm" icon="solar:minus-circle-linear">Remove</Button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Communication
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" icon="solar:phone-linear">Phone</Button>
                <Button size="sm" icon="solar:mail-linear">Email</Button>
                <Button size="sm" icon="solar:chat-linear">Chat</Button>
                <Button size="sm" icon="solar:video-linear">Video</Button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Documents & Media
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" icon="solar:document-linear">Document</Button>
                <Button size="sm" icon="solar:download-linear">Download</Button>
                <Button size="sm" icon="solar:upload-linear">Upload</Button>
                <Button size="sm" icon="solar:play-linear">Play</Button>
                <Button size="sm" icon="solar:pause-linear">Pause</Button>
                <Button size="sm" icon="solar:eye-linear">View</Button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Interface & Social
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" icon="solar:home-linear">Home</Button>
                <Button size="sm" icon="solar:settings-linear">Settings</Button>
                <Button size="sm" icon="solar:heart-linear">Heart</Button>
                <Button size="sm" icon="solar:star-linear">Star</Button>
                <Button size="sm" icon="solar:share-linear">Share</Button>
                <Button size="sm" icon="solar:link-linear">Link</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Users & Calendar
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" icon="solar:user-linear">User</Button>
                <Button size="sm" icon="solar:users-group-rounded-linear">Users</Button>
                <Button size="sm" icon="solar:calendar-linear">Calendar</Button>
                <Button size="sm" icon="solar:clock-linear">Clock</Button>
                <Button size="sm" icon="solar:info-circle-linear">Info</Button>
                <Button size="sm" icon="solar:question-circle-linear">Help</Button>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Common Use Cases
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Call-to-Action Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" icon="solar:arrow-right-broken">
                  Get Started Today
                </Button>
                <Button size="lg" variant="primary" icon="solar:phone-linear">
                  Call Us Now
                </Button>
                <Button size="lg" variant="secondary" icon="solar:calendar-linear">
                  Schedule Appointment
                </Button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Form Actions
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon="solar:check-circle-linear">
                  Submit Form
                </Button>
                <Button variant="outline" icon="solar:arrow-right-broken">
                  Continue
                </Button>
                <Button variant="ghost" icon="solar:close-circle-linear">
                  Cancel
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Navigation & Links
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  icon="solar:arrow-left-linear"
                  iconPosition="left"
                >
                  Previous
                </Button>
                <Button variant="outline" icon="solar:arrow-right-broken">
                  Next
                </Button>
                <Button variant="ghost" icon="solar:home-linear">
                  Back to Home
                </Button>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Code Examples
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-700">
                  React Component
                </h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Button } from "@/components/ui/button"

// Basic button with icon
<Button icon="solar:arrow-right-broken">Learn More</Button>

// Different variants
<Button variant="primary" icon="solar:phone-linear">Call Us</Button>
<Button variant="secondary" icon="solar:calendar-linear">Schedule</Button>
<Button variant="outline" icon="solar:eye-linear">View</Button>
<Button variant="ghost" icon="solar:close-circle-linear">Cancel</Button>

// Different sizes
<Button size="sm" icon="solar:arrow-right-broken">Small</Button>
<Button size="lg" icon="solar:arrow-right-broken">Large</Button>

// Icon position
<Button icon="solar:arrow-left-linear" iconPosition="left">Back</Button>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-700">
                  CSS Classes
                </h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<!-- Primary button -->
<button class="btn btn-primary btn-icon">
  Learn More
  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
</button>

<!-- Outline button -->
<button class="btn btn-tertiary btn-icon">
  View Details
  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
</button>

<!-- Small button -->
<button class="btn btn-accent btn-small btn-icon">
  Quick Action
  <Icon icon="solar:arrow-right-broken" width={16} height={16} />
</button>`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
