# Dakota Autism Center - Button System

## Overview

The button system is designed with the following specifications:
- **Primary Color**: `#EA3D6A` (Accent Pink)
- **Text Color**: `#474044` (Dark Gray)
- **Border Radius**: `45px` (Fully rounded)
- **Height**: `48px` (default)
- **Min Width**: `136px`
- **Font**: Poppins, 15px, Regular (400)
- **Letter Spacing**: -0.05em
- **Icons**: Iconify Solar icon set

## Button Component

### Installation

The button component uses `@iconify/react` which is already installed in the project.

### Basic Usage

```tsx
import { Button } from "@/components/ui/button"

// Basic button with icon
<Button icon="solar:arrow-right-linear">Learn More</Button>

// Button with icon on left
<Button icon="solar:arrow-left-linear" iconPosition="left">Go Back</Button>

// Button without icon
<Button>Click Me</Button>
```

### Variants

#### 1. Default (Accent)
The primary button style using the accent color `#EA3D6A`.

```tsx
<Button icon="solar:arrow-right-linear">Learn More</Button>
<Button variant="default" icon="solar:phone-linear">Call Us</Button>
```

**Styles:**
- Background: `#EA3D6A`
- Text: `#474044`
- Hover: `#d73760`
- Active: `#c52f56`

#### 2. Primary (Green)
Uses the brand primary green color.

```tsx
<Button variant="primary" icon="solar:arrow-right-linear">Contact Us</Button>
```

**Styles:**
- Background: `#115C47`
- Text: `#FFFFFF`
- Hover: `#0E4A38`
- Active: `#0A3829`

#### 3. Secondary (Orange)
Uses the brand secondary orange color.

```tsx
<Button variant="secondary" icon="solar:download-linear">Download</Button>
```

**Styles:**
- Background: `#FB9A31`
- Text: `#FFFFFF`
- Hover: `#E8882B`
- Active: `#D47725`

#### 4. Outline
Transparent background with border.

```tsx
<Button variant="outline" icon="solar:eye-linear">View Details</Button>
```

**Styles:**
- Background: `transparent`
- Text: `#474044`
- Border: `1.5px solid #474044`
- Hover: Light pink background

#### 5. Ghost
Minimal button with no border.

```tsx
<Button variant="ghost" icon="solar:close-circle-linear">Cancel</Button>
```

**Styles:**
- Background: `transparent`
- Text: Primary green
- Hover: Light green background

### Sizes

```tsx
// Small button
<Button size="sm" icon="solar:arrow-right-linear">Small</Button>

// Default button (48px height)
<Button size="default" icon="solar:arrow-right-linear">Default</Button>

// Large button
<Button size="lg" icon="solar:arrow-right-linear">Large</Button>
```

**Size Specifications:**
- **Small**: 36px height, 100px min-width, 14px font
- **Default**: 48px height, 136px min-width, 15px font
- **Large**: 56px height, 160px min-width, 16px font

### Icon Positions

```tsx
// Icon on right (default)
<Button icon="solar:arrow-right-linear">Continue</Button>

// Icon on left
<Button icon="solar:arrow-left-linear" iconPosition="left">Go Back</Button>
```

### States

#### Hover
All buttons have smooth hover transitions with color changes.

#### Active
Buttons scale down slightly (0.98) when clicked for tactile feedback.

#### Disabled
```tsx
<Button disabled icon="solar:arrow-right-linear">Disabled</Button>
```

Disabled buttons have 50% opacity and are not clickable.

## Iconify Solar Icons

The button system uses the **Solar icon set** from Iconify, which provides a comprehensive collection of modern, clean icons.

### Popular Icons for Buttons

#### Navigation
- `solar:arrow-right-linear` - Right arrow
- `solar:arrow-left-linear` - Left arrow
- `solar:arrow-up-linear` - Up arrow
- `solar:arrow-down-linear` - Down arrow

#### Actions
- `solar:add-circle-linear` - Add/Create
- `solar:check-circle-linear` - Confirm/Success
- `solar:close-circle-linear` - Close/Cancel
- `solar:minus-circle-linear` - Remove/Delete

#### Communication
- `solar:phone-linear` - Phone/Call
- `solar:mail-linear` - Email
- `solar:chat-linear` - Chat/Message
- `solar:video-linear` - Video call

#### Documents & Files
- `solar:document-linear` - Document
- `solar:download-linear` - Download
- `solar:upload-linear` - Upload
- `solar:folder-linear` - Folder

#### Interface
- `solar:home-linear` - Home
- `solar:settings-linear` - Settings
- `solar:menu-linear` - Menu
- `solar:search-linear` - Search

#### Media
- `solar:play-linear` - Play
- `solar:pause-linear` - Pause
- `solar:eye-linear` - View/Show
- `solar:eye-closed-linear` - Hide

