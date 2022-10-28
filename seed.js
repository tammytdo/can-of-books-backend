require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_Url);

const Book = require('./models/bookModel.js');

async function seedBooks() {
  
  await Book.create({ title: '1984', description: 'It is 1984, and the worlds\' three major powers-Oceania, Eurasia and Eastasia-are constantly at war. In Oceania, where the Party is in power, the thought police unearth every act of dissent, and Big Brother is always watching. Winston Smith, a dutiful citizen of Oceania, works for the Ministry of Truth as a propaganda writer who rewrites history to suit the needs of the authoritarian government. But when Winston falls in love with fellow worker Julia, they begin to question the very system they work for, placing them in immense danger. Pursuing their forbidden love affair, Winston plans a rebellion against the Party in order to regain the freedom to shape his own future. But the ever-watchful Big Brother will not tolerate opposition, and for those who speak up against the system or dare to think what the Party does not want them to think, Room 101 awaits them . . . 1984 is George Orwell\'s haunting prophesy of the future, which has held multiple generations of readers spellbound in its chilling and terrifying vision of life under a totalitarian regime. Powerful and unforgettable, this still-relevant novel explores the obliteration of truth, individuality and liberty in a world where the ruling power seeks to control everything, from information to thought and memory.', status: 'LIFE-CHANGING' });
  
  await Book.create({ title: 'The Hobbit', description: 'Like every other hobbit, Bilbo Baggins likes nothing better than a quiet evening in his snug hole in the ground, dining on a sumptuous dinner in front of a fire. But when a wandering wizard captivates him with tales of the unknown, Bilbo becomes restless. Soon he joins the wizard’s band of homeless dwarves in search of giant spiders, savage wolves, and other dangers. Bilbo quickly tires of the quest for adventure and longs for the security of his familiar home. But before he can return to his life of comfort, he must face the greatest threat of all - a treasure-troving dragon named Smaug. In this fantasy classic, master storyteller J.R.R. Tolkein creates a bewitching world filled with delightful creatures and thrilling dangers. Narrator Rob Inglis will hold listeners of all ages spellbound with his skillful portrayal of hobbits, dwarves, and enchanted beasts.', status: 'FAVORITE FIVE' });
  
  await Book.create({ title: 'Harry Potter and the Sorcerer\'s Stone', description: 'Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter \'H\'. Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!', status: 'RECOMMENDED TO ME' });
  
  console.log('Books successfully seeded.');
  
  mongoose.disconnect();
}

seedBooks();