'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Reviews', [
      { rating: 5, review: "To put it short, Horizon: Zero Dawn is a stunning game. Every detail that deserved or should have attention received it.", gameId: 1 },
      { rating: 5, review: "Horizon is one of my favorite games of all time, with Titanfall (1 and 2) and Terraria following closely behind it.", gameId: 1 },
      { rating: 3, review: "I'm glad I tried it, but for me it was more action/ adventure than RPG.", gameId: 1 },
      { rating: 4, review: "I thought the concept was amazing and I did love that about the game but the visuals felt underplayed by the Heads Up Display", gameId: 1 },
      { rating: 4, review: "The game is just a joy to play. Every level is unique and brimming with charm, from the begrudged but determined enemies, to the vibrant backgrounds", gameId: 2 },
      { rating: 5, review: "This game is very challenging and beating the level gives you the feeling of satisfication.", gameId: 2 },
      { rating: 5, review: "This game if I could rate this over (100) 5 stars ratings I would lol.This out of all Fallout series is by far the BEST RPG game out there", gameId: 3 },
      { rating: 1, review: "Where almost every other title in this series adds something, and creates something unique to gaming, Fallout NV Plays things as safe as humanly possible.", gameId: 3 },
      { rating: 5, review: "This is a real RPG. You can play this game so many different ways it's unreal.", gameId: 3 },
      { rating: 4, review: "A pretty good entry into the Fallout series, an excellent game from Bethesda.", gameId: 3 },
      { rating: 4, review: "Crash Team Racing difficulty, memorable track design, and addictive Power Slide mechanic make it a kart racer worth playing", gameId: 4 },
      { rating: 5, review: "The combat and mission design are outstanding. The visuals, voice acting, soundtrack, and direction are miles ahead of the competition.", gameId: 5 },
      { rating: 4, review: "Overall, I'd say 4-4.5 worthy. Definitely one of the best games I've played in a while, but not perfect. Character development was amazing, gameplay was awesome", gameId: 5 },
      { rating: 4, review: "Played this game in 2020 for the first time. Lots of fun, great story.", gameId: 6 },
      { rating: 1, review: "Not every game that is labelled as a masterpiece holds up..and not everyone would have the same taste..", gameId: 6 },
      { rating: 5, review: "One of my all-time favorite games. Still packs a punch to this day.", gameId: 6 },
      { rating: 5, review: "Persona 5 is arguably one of the greatest games ever made and one of the finest JRPGs I have ever played in my life.", gameId: 7 },
      { rating: 3, review: "This is a 10/10 game for about the first 50 hours..... ....  I enjoyed this game most when it was concentrating on the personal journey stories...", gameId: 7 },
      { rating: 4, review: "Overall it was an engaging and fun experience, and especially with so many hours of content I think it's worth picking up.", gameId: 7 },
      { rating: 5, review: "In short, it's a terrific unending masterpiece of a game -- and one that will never fall victim to an over-exaggeration of its lofty status.", gameId: 8 },
      { rating: 5, review: "With its strong story, well-written dialogue, terrific voice cast, impressive graphics, great in-game sound, it's extremely entertaining", gameId: 8 },
      { rating: 2, review: "It's ok...", gameId: 9 },
      { rating: 4, review: "From the eyes of a newer player that joined in BFA and played in classic for some time, I'd say the game is pretty decent", gameId: 9 },
      { rating: 4, review: "Pokémon is a very traditional oriented Japanese RPG overhead view, super deformed characters, tile-based dungeons, random creature encounters.", gameId: 10 },
      { rating: 4, review: "It is challenging, but certainly not impossible, and it's extremely addictive.", gameId: 10 },
      { rating: 3, review: "The graphics are very cute, but excellent -- HAL rendered Kirby at many different angles to give the illusion that he's rolling around", gameId: 11 },
      { rating: 3, review: "Yes, Kirby Tilt 'n' Tumble is a gimmicky game, but it's a gimmicky game done well.", gameId: 11 },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews')
  }
};
