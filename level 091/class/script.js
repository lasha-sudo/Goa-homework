//1
const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];

let nebulaBackup = [...nebulaStock];


let updatedStock = [...nebulaStock,'gravity lens'];
console.log(nebulaBackup);



let celestialDrops = [...'meteor|comet|nova'.split('|')];

console.log(celestialDrops)

let fullInventory = [...nebulaBackup,...asteroidStock,...celestialDrops];
console.log(fullInventory)

//2
//spread ოპერატორი საპირისპიროა  rest ოპერატორის მას შეაუძლია აქციოს ინდივიდიუალურ ელემენტებად იგი იწერება როგორც რესთ ოპერატორი ხოლო სპრედი გამოიყენება სხვანაირ კონტექსტში რომელშიც შეგიძლია გაარჩიო თუ რომელი ოპერატორია სპრედ ოპერატორით შეგიძლია დააკოპირე მასივები ობიქტები დაშალო სტრინგები რამდენი მასივი ან ობიექტიც გინდა იმდენის გადაქცევა შეგიძლია ერთ მასივად ან ობიექტად