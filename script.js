let numFlat = prompt ( 'Введите номер квартиры',"");
if ( +numFlat ==1 && +numFlat <=20) {
   alert( 'Квартира в первом подьезде');
         }
   else if ( +numFlat >20 && +numFlat <=48){
       alert( 'Квартира во втором подьезде');
         }
       else if ( + numFlat >48 && +numFlat <=90){
          alert ( 'Квартира в третьем подъезде');
         }

else { alert ('В нашем подьезде такой квартиры нет ')}