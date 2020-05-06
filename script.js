$('.button').on('click', function() {
  $('.button').css('border-bottom', '0px solid #47cfff');
  setTimeout(function() {
    $('.button').css('background-color', 'rgba(0,0,0,0)');
  }, 1000);
  setTimeout(function() {
    $('.button').remove();
    $('.text').css('display', 'block');
    play();
  }, 2000);
});
let time = 0;
function play() {
  text("Hello", 0);
  text("You might be wondering what this is", 3000);
  text("Same", 3000);
  text("What in the frickity frock is this??", 3000);
  text("For realsies tho, you're probably bored of these", 3000);
  text("But as my bestie you're gonna have to deal", 3000);
  text("Intially I wanted to draw you something", 3000);
  text("But of course my laptop can't run anything", 3000);
  text("I know you're going through something right now", 3000);
  text("And I so wish I could help you", 3000);
  text("But you want to keep it to yourself", 3000);
  text("And I respect that", 3000);
  text("Just know that you're not alone in this", 3000);
  text("If it's about Mo, he's stinky first of all", 3000);
  text("No matter how long it takes I will support you", 3000);
  text("Unless I slip and fall off a cliff, in which case", 3000);
  text("You on yo own, shtoops", 3000);
  text("I'm here for you", 3000);
  text("Quick lil break to tell you that...", 3000);
  text("BRO THE FACT THAT YOU NEEDED SPACE RIGHT AS I HAVE THAT DREAM", 3000);
  text("SPOOKYYY IT WAS LIKE 5 AM AND I WAS SO WORRIED WHAT IN THE FRICK", 3000);
  text("LIKE AM I DISOWNED WHAT IN THE HECKERS", 3000);
  text("But moving on from that quick panic attack", 3000);
  text("I will now tell you a story from my past", 3000);
  text("BUT FIRST, A MESSAGE FROM OUR SPONSOR, DUOLINGO", 3000);
  text("J'aime le cul", 3000);
  text("On to the story", 3000);
  text("It was a dark and gloomy night", 3000);
  text("I was in my room gaming, terrified of the dark", 3000);
  text("But then it became a bright and sunny day", 3000);
  text("Bless", 3000);
  text("However, I was still gaming, to the point where I passed out", 3000);
  text("When I woke up, my laptop was stolen", 3000);
  text("\"Dad\" was my first thought", 3000);
  text("I go search his room but it's not there", 3000);
  text("You're so bored of this aren't you", 3000);
  text("DRAMATIC MUSIC (ASTAGHFIRULLAH)", 3000);
  text("So I smack my donkey's behind and we ride off into the sunset", 3000);
  text("We finally reach the sunset after days of travel", 3000);
  text("And there are 7 more donkeys standing in a circle", 3000);
  text("I tell my donkey, Bob, that he can pick any one of them", 3000);
  text("And they'll be soulmates forever", 3000);
  text("But then this absolute chad picks all of them", 3000);
  text("And I now have a harem of donkeys", 3000);
  text("But then the bad pigs came", 3000);
  text("These pigs were oh so bad", 3000);
  text("The baddest piggies to be bad pigs", 3000);
  text("They liked to piss in drawers", 3000);
  text("And blame it on the donkeys", 3000);
  text("The donkeys and the pigs had bad blood", 3000);
  text("The donkeys, however, had a plan", 3000);
  text("Bob decided to attack the pigs in their sleep", 3000);
  text("A pre-emptive strike, he called it", 3000);
  text("But I told Bob", 3000);
  text("\"Where are your morals? You think violence will fix anything?\"", 3000);
  text("And he says to me", 3000);
  text("\"Ya homie\"", 3000);
  text("That night, the pigs were all deported into Antarctica", 3000);
  text("And the donkeys lived happily ever after", 3000);
  text("The leader of the donkeys, Aya, awarded Bob for being a homie", 3000);
  text("Bob, however, being the humble beast he is", 3000);
  text("Disowned Aya, for she is The Great Disowner", 3000);
  text("And then they lived happily ever after", 3000);
  text("Even Aya, who was disowned", 3000);
  text("The end", 3000);
  text("Hope you have the bestest night stoopid <3", 3000);
}
function text(words, x) {
  time += x;
  setTimeout(function() {
    $('.text').css('color', 'rgba(0,0,0,0)');

    setTimeout(function() {
      $('.text').html(words);
      $('.text').css('color', 'rgba(0,0,0,1)');

    }, 500);
    if (words == "DRAMATIC MUSIC") {
      let y = $('#song');
      document.getElementById("song").play();
    }
  }, time);

}
