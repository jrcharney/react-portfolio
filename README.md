# react-portfolio

Module 20 Challenge - Due March 14, 2023

[![React Portfolio](assets/images/react-portfolio.png)](https://jrcharney.github.io/react-portfolio)

## Introduction

I was hoping to fork my [bootcamp-portfolio](https://github.com/jrcharney/bootcamp-portfolio), but Github won't let me fork my own repos.

## User Story

```text
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptable Criteria

```text
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```

## Todo list

> This will be easy if you already have a bootcamp-portfolio

- [ ] Page has a `header`, `main`, and `footer`
- [ ] `header` has Developer's name, and `nav` with titles corresponding to different sections of the portfolio
- [ ] `nav` should have an "About Me", "Portfolio", "Contact", "Resume"
- [ ] the title corresponding to the current section should be highlighted
- [ ] Navigation link titles should have links to the corresponding section below the navigation without hte page reloading and the title of that section should be highlighted.
- [ ] The "About Me" section should load by default and have it's link highlighted
- [ ] The "About Me" section should have a recent photo or avatar of the developer with a short biography.
- [ ] The "Portfolio" section should have should have images of (at least) six images with links to both the deployed applications and the corresponding Github repository.
- [ ] The "Contact" section, should have a form with fields for a name, email address, and a message. (Probably some CAPTCHA too.)
- [ ] When you unfocus ("blur") from a field without entering text, you should get a notification that the field is required.
- [ ] The email field triggers a notification if an invalid email address is entered.
- [ ] The "Resume" section should contain a downloadable version of your resume. (You probably shouldn't include your personal info on this version.) The resume should include a list of your proficient skills.
- [ ] The "Footer" section should have text or and icon link to your Github and LinkedIn profiles and maybe some other links (e.g. Stack Overflow, Twitter.)
- [ ] Screenshot of the site on the github repo.
- [ ] Link to the deployed application and the github repo.
- [ ] Use a "mobile-first" design.
- [ ] Pick a different color scheme this time. (The "Pumpkin Spiced" theme from the github pages version was a bit much.) Obviously, don't use the Bootstrap color scheme. Try a new resource such as [Coolors](https://coolors.co/)
- [ ] Use React to render the site (`npx create-react-app <app-directory>`)
- [ ] React Elements
  - [ ] `Header` for the `<header>` section.
  - [ ] `Navigation` (inside `Header`? I think it might be better next to it. See what I did with the bootcamp-portfolio)
  - [ ] `Project` (used multiple times in the "Portfolio" section.)
  - [ ] `Footer` for the `<footer>` section
- [ ] Deploy onto Github Pages (Oh good. Heroku is a P.I.T.A.)

The good news is, you probably should have *most* of this done already from a previous assignment.
