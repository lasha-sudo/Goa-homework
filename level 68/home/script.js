//1

let university = {
    name: 'Hagward' ,
    departments: 6,
    website: 'Hagward.com' ,
    ratings: 10
};

console.log(university);

const universityCheck = Object.hasOwn(university, 'shcolarship');
console.log(universityCheck);

Object.assign(university , {studentsCount: 30});
Object.freeze(university) ; 
university.ratings = 10;

const universityFroze = Object.isFrozen(university);
//2

let sportsClub = {
    clubname: 'Football club' ,
    sporttype: 'football' , 
    foundedYears: 1927,
    achievment: {
        first: 'Best sport',
        second: 'most wached',
        third: 'most loved',
    }

};

let SportList = Object.keys(sportsClub);
console.log(SportList);

let values = Object.values(sportsClub);
console.log(values);

if(sportsClub.hasOwnProperty('sponsors')) {
    console.log("yes ")

}else{
    console.log('no')
};

Object.assign(sportsClub,{stadiumCapacyty: 'yes'});

Object.freeze(sportsClub);

sportsClub.clubname="basket club" ; 

let check = Object.isFrozen(sportsClub) ;
console.log(check);
console.log(sportsClub);


//3
let hotel = {
    name: 'portaventura',
    rating: 5 ,
    location: 'spain',
    guestRewievs: {
        firstPerson: 10,
        secondPerson: 10,
        thirdtPerson: 10,
        
    }
};

const hotelList = Object.keys(hotel);
console.log(hotelList);

const hotelvalue = Object.values(hotel);
console.log(hotelvalue);

if(hotel.hasOwnProperty('spa')) {
    console.log("yes it has a spa")
} else{
    console.log('no')
};

Object.assign(hotel, {roomsCount: 600});

Object.freeze(hotel);
hotel.name = 'jino';

let frozeHotel = Object.isFrozen(hotel);
console.log(frozeHotel);
