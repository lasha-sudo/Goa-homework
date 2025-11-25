//1
let array1  = ['pizza' , 'burger'];
let array2  = ['coke' , 'water'];

let concatArray = array1.concat(array2) ; 

concatArray.copyWithin(3 ,0 ,2 );


concatArray.fill(0 , 1 , 4);

let lastELemnt =  concatArray.pop() ;
console.log(lastELemnt) ;

concatArray.unshift( 10 , 20) ; 

//2

let modifyArea = [Input('enter your aray: ')] ; 

 

modifyArea.copyWithin(3 ,0 ,2 );


modifyArea.fill(0 , 1 , 4);

let lastELemntee =  modifyArea.pop() ;
console.log(lastELemntee) ;

modifyArea.unshift( 10 , 20) ; 




