/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

const mrGreen = {
first_name: "Jacob",
last_name: "Green",
color: "green",
description: "He has a lot of connections",
age: 45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur",
} 

const drOrchid = {
frst_name: "Doctor",
lst_name: "Orchid",
color: "white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26,
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation: "cientist",
}

const profPlum = {
first_name: "Victor",
last_name: "Plum",
color: "purple",
description: "Billionare video game designer",
age: 22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer"
}

const missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}

const mrsPeacock ={
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}

const mrMustard ={
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
}

// Weapons
name: rope = {name: 'rope', weight: 10};
name: knife = {name:knife, weight: 8};
name: candlestick = {name: 'knife', weight: 2};
name: dumbbell = {name:'dumbell', weight: 30};
name: poison = {name: 'poison', weight: 2};
name: axe = {name: 'axe', weight: 15};
name: bat = {name: 'bat', weight: 13};
name: trophy = {name: trophy, weight: 25};
name: pistol = {name: 'pistol', weight: 20};

// Rooms
name: din = ['Dinning Room'];
name: con= ['Conservatory'];
name: kit = ['kitchen'];
name: stu = ['Study'];
name: li= ['Library'];
name: bilrm = ['Billiard Room'];
name: lo= ['Lounge'];
name: ball= ['Ballroom'];
name: hall = ['Hall'];
name: spa = ['Spa'];
name: livr= ['Living Room'];
name: obs= ['Observatory']
name: the= ['Theater'];
name: guehou = ['Guest House'];
name: pat= ['Patio'];


var characterArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

var roomsArray = [din, con, kit, stu, li, bilrm, lo, ball, hall, spa, livr, obs,the,guehou, pat];  ]

var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

function randonSelectpr (array){
theElement = array[Math.floor(Math.random()*arr.length)]
return theElement;

function randomMistery(characters, weapons, rooms){
  let mistery = [];
  mistery.puch(randomSelector(character));
  mistery.puch(randomSelector(weapons));
  mistery.puch(randomSelector(rooms));
  return mistery;

function revealMystery(envelope){
  let answer = "<FIRST NAME> <LAST NAME> killed Mr. Bobby using the <WEAPON> IN THE <ROOM>"; 
}

}
const misteryEnvelope = randomMistery(characterArray, weaponsArray, roomsArray);
// return answer;

}

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

describe('Find a random element of the array - randomSelector', function () {
  it('Defines randomSelector', function () {
    expect(typeof randomSelector).toBe('function');
  });

  it('Return undefined if the array is empty', function () {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return undefined if the array is empty', function () {
    expect(randomSelector([])).toBe(undefined);
  });

  it('Return the element of a single value array', function () {
    expect(randomSelector(['ab'])).toBe('ab');
  });

  it('Should return an element of the array', function () {
    var array = ['ab', 'zz', 'zx', 'zy'];

    expect(array.indexOf(randomSelector(array))).toBeGreaterThan(-1);
  });


  \
  it('Return a random element of the array', function () {
    var spy = spyOn(Math, 'random').and.returnValue(0.5);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('aab');
    spy.and.returnValue(0.1);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('a');
    spy.and.returnValue(0.9);

    expect(randomSelector(['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'])).toEqual('kas');
  });
});

describe('Pick a random mistery - pickMistery', function () {
  it('Defines pickMistery', function () {
    expect(typeof pickMistery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof pickMistery()).toEqual('object');
  });

  it('Return a non empty array', function () {
    expect(pickMistery().length).toBeGreaterThan(0);
  });

  it('Return an array with 3 elements', function () {
    expect(pickMistery().length).toEqual(3);
  });

  it('Return a killer on the first index of the array', function () {
    expect(charactersArray.indexOf(pickMistery()[0])).toBeGreaterThan(-1);
  });

  it('Return a weapon on the second index of the array', function () {
    expect(weaponsArray.indexOf(pickMistery()[1])).toBeGreaterThan(-1);
  });

  it('Return a room in the third index of the array', function () {
    expect(roomsArray.indexOf(pickMistery()[2])).toBeGreaterThan(-1);
  });
});

describe('Reveal the mistery - revealMistery', function () {
  it('Defines revealMistery', function () {
    expect(typeof revealMistery).toBe('function');
  });

  it('Return an array', function () {
    expect(typeof revealMistery([{ first_name: 'aa', last_name: 'abc' }, { name: 'abd' }, { name: 'abb' }])).toEqual('string');
  });

  it('Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', function () {
    expect(revealMistery([{ first_name: 'Victor', last_name: 'Plum' }, { name: 'poison' }, { name: 'Billiard Room' }])).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
