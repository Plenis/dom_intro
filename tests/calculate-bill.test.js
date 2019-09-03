// describe('calculateBtnClicked' , function(){
//     it('should return the total amount of calls in the string' , function(){
//         var instances = calculateBtnClicked()
//         assert.equal(instances.logic('call'), 'R2.75');
//     });
    
//     it('should return the total amount of sms in the string' , function(){
//         var instances = calculateBtnClicked()
//         assert.equal(instances.logic('sms'), 'R0.75');
//     });

//     it('should return the total amount for both calls and sms inserted in the string, split with a ", "', function (){
//         var instances = calculateBtnClicked()
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         assert.equal(instances.logic(), 'R11.75');
//     })

//     it('should not count entries that are not seperated with a ", "', function(){
//         var instances = calculateBtnClicked()
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('call')
//         assert.equal(instances.logic(), 'R4.25');
//     })

//     it('should return orange when the warning level reaches R20 or more', function(){
//         var instances = calculateBtnClicked()
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         assert.equal(instances.logic(), 'R23.50');
//     })

//     it('should return red when the critical level reaches R30 or more', function(){
//         var instances = calculateBtnClicked()
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call') 
//         assert.equal(instances.logic(), 'R32.00');
//     })

//     it('should return back to orange when data is taken away and is less the critical level', function(){
//         var instances = calculateBtnClicked()
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         instances.logic('call')
//         assert.equal(instances.logic(), 'R20.25');
//     })

//     it('should return back to black when data is is taken away and is less than the warning level', function(){
//         var instances = calculateBtnClicked()
//         instances.logic('call')
//         instances.logic('sms')
//         instances.logic('call')
//         instances.logic('call')
//         assert.equal(instances.logic(), 'R9.00');
//     })

//  });
