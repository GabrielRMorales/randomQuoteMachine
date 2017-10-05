$(document).ready(function(){
var quotes=["Life is about making an impact, not making an income.","Whatever the mind of man can conceive and believe, it can achieve.",
            "Strive not to be a success, but rather to be of value.","I attribute my success to this: I never gave or took any excuse.",
            "You miss 100% of the shots you don’t take.","The most difficult thing is the decision to act, the rest is merely tenacity.",
            "Every strike brings me closer to the next home run.","Life is what happens to you while you’re busy making other plans.",
            "We become what we think about.","Life is 10% what happens to me and 90% of how I react to it.",
            "I have decided to stick with love. Hate is too great a burden to bear.",
            "Don't cry because it's over, smile because it happened.", "Be yourself; everyone else is already taken.",
            "So many books, so little time", "You only live once, but if you do it right, once is enough.",
            "Be the change that you wish to see in the world.","No one can make you feel inferior without your consent.",
            "If you tell the truth, you don't have to remember anything.","A friend is someone who knows all about you and still loves you.",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."];

var ppl=["Kevin Kruse","Napoleon Hill","Albert Einstein", "Florence Nightingale","Wayne Gretzky","Amelia Earhart","Babe Ruth",
         "John Lennon","Earl Nightingale","Charles Swindoll", "Martin Luther King", "Dr. Seuss","Oscar Wilde","Frank Zappa","Mae West",
         "Gandhi","Eleanor Roosevelt","Mark Twain","Elbert Hubbard","Ralph Waldo Emerson"];

$("#click").click(function(){
  var x=getRandomArbitrary(0,20);
  $("#quotebox").hide().html('"'+quotes[x]+'"').fadeIn("slow");
  $("#speaker").hide().html("–"+ppl[x]).fadeIn("slow");
var tweet="https://twitter.com/intent/tweet?text="+$("#quotebox").html();
$(".twitter-share-button").prop("href", tweet);  

});

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var tweet="https://twitter.com/intent/tweet?text="+$("#quotebox").html();
$(".twitter-share-button").prop("href", tweet);
});
