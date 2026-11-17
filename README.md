# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# How to use Node Module

create a new JS file (can be called app.js) and have 
> const manager = require('./Javer_ContextSubManager');
at line 1

1) Add new subscriber
   
To add new subscriber, write console.log(**manager.addSubscriber(userID, username, tier, rewardPoints)**)

Example:
> console.log(manager.addSubscriber(105, "Alice", "Premium", 6));

# References
Provide the references that you have used to support your assignment. 

Website used for reference: https://www.twitch.tv
