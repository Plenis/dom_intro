describe('text-bill tests' , function(){

    it('should return total amount for call when call is added', function(){
        var instance = textBillOpp();
        instance.textBillTot('call')
        instance.textBillTot('call')
        assert.equal(instance.getTotalCall(), '5.50')
    })
        
    it('should return total amount for sms when sms is added', function(){
        var instance = textBillOpp();
        instance.textBillTot('sms')
        assert.equal(instance.getTotalSms(), '0.75')
    })

    it('should return total amount for the total number of sms and calls added', function(){
        var instance = textBillOpp();
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        assert.equal(instance.getTotalBill(), '7.75')
    })

    it('should return orange when the warning level reaches R30 or more', function(){
        var instance = textBillOpp()
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call')
        assert.equal(instance.getTotalBill(), '30.50');
    })

        it('should return red when the critical level reaches R50 or more', function(){
        var instance = textBillOpp()
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('sms')
        instance.textBillTot('sms')
        instance.textBillTot('call')
        instance.textBillTot('call')
        instance.textBillTot('call') 
        assert.equal(instance.getTotalBill(), '55.75');
    })
    
     });


   