#### Social & Engagement
- `solar:heart-linear` - Like/Favorite
- `solar:star-linear` - Star/Rating
- `solar:share-linear` - Share
- `solar:link-linear` - Link

#### Users
- `solar:user-linear` - Single user
- `solar:users-group-rounded-linear` - Multiple users

#### Calendar & Time
- `solar:calendar-linear` - Calendar
- `solar:clock-linear` - Time

#### Information
- `solar:info-circle-linear` - Information
- `solar:question-circle-linear` - Help/Question

### Finding More Icons

Browse the complete Solar icon set at: https://icon-sets.iconify.design/solar/

All icons are available in multiple styles:
- **Linear** (outline) - Recommended for buttons
- **Bold** - Thicker outline
- **Broken** - Stylized broken lines
- **Bold Duotone** - Two-tone filled

## CSS Classes

For non-React usage, you can use the CSS classes directly:

```html
<!-- Primary button -->
<button class="btn btn-primary btn-icon">
  Learn More
  <svg>...</svg>
</button>

<!-- Outline button -->
<button class="btn btn-tertiary btn-icon">
  View Details
  <svg>...</svg>
</button>

<!-- Small button -->
<button class="btn btn-accent btn-small btn-icon">
  Quick Action
  <svg>...</svg>
</button>
```

### Available CSS Classes

- **Base**: `.btn`
- **Variants**: `.btn-primary`, `.btn-secondary`, `.btn-tertiary`, `.btn-accent`, `.btn-accent-outline`, `.btn-ghost`
- **Sizes**: `.btn-small`, `.btn-large`
- **Modifiers**: `.btn-icon`, `.btn-loading`

## Design Specifications

### Typography
- **Font Family**: Poppins
- **Font Size**: 15px (default)
- **Font Weight**: 400 (Regular)
- **Line Height**: 22px
- **Letter Spacing**: -0.05em

### Dimensions
- **Height**: 48px (default)
- **Min Width**: 136px
- **Padding**: 12px 28px
- **Border Radius**: 45px
- **Border Width**: 1.5px (for outline variants)

### Colors
- **Accent**: `#EA3D6A`
- **Accent Hover**: `#d73760`
- **Accent Active**: `#c52f56`
- **Text**: `#474044`
- **Primary Green**: `#115C47`
- **Secondary Orange**: `#FB9A31`

### Spacing
- **Icon Gap**: 8px (between text and icon)
- **Icon Size**: 16x16px

### Transitions
- **Duration**: 300ms
- **Easing**: ease-out
- **Properties**: background-color, color, border-color, transform

### Interactions
- **Hover**: Color change
- **Active**: Scale to 0.98
- **Focus**: Ring outline (accessibility)
- **Disabled**: 50% opacity, no pointer events

## Examples

### Common Use Cases

#### Call-to-Action
```tsx
<Button icon="solar:arrow-right-linear">Get Started</Button>
<Button icon="solar:phone-linear">Call Us Now</Button>
<Button icon="solar:calendar-linear">Schedule Appointment</Button>
```

#### Navigation
```tsx
<Button icon="solar:arrow-left-linear" iconPosition="left">Back</Button>
<Button icon="solar:arrow-right-linear">Next</Button>
<Button icon="solar:home-linear">Home</Button>
```

#### Forms
```tsx
<Button variant="primary" icon="solar:check-circle-linear">Submit</Button>
<Button variant="ghost" icon="solar:close-circle-linear">Cancel</Button>
```

#### Downloads & Actions
```tsx
<Button variant="secondary" icon="solar:download-linear">Download PDF</Button>
<Button variant="outline" icon="solar:share-linear">Share</Button>
```

## Accessibility

The button component includes:
- Proper focus states with visible ring
- Disabled state handling
- Semantic HTML button element
- Support for keyboard navigation
- Screen reader compatible

## Best Practices

1. **Use appropriate variants**: Default/accent for primary actions, outline for secondary actions, ghost for tertiary actions.

2. **Choose meaningful icons**: Select icons that clearly represent the action (e.g., `solar:arrow-right-linear` for "Continue", `solar:phone-linear` for "Call").

3. **Icon position**: Place icons on the right for forward actions (Next, Continue), on the left for backward actions (Back, Previous).

4. **Consistent sizing**: Use default size for most buttons, small for compact spaces, large for prominent CTAs.

5. **Limit button variants**: Don't use too many different button styles on the same page.

6. **Provide clear labels**: Button text should clearly describe the action.

## Browser Support

The button system is compatible with all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Icons are loaded via Iconify's efficient CDN
- CSS transitions use GPU-accelerated properties
- No JavaScript required for basic functionality
- Minimal bundle size impact
