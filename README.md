# Interactive Front End Milestone Project

Welcome to my Interactive Front End Milestone Project. This website, which I have named Travel-Nav, allows users to search any destination in the world and find tourist attractions, places to eat and places to stay.
Once a destination is entered into the search bar above/beside the map, the map will pan and zoom to your desired destination and will populate with markers from whichever button you have clicked from the button group adjacent to the map.
Once the  markers have populated, you can click on them and explore the infoWindow that pops up, which allows you to discover the name, address and gives a link to the establishment's website. 

## UX
This website will be used by people looking to travel to desired destinations who want to research places they may be travelling to or even for people who want to find an establishment close to them. 

  * As a user, I want to be able to search anywhere in the world on a map generated by this website.     
  * As a user, once I have entered my desired destination, I want to be able to search for tourist attractions/places of interest, places to eat or hotels near my searched location.
  * As a user, I want to be able to research establishments I have found by clicking on the markers and finding out their name, address and I would like the ability to be go to their website.   
  * As a user, I want the ability to search recommended destinations put forward by a website in order to narrow down my search options.    


## Wireframes
My project began with the wireframes in the links below but the design of the pages developed as I made them...


 * [Mobile Wireframes](https://github.com/johnnycistudent/ia-frontend-javascript-travelnav/blob/master/assets/images/mobile_wireframe.jpg)
 * [Desktop Wireframes](https://github.com/johnnycistudent/ia-frontend-javascript-travelnav/blob/master/assets/images/desktop_wireframes.jpg)


## Features

### Existing Features

  *   **Navbar** - The Navbar is edited from Bootstrap/Bootswatch and is repsonsive when the screen goes to mobile devices, with the links on the right collapsing to a Hamburger Menu. The website logo/name is featured in the top left corner at all times.
  *   **Hero Image** - The Hero Image is there to welcome the user to the website with a pleasant city coastal image view and features the call to action button with the tagline.
  *   **Call-to-Action button** - This button features the phrase "Navigate your Travels" and when clicked, scrolls down the page to the map section. 
  *   **Map section** - The Map section is directly under the hero image, easily scrollable and linked to by the CTA button in the hero image and a menu link in the Navbar. It features the Map itself, the search bar and the buttons for controlling the markers of the map.
  *   **Search bar** - The Search bar is linked to the Map and suggests autocomplete queries when the user starts typing in the input. Once the user chooses a location, the map pans to that location and generates markers based on which of the map buttons is active.
  *   **Map Buttons** - As mentioned above, the Map buttons will generate the markers of either "Attractions", "Restaurants" and "Food" depending on which is active when the user chooses a location. When the page is loaded, the map button that is active by default is the "Attractions" button. 
  *   **Map** - The Map itself renders on a full view of the world and is controlled by the search bar and the buttons above it. 
  *   **Marker Info Window** - Once the markers are generated by the users query and the map button that is active, the markers generated are clickable. Once one is clicked, an Info Window appears with the name, address, phone number and website of the establishment. 
  *   **City Break section** - The City Break section is designed to direct the user to three suggested destinations; Paris, Rome and New York. When the user hovers over the image of these cities, a button inviting them to explore the destinations appears and when clicked, the page scrolls to the map section and the map pans to the destination that is clicked on. 
  *   **Footer** - The Footer features my initials, a copyright icon and a link to my GitHub page represented by the GitHub symbol. 

### Features Left to Implement

  * Fix issue that shows the modal when you have clicked "Explore Paris/Rome/New York" when the button is changed from attractions.
  * Add comments to code. 
  * Disable "Enter" function in Searchbar 
  * Finish README

## Technologies Used
* [HTML](https://www.w3schools.com/html/html5_intro.asp) - [CSS](https://www.w3schools.com/css/) - [Javascript](https://www.w3schools.com/js/)

    This website is written using HTML, SCSS and Javascript.

* [Cloud9](https://c9.io/login)

    This website was written on Cloud9. 

* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

    This website uses Bootstrap 4.1.3 for its framework. 

* [Bootswatch](https://bootswatch.com/)

    This website uses elements from Bootswatch to build the likes of the Navbar and the buttons.

* [JQuery](https://jquery.com/)

    This website uses JQuery which helps implement javascript features from Bootstrap and the Google Maps Javascript API. 
    
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)

    This website uses Google Maps Javascript API to render Google Maps on the page. 
    
* [Google Maps Places API](https://developers.google.com/maps/documentation/javascript/examples/place-search)

    This website uses Google Maps Places API to allow the autocomplete feature to be implemented in the search bar. 

* [FontAwesome](https://fontawesome.com/)

    This website uses icons from FontAwesome in the Hero Image and the GitHub icon in the footer.

* [Google Fonts](https://fonts.googleapis.com/css?family=Muli:400,700i|Poppins:400,400i)

    This website uses 'Muli' italicised as it's logo and regular 'Muli' on the header font for the 'City Breaks' section. 
    The main font used in the body is 'Poppins' with 'sans-serif' as a fallback font. Both fonts used have two different weights; 400 and 700. 

* [GitHub](https://github.com)

    This website's repository is hosted and published on GitHub. 

## Testing

### Testing User Stories
 

## Deployment
The code for this website was pushed from Cloud9 to a repository in GitHub and is published on GitHun where you can access it here:
[https://github.com/johnnycistudent/ia-frontend-javascript-travelnav](https://github.com/johnnycistudent/ia-frontend-javascript-travelnav)



## Credits
This website was designed by John O'Connor. 

### Content

### Media 
  All of the images on this page were taken from Pixabay and were sourced using google image search under the free to use search setting. They can be found at the following links  
  
   - [Hero Image](https://pixabay.com/en/panorama-miami-florida-water-usa-2117310/).  

   - [City Break Image](https://pixabay.com/photos/montreal-skyline-city-canada-910653/).  
   
   - [Paris](https://pixabay.com/photos/montreal-skyline-city-canada-910653/).  
   
   - [Rome](https://pixabay.com/photos/rome-the-vatican-italy-1945033/).  
   
   - [New York](https://pixabay.com/photos/statue-of-liberty-new-york-manhattan-1031550/).  


## Acknowledgements

  * Hover effects html and css taken from Mike Young's website [https://miketricking.github.io/bootstrap-image-hover/](https://miketricking.github.io/bootstrap-image-hover/)  
  * Bootswatch was used for the Navbar and the buttons and then edited them to suit the website. [https://bootswatch.com/](https://bootswatch.com/)
  * [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial) and [Places](https://developers.google.com/maps/documentation/javascript/examples/place-search) API documentation and tutorials helped me understand how to render the map and places. 
  * More specifically, [Google Maps Autocomplete Hotel Search](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch) tutorial was helpful in learning how to use the search bar in conjuction with the map and for generating markers and info windows.
  * [Stack Overflow](https://stackoverflow.com/), [W3Schools](https://www.w3schools.com/) and [Slack](https://slack.com/) were very useful when coming up against problems that many other people had also encountered.


