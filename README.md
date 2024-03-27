This is a project that is very close to my heart. As a developer, I see my self first and foremost as a problem solver. 
My daughter loves stories, especially "scary" stories. I wanted to give her a fun way to enjoy stories that were made just for her, and this 
project was the result. I originally wrote this using Python and used public domain stories that were randomly selected for her.
Over time, I wanted to do something more personal for her, so I created a story tree that would produce a different story based off the decisions
she made (very mush like the old-school books that would have you flip to page 23 if you wanted to read a specific plot line). I then wanted to challenge myself to refactor the project using Javascript, since I have been learning full stack development and was practicing interacting with diffrenet APIs.

This project is the result of those efforts, and I hope it can inspire others to make things for people in their lives. I heard a long time ago that
if you want to create something, make it for someone that you love, and it will always come out perfect. I hope you all enjoy.

Feel free to fork and add anything that you wish, or to even use a boiler plate for some other Discord bot project you may have in mind.

# How to get started
1. You will need to create a Discord application using a Discord Developer account
2. Create a bot with a name and allow all intents using the three toggle switches just below Privileged Gateway Intents under the "Bot" tab on the left
3. On the left, click on OAuth2, then under OAuth2 URL Generator, select "bot" and "applications.commands"
4. Bot Permissions will display beneath, I suggest giving admin permissions for those who do not know specifics, otherwise, choose your desired permissions
5. copy generated URL and paste into a seperate browser tab
6. Authorize bot and add to desired server (guild)

# Before deploying bot
You will need to copy your bots token, it is found under the4 "bot" tab on the left. Click "Reset Token" and confirm reset. It will display and you can copy.

# Secure your token with a .env or config.js file and use .gitignore if you upload anywhere!
Keep your token secure. If compromised, follow the above instructions and reset your token. It will create a new one.