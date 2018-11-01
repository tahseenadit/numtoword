<script>
var digitstens1 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var digitstens2 = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
var digits = ["zero","one","two","three","four","five","six","seven","eight","nine"];

var myVar = 100000001;
var numlength = myVar.toString().length;
var digit = myVar.toString()[1];
var i = 0;
var j = 0;
var k = 0;
var numword = "";

converttoword(numlength,j,k,numword,mid_numwords,digitstens1,digitstens2,digits,myVar,digit);

function converttoword(i,j,k,numword,mid_numwords,digitstens1,digitstens2,digits,myVar,digit){
	
    j = j+1;
    k = i-j;
	digit = myVar.toString()[k];
    numword1 = digits[parseInt(digit)];
    if(numword != "zero"){
    	numword = numword1;
    }
  

    j = j+1;
    k=i-j;
    if(k >= 0){
      digit = parseInt(myVar.toString()[k]);
      if(digit == 1){
          digit = myVar.toString()[k+1];
          numword2 = digitstens1[parseInt(digit)];
          numword = numword2;
          
      }else{
      	  digitnext = parseInt(myVar.toString()[k+1]);
          if(digit == 0 && digitnext==0){
          	numword = "";
          }else{
            digit = myVar.toString()[k];
            numword2 = digitstens2[parseInt(digit)];
            if(numword2!=""){
              if(numword1 == "zero"){
              	numword = numword2;
              }else{
              	numword = numword2+" "+numword1;
              }
              
            }
          }
          
      }
      j = j+1;
      k = i-j;
      if(k >= 0){
      	
        digit = myVar.toString()[k];
    	numword3 = digits[parseInt(digit)];
        if(numword3 == "zero"){
        	numword = numword;
        }else{
        	numword = numword3+" hundred "+ numword;
        }
        
      
      }
      
      converttothousand(i,j,k,numword,mid_numwords,digitstens1,digitstens2,digits,myVar,digit);
    }else if(numword != ""){
    	console.log(numword)
        numword = "";
    }
    
}


function converttothousand(i,j,k,numword,mid_numwords,digitstens1,digitstens2,digits,myVar,digit){
	
    j = j+1;
    k = i-j;
    var numwordth = numword;
    if(k >= 0){
      digit = myVar.toString()[k];
      numword1 = digits[parseInt(digit)];
      if(numword1 == "zero"){
      	numwordth = numword;
      }else{
      	numwordth = numword1 + " thousand " + numword;
      }
      

      j = j+1;
      k=i-j;
      if(k >= 0){
        digit = parseInt(myVar.toString()[k]);
        if(digit == 1){
            digit = myVar.toString()[k+1];
            numword2 = digitstens1[parseInt(digit)];
            numwordth = numword2+" thousand " + numword;

        }else{
            digit = myVar.toString()[k];
            numword2 = digitstens2[parseInt(digit)];
            if(numword2!=""){
              if(numword1 == "zero"){
                  numwordth = numword2+" thousand " + numword;
              }else{
                  numwordth = numword2+" "+numword1+" thousand " + numword;
              }
            }

        }
      }
      
      converttolakh(i,j,k,numwordth,mid_numwords,digitstens1,digitstens2,digits,myVar,digit);
    }else if(numwordth != ""){
    	console.log(numwordth)
        numwordth = "";
    }
    
}

function converttolakh(i,j,k,numword,mid_numwords,digitstens1,digitstens2,digits,myVar,digit){
	
    j = j+1;
    k = i-j;
    var numwordth = numword;
    if(k >= 0){
      digit = myVar.toString()[k];
      numword1 = digits[parseInt(digit)]; 
      if(numword1 == "zero"){
      	numwordth = numword;
      }else{
      	numwordth = numword1 + " lakh " + numword;
	  }
      j = j+1;
      k=i-j;
      if(k >= 0){
        digit = parseInt(myVar.toString()[k]);
        if(digit == 1){
            digit = myVar.toString()[k+1];
            numword2 = digitstens1[parseInt(digit)];
            numwordth = numword2+" lakh " + numword;

        }else{
            digit = myVar.toString()[k];
            numword2 = digitstens2[parseInt(digit)];
            if(numword2!=""){
              if(numword1 == "zero"){
                  numwordth = numword2+" lakh " + numword;
              }else{
                  numwordth = numword2+" "+numword1+" lakh " + numword;
              }
            }

        }
      }
      
      converttocrore(i,j,k,numwordth,mid_numwords,digitstens1,digitstens2,digits,myVar,digit);
    }else if(numwordth != ""){
    	console.log(numwordth)
        numwordth = "";
    }
    
}

function converttocrore(i,j,k,numword,mid_numwords,digitstens1,digitstens2,digits,myVar,digit){
	
    j = j+1;
    k = i-j;
    var numwordth = numword;
    if(k >= 0){
      digit = myVar.toString()[k];
      numword1 = digits[parseInt(digit)];  
      numwordth = numword1 + " crore " + numword;

      j = j+1;
      k=i-j;
      if(k >= 0){
        digit = parseInt(myVar.toString()[k]);
        if(digit == 1){
            digit = myVar.toString()[k+1];
            numword2 = digitstens1[parseInt(digit)];
            numwordth = numword2+" crore " + numword;

        }else{
            digit = myVar.toString()[k];
            numword2 = digitstens2[parseInt(digit)];
            if(numword2!=""){
              if(numword1 == "zero"){
                  numwordth = numword2+" crore " + numword;
              }else{
                  numwordth = numword2+" "+numword1+" crore " + numword;
              }
            }

        }
      }
    }
    
    if(numwordth != ""){
    	console.log(numwordth)
        numwordth = "";
    }
    
}
</script>
