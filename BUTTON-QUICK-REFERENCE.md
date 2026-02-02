# Button System - Quick Reference

## Import

```tsx
import { Button } from "@/components/ui/button"
```

## Basic Usage

```tsx
// With icon (default right position)
<Button icon="solar:arrow-right-linear">Learn More</Button>

// Icon on left
<Button icon="solar:arrow-left-linear" iconPosition="left">Go Back</Button>

// Without icon
<Button>Click Me</Button>
```

## Variants

```tsx
// Default/Accent (Pink #EA3D6A) - Primary CTA
<Button icon="solar:arrow-right-linear">Learn More</Button>

// Primary Green (#115C47) - Brand actions
<Button variant="primary" icon="solar:phone-linear">Contact</Button>

// Secondary Orange (#FB9A31) - Secondary actions
<Button variant="secondary" icon="solar:download-linear">Download</Button>

// Outline - Tertiary actions
<Button variant="outline" icon="solar:eye-linear">View</Button>

// Ghost - Minimal actions
<Button variant="ghost" icon="solar:close-circle-linear">Cancel</Button>
```

## Sizes

```tsx
<Button size="sm">Small (36px)</Button>    // Compact spaces
<Button size="default">Default (48px)</Button>  // Standard
<Button size="lg">Large (56px)</Button>    // Prominent CTAs
```

## States

```tsx
// Disabled
<Button disabled icon="solar:arrow-right-linear">Disabled</Button>

// As link
<Button asChild>
  <a href="/contact">Contact Us</a>
</Button>
```

## Popular Icons

### Navigation
- `solar:arrow-right-linear` - Continue, Next
- `solar:arrow-left-linear` - Back, Previous
- `solar:home-linear` - Home

### Actions
- `solar:check-circle-linear` - Confirm, Submit
- `solar:close-circle-linear` - Close, Cancel
- `solar:add-circle-linear` - Add, Create
- `solar:download-linear` - Download
- `solar:upload-linear` - Upload
- `solar:share-linear` - Share

### Communication
- `solar:phone-linear` - Call
- `solar:mail-linear` - Email
- `solar:chat-linear` - Message
- `solar:calendar-linear` - Schedule

### Interface
- `solar:settings-linear` - Settings
- `solar:eye-linear` - View
- `solar:play-linear` - Play
- `solar:heart-linear` - Like
- `solar:star-linear` - Favorite
- `solar:info-circle-linear` - Info

### Users
- `solar:user-linear` - Profile
- `solar:users-group-rounded-linear` - Team

## CSS Classes (Alternative)

```html
<!-- Primary button -->
<button class="btn btn-primary btn-icon">
  Text
  <Icon icon="solar:arrow-right-linear" width={16} height={16} />
</button>

<!-- Sizes -->
<button class="btn btn-accent btn-small">Small</button>
<button class="btn btn-accent">Default</button>
<button class="btn btn-accent btn-large">Large</button>

<!-- Variants -->
<button class="btn btn-primary">Primary Green</button>
<button class="btn btn-secondary">Secondary Orange</button>
<button class="btn btn-tertiary">Outline</button>
<button class="btn btn-accent">Accent Pink</button>
<button class="btn btn-ghost">Ghost</button>
```

## Design Specs

- **Font**: Poppins, 15px, Regular (400)
- **Height**: 48px (default)
- **Min Width**: 136px
- **Border Radius**: 45px (fully rounded)
- **Border Width**: 1.5px (outline variants)
- **Icon Size**: 16x16px
- **Gap**: 8px (between text and icon)
- **Letter Spacing**: -0.05em
- **Transition**: 300ms ease-out

## Colors

- **Accent**: `#EA3D6A` (hover: `#d73760`, active: `#c52f56`)
- **Primary**: `#115C47` (hover: `#0E4A38`, active: `#0A3829`)
- **Secondary**: `#FB9A31` (hover: `#E8882B`, active: `#D47725`)
- **Text**: `#474044`

## Best Practices

1. **Use default/accent** for primary CTAs
2. **Use outline** for secondary actions
3. **Use ghost** for tertiary/cancel actions
4. **Icon right** for forward actions (Next, Continue)
5. **Icon left** for backward actions (Back, Previous)
6. **Large size** for hero CTAs
7. **Small size** for compact spaces

## Browse More Icons

https://icon-sets.iconify.design/solar/

All Solar icons work with the button component!
