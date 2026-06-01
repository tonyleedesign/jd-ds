# Setup

> ⚠️ **Before writing a single line of code or any import statement:** check that `src/components/` exists in the project. If it does not, run Step 1 right now. Writing imports before the components are copied will always fail.

Complete these steps in order.

---

## 1. Copy components into your project

**Do this first — before touching any other file.**

Copy the pre-built components from the package into `src/components/`:

```bash
cp -r node_modules/@make-kits/jh-ds/dist/components src/components
```

Verify `src/components/` now exists with subfolders (`layout/`, `navigation/`, `ui/`) before continuing. If the folder is missing or empty, the copy failed — do not proceed.

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

## 4. Import components using local paths

After copying, import each component from its local path. Never import from `@make-kits/jh-ds` directly — use the local paths below:

```tsx
import { AppLayout } from "../components/layout/AppLayout";
import { SideNavItem } from "../components/navigation/SideNav";
import { Button, ButtonGroup } from "../components/ui/Button";
import { Text } from "../components/ui/Text";
import { Tag } from "../components/ui/Tag";
import { Badge } from "../components/ui/Badge";
import { MetaItem } from "../components/ui/MetaItem";
import { Steps } from "../components/ui/Steps";
import { KeyCaseDetails } from "../components/ui/KeyCaseDetails";
import { Icon, AddIcon, SearchIcon, DeleteIcon } from "../components/ui/Icon";
import { Spinner } from "../components/ui/Spinner";
```

Only import the components you actually use. See `components.md` for the full list of components and their exact import paths.

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
