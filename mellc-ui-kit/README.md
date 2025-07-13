# Mellc UI Kit

Mellc UI Kit is a collection of reusable custom React components and utility tokens similar to Tailwindcss.


```

## Usage

Import the styles once in your application and then use the components or utility classes as needed.

```tsx
import 'mellc-ui-kit/styles/index.css';
import { Button } from 'mellc-ui-kit';

export default function Example() {
  return <Button title="Click me" />;
}
```


### Utility Classes

Mellc UI Kit provides a set of utilities that you can apply directly in your markup. Below are some of the available classes grouped by category:

- **Aspect Ratio** – `aspect-auto`, `aspect-square`, `aspect-video`
- **Border Width** – `border-thin`, `border-base`, `border-thick`
- **Display** – `block`, `inline`, `inline-block`, `flex`, `grid`, `hidden`
- **Flexbox** – `flex-row`, `flex-col`, `flex-wrap`, `justify-center`, `items-center`, `flex-grow`
- **Gap & Grid** – `gap-0` through `gap-32`, `grid`, `grid-cols-1` … `grid-cols-12`, `place-items-center`
- **Hover Utilities** – `hover:opacity-80`, `hover:underline`, `hover:shadow-lg`
- **Layout** – `visible`, `invisible`, `mx-auto`, `my-auto`
- **Margin & Padding** – `m-0` … `m-32`, `mt-0` … `mt-32`, `p-0` … `p-32`, `pt-0` … `pt-32`
- **Sizing** – `w-full`, `h-auto`, `min-h-screen`, `max-w-full`
- **Radius & Shadow** – `rounded-md`, `rounded-lg`, `rounded-full`, `shadow-sm`, `shadow-lg`
- **Colors** – background, text, and border utilities such as `bg-red-500`, `text-blue-700`, and `border-gray-300`. Colors include `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `indigo`, `purple`, `gray`, `rose`, `sky`, `amber`, `slate`, `emerald`, along with `black`, `white`, and `transparent`, each available in `100`, `300`, `500`, `700`, and `900` shades where applicable.
- **Typography** – `text-lg`, `font-bold`, `leading-normal`, `tracking-wide`
- **Z-index** – `z-base`, `z-modal`, `z-tooltip`

### Components

The following components are available:

- `Button`
- `Card`
- `BlockContainer`
- `FlexContainer`
- `GridContainer`
- `Center`
- `ScrollContainer`
- `MainContainer`
- `Dropdown`
- `Footer`
- `Form`
- `Input`
- `TextAreaInput`
- `MenuIcon`
- `XIcon`
- `UIImage`
- `UILink`
- `Modal`
- `NavBar`
- `SidebarNav`
- `MobileNav`
- `MarqueeBanner`
- `ScrollHint`
- `Spinner`
- `Title`
- `Subtitle`
- `BodyText`
- `CaptionText`
- `List`

Refer to the source files for detailed API information and usage examples.

