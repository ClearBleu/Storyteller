import dotenv from "dotenv";
import * as pkg from "discord.js";

const { Client, IntentsBitField } = pkg;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
    ],
});


dotenv.config();
const token = process.env.TOKEN;

client.on('ready', readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) =>{
    if (message.author.bot){
        return
    }
    
    switch (message.content) {
        case "hello": message.reply('hello')
            break;

        case 'ready': message.reply('Its a fall night and a chill is in the air… Leaves blow across the ground and the sun is beginning to set. In your neighborhood, the shadows of the houses grows long. You hear a familiar voice calling out, but you can\'t understand what they are saying… Do you go to see who is calling? Yes, go and see or no, head back home?');
            break;

        case 'yes, go and see': message.reply('You arrive at the abandoned house in your neighborhood. You can see there is a light flickering in the window and the front door is open a little. Go inside or stay outside?');
            break;

        case 'no, head back home': message.reply('As you are heading back to your house, you see a stray dog run into a bush and you see your friend Daliah running after him. You decide to help her chase after the dog and you corner the dog in the alley behind a neighbors house. Do you reach to pet the dog or tell Daliah to pet the dog? Me, Daliah?');
            break;

        case 'me': message.reply('You reach out for the dog and it begins to cry. You try to comfort the poor thing. "It\'s okay I\'m not going to hurt you", you tell the dog. You can tell that it is scared. Just as you take a step towards it, the dog runs between your legs and back down the alley Do you chase after the dog or stay and talk with Daliah? Chase the dog, don\'t chase?');
            break;

        case 'chase the dog': message.reply('You run after the dog. He sprints into the woods out of sight. You try to find your way back but you end up slipping and falling down a deep, deep hole. *Pretend to fall* AH!!!!')
            break;
    
        case 'pretend to fall': message.reply('You bump you head on the way down and you never feel yourself reach the bottom. When you wake up you\'re in your bed and a women dressed in a black cloak is standing over you. Ask who she is or get up and run?')
            break;
        
        case 'ask who she is': message.reply('"Why it\'s me, your mother." She replies. "Daliah found you in the woods and you must have bumped your head. But now your up and just in time to go trick-or-treating. Time to go put on your costume!" *Make a confused face*')
            break;
        
        case 'make a confused face': message.reply('You put on your costume and go down to the door. Daliah is waiting for you and she is dressed up like a zombie doctor. You ask her about the dog that you were chasing, but she says it never came back. You two forget all about the dog and go get some candy.')
            break;

        case 'go inside':message.reply('You go up to the door and you hear a ticking coming from inside. You push the door open with a loud "SCREEEEECHH". Its very dusty inside and you are holding in a sneeze so you don\'t alarm anyone that might be inside. You notice the ticking is coming from a large clock in the house. It is the only thing that is in the abandoned home… Do you go up to the clock or try to leave the house? Go to the clock, leave the house?')
            break;

        case 'go to the clock':message.reply('You walk up to the clock and reach for it handle to look inside. Quickly grabbing the knob, you pull it open and you are taken back by what you see inside! It\'s a little purple spider hanging from a single string of web. Do you greet the spider or try to squish him? greet, squish?') 
            break; 
        
        case 'greet':message.reply('"Hello, Mr. Spider. You scared me so much I almost screamed!" The spider chuckled and replied, "That\'s a lot better than the other little girl that was in here not too long ago. She chased a stray dog in here and lost track of him. Then I supposed she got curious about my humble home and decided to come opening my door. I was going to help her, but she ran off so fast, I think she broke the front door on the way out!" Be nice or be mean to him?')
            break; 
        
        case 'be nice':message.reply('"That\'s very funny!", you reply "that was probably my friend Daliah, she was worried about a stray dog earlier." The spider smiles really big, "well, since you\'ve been so nice and understanding, I want you to have something. Consider it an early Halloween treat!" The spider walks you to a cabinet that has so much candy that you had to go home and get your wagon to carry it all! Happy Halloween!')
            break;
        
        case 'leave the house':message.reply('You start to turn around but then realize the door is stuck… You have no choice but to stay in the house. Looking around you see a small hole in the floor board. *Look in the hole*')
            break;

        case 'look in the hole': message.reply('You kneel down close to the floor, looking into the hole…. POP! Out comes a mouse with scary skull mask! "What are you doing in my house little girl!?" *SCREAM!!*')
            break;
        
        case 'scream!!': message.reply('"Whoa!" said the mouse, "Don\'t scream! You\'re the one that\'s scaring me around here! Little girls can be quite scary, you know!\" *Make a mean face*')
            break;
        
        case'make a mean face': message.reply('"Yeah that\'s the kind of scary I\'d expect from a LITTLE GIRL!" the mouse says.  "I tell you what,  if you leave me alone and stop scaring me, I\'ll tell you where you can the best candy on Halloween! *OK!*')
            break;
        
        case 'ok!': message.reply('The mouse tells you that he goes in an out of all the houses in this neighborhood and he knows where everyone keeps their candy. "If you go two houses down from you they have a stash of candy so big you\'ll be full of chocolate until next Halloween!" *Halloween night')
            break;
        case 'halloween night': message.reply('On Halloween night, you go to the house the mouse told you, and sure as all, there is a huge bucket of all your favorite candy for you to have!')
            break;
        
        case 'be mean': message.reply('"Hey! That was probably my friend Daliah! Don\'t make fun of her! The spider apologizes,  but says that little girls can be so mean and suggests you should leave. You climb through one of the windows and walk back home. Back at the abandoned house, the spider enjoys a pile of candy dropped by kids  that have wandered in the house over the years.')
            break;
        
        case 'squish': message.reply('You attempt to squish the spider, but he yells out "WAIT! What are you doing?! This is my home and you came in here to ATTACK me??!" Apologize or try to squish him anyways?')
            break;
        
        case 'apologize': message.reply('"Well that\'s alright, I suppose. I know people can be scared of spiders these days. If you promise not to hurt me, I can show you the way out of here." *Promise*')
            break;
        
        case 'try to squish him anyways': message.reply('You squish him and all of a sudden a hundred spiders come out and start to spin webs on you. You are scared and sticky and break out of a window and run home without ever learning the mystery of the old house…*')
            break;

        case 'promise': message.reply('The spider smiles really big, "well, since you\'ve been so nice and understanding, I want you to have something. Consider it an early Halloween treat!" The spider walks you to a cabinet that has so much candy that you had to go home and get your wagon to carry it all! Happy Halloween!')
            break;
        
        case 'stay outside': message.reply('You stay standing on the front porch. You hear a dog barking from the backyard of the house. This is weird because nobody lives here. Its probably just a stray dog that may have made its way in. The barking gets louder so you walk over to the fence… Do you look over the fence? Look over or don\'t look over')
            break;
        
        case 'look over': message.reply('You look over and you don\'t see anything. Just then, a cat comes running out of the fence but it looks like it got in a little fight. *Ask the cat if it is alright*')
            break;
        
        case 'ask the cat if it is alright': message.reply('The cat looks at you and says "I\'m a little scratched up, but I\'ll be ok! That darn dog ran off with some of my candy stash!" *Make a shocked face*')
            break;
        
        case 'make a shocked face': message.reply('"What you never heard a cat talk before?" he said. "I tell you what, if you bring me some candy after Halloween, I\'ll give you a gift. That\'ll make up for what that dog stole from me" *OK, deal.*')
            break;
        
        case 'ok, deal.': message.reply('For Halloween, you dress up as a cat and you return to the fence where you first saw the scratched up cat. You give him some of your candy. He leaves and returns with a rainbow kitty headband. "Now you can be an honorary cat forever! Thank you!"')
            break;

        case 'don\'t look over': message.reply('Just then, a cat comes running out of the fence but it looks like it got in a little fight. *Ask the cat if it is alright')
            break;

        case 'don\'t chase': message.reply('The poor dog runs off and is never seen again… The End.')
            break;

        case 'get up and run': message.reply('"Hey! Wait!" the figure says, and you turn around to see it\'s your mom. She says that they found you in the woods with a little dog near by. You hear barking in the next room. *make a surprised face*')
            break;
        
        case 'make a surprised face': message.reply('The dog comes running into your room. He stayed around to make sure you were ok after you bumped your head. You decide to give the dog a name. What do you want to name the dog? *give the dog a name*')
            break;
        
        case 'give the dog a name': message.reply('You and the dog have a great time that night going and getting candy. Daliah even came along and she was dressed as a puppy for Halloween!')
            break;

        case 'daliah': message.reply('As Daliah reaches for the dog, the dog begins to snarl and snips at her hands. "It\'s ok little guy, I\'m not going to hurt you", she tells the stray. The dog allows Daliah to pet him, and she picks him up. "One of us should take this dog home," Daliah tells you, "should I take him or can you take him to your house?" You take the dog or Daliah takes the dog')
            break;
        
        case 'daliah takes the dog': message.reply('Dahlia takes the dog home. The next day you ask her where the dog is. She says an old woman came to her house that night and her dad gave the dog to her. She said when she goes to the old lady\'s house on Halloween, SHE\'S going to get the biggest candy bars the store has!')
            break;
        
        case 'you take the dog': message.reply('That night a storm rolls in. The doggie begins to cry. You look at your window to wind and rain shaking the trees. A flash of lightening lights the sky and you see a shadowy figure  across the street. Then another flash of lightening happens and the figure is gone. Do you go tell your parents? Go tell or don\'t go and tell')
            break;

        case 'go tell': message.reply('Dad gets up and looks out he window. "There\'s nothing out there…" he says, "go back to sleep". The thunder booms as he walks out of the room. *Go to sleep*')
            break;
        
        case 'go to sleep': message.reply('The next day you wake up and the dog is nowhere to be found. You look around your room and you see that your window is open. The only thing that is left behind is a hook……. EEEEEEEEEEEEE!!!')
            break;

        case 'don\'t go and tell': message.reply('The thunder booms louder outside and you hear a tap, tap, tap on the window. The dogs ears perk up and he starts to bark. You look out the window and see a wrinkly face staring back at you! *Scream!!!*')
            break;
        
        case 'scream!!!': message.reply('"AHHH!" says the figure in the window "Little girl don\'t scare me like that! I\'m too old for this!" You open the window after hearing her old voice. It\'s miss Granny from down the street! She lives in the old house a few houses down. *What are you doing here?*')
            break;

        case 'what are you doing here?': message.reply('She tells you that she lost her dog after it got into a fight with a cat in her backyard. She\'s been looking for him all day. She says she saw you take him but since she\'s so old she could catch up to you. *Give her the dog back*')
            break;
        
        case 'give her the dog back': message.reply('"Thank you so much for giving my little Booger a warm home for the night. If you stop by my house on Halloween, I\'ll give you the biggest candy bars the store has to offer!')
            break;

        case '!help': message.reply('`I\'m a Ghost-bot here to tell you a SPECIAL story made just for you. Just try typing "hello" or "ready" to get started with your special story! The intended responses to each part of the story are at the end of the segment. They are seperated by "or" if there are options to choose from, or written in italics. Type the response to hear the next part. IF there are no choices or actions to take, that\'s the end. Enjoy!`')
            break;
            
        default: message.reply('I didn\'t understand what you wrote. Try typing "!help".')
            break;
    }

})


client.login(token);
