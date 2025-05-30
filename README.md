# binance-clone

A responsive frontend clone of the Binance trading platform built using HTML, CSS, and JavaScript. It includes a dark mode toggle, live crypto market table, a TradingView chart, and collapsible mobile menus.

##  Features

- Responsive design (desktop & mobile friendly)
- Dark mode toggle
- Action and tab menus in the header
- Live BTC/USDT TradingView chart embed
- Collapsible menus on mobile view for better UX
- Simple and clean UI layout

##  Project Structure
├── index.html
├── style.css
├── script.js 



## Responsive Design & Mobile Optimization Steps

This README outlines the key steps taken to ensure the UI works smoothly across devices, especially on screens 768px wide and below.

### 1. Identify Fixed Width Elements or Large Images

- Scanned all layout elements for fixed widths that may cause horizontal scrolling.
- Reviewed images and embedded iframes to ensure they don’t overflow their containers.

### 2. Write Media Queries Targeting `max-width: 768px`

- Created CSS media queries to apply specific styles for tablets and smaller devices.
- Used `@media (max-width: 768px) { ... }` to override desktop styles for smaller screens.

### 3. Adjust Layout: Stack Columns Vertically, Reduce Font Sizes

- Changed multi-column layouts (like header menus) to vertical stacks in mobile views.
- Reduced font sizes for text, buttons, and headers to fit smaller screens comfortably.
- Example: `.balance`, `.action-btn`, `.tab-btn` font sizes decreased inside media queries.

### 4. Make Navigation Menu Collapse or Stack Vertically

- Converted horizontal navigation (Actions and Tabs menus) into collapsible sections on mobile.
- Added toggle buttons (`☰ Actions` and `☰ Tabs`) to show/hide these menus on small screens.
- This helps keep the header clean and prevents UI clutter.

### 5. Test With Chrome DevTools Device Toolbar

- Used Chrome DevTools (F12) device toolbar to simulate various mobile devices.
- Verified menu toggle functionality, layout adjustments, font scaling, and content visibility.
- Tested on common device sizes: iPhone SE, iPhone 12, Pixel, iPad, etc.

### 6. Fix Overflow and Scrolling Issues

- Ensured no elements cause horizontal overflow or unwanted scrolling on small screens.
- Applied `overflow-x: hidden;` on `body` to prevent horizontal scrolling.
- Used flexible widths (`max-width: 100%`, `width: 100%`) on tables, buttons, and iframes.

### 7. Ensure Images and Embedded Content Scale Within Containers

- Set embedded iframe chart to `width: 100%` and limited max height on smaller screens.
- Verified any logos or icons scale properly without distortion or overflow.

---

## How to Use and Test

- Open `index.html` in any modern browser.
- Resize browser window below 768px or use device toolbar in DevTools (`Ctrl+Shift+M` / `Cmd+Shift+M`).
- Toggle dark mode and use menu toggle buttons to verify responsive behavior.
- Check that no horizontal scrollbar appears and all content fits nicely.

---

## Technologies

- HTML5  
- CSS3 (Flexbox, Media Queries)  
- JavaScript (Vanilla)  
- TradingView iframe widget for live chart

---

## Summary

By following these steps, the Binance Clone UI is optimized to:

- Provide a clean, usable interface on mobile devices.
- Keep navigation accessible but unobtrusive.
- Maintain readability and functionality with scalable fonts and layouts.
- Prevent layout breakage and horizontal scrolling issues.

---



