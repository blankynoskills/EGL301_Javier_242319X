# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# ContentSubManager

explain your node module here.

# How to use Node Module

create a new JS file (can be called app.js) and have 
> const manager = require('./Javer_ContextSubManager');
at line 1
open terminal and write "node app.js"

1) Add new subscriber
   
To add new subscriber, write console.log(**manager.addSubscriber(userID, username, tier, rewardPoints)**)

Example:
> console.log(manager.addSubscriber(105, "Alice", "Premium", 6));

Expected Outcome:
> "Successfully added Alice at the Premium tier for 6 months."

2) Update user's tier

To update the user's tier, write console.log(**manager.updateAccessTier(userID, "{tier}")**)

Example:
> console.log(manager.updateUserTier(101, "Premium"));

Expected Outcome:
> "User 101 upgraded from Basic to Premium."

3) Verify user's tier access

To verify if user have a specific tier access, write console.log(**"Does User {userID} have {tier} access?", manager.verifyTierAccess(userID, "{tier}")**)

Example:
> console.log("Does User 103 have Premium access?", manager.verifyTierAccess(103, "Premium"));

Expected Outcome (assume User 103 is a basic tier):
> "Does User 103 have Premium access? false"

4) Billing Cycle

To bill the user's subscription tier, write console.log(**manager.processBillingCycle()**)
What it will do is it will take the **monthsRemaining** and minus it by one.
If user's subscription **monthsReamining** is reduced to 0, downgrade their subscription to "Free" tier.

Expected Outcome (assuming there is subscription expiring):
> "Billing cycle processed. 2 accounts expired and were downgraded to Free."

5) 


# References
Provide the references that you have used to support your assignment. 

Website used for reference: https://www.twitch.tv
