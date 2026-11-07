# Interactive UI & Frontend Development — Task 2

A complete responsive Login & Registration UI demonstrating Bootstrap 5, custom CSS, JavaScript validation, password visibility toggles, Bootstrap components, and AJAX/PHP.

## Features

- Responsive Bootstrap 5 navbar
- Bootstrap grid, cards, carousel, modal and utilities
- Responsive Home, Login, Registration and Features pages
- Custom CSS variables, typography, transitions and animations
- Login form validation
- Registration form validation
- Password show/hide
- Password matching
- Terms validation
- AJAX username availability check
- AJAX email availability check
- PHP JSON endpoint with mock data
- Bootstrap success and terms modals
- Responsive mobile-first layout
- Accessible labels and controls

## Technologies

HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, Bootstrap Icons, Google Fonts, PHP.

## Project structure

```text
task-2-interactive-ui/
├── index.html
├── login.html
├── register.html
├── about.html
├── css/style.css
├── js/main.js
├── js/login.js
├── js/register.js
├── php/check-user.php
├── assets/images/
└── assets/icons/
```

## How to run

### Frontend only

Open `index.html` in a browser. Bootstrap and Google Fonts load through their CDNs.

### Full AJAX/PHP testing

Use XAMPP, WAMP, Laragon, or PHP's built-in server.

With PHP installed, from the project folder run:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000/
```

Do not use `file:///...` when testing AJAX/PHP.

## AJAX test data

Existing usernames:
- admin
- john123
- testuser

Existing emails:
- admin@example.com
- john@example.com
- test@example.com

Try a new username/email to see the available response.

## GitHub commit plan

1. Initial project setup
2. Add Bootstrap and global styling
3. Build responsive navbar and footer
4. Build home page
5. Add carousel and feature cards
6. Build login page
7. Add login validation
8. Build registration page
9. Add registration validation and password toggle
10. Add AJAX/PHP availability checks
11. Add Bootstrap modals and animations
12. Improve responsive behavior
13. Final testing and documentation

## Demo video — 3–5 minutes

- 0:00–0:30 — Introduce the Task 2 project and technologies.
- 0:30–1:00 — Show the responsive home page, navbar, carousel and cards.
- 1:00–1:40 — Demonstrate login validation and password visibility.
- 1:40–2:40 — Demonstrate registration validation, password matching and Terms modal.
- 2:40–3:20 — Demonstrate AJAX username/email availability without page reload.
- 3:20–4:00 — Show responsive mobile layout and Bootstrap components.
- 4:00–4:30 — Show GitHub repository and commit history.
- 4:30–5:00 — Summarize completed requirements.

## Submission checklist

- [ ] Complete source files uploaded
- [ ] At least 10 meaningful GitHub commits
- [ ] PHP/AJAX tested using a local PHP server
- [ ] 3–5 minute demo video recorded
- [ ] README included
- [ ] Mobile and desktop layouts checked
