## You want to verify that the user of your app is a human and not a robot.

## Acceptance Criteria:-

Render 6 images out of which 5 are different and 1 is a copy of one from the previous 5.

Randomly arrange all 6 images every time the page reloads.

Every time choose a random image to repeat.

Render a h3 tag with id=”h” with text “Please click on the identical tiles to verify that you are not a robot.”

On one or more clicks on images, Reset button should appear with id="reset" and should disappear when it is clicked (i.e., after state is reset to initial state).

Image tags should have class with names: img1, img2, img3, img4 and img5. One of them should repeat as one image repeats. That means, identical images should have identical class-names. These classes have already been styled for you in style.css. Just give these class names to your images and images will be automatically rendered on them taken from an api.

When two images are clicked, a verify button should appear which will be used to verify the user. It should have innerHTML Verify and id="verify". Even for more than 2 clicks, the verify button should not be rendered.

When two images are selected and both the images are identical, then render a p tag with id="para", containing the text You are a human. Congratulations!. If the images clicked are different then render a p tag with id="para", containing the text: We can't verify you as a human. You selected the non-identical tiles.

Please ensure that double clicking the same image does not render the verify button.

Use click event to govern the image selection.

There are 3 states:

State 1: When user has not clicked the tiles.In this case a message should show- Please click on the identical tiles to verify that you are not a robot and no Verify button or Reset button should show because no tiles have been clicked.

State 2: When user has clicked at least one tile.In this case Reset button should show. Clicking on this button takes you to State 1

State 3: When user has clicked both the tiles.In this case Verify button should also show.

State 4: When the Verify button is clicked.

In this case, Verify button should disappear and You are a human. Congratulations! or We can't verify you as a human. You selected the non-identical tiles. message should come up depending on whether the tiles clicked were identical or not.
