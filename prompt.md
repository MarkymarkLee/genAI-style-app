Create a React-based Virtual Fitting Room application with the following specifications:

Tech Stack:

React 18 with Vite
Tailwind CSS (via CDN)
Custom swipe gesture implementation
Layout:

Two-column responsive layout (single column on mobile)
Left side: Preview area showing layered outfit images (4:5 aspect ratio, gray background)
Right side: Two swipeable card stacks (one for tops, one for bottoms)
Data Structure:
Create two arrays of clothing items:

Tops: 4 items (Emerald Green Hoodie, Classic White T-Shirt, Striped Navy Blazer, Cozy Knit Sweater)
Bottoms: 4 items (Vintage Light Wash Jeans, Formal Black Slacks, Cargo Pants, Pleated Mini Skirt)
Each item has: id, name, description, imageUrl (path to /static/images/)
Components:

App.jsx - Main component with:

State for currentTopIndex and currentBottomIndex
Handler functions for cycling through items (next/prev with modulo)
Pass outfit data to child components
ModelView.jsx - Display component with:

Two layered images (bottom clothing at z-20, top clothing at z-30)
No base model image, just gray background
Images positioned absolutely to overlay each other
Fade opacity when images fail to load
CardStack.jsx - Swipeable card with:

Color props (indigo for tops, pink for bottoms)
Item preview image, name, and instructions
Integration with useSwipe hook
Animation state management (prevent swiping during animation)
Flick animation when swiping (flick-left for next, flick-right for prev)
300ms animation duration before updating item
useSwipe.js - Custom hook implementing:

Mouse and touch event handlers
Global event listeners for mousemove/mouseup (attached via useEffect)
Real-time visual feedback during drag (translate + rotate)
50px swipe threshold
Snap-back animation if swipe is too short
Use useCallback to memoize handlers
Use refs to avoid stale closures
Animations (CSS):

flickLeft: translateX(-200%) with -10deg rotation
flickRight: translateX(200%) with +10deg rotation
Both animations: 0.3s ease-out with opacity fade
Styling:

Card stack height: 250px
Preview image size in cards: 144px × 176px (w-36 h-44)
Cursor: grab (normal), grabbing (active)
Border colors: indigo-100 for tops, pink-100 for bottoms
Background: bg-yellow-50 for cards, #f7f9fb for body
Font: Inter from Google Fonts
Optional Feature:

StyleAnalyst component for AI outfit critique using Google Gemini API
Service layer with exponential backoff retry logic
Display loading state and results
File Structure:

Key Implementation Details:

Use React refs to maintain swipe state without causing re-renders
Implement global mouse event listeners to handle dragging outside card boundaries
Use modulo arithmetic for infinite cycling: (index + 1) % length and (index - 1 + length) % length
Disable pointer events during animations to prevent race conditions
Make images non-draggable with draggable={false}
The app should allow smooth dragging of cards with real-time visual feedback, and automatically cycle to the next/previous item when the swipe threshold is met.

This prompt contains all the essential details needed to recreate your app from scratch!
