# Peakon Tests

Demo: [https://peakon-d6c66.web.app](https://peakon-d6c66.web.app)

## Install

```
git clone https://github.com/richardhealy/react-autocomplete.git
cd react-autocomplete
yarn install
```

## Start

```
yarn start
```

## Tests

```
yarn test
```

Notes:

### Data

Data from: https://gist.github.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e

The spec mentioned that the autocomplete was to find "managers" from within the data.
Looking at the data structure, it was not clear which of the employees were managers.
The first thing I would do before completing this task would to clarify the specification
to ensure that myself (or the team) understood the data structure and which data to 
filter on. 

For simplicity, I have looped over the `data` elements of the structure to pull in 
employees.

### Email

The `included` section was the only section that included an email record with. For 
this demo, as I am using the `data` section. For this demo, the code generates the 
email to include. Obviously, I would try to understand the data more to make sure
we are building functionality as expected.

### CSS

For this demo, i've opted to pure css includes rather than CSS-in-JS. Either 
technique could be used, depending on understanding the requirements deeper.


### Arrow dropdown?

The arrow in the textbox is confusing from a usability point of view. I would expect 
users to click this and it gives the impression that this is a dropdown. As it wasn't 
clear what expected behaviour was for this arrow, i've included it for asthetic
reasons (not clickable). If this was a UX / UI spec that I had received for a live
project, I would speak to UX / Product team to clarify expected behaviour.


### Placeholder

There has been discussion that placeholders aren't good from an accessibility point of 
view. See the following article for more details. I've included it as it was required
in the visual specification.

https://www.smashingmagazine.com/2018/06/placeholder-attribute/

### Localisation

Localisation has not been considered for this demo. It would be something that I would
like to consider if this was a live task. (right-to-left usability and string replacement)


### No results

I would expect the spec to include UI / UX for when the string does not match. As this 
spec doesn't mention it, I have not included it in this demo.


### Base64 in the CSS?

I've baked some images for the arrow in as Base64 encoded image strings. Sometimes this 
is frowned upon, but I have done this for simplicity.


### Emzyme tests

There are some unit tests to test business logic or functions that are candidates for 
logic bugs, but I have not included any Emzyme tests. I would usually do this for 
live product.

### Other notes

I haven't included any lazy loading, code splitting or PropType code of reducing 
bundle size. I would typically add this at the start of a project to ensure 
optimization is considered from day one.


