# Setup

Before writing any code, complete these four steps in order.

---

## 1. Copy components and assets into the project

Run these commands once:

```bash
cp -r node_modules/@make-kits/jh-ds/dist/components src/components
```

After running, the project will have:

```
src/
  components/
    layout/AppLayout/
    navigation/SideNav/
    navigation/GlobalHeader/
    navigation/ActionBar/
    navigation/Breadcrumb/
    ui/Button/
    ui/ButtonGroup/
    ui/Icon/
    ui/Spinner/
```

---

## 2. Add the style import to `src/styles/index.css`

Open `src/styles/index.css` and add `@import '@make-kits/jh-ds/style.css';` as the first line:

```css
@import "@make-kits/jh-ds/style.css";
@import "./fonts.css";
@import "./tailwind.css";
```

It must be first — design tokens must load before Tailwind processes the components.

---

## 3. Set the theme (REQUIRED)

There is no `index.html` in this environment. Do not use `useEffect`. Add this line at the top of `src/app/App.tsx`, outside and above the component function:

```tsx
document.documentElement.setAttribute("data-theme", "minerva");
```

Two options:

- `'minerva'` — 16px base, Source Sans 3
- `'evolution'` — 14px base, Inter

---

## 4. Import components using relative paths

Always import from `src/components/` — never from the package directly:

```tsx
import { AppLayout } from "../components/layout/AppLayout";
import { SideNavItem } from "../components/navigation/SideNav";
import { Button } from "../components/ui/Button";
import { ButtonGroup } from "../components/ui/ButtonGroup";
import { Text } from "../components/ui/Text";
import { Tag } from "../components/ui/Tag";
import { Badge } from "../components/ui/Badge";
import { MetaItem } from "../components/ui/MetaItem";
import { AddIcon } from "../components/ui/Icon";
```

Only import the components you actually use.

---

## Starter template

Every page must use AppLayout. Use this as the base for `src/app/App.tsx`:

```tsx
import { AppLayout } from "../components/layout/AppLayout";
import { SideNavItem } from "../components/navigation/SideNav";
import { Tag } from "../components/ui/Tag";

document.documentElement.setAttribute("data-theme", "minerva");

export default function App() {
  return (
    <AppLayout
      variant="minerva"
      appName="My App"
      breadcrumbs={[{ label: "Home" }]}
      title="Dashboard"
      titleMeta={<Tag variant="info">Draft</Tag>}
      sideNavContent={
        <>
          <SideNavItem label="Home" active />
          <SideNavItem label="Settings" />
        </>
      }
    >
      {/* page content here */}
    </AppLayout>
  );
}
```

---

## Adding page actions

```tsx
import { Button } from '../components/ui/Button'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { AddIcon } from '../components/ui/Icon'

<AppLayout
  ...
  actions={
    <ButtonGroup>
      <Button variant="secondary">Export</Button>
      <Button variant="primary" leftIcon={AddIcon}>New Item</Button>
    </ButtonGroup>
  }
>
```

---

## Detail page (with back button)

```tsx
import { useNavigate } from 'react-router'

const navigate = useNavigate()

<AppLayout
  ...
  breadcrumbs={[{ label: 'Home' }, { label: 'Cases', href: '/cases' }, { label: 'Case #1234' }]}
  title="Case #1234"
  onBackClick={() => navigate(-1)}
>
```
