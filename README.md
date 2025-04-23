# ahri-unbastardized
Wedding website for me and lizzy

## Layout:

### Pages

homepage

RSVP

Registry

About/Our story

Travel and Stay

### Notes / Ideas

rsvp - export the formdata to a json file, can upload to a spreadsheet from there

form fields - firstname, lastname, amount in party including yourself, option to add other names


Outdoor wedding disclosure

Dress Code

Venue Directions

Map of Venue?

Wedding schedule?

Wedding tunes?

Children?

Plus ones?

Printable E-invitation

## Netlify

Deploying is tricky tricky with netlify, when using react router. You'll get 404's if you don't do things the right way. The key is to set up your deploys using a netlify.toml file. There you can set a couple config values that are helpful. The important portion is setting up a redirect:


> from = "/*"
> 
> to = "/index.html"
> 
> status = 200

Deployment steps are as such, 1. npm run build, 2. netlify deploy --prod choose 'build' as the publish directory.
