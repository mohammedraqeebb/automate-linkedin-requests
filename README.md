# automate-linkedin-requests

**Arriving at Solution:**

This is the first time I have built a chrome extension.
So I first learnt about manifest.json and the different fields such as permissions,content_scripts,browser_action and background.
I wrote popup.html,popup.css, popup.js files. 

Essentially, the connect button in the popup.html with id of startButton is targetted using getElementId dom manipulation
and a click event is added to to it that connectsPeople in the search page.


Now the most important function is the connectButtonsFunction, 
I inspected the className and id names of connect button and couldn't find anything consistent that I can use to target just the connect buttons,
so I used getElementsByTagName dom manipulation method to target all the buttons, the buttons that have span as a child element containing
text, 'Content' is the button that has to be clicked. The user flow now for sending connection requests is different than shown on the video.
Users can add a note as well while sending the connection or just send. To click the send button, I have used the same technique I used before. 
I also thought of leveraging map data structure to optmize the performance of this code, but since it were just 50 buttons on one page and therefore, 
this code should work just fine. 

I tried to run this code,but it didn't work. I made use of ChatGPT, to figure out what's wrong, then I was advised to make use of background.js, it worked!
 

