//1 sololearn

//2
let weekDay = Number(prompt("enter your week number: "));

switch(weekDay) {
    case 1 :
        console.log("ორშაბათი")
        break;
    
    case 2 :
        console.log("სამშაბათი")
        break;

    case 3 :
        console.log("ოთხშაბათი")
        break;

    case 4 :
        console.log("ხუთშაბათი")
        break;
}

// N3
let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
let result = (number % 2 === 0) ? "ლუწი" : "კენტი";
console.log(result);

// N4
let weatherCode = parseInt(prompt("შეიყვანეთ ამინდის კოდი (1-4):"));

switch(weatherCode) {
    case 1:
        console.log("მზიანი");
        break;
    case 2:
        console.log("წვიმიანი");
        break;
    case 3:
        console.log("მოღრუბლული");
        break;
    case 4:
        console.log("ქარიანი");
        break;
    default:
        console.log("არ არის დადგენილი");
}

// N5
let month = parseInt(prompt("შეიყვანეთ თვის ნომერი (1-12):"));
let monthName = "";

switch(month) {
    case 1: monthName = "იანვარი"; break;
    case 2: monthName = "თებერვალი"; break;
    case 3: monthName = "მარტი"; break;
    case 4: monthName = "აპრილი"; break;
    case 5: monthName = "მაისი"; break;
    case 6: monthName = "ივნისი"; break;
    case 7: monthName = "ივლისი"; break;
    case 8: monthName = "აგვისტო"; break;
    case 9: monthName = "სექტემბერი"; break;
    case 10: monthName = "ოქტომბერი"; break;
    case 11: monthName = "ნოემბერი"; break;
    case 12: monthName = "დეკემბერი"; break;
    default: monthName = "არასწორი თვე";
}

console.log("თვე:", monthName);

let half = (month >= 1 && month <= 6) ? "პირველი ნახევარი" :
           (month >= 7 && month <= 12) ? "მეორე ნახევარი" : "არარსებულია"
           